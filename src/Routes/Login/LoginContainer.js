import React from "react";
import LoginPresenter from "./LoginPresenter";

export default class extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      id: "",
      password: "",
      disable: false,
    };
  }
  render() {
    const { id, password, disable } = this.state;
    return <LoginPresenter id={id} password={password} disable={disable} />;
  }
}
