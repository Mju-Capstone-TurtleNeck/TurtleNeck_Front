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
  height: 70vh;
  margin-top: 60px;
  border-radius: 30px;
  border: white;
  box-shadow: 0px 1px 3px 1px gray;
`;
const Title = styled.div`
  font-size: 30px;
  font-weight: 600;
`;
const BtnSignUp = styled.button`
  margin: 20px;
  width: 350px;
  height: 40px;
  color: white;
  border: white;
  border-radius: 10px;
  font-size: 18px;
  background: ${(props) => (props.disabled ? "#CAE9DA" : "#0D9E61")};
  cursor: ${(props) => (props.disabled ? "default" : "pointer")};
`;
const Input = styled.input`
  font-size: 20px;
  display: flex;
  width: 280px;
  height: 30px;
  border: none;
  align: right;
  &:focus {
    outline: none;
  }
`;
const InputClass = styled.div`
  font-size: 20px;
  font-weight: 600;
  vertical-align: -10px;
`;
const InputDiv = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  left: 0;
  top: 0;
  width: 350px;
  height: 60px;
  border-bottom: 1px solid black;
`;
const LoginPresenter = () => (
  <>
    <Helmet>
      <title>Login | TurtleNeck</title>
    </Helmet>
    <Header />
    <Section>
      <SectionBox>
        <Title>Login</Title>
        <div style={{ display: "inline-block" }}>
          <InputDiv>
            <InputClass>ID</InputClass> <Input></Input>
          </InputDiv>
          <InputDiv style={{ marginBottom: "60px" }}>
            <InputClass>PW</InputClass> <Input type="password"></Input>
          </InputDiv>
        </div>

        <BtnSignUp>LOG IN</BtnSignUp>
        <div>signup</div>
      </SectionBox>
    </Section>
    <Footer />
  </>
);

export default LoginPresenter;
