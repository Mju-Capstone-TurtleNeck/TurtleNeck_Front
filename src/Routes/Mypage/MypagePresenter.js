import React from "react";
import Helmet from "react-helmet";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import { PropTypes } from "prop-types";

const MypageContainer = styled.div`
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
  margin-left: 4%;
  margin-bottom: 4%;
  width: 15%;
  height: 30%;
  text-align: center;
`;

const PhotoDate = styled.strong`
  font-size: 20px;
`;

const SectionBox = styled.div`
  vertical-align: -30px;
  display: inline-block;
  justify-content: center;
  text-align: center;
  width: 450px;
  height: 300px;
  padding-bottom: 30px;
  border-radius: 40px;
  border: white;
  box-shadow: 0px 1px 3px 1px gray;
  position: absolute;
  left: 50%;
  top: 40%;
  transform: translate(-50%, -50%);
`;

const InputMain = styled.input`
  font-size: 20px;
  display: flex;
  width: 280px;
  height: 50px;
  border: none;
  align: right;
  &:focus {
    outline: none;
  }
`;

const InputClass = styled.div`
  font-size: 23px;
  font-weight: 600;
  vertical-align: -10px;
`;

const InputDiv = styled.div`
  margin-top: 15%;
  margin-left: 10%;
  display: flex;
  justify-content: space-between;
  width: 350px;
  height: 60px;
  border-bottom: 1px solid black;
`;

const BtnCheck = styled.button`
  margin: 60px 20px 20px 20px;
  width: 350px;
  height: 50px;
  color: white;
  border: white;
  border-radius: 10px;
  font-size: 23px;
  background: ${(props) => (props.disabled ? "#CAE9DA" : "#0D9E61")};
  cursor: ${(props) => (props.disabled ? "default" : "pointer")};
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

const MypagePresenter = (props) => (
  <>
    <Helmet>
      <title>Result | TurtleNeck</title>
    </Helmet>
    <Header />
    {props.hide === false ? (
      <MypageContainer>
        <Title>
          <TitleText>나의 기록</TitleText>
        </Title>
        {props.photoData.map((data, index) => {
          return (
            <PhotoContainer key={index}>
              <PhotoDate>{data.date}</PhotoDate>
              <br></br>
              <img alt="" src={data.src} width="100%" height="90%"></img>
            </PhotoContainer>
          );
        })}

        <br></br>
      </MypageContainer>
    ) : (
      <SectionBox>
        <Title>
          <TitleText>아이디를 입력해 주세요</TitleText>
        </Title>
        <InputDiv>
          <InputClass>ID</InputClass>{" "}
          <InputMain onChange={props.SetId}></InputMain>
        </InputDiv>
        <BtnCheck onClick={props.BtnClick} disabled={props.disabled}>
          확 인
        </BtnCheck>
      </SectionBox>
    )}
    {props.hide === false ? (
      <Button>
        <Link to="Hospital" style={{ textDecoration: "none" }}>
          <BtnSearch>병원 찾기</BtnSearch>
        </Link>
      </Button>
    ) : (
      <></>
    )}

    <Footer />
  </>
);
MypagePresenter.propTypes = {
  photoData: PropTypes.array,
  hide: PropTypes.bool,
  myId: PropTypes.string,
  disabled: PropTypes.bool,
  BtnActive: PropTypes.func,
  SetId: PropTypes.func,
  BtnClick: PropTypes.func,
};
export default MypagePresenter;
