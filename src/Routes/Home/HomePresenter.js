import React from "react";
import { Link } from "react-router-dom";
import Helmet from "react-helmet";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import styled from "styled-components";

const Section = styled.div`
  width: 100%;
  height: 100%;
  text-align: center;
  margin-top: 22%;
  margin-bottom: 15%;
`;

const SectionBox = styled.div`
  display: inline-block;
  width: 700px;
  background: #cae9da;
  height: 700px;
  border-radius: 10px;
  text-align: center;
  box-shadow: 3px 3px 3px gray;
  margin-bottom: 50px;
  z-index: -1;
`;

const MiddleBox = styled.div`
  width: 700px;
  height: 500px;
  display: table-cell;
  margin-top: 0;
  vertical-align: middle;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 40px;
  margin: 40px 30px 30px 30px;
  margin-bottom: 0;
`;
const TurtleTitle = styled.h1`
  font-size: 40px;
  margin-top: 0px;
  margin-bottom: 20%;
`;

const Content = styled.h3`
  margin: 50px 20px 10px 20px;
  font-size: 22px;
  text-align: left;
`;

const Text = styled.h3`
  margin-top: 0px;
  margin-bottom: 11%;
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
  background-color: white;
  box-shadow: 3px 3px 3px black;
  cursor: pointer;
  &:active {
    box-shadow: none;
    background-color: #0d9e61;
    color: white;
  }
`;

const HomePresenter = () => (
  <>
    <Helmet>
      <title>Home | TurtleNeck</title>
    </Helmet>
    <Header />
    <Section>
      {/* <TurtleTitle>TurtleNeck</TurtleTitle> */}
      {/* <br /> */}
      <TurtleTitle data-aos="zoom-in" data-aos-duration="500">
        AI를 통한 거북목 검사 TurtleNeck에서 시작해 보세요
      </TurtleTitle>
      <Text data-aos="fade-up" data-aos-duration="2500">
        SCROLL DOWN
        <br />
        👇
      </Text>
      {/* up-on-scroll */}
      <SectionBox data-aos="zoom-in" data-aos-duration="2500">
        <Title>이용 가이드</Title>
        <MiddleBox>
          <div>
            <Content>1. 어깨를 펴고 편안한 자세로 의자에 앉아 주세요</Content>
            <Content>
              2. 머리, 목, 어깨가 잘 보이도록 상체 측면 사진을 찍어 주세요
            </Content>
            <Content>
              3. 사진을 넣고 검사하기 버튼을 누르면 잠시 후 결과가 나옵니다
            </Content>
            <Content>
              4. 자세한 이용 가이드는 메뉴의 이용 가이드를 확인해 주세요
            </Content>
            <Content>
              5. 사진이 준비되었다면 아래 시작하기 버튼을 눌러 주세요
            </Content>
            <br />
            <br />
            <br />
          </div>
        </MiddleBox>
        <Link to="Detail" style={{ textDecoration: "none" }}>
          <Button>시작하기</Button>
        </Link>
      </SectionBox>
    </Section>
    <Footer />
  </>
);

export default HomePresenter;
