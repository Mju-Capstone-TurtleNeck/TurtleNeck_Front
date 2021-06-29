import React from "react";
import LoginPresenter from "./LoginPresenter";

export default class extends React.Component {
  constructor(props, context) {
    super(props, context);
    // this.LoginBtnClick = this.LoginBtnClick.bind(this);
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
    console.log(this.state.id, this.state.password, this.state.disabled);
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
  LoginBtnClick = () => {
    alert(this.state.id + " " + this.state.password);
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
      />
    );
  }
}
