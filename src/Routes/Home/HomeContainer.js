import React from "react";
import HomePresenter from "./HomePresenter";

export default class extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.MainBtnClick = this.MainBtnClick.bind(this);
    this.state = {
      id: 0,
      title: "이용 가이드",
      btn: "검사 시작하기",
      file: "",
      previewURL: "",
    };
  }
  MainBtnClick() {
    var Change = (i, t, b) => {
      if (i) {
        this.setState({
          id: i,
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
  }

  render() {
    return (
      <HomePresenter
        id={this.state.id}
        title={this.state.title}
        btn={this.state.btn}
        MainBtnClick={this.MainBtnClick}
      />
    );
  }
}
