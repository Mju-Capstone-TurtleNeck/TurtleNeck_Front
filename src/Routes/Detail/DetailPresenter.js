import React from "react";
import Helmet from "react-helmet";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";

const Section = styled.div`
  text-align: center;
`;
const SectionBox = styled.div`
  display: inline-block;
  width: 700px;
  height: 700px;
  background: #cae9da;
  border-radius: 10px;
  position: absolute;
  margin-top: 6%;
  left: 32%;
  text-align: center;
  z-index: -1;
  box-shadow: 3px 3px 3px gray;
`;
const Title = styled.h1`
  font-size: 40px;
  margin: 40px 30px 0px 30px;
`;
const MiddleBox = styled.div`
  width: 700px;
  height: 500px;
  display: table-cell;
  vertical-align: middle;
  text-align: center;
`;

const Button = styled.button`
  margin-top: 10px;
  padding: 10px;
  padding-right: 25px;
  padding-left: 25px;
  font-size: 25px;
  text-align: left;
  border-radius: 6px;
  border: 0px;
  background: white;
  cursor: pointer;
  box-shadow: 3px 3px 3px black;
  &:active {
    box-shadow: none;
    background-color: #0d9e61;
    color: white;
  }
`;

const Plus = styled.p`
  display: inline-block;
  font-size: 100px;
  margin: 0;
  position: absolute;
  left: 50%;
  top: 46%;
  transform: translate(-50%, -50%);
  text-align: center;
`;

const Photo = styled.div`
  background: white;
  width: 60%;
  display: inline-block;
  height: 300px;
  cursor: pointer;
  &:hover {
    color: red;
  }
  font-size: 20px;
`;

// const Solution = styled.div`
//   background: white;
//   width: 80%;
//   display: inline-block;
//   height: 30vh;
// `;

const BtnFind = styled.button`
  background: white;
  border-radius: 15px;
  border: 0px;
  padding: 5px;
  padding-left: 45px;
  padding-right: 45px;
  cursor: pointer;
  margin: 30px 10px 10px 10px;
  font-size: 17px;
  box-shadow: 3px 3px 3px black;
  &:active {
    box-shadow: none;
    background-color: #0d9e61;
    color: white;
  }
`;

const DetailPresenter = (props) => (
  <>
    <Helmet>
      <title>Detail | TurtleNeck</title>
    </Helmet>
    <Header />
    {/* data-aos="zoom-in" */}
    <Section>
      <SectionBox data-aos="zoom-in">
        <Title>거북목 검사</Title>

        <MiddleBox>
          {/* 검사 결과가 없으면 사진을 넣어주세요, 있으면 검사결과 표시 */}
          {props.condition === "" ? (
            <h1>사진을 넣어주세요</h1>
          ) : (
            <h1 style={{ color: props.conditionColor }}>{props.condition}</h1>
          )}
          <div>
            <label for="input-file">
              <Photo>
                <canvas
                  id={"canvas"}
                  style={{
                    position: "absolute",
                    display: "fixed",
                    width: "props.cWidth",
                    height: "props.cHeight",
                  }}
                />
                {/* file이 업로드 되었으면 사진을 아니면 + 버튼 표시 */}
                {props.file !== "" ? (
                  <img
                    src={props.previewURL}
                    alt="profile"
                    style={{ width: "auto", height: "30.89vh", zIndex: 2 }}
                    id="img"
                  ></img>
                ) : (
                  <Plus>
                    +<br />
                  </Plus>
                )}
              </Photo>
            </label>
            <input
              type="file"
              accept="image/jpg,impge/png,image/jpeg,image/gif"
              name="profile_img"
              onChange={props.handleFileOnChange}
              style={{ display: "none" }}
              id="input-file"
            ></input>
          </div>
          {/* 검사 결과값에 따라 버튼 내용 변경 */}
          {props.condition === "" ? (
            <BtnFind onClick={props.BtnReset}>사진 리셋</BtnFind>
          ) : (
            <BtnFind onClick={props.BtnSave}>사진 저장</BtnFind>
          )}
          {props.condition === "양호" && (
            <Link to="Exercise" style={{ textDecoration: "none" }}>
              <BtnFind>예방 운동법</BtnFind>
            </Link>
          )}
          {props.condition === "주의" && (
            <Link to="Hospital" style={{ textDecoration: "none" }}>
              <BtnFind>병원 찾기</BtnFind>
            </Link>
          )}
          {props.condition === "심각" && (
            <Link to="Hospital" style={{ textDecoration: "none" }}>
              <BtnFind>병원 찾기</BtnFind>
            </Link>
          )}
        </MiddleBox>
        {props.condition === "" ? (
          <Button onClick={props.BtnStart}>검사 시작하기</Button>
        ) : (
          <Button onClick={props.BtnReset}>다시 검사하기</Button>
        )}
      </SectionBox>
    </Section>

    <Footer />
  </>
);

DetailPresenter.propTypes = {
  file: PropTypes.string,
  previewURL: PropTypes.string,
  hide: PropTypes.bool,
  handleFileOnChange: PropTypes.func,
  BtnStart: PropTypes.func,
  cWidth: PropTypes.string,
  cHeight: PropTypes.string,
  condition: PropTypes.string,
  conditionColor: PropTypes.string,
  handleFileOnClick: PropTypes.func,
  BtnReset: PropTypes.func,
  BtnSave: PropTypes.func,
};

export default DetailPresenter;
