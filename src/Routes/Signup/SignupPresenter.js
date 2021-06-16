import React from "react";
import Helmet from "react-helmet";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import styled from "styled-components";
import DaumPostcode from "react-daum-postcode";
const Section = styled.div`
  text-align: center;
`;
const SectionBox = styled.div`
  display: inline-block;
  width: 450px;
  padding-bottom: 30px;
  border-radius: 40px;
  font-weight: 550;
  border: white;
  box-shadow: 0px 1px 3px 1px gray;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  z-index: 0;
`;
const Title = styled.div`
  text-align: center;
  font-size: 40px;
  font-weight: 500;
`;
const Input1 = styled.input`
  font-size: 20px;
  width: 100%;
  height: 40px;
  border: white;
  border-radius: 3px;
  box-shadow: 0px 1px 3px 1px gray;
  &:focus {
    outline: none;
  }
  margin-bottom: 15px;
`;
const Input2 = styled.input`
  margin-top: 20px;
  margin-right: 5px;
  margin-left: 5px;
  margin-bottom: 15px;
  &:focus {
    outline: none;
  }
  border: white;
  border-radius: 3px;
  box-shadow: 0px 1px 3px 1px gray;
  width: 80px;
  height: 40px;
`;
const Need = styled.p`
  margin: 0;
`;
const BtnSignUp = styled.button`
  margin: 20px;
  width: 90%;
  height: 50px;
  color: white;
  border: white;
  border-radius: 10px;
  font-size: 23px;
  background: ${(props) => (props.disabled ? "#CAE9DA" : "#0D9E61")};
  cursor: ${(props) => (props.disabled ? "default" : "pointer")};
`;
const BtnZip = styled.button`
  margin-top: 20px;
  margin-right: 5px;
  margin-left: 5px;
  width: 90px;
  height: 42px;
  background: white;
  cursor: pointer;
  font-size: 12px;
  border: white;
  border-radius: 3px;
  box-shadow: 0px 1px 3px 1px gray;
  vertical-align: -0.5px;
  &:hover {
    background: #cae9da;
  }
`;
const Terms = styled.span`
  float: right;
  font-size: 11px;
  color: blue;
`;
const DialogAll = styled.div`
  width: 600px;
  height: 600px;
  margin: 0 auto;
  left: 0;
  right: 0;
  top: 130px;
  bottom: 0;
  border-radius: 10px;
  background: #0d9e61;
  overflow: hidden;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  z-index: 1;
  border: 2px solid #0d9e61;
`;
const DialogTitle = styled.div``;
const DialogBottom = styled.div`
  height: 30px;
`;
const DialogSection = styled.div`
  height: 550px;
  background: #cae9da;
`;
const BtnClose = styled.button`
  cursor: pointer;
`;
const ZipDialog = (props) => {
  return (
    <DialogAll>
      <DialogTitle>우편번호 검색</DialogTitle>
      <DialogSection>
        <DaumPostcode
          onComplete={(data) => props.select(data)}
          style={{ height: "550px" }}
        />
        <DialogBottom>
          <BtnClose onClick={props.close}>닫기</BtnClose>
        </DialogBottom>
      </DialogSection>
    </DialogAll>
  );
};
const Term1Dialog = (props) => {
  return (
    <DialogAll>
      <DialogTitle>이용약관 </DialogTitle>
      <DialogSection></DialogSection>
      <DialogBottom>
        <BtnClose onClick={props.close}>닫기</BtnClose>
      </DialogBottom>
    </DialogAll>
  );
};
const Term2Dialog = (props) => {
  return (
    <DialogAll>
      <DialogTitle>개인정보 수집 및 이용 동의 </DialogTitle>
      <DialogSection></DialogSection>
      <DialogBottom>
        <BtnClose onClick={props.close}>닫기</BtnClose>
      </DialogBottom>
    </DialogAll>
  );
};
const SignupPresenter = (props) => (
  <>
    <Helmet>
      <title>Signup | TurtleNeck</title>
    </Helmet>
    <Header />
    <Section onClick={props.CloseDialog}>
      {props.ZipDialog ? (
        <ZipDialog close={props.CloseDialog} select={props.SelectZip} />
      ) : null}
      {props.Term1Dialog ? <Term1Dialog close={props.CloseDialog} /> : null}
      {props.Term2Dialog ? <Term2Dialog close={props.CloseDialog} /> : null}
      <SectionBox>
        <Title>회원가입</Title>
        <div
          style={{ marginLeft: "30px", marginRight: "30px", textAlign: "left" }}
        >
          <Need>아이디</Need>
          <Input1 onChange={(e) => props.SetId(e)} />
          <Need>비밀번호</Need>
          <Input1 onChange={(e) => props.SetPw(e)} type="password" />
          <Need>비밀번호 확인</Need>
          <Input1 onChange={(e) => props.SetPwConfirm(e)} type="password" />
          <Need>생년월일</Need>
          <Input1 onChange={(e) => props.SetBirth(e)} />
          <Need>이메일</Need>
          <Input1 onChange={(e) => props.SetEmail(e)} />
          <Input2 style={{ marginLeft: 0 }} readOnly value={props.zip} />
          {/* -<Input2 /> */}
          <BtnZip onClick={props.OpenZipDialog}>우편 번호</BtnZip>
          <Need>주소</Need>
          <Input1 onChange={(e) => props.SetAddr(e)} />
          <Need style={{ marginTop: "15px" }}>
            이용약관 동의<span style={{ color: "red" }}> (필수)</span>
            <Terms onClick={(e) => props.SetTermFirst(e)}>
              <input type="checkbox" />
            </Terms>
            <Terms
              onClick={() => props.OpenTerm1Dialog()}
              style={{ cursor: "pointer" }}
            >
              약관 보기
            </Terms>
          </Need>
          <Need>
            개인정보 수집 및 이용 동의
            <span style={{ color: "red" }}> (필수)</span>
            <Terms onClick={(e) => props.SetTermSecond(e)}>
              <input type="checkbox" />
            </Terms>
            <Terms
              onClick={() => props.OpenTerm2Dialog()}
              style={{ cursor: "pointer" }}
            >
              약관 보기
            </Terms>
          </Need>
        </div>
        <BtnSignUp
          onClick={() => props.SignupBtnClick()}
          disabled={props.disabled}
        >
          가입하기
        </BtnSignUp>
      </SectionBox>
    </Section>

    <Footer />
  </>
);

export default SignupPresenter;
