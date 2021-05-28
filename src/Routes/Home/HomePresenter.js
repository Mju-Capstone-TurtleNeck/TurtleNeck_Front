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
  margin-top: 80px;
  width: 600px;
  background: #bdecb6;
  height: 75vh;
`;
const Title = styled.h1`
  margin: 30px;
  margin-bottom: 0;
`;
const MiddleBox = styled.div`
  width: 600px;
  height: 55vh;
  display: table-cell;
  vertical-align: middle;
  text-align: center;
`;

const Button = styled.button`
  margin-top: 0px;
  padding: 5px;
  padding-right: 25px;
  padding-left: 25px;
  font-size: 20px;
  text-align: left;
  border-radius: 6px;
  border: 0px;
  background: white;
  font-size: 20px;
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
