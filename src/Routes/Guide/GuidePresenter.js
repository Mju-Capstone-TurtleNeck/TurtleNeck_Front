import React from "react";
import Helmet from "react-helmet";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import Photo from "../../assets/example.png";
import ResultImg from "../../assets/result.png";
import MapImg from "../../assets/Map.png";
import styled from "styled-components";

const DangerContainer = styled.div`
  width: 100%;
  height: 100%;
  text-align: center;
  margin-top: 23%;
  margin-bottom: 15%;
`;

const TextTitle = styled.h3`
  font-size: 40px;
  margin-top: 0px;
  margin-bottom: 19%;
`;
const MiddleSpace = styled.div`
  margin-bottom: 25%;
`;
const Text = styled.h3`
  margin-top: 0px;
  margin-bottom: 11%;
`;
const Contents = styled.div`
  font-size: 45px;
  margin-bottom: 5%;
`;
const SubText = styled.div`
  font-size: 30px;
  margin-bottom: 2%;
`;
const ImgContainer = styled.div`
  margin-bottom: 10%;
`;

const GuidePresenter = () => (
  <>
    <Helmet>
      <title>Guide | TurtleNeck</title>
    </Helmet>
    <Header />
    <DangerContainer>
      <TextTitle data-aos="zoom-in" data-aos-duration="500">
        이용 가이드
      </TextTitle>
      <Text data-aos="fade-up" data-aos-duration="2500">
        SCROLL DOWN SLOWLY
        <br />
        👇
      </Text>
      <Contents data-aos="fade-down" data-aos-duration="500">
        1. 어깨를 펴고 편안한 자세로 의자에 앉아주세요🪑
      </Contents>
      <MiddleSpace>&ensp;</MiddleSpace>
      <MiddleSpace>&ensp;</MiddleSpace>
      <br />
      <Contents data-aos="fade-down" data-aos-duration="500">
        2. 머리, 목, 어깨가 잘 보이도록 상체 측면 사진을 찍어 주세요📸
      </Contents>
      <SubText data-aos="zoom-out" data-aos-duration="2500">
        아래와 같이 찍어주셔야 정확한 분석이 가능합니다 (좌,우 상관❌)
      </SubText>
      <br />
      <ImgContainer data-aos="zoom-in" data-aos-duration="2500">
        <img alt="" src={Photo} width="10%" height="10%" style={{}}></img>
      </ImgContainer>
      <MiddleSpace>&ensp;</MiddleSpace>
      <Contents data-aos="fade-down" data-aos-duration="500">
        3. 사진을 넣고 검사하기 버튼을 누르면 AI가 사진을 분석 합니다👨‍💻
      </Contents>
      <SubText data-aos="zoom-out" data-aos-duration="2500">
        분석이 끝나면 거북목 진행 상태에 따라 양호, 주의, 심각를 표시해 줍니다
        <br />
        <br />
      </SubText>
      <ImgContainer data-aos="zoom-in" data-aos-duration="2500">
        <img alt="" src={ResultImg} width="30%" height="30%" style={{}}></img>
      </ImgContainer>
      <MiddleSpace>&ensp;</MiddleSpace>
      <Contents data-aos="fade-down" data-aos-duration="500">
        4. 상태가 주의, 심각일 경우 병원 찾기 버튼이 표시됩니다
      </Contents>
      <SubText data-aos="zoom-out" data-aos-duration="2500">
        입력 창에 시,동 단위로 주소를 입력하면 입력한 주소를 기반으로 병원을
        찾을 수 있습니다
        <br />
        <br />
        처음 표시되는 지도는 사용자의 GPS 기반으로 병원을 찾아 줍니다
      </SubText>
      <ImgContainer data-aos="zoom-in" data-aos-duration="2500">
        <img alt="" src={MapImg} width="30%" height="30%" style={{}}></img>
      </ImgContainer>
      <MiddleSpace>&ensp;</MiddleSpace>

      <Contents data-aos="fade-down" data-aos-duration="2500">
        이제 TurtleNeck 서비스를 이용해 보세요
      </Contents>
    </DangerContainer>
    <Footer />
  </>
);

export default GuidePresenter;
