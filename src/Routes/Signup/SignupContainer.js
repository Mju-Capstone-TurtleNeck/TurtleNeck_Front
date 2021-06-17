import React from "react";
import SignupPresenter from "./SignupPresenter";
export default class extends React.Component {
  constructor(props, context) {
    super(props, context);
    // this.SignupBtnClick = this.SignupBtnClick.bind(this);
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
      overlap: true,
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
    const {
      id,
      password,
      passwordconfirm,
      birth,
      email,
      zip,
      address,
      overlap,
    } = this.state;

    if (id === "") {
      alert("아이디를 입력하세요.");
      return;
    }
    if (overlap) {
      alert("아이디 중복상태를 확인하세요.");
      return;
    }
    if (password === "") {
      alert("비밀번호를 입력하세요.");
      return;
    }
    const regex1 = /^[a-z0-9+]{9,15}$/;
    if (!regex1.test(password)) {
      alert(
        "비밀번호는 9자리 이상 15자리 이하입니다.\n적어도 하나의 소문자와 숫자로 이루어져야 합니다."
      );
      return;
    }
    if (passwordconfirm === "") {
      alert("비밀번호 확인을 입력하세요.");
      return;
    }
    const regex2 =
      /^(19[0-9][0-9]|20\d{2})(0[0-9]|1[0-2])(0[1-9]|[1-2][0-9]|3[0-1])$/;
    if (birth === "") {
      alert("생년월일을 입력하세요");
      return;
    }
    if (!regex2.test(birth)) {
      alert("생년월일을 확인하세요.\nex)1998년2월24일 → 19980224");
      return;
    }
    const regex3 = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+$/;
    if (email === "") {
      alert("이메일을 입력하세요");
      return;
    }
    if (!regex3.test(email)) {
      alert("이메일 형식이 올바르지 않습니다.");
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
  BtnOverlapClick = () => {
    const regex = /^[a-z0-9+]{5,12}$/;
    if (regex.test(this.state.id)) {
      alert("백엔드 연동 시 구현");
    } else {
      alert(
        "아이디는 5자리 이상 13자리 이하입니다.\n적어도 하나의 소문자와 숫자로 이루어져야 합니다."
      );
    }
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
        BtnOverlapClick={this.BtnOverlapClick}
      />
    );
  }
}
