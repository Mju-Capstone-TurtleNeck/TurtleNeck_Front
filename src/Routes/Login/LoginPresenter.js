import React from "react";
import Helmet from "react-helmet";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import styled from "styled-components";
import { Link } from "react-router-dom";
const Section = styled.div`
  text-align: center;
`;
const SectionBox = styled.div`
  vertical-align: -30px;
  display: inline-block;
  width: 450px;
  padding-bottom: 30px;
  border-radius: 40px;
  border: white;
  box-shadow: 0px 1px 3px 1px gray;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;
const Title = styled.div`
  font-size: 40px;
  font-weight: 600;
`;
const BtnLogin = styled.button`
  margin: 20px;
  width: 350px;
  height: 50px;
  color: white;
  border: white;
  border-radius: 10px;
  font-size: 23px;
  background: ${(props) => (props.disabled ? "#CAE9DA" : "#0D9E61")};
  cursor: ${(props) => (props.disabled ? "default" : "pointer")};
`;
const InputMain = styled.input`
  font-size: 20px;
  display: flex;
  width: 280px;
  height: 50px;
  border: none;
  align: right;
  &:focus {
    outline: none;
  }
`;
const InputClass = styled.div`
  font-size: 23px;
  font-weight: 600;
  vertical-align: -10px;
`;
const InputDiv = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  width: 350px;
  height: 60px;
  border-bottom: 1px solid black;
`;
const BtnSignUpLink = styled.div`
  text-align: right;
  margin-right: 50px;
`;
const InputOutside = styled.div`
  margin-top: 40px;
  margin-bottom: 60px;
  display: inline-block;
`;
const SideButton = styled.span`
  color: blue;
  text-decoration: none;
  cursor: pointer;
`;
const LoginPresenter = (props) => (
  <>
    <Helmet>
      <title>Login | TurtleNeck</title>
    </Helmet>
    <Header />
    <Section>
      <SectionBox>
        <Title>Login</Title>
        <InputOutside>
          <InputDiv>
            <InputClass>ID</InputClass>{" "}
            <InputMain onChange={props.SetId}></InputMain>
          </InputDiv>
          <InputDiv>
            <InputClass>PW</InputClass>{" "}
            <InputMain type="password" onChange={props.SetPw}></InputMain>
          </InputDiv>
        </InputOutside>

        <BtnLogin onClick={props.LoginBtnClick} disabled={props.disabled}>
          LOG IN
        </BtnLogin>

        <BtnSignUpLink>
          <span style={{ margin: "10px" }}></span>
          <Link to="Signup" style={{ textDecoration: "none" }}>
            <SideButton>Signup</SideButton>
          </Link>
        </BtnSignUpLink>
      </SectionBox>
    </Section>
    <Footer />
  </>
);

export default LoginPresenter;
