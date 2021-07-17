import React from "react";
import Helmet from "react-helmet";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import { PropTypes } from "prop-types";

const MypageContainer = styled.div`
  z-index: -1;
  position: fixed;
  top: 5%;
  left: 1%;
  bottom: 5%;
  width: 100%;
  height: 80%;
`;

const Title = styled.div`
  margin-top: 3%;
  width: 98%;
  height: 10%;
  text-align: center;
`;
const TitleText = styled.strong`
  font-size: 30px;
`;

const PhotoContainer = styled.div`
  display: inline-block;
  justify-content: center;
  margin-left: 7%;
  margin-bottom: 5%;
  width: 11%;
  height: 30%;
  text-align: center;
`;

const PhotoDate = styled.strong`
  font-size: 20px;
`;

const BtnSearch = styled.button`
  width: 350px;
  height: 50px;
  color: white;
  border: white;
  border-radius: 10px;
  font-size: 23px;
  background: #0d9e61;
  cursor: pointer;
`;

const Button = styled.div`
  display: fixed;
  justify-content: center;
  margin-top: 43%;
`;

const Condition = styled.h3`
  margin: 0;
`;

const MypagePresenter = (props) => (
  <>
    <Helmet>
      <title>Mypage | TurtleNeck</title>
    </Helmet>
    <Header />

    <MypageContainer>
      <Title>
        <TitleText>나의 기록</TitleText>
      </Title>

      {props.photoData.map((data, index, array) => {
        return (
          <PhotoContainer key={index}>
            <PhotoDate>{data.date}</PhotoDate>
            <br></br>
            <img alt="" src={data.src} width="100%" height="90%"></img>
            <Condition key={index} style={{ color: data.color }}>
              {data.condition}
            </Condition>
          </PhotoContainer>
        );
      })}
      <br></br>
    </MypageContainer>

    <Button>
      <Link to="Hospital" style={{ textDecoration: "none" }}>
        <BtnSearch>병원 찾기</BtnSearch>
      </Link>
    </Button>

    <Footer />
  </>
);
MypagePresenter.propTypes = {
  photoData: PropTypes.array,
};
export default MypagePresenter;
