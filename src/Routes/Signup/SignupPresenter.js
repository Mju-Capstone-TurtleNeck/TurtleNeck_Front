import React from "react";
import Helmet from "react-helmet";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import styled from "styled-components";
const Section = styled.div`
  text-align: center;
`;
const SectionBox = styled.div`
  display: inline-block;
  margin-top: 80px;
  width: 400px;
  height: 80vh;
  margin-top: 60px;
  border-radius: 30px;
  font-weight: 550;
  border: white;
  box-shadow: 0px 1px 3px 1px gray;
`;
const Title = styled.div`
  text-align: center;
  font-size: 30px;
  font-weight: 500;
`;
const Input1 = styled.input`
  width: 330px;
  height: 30px;
  border: white;
  border-radius: 3px;
  box-shadow: 0px 1px 3px 1px gray;
  &:focus {
    outline: none;
  }
`;
const Input2 = styled.input`
  margin-top: 20px;
  margin-right: 5px;
  margin-left: 5px;
  &:focus {
    outline: none;
  }
  border: white;
  border-radius: 3px;
  box-shadow: 0px 1px 3px 1px gray;
  width: 80px;
  height: 30px;
`;
const Need = styled.p`
  margin: 0;
`;
const BtnSignUp = styled.button`
  margin: 20px;
  width: 350px;
  height: 40px;
  color: white;
  border: white;
  border-radius: 10px;
  font-size: 18px;
  background: #cae9da;
`;
const BtnZip = styled.button`
  margin-top: 20px;
  margin-right: 5px;
  margin-left: 5px;
  width: 90px;
  height: 33px;
  background: white;
  cursor: pointer;
  font-size: 12px;
  border: white;
  border-radius: 3px;
  box-shadow: 0px 1px 3px 1px gray;
`;
const Terms = styled.span`
  float: right;
  font-size: 11px;
  color: blue;
`;
const SignupPresenter = () => (
  <>
    <Helmet>
      <title>Signup | TurtleNeck</title>
    </Helmet>
    <Header />
    <Section>
      <SectionBox>
        <Title>회원가입</Title>
        <div
          style={{ marginLeft: "30px", marginRight: "30px", textAlign: "left" }}
        >
          <Need>아이디</Need>
          <Input1 />
          <Need>비밀번호</Need>
          <Input1 />
          <Need>비밀번호 확인</Need>
          <Input1 />
          <Need>생년월일</Need>
          <Input1 />
          <Need>이메일</Need>
          <Input1 />
          <Input2 style={{ marginLeft: 0 }} />-<Input2 />
          <BtnZip>우편 번호</BtnZip>
          <Need>주소</Need>
          <Input1 />
          <Need style={{ marginTop: "15px" }}>
            이용약관 동의<span style={{ color: "red" }}> (필수)</span>
            <Terms>
              약관 보기
              <input type="checkbox" />
            </Terms>
          </Need>
          <Need>
            개인정보 수집 및 이용 동의
            <span style={{ color: "red" }}> (필수)</span>
            <Terms>
              약관 보기
              <input type="checkbox" />
            </Terms>
          </Need>
        </div>
        <BtnSignUp>가입하기</BtnSignUp>
      </SectionBox>
    </Section>
    <Footer />
  </>
);

export default SignupPresenter;
