import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
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
  color: white;
  font-size: 30px;
  padding-left: 0;
  font-weight: bold;
`;
const RightMenu = styled.div`
  color: white;
  display: flex;
  padding-left: 0;
  font-size: 14px;
  width: 150px;
`;

const LeftMenu = styled.div`
  width: 150px;
`;

class Header extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {};
  }

  render() {
    return (
      <HeaderContainer>
        <LeftMenu>햄버거바</LeftMenu>
        <Link to="Home" style={{ textDecoration: "none" }}>
          <TitleText>TurtleNeck</TitleText>
        </Link>
        <RightMenu>
          <Link to="Login" style={{ textDecoration: "none" }}>
            <p style={{ color: "white" }}>로그인</p>
          </Link>
          <Link to="Signup" style={{ textDecoration: "none" }}>
            <p
              style={{
                color: "white",
                marginRight: "20px",
                marginLeft: "30px",
              }}
            >
              회원가입
            </p>
          </Link>
        </RightMenu>
      </HeaderContainer>
    );
  }
}

export default Header;
