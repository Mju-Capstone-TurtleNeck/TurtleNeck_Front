import React from "react";
import MypagePresenter from "./MypagePresenter";
const serverURL = process.env.REACT_APP_API_URL;

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      myId: "",
      hide: true,
      disabled: true,
      photoData: [],
    };
  }

  BtnActive = () => {
    if (this.state.id !== "") {
      this.setState({ disabled: false });
    } else {
      this.setState({ disabled: true });
    }
  };

  SetId = (e) => {
    this.setState({ myId: e.target.value }, () => {
      this.BtnActive();
    });
  };

  BtnClick = () => {
    return this.props.imageRequest(this.state.myId).then(() => {
      if (this.props.status === "SUCCESS") {
        const { photoData } = this.state;
        let data = this.props.data;
        let dataArray = [];

        this.setState({ hide: false });
        this.props.history.push("/Mypage");

        for (let i = 0; i < data.length; i++) {
          dataArray.push({
            date: data[i].slice(8, 18),
            src: serverURL + data[i],
          });
        }
        this.setState({ photoData: photoData.concat(...dataArray) });

        return true;
      } else {
        alert("회원정보가 일치하지 않습니다");
        return false;
      }
    });
  };

  render() {
    return (
      <MypagePresenter
        photoData={this.state.photoData}
        hide={this.state.hide}
        myId={this.state.myId}
        disabled={this.state.disabled}
        BtnActive={this.BtnActive}
        SetId={this.SetId}
        BtnClick={this.BtnClick}
      />
    );
  }
}
