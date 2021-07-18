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
  width: 700px;
  background: #cae9da;
  height: 700px;
  border-radius: 10px;
  box-shadow: 3px 3px 3px gray;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  z-index: -1;
`;
const Title = styled.h1`
  font-size: 40px;
  margin: 50px;
  margin-bottom: 0;
`;
const MiddleBox = styled.div`
  width: 700px;
  height: 500px;
  display: table-cell;
  vertical-align: middle;
  text-align: center;
`;

const DangerPresenter = () => (
  <>
    <Helmet>
      <title>Danger | TurtleNeck</title>
    </Helmet>
    <Header />
    <Section>
      <SectionBox>
        <Title>거북목 증후군</Title>
        <MiddleBox>내용</MiddleBox>
      </SectionBox>
    </Section>
    <Footer />
  </>
);

export default DangerPresenter;
