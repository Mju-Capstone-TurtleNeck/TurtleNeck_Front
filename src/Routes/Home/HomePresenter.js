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
  display: inline-block;
  width: 700px;
  background: #cae9da;
  height: 700px;
  border-radius: 10px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  z-index: -1;
  box-shadow: 3px 3px 3px gray;
`;

const MiddleBox = styled.div`
  width: 700px;
  height: 500px;
  display: table-cell;
  vertical-align: middle;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 40px;
  margin: 40px 30px 30px 30px;
  margin-bottom: 0;
`;

const Content = styled.h3`
  margin: 50px 20px 10px 20px;
  font-size: 22px;
  text-align: left;
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
      <SectionBox>
        <Title>이용 가이드</Title>
        <MiddleBox>
          <div>
            <Content>1. 어깨를 피고 편안한 자세로 의자에 앉아 주세요</Content>
            <Content>
              2. 머리, 목, 어깨가 보이도록 상체 측면 사진을 찍어 주세요
            </Content>
            <Content>
              3. 사진을 넣고 검사하기 버튼을 누르면 측정 후 결과가 나옵니다
            </Content>
            <Content>
              4. 자세한 이용가이드는 촤측 메뉴의 이용가이드를 확인해 주세요
            </Content>
            <Content>
              5. 사진이 준비 되었으면 아래 시작하기 버튼을 눌러 주세요
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
