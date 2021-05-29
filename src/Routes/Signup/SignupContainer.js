import React from "react";
import SignupPresenter from "./SignupPresenter";

export default class extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      id: 0,
      password: "이용 가이드",
      passwordconfirm: "검사 시작하기",
      birth: "",
      email: "",
      zip: "",
      address: "",
      term1: "",
      term2: "",
    };
  }
  render() {
    //const {} = this.state;
    return <SignupPresenter />;
  }
}
