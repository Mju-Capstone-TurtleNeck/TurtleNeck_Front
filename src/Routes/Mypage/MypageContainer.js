import React from "react";
import MypagePresenter from "./MypagePresenter";
const serverURL = process.env.REACT_APP_API_URL;

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photoData: [],
    };
  }
  componentDidMount() {
    return this.props.imageRequest().then(() => {
      if (this.props.status === "SUCCESS") {
        const { photoData } = this.state;

        let iData = this.props.data;
        let cData = this.props.conditionData;
        let dataArray = [];
        let colorArray = [];
        this.setState({ hide: false });
        this.props.history.push("/Mypage");

        for (let i = 0; i < iData.length; i++) {
          switch (cData[i]) {
            case "양호":
              colorArray.push("#4df15e");
              break;
            case "주의":
              colorArray.push("#fea903");
              break;
            case "심각":
              colorArray.push("#fe0303");
              break;
            default:
              colorArray.push("black");
          }

          dataArray.push({
            date: iData[i].slice(8, 18),
            src: serverURL + iData[i],
            condition: cData[i],
            color: colorArray[i],
          });
        }
        this.setState({
          photoData: photoData.concat(...dataArray),
        });
        return true;
      } else {
        alert("회원정보가 일치하지 않습니다");
        return false;
      }
    });
  }
  // BtnClick = () => {
  //   asddas
  // };

  render() {
    return <MypagePresenter photoData={this.state.photoData} />;
  }
}
