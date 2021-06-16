import React from "react";
import LoginPresenter from "./LoginPresenter";

export default class extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      id: "",
      password: "",
      disabled: true,
    };
  }
  SetId = (e) => {
    this.setState({ id: e.target.value });
  };
  SetPw = (e) => {
    this.setState({ password: e.target.value });
  };
  LoginBtnClick = () => {
    alert(this.state.id, this.state.password);
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
      />
    );
  }
}
