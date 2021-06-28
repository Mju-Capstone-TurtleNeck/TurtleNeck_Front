import React from "react";
import LoginPresenter from "./LoginPresenter";
import axios from "axios";
// import { Redirect } from "react-router-dom";

export default class extends React.Component {
  constructor(props, context) {
    super(props, context);
    // this.onKeyPress = this.onKeyPress.bind(this);
    this.state = {
      id: "",
      password: "",
      disabled: true,
    };
  }
  LoginBtnActive = () => {
    if (this.state.id !== "" && this.state.password !== "") {
      this.setState({ disabled: false });
    } else {
      this.setState({ disabled: true });
    }
  };
  SetId = (e) => {
    this.setState({ id: e.target.value }, () => {
      this.LoginBtnActive();
    });
  };
  SetPw = (e) => {
    this.setState({ password: e.target.value }, () => {
      this.LoginBtnActive();
    });
  };
  onKeyPress = (e) => {
    if (
      e.key === "Enter" &&
      this.state.id !== "" &&
      this.state.password !== ""
    ) {
      this.LoginBtnClick();
    }
  };
  LoginBtnClick = () => {
    // const variables = { id: this.state.id, password: this.state.password };
    // axios.post("/api/users/login", variables).then((response) => {
    //   if (response.data.loginSuccess) {
    //     alert("로그인 되었습니다");
    //     console.log(
    //       this.props.history.push({ pathname: "/", state: { logined: true } })
    //     );
    //   } else {
    //     alert(response.data.message);
    //   }
    // });
  };

  render() {
    const { id, password, disabled } = this.state;
    return (
      <LoginPresenter
        id={id}
        password={password}
        disabled={disabled}
        LoginBtnClick={this.LoginBtnClick}
        SetId={this.SetId}
        SetPw={this.SetPw}
        onKeyPress={this.onKeyPress}
      />
    );
  }
}
