import React, { Component } from "react";
import styled from "styled-components";

const FooterContainer = styled.div`
  display: flex;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 40px;
  background-color: #0d9e61;
`;

const FooterText = styled.p`
  color: white;
  margin-top: 15px;
  margin-left: 1%;
  font-size: 10px;
`;
class Footer extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {};
  }

  render() {
    return (
      <>
        <FooterContainer>
          <FooterText>이용약관</FooterText>
          <FooterText>개인 정보 정책</FooterText>
        </FooterContainer>
      </>
    );
  }
}

export default Footer;
