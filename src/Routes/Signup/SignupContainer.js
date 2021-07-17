import React from "react";
import SignupPresenter from "./SignupPresenter";
import axios from "axios";

const serverURL = process.env.REACT_APP_API_URL;

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
      equal: false,
    };
  }

  SetId = (e) => {
    this.setState({ id: e.target.value }, () => {
      this.SignupBtnActive();
    });
  };
  SetPw = (e) => {
    this.setState({ password: e.target.value }, () => {
      this.SignupBtnActive();
    });
  };
  SetPwConfirm = (e) => {
    this.setState({ passwordconfirm: e.target.value }, () => {
      this.SignupBtnActive();
    });
  };
  SetBirth = (e) => {
    this.setState({ birth: e.target.value }, () => {
      this.SignupBtnActive();
    });
  };
  SetEmail = (e) => {
    this.setState({ email: e.target.value }, () => {
      this.SignupBtnActive();
    });
  };

  SetAddr = (e) => {
    this.setState({ address: e.target.value }, () => {
      this.SignupBtnActive();
    });
  };
  SignupBtnActive() {
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
      equal,
    } = this.state;
    if (
      id !== "" &&
      password !== "" &&
      passwordconfirm !== "" &&
      birth !== "" &&
      email !== "" &&
      zip !== "" &&
      address !== "" &&
      term1 &&
      term2 &&
      equal
    ) {
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
    const { id, password, birth, email, overlap, zip, address } = this.state;

    if (overlap) {
      alert("아이디 중복상태를 확인하세요.");
      return;
    }

    const regex1 = /^[a-z0-9+]{9,15}$/;
    if (!regex1.test(password)) {
      alert(
        "비밀번호는 9자리 이상 15자리 이하입니다.\n적어도 하나의 소문자와 숫자로 이루어져야 합니다."
      );
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
    const regex3 =
      /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    if (!regex3.test(email)) {
      alert("이메일을 올바르게 입력하세요.");
      return;
    }
    //완료 시
    return this.props
      .registerRequest(id, password, birth, email, zip, address)
      .then(() => {
        if (this.props.status === "SUCCESS") {
          alert("회원가입 되었습니다. 로그인하세요");
          this.props.history.push({
            pathname: "/Login",
            props: { id: id, password: password },
          });
          return true;
        } else {
          console.log(this.props);
          alert("오류");
          return false;
        }
      });
  };
  BtnOverlapClick = () => {
    const regex = /^[a-z0-9+]{5,12}$/;
    if (regex.test(this.state.id)) {
      axios
        .post(serverURL + "api/users/id-check", { id: this.state.id })
        .then(() => {
          alert("사용 가능한 아이디입니다!");
          this.setState({ overlap: false });
        })
        .catch((err) => {
          console.log(err);
          alert("이미 사용중인 아이디입니다.");
        });
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
    this.setState({ zip: data.zonecode }, () => {
      this.SignupBtnActive();
    });
    this.CloseDialog();
  };
  componentDidUpdate(prevProps, prevState) {
    if (
      this.state.passwordconfirm !== prevState.passwordconfirm ||
      this.state.password !== prevState.password
    ) {
      if (this.state.password === this.state.passwordconfirm) {
        this.setState({ equal: true }, () => {
          this.SignupBtnActive();
        });
      } else {
        this.setState({ equal: false }, () => {
          this.SignupBtnActive();
        });
      }
    }
  }
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
      equal,
      disabled,
      ZipDialog,
      Term1Dialog,
      Term2Dialog,
      overlap,
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
        equal={equal}
        overlap={overlap}
        SignupBtnClick={this.SignupBtnClick}
        SetId={this.SetId}
        SetPw={this.SetPw}
        SetPwConfirm={this.SetPwConfirm}
        SetBirth={this.SetBirth}
        SetEmail={this.SetEmail}
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
