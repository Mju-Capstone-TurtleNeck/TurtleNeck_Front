import React, { Component } from "react";
import styled from "styled-components";

const Section = styled.div`
  text-align: center;
`;
const SectionBox = styled.div`
  display: inline-block;
  margin-top: 80px;
  width: 600px;
  background: #bdecb6;
  height: 75vh;
`;
const Title = styled.h1`
  margin: 30px;
  margin-bottom: 0;
`;
const MiddleBox = styled.div`
  width: 600px;
  height: 55vh;
  display: table-cell;
  vertical-align: middle;
  text-align: center;
`;
const Content = styled.h2`
  margin: 20px;
  font-size: 20px;
  text-align: left;
`;
const Button = styled.button`
  margin-top: 0px;
  padding: 5px;
  padding-right: 25px;
  padding-left: 25px;
  font-size: 20px;
  text-align: left;
  border-radius: 6px;
  border: 0px;
  background: white;
  font-size: 20px;
  cursor: pointer;
`;
const Solution = styled.div`
  background: white;
  width: 80%;
  display: inline-block;
  height: 30vh;
`;

const Photo = styled.div`
  background: white;
  width: 80%;
  display: inline-block;
  height: 45vh;
  cursor: pointer;
  &:hover {
    color: red;
  }
  font-size: 20px;
`;
const BtnFind = styled.button`
  background: green;
  border-radius: 10px;
  border: 0px;
  padding: 3px;
  padding-left: 30px;
  padding-right: 30px;
  color: white;
  cursor: pointer;
  margin: 10px;
`;
const Plus = styled.p`
  display: inline-block;
  font-size: 100px;
  margin: 0;
  margin-top: 50px;
`;

function Guide() {
  return (
    <div>
      <Content>1. 편한 자세로 의자에 앉아 주세요</Content>
      <Content>2. 머리,목, 어깨가 보이도록 측면 사진을 찍어 주세요</Content>
      <Content>3. 사진을 넣고 검사 시작하기를 눌러주세요</Content>
      <Content>
        4. 사진이 준비 되었으면 아래 시작하기 버튼을 눌러주세요
        <br />
        <br />
        <br />
      </Content>
    </div>
  );
}
class Check extends Component {
  constructor(props) {
    super(props);
    this.state = { file: "", previewURL: "" };
  }
  handleFileOnChange = (event) => {
    event.preventDefault();
    let reader = new FileReader();
    let file = event.target.files[0];
    reader.onloadend = () => {
      this.setState({
        file: file,
        previewURL: reader.result,
      });
    };
    reader.readAsDataURL(file);
  };
  render() {
    var content = <Plus>+</Plus>;
    let profile_preview = null;
    if (this.state.file !== "") {
      profile_preview = (
        <img
          src={this.state.previewURL}
          alt="profile"
          style={{ height: "45vh" }}
        ></img>
      );
      content = profile_preview;
    } else {
      content = (
        <Plus>
          +<br />
          <p style={{ fontSize: "20px" }}>사진을 넣어주세요</p>
        </Plus>
      );
    }
    return (
      <div>
        <label for="input-file">
          <Photo>{content}</Photo>
        </label>
        <input
          type="file"
          accept="image/jpg,impge/png,image/jpeg,image/gif"
          name="profile_img"
          onChange={this.handleFileOnChange}
          style={{ display: "none" }}
          id="input-file"
        ></input>
      </div>
    );
  }
}

function Result(props) {
  console.log(props.title);
  return (
    <div>
      <h1 style={{ color: props.color }}>{props.progress}</h1>
      <p>거북목 교정 운동법</p>
      <Solution></Solution>
      <br />
      <BtnFind>병원 찾기</BtnFind>
    </div>
  );
}
class Home extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      id: 0,
      title: "이용 가이드",
      btn: "검사 시작하기",
      show: <Guide />,
      file: "",
      previewURL: "",
    };
  }

  render() {
    return (
      <Section>
        <SectionBox>
          <Title>{this.state.title}</Title>
          <MiddleBox>{this.state.show}</MiddleBox>
          <Button
            onClick={() => {
              var Change = (i, t, b) => {
                if (i) {
                  this.setState({
                    id: i,
                    show: {
                      0: <Guide />,
                      1: <Check />,
                      2: <Result progress="양호" color="#66ff99" />,
                    }[i],
                  });
                }
                if (t) {
                  this.setState({ title: t });
                }
                if (b) {
                  this.setState({ btn: b });
                }
              };
              switch (this.state.id) {
                case 0:
                  Change(1, "거북목 검사");
                  break;
                case 1:
                  alert("검사 완료"); //이미지 제출 시 코딩
                  Change(2, "거북목 진행 상태", "다시 검사하기");
                  break;
                case 2:
                case 3:
                case 4:
                  Change(1, "거북목 검사", "검사 시작하기");
                  break;
                default:
                  break;
              }
            }}
          >
            {this.state.btn}
          </Button>
        </SectionBox>
      </Section>
    );
  }
}

export default Home;
