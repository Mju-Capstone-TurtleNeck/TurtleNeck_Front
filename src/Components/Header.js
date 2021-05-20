import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  position: fixed;
  align-items: center;
  left: 0;
  top: 0;
  width: 100%;
  height: 40px;
  border-bottom: solid 2px grey;
  background-color: #0d9e61;
`;

const TitleText = styled.div`
  position: relative;
  color: white;
  font-size: 20px;
`;

const LoginText = styled.div`
  position: relative;
  left: 41%;
  color: white;
  font-size: 10px;
`;

const SignupText = styled.div`
  position: relative;
  left: 43%;
  color: white;
  font-size: 10px;
`;

class Header extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {};
  }

  render() {
    return (
      <HeaderContainer>
        <Link to="Home" style={{ textDecoration: "none" }}>
          <TitleText>TurtleNeck</TitleText>
        </Link>
        <LoginText>로그인</LoginText>
        <SignupText>회원가입</SignupText>
      </HeaderContainer>
    );
  }
}

export default Header;
