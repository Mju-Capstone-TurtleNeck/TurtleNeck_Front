import React from "react";
import SignupPresenter from "./SignupPresenter";
export default class extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.SignupBtnClick = this.SignupBtnClick.bind(this);
    this.state = {
      id: "",
      password: "",
      passwordconfirm: "",
      birth: "",
      email: "",
      zip: "",
      address: "",
      term1: false,
      term2: false,
      disabled: true,
      ZipDialog: false,
      Term1Dialog: false,
      Term2Dialog: false,
    };
  }
  SetId = (e) => {
    this.setState({ id: e.target.value });
  };
  SetPw = (e) => {
    this.setState({ password: e.target.value });
  };
  SetPwConfirm = (e) => {
    this.setState({ passwordconfirm: e.target.value });
  };
  SetBirth = (e) => {
    this.setState({ birth: e.target.value });
  };
  SetEmail = (e) => {
    this.setState({ email: e.target.value });
  };
  SetZip = (e) => {
    this.setState({ zip: e.target.value });
  };
  SetAddr = (e) => {
    this.setState({ address: e.target.value });
  };
  SignupBtnActive() {
    if (this.state.term1 && this.state.term2) {
      this.setState({ disabled: false });
    } else {
      this.setState({ disabled: true });
    }
    console.log(this.state.disabled);
  }
  SetTermFirst = (e) => {
    this.setState({ term1: e.target.checked }, () => {
      this.SignupBtnActive();
    });
  };
  SetTermSecond = (e) => {
    this.setState({ term2: e.target.checked }, () => {
      this.SignupBtnActive();
    });
  };
  SignupBtnClick = () => {
    const { id, password, passwordconfirm, birth, email, zip, address } =
      this.state;
    if (id === "") {
      alert("아이디를 입력하세요.");
      return;
    }
    if (password === "") {
      alert("비밀번호를 입력하세요.");
      return;
    }
    if (passwordconfirm === "") {
      alert("비밀번호를 확인하세요.");
      return;
    }
    if (birth === "") {
      alert("생년월일을 입력하세요");
      return;
    }
    if (email === "") {
      alert("이메일을 입력하세요");
      return;
    }
    if (zip === "") {
      alert("우편번호를 입력하세요");
      return;
    }
    if (address === "") {
      alert("주소를 입력하세요");
      return;
    }
    if (password !== passwordconfirm) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }
    alert("가입 승인????");
  };
  OpenZipDialog = () => {
    this.setState({ ZipDialog: true });
  };
  OpenTerm1Dialog = () => {
    this.setState({ Term1Dialog: true });
  };
  OpenTerm2Dialog = () => {
    this.setState({ Term2Dialog: true });
  };
  CloseDialog = () => {
    if (this.state.ZipDialog) this.setState({ ZipDialog: false });
    if (this.state.Term1Dialog) this.setState({ Term1Dialog: false });
    if (this.state.Term2Dialog) this.setState({ Term2Dialog: false });
  };
  SelectZip = (data) => {
    this.setState({ zip: data.zonecode });
    this.CloseDialog();
  };
  render() {
    const {
      id,
      password,
      passwordconfirm,
      birth,
      email,
      zip,
      address,
      term1,
      term2,
      disabled,
      ZipDialog,
      Term1Dialog,
      Term2Dialog,
    } = this.state;
    return (
      <SignupPresenter
        id={id}
        password={password}
        passwordconfirm={passwordconfirm}
        birth={birth}
        email={email}
        zip={zip}
        address={address}
        term1={term1}
        term2={term2}
        SignupBtnClick={this.SignupBtnClick}
        SetId={this.SetId}
        SetPw={this.SetPw}
        SetPwConfirm={this.SetPwConfirm}
        SetBirth={this.SetBirth}
        SetEmail={this.SetEmail}
        SetZip={this.SetZip}
        SetAddr={this.SetAddr}
        SetTermFirst={this.SetTermFirst}
        SetTermSecond={this.SetTermSecond}
        OpenZipDialog={this.OpenZipDialog}
        OpenTerm1Dialog={this.OpenTerm1Dialog}
        OpenTerm2Dialog={this.OpenTerm2Dialog}
        CloseDialog={this.CloseDialog}
        disabled={disabled}
        ZipDialog={ZipDialog}
        Term1Dialog={Term1Dialog}
        Term2Dialog={Term2Dialog}
        SelectZip={this.SelectZip}
      />
    );
  }
}
