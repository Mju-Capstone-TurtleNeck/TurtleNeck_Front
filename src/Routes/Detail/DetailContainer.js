import React from "react";
import DetailPresenter from "./DetailPresenter";
import * as posenet from "@tensorflow-models/posenet";
import "@tensorflow/tfjs";

const keyColor = "yellow";
const semiTurtle = 73;
const highTurtle = 60;

let direction = 4;
let count;
let img;
let canvas;
let context;

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      file: "",
      previewURL: "",
      cWidth: "",
      cHeight: "",
      condition: "",
      conditionColor: "",
      btnFind: "사진 리셋",
    };
  }

  // 이미지 업로드 후 사진 저장
  handleFileOnChange = (event) => {
    if (this.state.previewURL !== "") {
      this.setState({
        file: "",
        previewURL: "",
      });
    } else {
      event.preventDefault();
      let reader = new FileReader();
      let file = event.target.files[0];
      //let imgData = "";
      console.log(file);
      reader.onloadend = () => {
        localStorage.setItem("imgURL", reader.result);
        this.setState({
          file: file,
          previewURL: reader.result,
        });
      };

      reader.readAsDataURL(file);
    }
  };

  BtnStart = () => {
    console.log(localStorage.getItem("imgURL"));
    if (this.state.file === "") {
      alert("사진을 넣어주세요");
    } else {
      img = document.getElementById("img");
      canvas = document.getElementById("canvas");
      context = canvas.getContext("2d");
      this.setState({
        cWidth: img.width,
        cHeight: img.height,
      });
      posenet
        .load()
        .then((net) => {
          const pose = net.estimateSinglePose(img, {
            flipHorizontal: false,
          });
          return pose;
        })
        .then((pose) => {
          canvas.width = img.width;
          canvas.height = img.height;
          this.drawKeypoints(pose.keypoints, 0.6, context);
        });
    }
  };

  BtnReset = () => {
    localStorage.removeItem("imgURL");
    window.location.reload();
  };

  BtnSave = () => {
    let formData = new FormData();
    let id = "test1";
    formData.append("image", this.state.file);
    formData.append("id", id);
    formData.append("postureStatusInfo", this.state.condition);
    return this.props.uploadRequest(formData).then(() => {
      console.log(this.props.status);
      if (this.props.status === "SUCCESS") {
        alert("사진이 저장되었습니다.\n 마이페이지에서 확인할 수 있습니다.");
        this.props.history.push("/Detail");
        return true;
      } else {
        alert("사진 저장에 실패했습니다.");
        return false;
      }
    });
  };

  // # PoseNet Model # //
  // 귀, 어깨를 노란색 점으로 표시
  keyDrawPoint = (ctx, y, x, r, color) => {
    ctx.beginPath();
    ctx.arc(x, y, r, 0, 2 * Math.PI);
    ctx.fillStyle = color;
    ctx.fill();
  };

  // 거북목 판별 모델
  turtleModel = (keypoints) => {
    let valueX = 0;
    let valueY = 0;

    if (keypoints[4].score > keypoints[3].score) {
      direction = 4;
      valueX = 4;
      valueY = 6;
    } else {
      direction = 3;
      valueX = 3;
      valueY = 5;
    }

    let earx = parseInt(keypoints[valueX].position.x);
    let eary = parseInt(keypoints[valueY].position.y);
    let shox = parseInt(keypoints[valueY].position.x);
    let shoy = parseInt(keypoints[valueX].position.y);

    console.log("This is ear's position!! \n" + "x :" + earx + " y :" + eary);
    console.log(
      "This is shoulder's position!! \n" + "x :" + shox + " y :" + shoy
    );

    // ear and shouler's angle function
    let angleDeg = (ey, sy, ex, sx) => {
      if (valueX === 4) {
        return (Math.atan2(ey - sy, ex - sx) * 180) / Math.PI;
      } else {
        let deg = (Math.atan2(ey - sy, ex - sx) * 180) / Math.PI;
        deg = 90 - (deg - 90);
        return deg;
      }
    };
    console.log("Degree : " + parseInt(angleDeg(eary, shoy, earx, shox)));

    return angleDeg(eary, shoy, earx, shox);
  };

  //PoseNet Model로 받은 Degree 값을 기반으로 방향 탐지 및 거북목 판별
  drawKeypoints = (keypoints, minConfidence, ctx, scale = 1) => {
    // let degree = turtleModel(keypoints);
    count = 0;
    // 측면에 대한 포인트를 3개 이상 잡지 못하면 콘솔출력
    for (let i = 0; i < 7; i++) {
      if (count === 3) {
        console.log("Cannot Read Image");
        return 0;
      } else if (keypoints[i].score < 0.2) {
        count++;
      }
    }
    let degree = this.turtleModel(keypoints);
    if (degree < highTurtle) {
      this.setState({
        condition: "심각",
        conditionColor: "#fe0303",
        btnFind: "운동법 보러가기",
      });
      console.log("Score :" + parseInt(degree) + "  You are Danger Level");
    }
    // between 73 and 60 degree
    else if (degree < semiTurtle) {
      this.setState({
        condition: "주의",
        conditionColor: "#fea903",
        btnFind: "운동법 보러가기",
      });
      console.log("Score :" + parseInt(degree) + "  You are Caution Level");
    }
    // 73 degree upper
    else {
      this.setState({
        condition: "양호",
        conditionColor: "#4df15e",
        btnFind: "운동법 보러가기",
      });
      console.log("Score :" + parseInt(degree) + "  You are Not Turtle");
    }
    for (let i = 0; i < keypoints.length; i++) {
      const keypoint = keypoints[i];
      const { y, x } = keypoint.position;

      if ((direction === 4 && i === 4) || (direction === 4 && i === 6)) {
        this.keyDrawPoint(ctx, y * scale, x * scale, 3, keyColor);
      } else if ((direction === 3 && i === 3) || (direction === 3 && i === 5)) {
        this.keyDrawPoint(ctx, y * scale, x * scale, 3, keyColor);
      } else {
        //             drawPoint(ctx, y * scale, x * scale, 3, color);
      }
    }
  };

  render() {
    return (
      <DetailPresenter
        file={this.state.file}
        previewURL={this.state.previewURL}
        handleFileOnChange={this.handleFileOnChange}
        BtnStart={this.BtnStart}
        cWidth={this.state.cWidth}
        cHeight={this.state.cHeight}
        condition={this.state.condition}
        conditionColor={this.state.conditionColor}
        handleFileOnClick={this.handleFileOnClick}
        BtnReset={this.BtnReset}
        btnFind={this.state.btnFind}
        BtnSave={this.BtnSave}
      />
    );
  }
}
