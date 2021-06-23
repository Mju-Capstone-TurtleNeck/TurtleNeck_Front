import React from "react";
import Helmet from "react-helmet";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import styled from "styled-components";
import HomeContent from "./HomeContent";
const Section = styled.div`
  text-align: center;
`;
const SectionBox = styled.div`
  display: inline-block;
  width: 700px;
  background: #bdecb6;
  height: 700px;
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

const Button = styled.button`
  margin-top: 0px;
  padding: 10px;
  padding-right: 25px;
  padding-left: 25px;
  font-size: 25px;
  text-align: left;
  border-radius: 6px;
  border: 0px;
  background: white;
  cursor: pointer;
`;

const HomePresenter = (props) => (
  <>
    <Helmet>
      <title>Home | TurtleNeck</title>
    </Helmet>
    <Header />
    <Section>
      <SectionBox>
        <Title>{props.title}</Title>
        <MiddleBox>
          <HomeContent id={props.id} />
        </MiddleBox>
        <Button
          onClick={() => {
            props.MainBtnClick();
          }}
        >
          {props.btn}
        </Button>
      </SectionBox>
    </Section>
    <Footer />
  </>
);

export default HomePresenter;
