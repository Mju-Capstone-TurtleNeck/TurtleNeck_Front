import React from "react";
import Helmet from "react-helmet";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
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
const SubContens = styled.div`
  font-weight: bold;
  font-size: 35px;
  margin-bottom: 5%;
`;
const Copyright = styled.div`
  font-size: 8px;
  color: gray;
  margin-top: 0;
`;

const DangerPresenter = () => (
  <>
    <Helmet>
      <title>Danger | TurtleNeck</title>
    </Helmet>
    <Header />
    <DangerContainer>
      <TextTitle data-aos="zoom-in" data-aos-duration="500">
        거북목 증후군의 위험성
      </TextTitle>
      <Text data-aos="zoom-in" data-aos-duration="2500">
        SCROLL DOWN SLOWLY
        <br />
        👇
      </Text>
      <MiddleSpace>&ensp;</MiddleSpace>
      <Contents data-aos="fade-up" data-aos-duration="500">
        거북목 증후군 증상
      </Contents>
      <ImgContainer data-aos="zoom-in" data-aos-duration="2500">
        <img
          alt=""
          src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTA2MTFfNzEg%2FMDAxNjIzMzg3MjQzNzUy._nRR2USxzUNCHp2r_oDd6vBk7d74FfT7tP-9CIPh7Iog.2eentrcdRxWlyh5cqGUSu1tDlMcDf9_F2u8zeV3tcRYg.JPEG.osbarun%2F4.jpg&type=sc960_832"
          width="32%"
          height="30%"
          style={{}}
        ></img>
        <Copyright>
          02 by 바른정형외과 https://blog.naver.com/osbarun/222394004884
          BY-NC-ND 라이센스
        </Copyright>
      </ImgContainer>
      <MiddleSpace>&ensp;</MiddleSpace>
      <Contents data-aos="fade-down" data-aos-duration="500">
        목의 각도에 따라 심해지는 통증
      </Contents>
      <ImgContainer data-aos="zoom-in" data-aos-duration="2500">
        <img
          alt=""
          src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDA3MjlfMjcx%2FMDAxNTk1OTg3MTY2ODgz.qPNHCLB6ga59nqLXLDVfvx0WMSbgiAwZ0KkLhlIVD1Yg.802pCmgq3rGDNLTulWzDIr2FgMKtdShBaYrQHIRK9Hwg.JPEG.danacmc%2F%25B4%25DC%25BE%25C6-%25B1%25DB%25B0%25F7%25B0%25A3_%25B0%25C5%25BA%25CF%25B8%25F1-3.jpg&type=sc960_832
          "
          width="30%"
          height="10%"
          style={{}}
        ></img>
        <Copyright>
          거북목증후군3 by 단아 커뮤니케이션
          https://blog.naver.com/danacmc/222044992948 BY-NC-ND 라이센스
        </Copyright>
      </ImgContainer>

      <MiddleSpace>&ensp;</MiddleSpace>
      <Contents data-aos="fade-down" data-aos-duration="500">
        거북목 합병증
      </Contents>
      <SubText data-aos="zoom-out-down" data-aos-duration="1500">
        폐활량감소😫&ensp;두통🤦‍♂️
      </SubText>
      <br />
      <SubText data-aos="zoom-out-down" data-aos-duration="2000">
        관절염💀&ensp;디스크손상😱
      </SubText>
      <br />
      <SubText data-aos="zoom-out-down" data-aos-duration="2500">
        골절 위험 증가😖
      </SubText>
      <br />
      <SubText data-aos="zoom-out-down" data-aos-duration="3000">
        버섯목 증후군😨
      </SubText>
      <MiddleSpace>&ensp;</MiddleSpace>
      <MiddleSpace>&ensp;</MiddleSpace>

      <Contents data-aos="fade-down" data-aos-duration="500">
        매년 늘어나는 거북목 증후군 환자수
      </Contents>
      <SubText data-aos="fade-right" data-aos-duration="2500">
        2015년 1,196,556 명
      </SubText>
      <br />
      <SubText data-aos="fade-left" data-aos-duration="2500">
        2017년 2,050,633 명
      </SubText>
      <br />
      <SubText data-aos="fade-right" data-aos-duration="2500">
        2019년 2,241,679 명
      </SubText>
      <MiddleSpace>&ensp;</MiddleSpace>
      <MiddleSpace>&ensp;</MiddleSpace>
      <MiddleSpace>&ensp;</MiddleSpace>
      <Contents data-aos="fade-down" data-aos-duration="500">
        컴퓨터와 스마트폰을 장시간 사용한다면
      </Contents>
      <ImgContainer data-aos="zoom-in" data-aos-duration="2500">
        <img
          alt=""
          src=" https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTA3MTNfMTA5%2FMDAxNjI2MTQ4MDcwMjcy.5wxyb6axb-mBG9T0MLrzVCd9j0rVa5D-xR7TTbIns0cg.8jRortrCp_v4PgoZgmju5XAo6TlluofD_hYjnRRk1-Mg.PNG.guwolkh1%2F%25C0%25CC_%25C0%25DA%25BC%25BC%25B8%25B8_%25C7%25C7%25C7%25D8%25C1%25D6%25BC%25BC%25BF%25E4.png&type=sc960_832
          "
          width="50%"
          height="40%"
          style={{}}
        ></img>
        <Copyright>
          거북목 생기는 이유 by 구월경희한의원
          https://blog.naver.com/guwolkh1/222429953416 BY-NC-ND 라이센스
        </Copyright>
      </ImgContainer>

      <MiddleSpace>&ensp;</MiddleSpace>
      <MiddleSpace>&ensp;</MiddleSpace>
      <SubContens data-aos="zoom-in-down" data-aos-duration="2500">
        당신도 예비 거북목 증후군 환자입니다
      </SubContens>
      <Contents
        data-aos="fade-up"
        data-aos-duration="2500"
        style={{ fontWeight: "300" }}
      >
        거북목 증후군 TurtleNeck과 함께 관리해 보세요
      </Contents>
    </DangerContainer>
    <Footer />
  </>
);

export default DangerPresenter;
