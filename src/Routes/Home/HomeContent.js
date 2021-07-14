import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Solution = styled.div`
  background: white;
  width: 80%;
  display: inline-block;
  height: 30vh;
`;

const Photo = styled.div`
  background: white;
  width: 80%;
  display: inline-block;
  height: 460px;
  cursor: pointer;
  &:hover {
    color: red;
  }
  font-size: 20px;
`;
const BtnFind = styled.button`
  background: green;
  border-radius: 15px;
  border: 0px;
  padding: 5px;
  padding-left: 45px;
  padding-right: 45px;
  color: white;
  cursor: pointer;
  margin: 10px;
  font-size: 17px;
`;
const Plus = styled.p`
  display: inline-block;
  font-size: 100px;
  margin: 0;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
`;

const Content = styled.h2`
  margin: 20px;
  font-size: 25px;
  text-align: left;
`;
function Guide() {
  return (
    <div>
      <Content>1. 편한 자세로 의자에 앉아 주세요</Content>
      <Content>2. 머리, 목, 어깨가 보이도록 측면 사진을 찍어 주세요</Content>
      <Content>3. 사진을 넣고 검사 시작하기를 눌러주세요</Content>
      <Content>
        4. 사진이 준비 되었으면 아래 시작하기 버튼을 눌러주세요
        <br />
        <br />
        <br />
      </Content>
    </div>
  );
}
class Check extends Component {
  constructor(props) {
    super(props);
    this.state = { file: "", previewURL: "" };
  }
  handleFileOnChange = (event) => {
    event.preventDefault();
    let reader = new FileReader();
    let file = event.target.files[0];
    reader.onloadend = () => {
      this.setState({
        file: file,
        previewURL: reader.result,
      });
    };
    reader.readAsDataURL(file);
  };
  render() {
    var content;
    let profile_preview = null;
    if (this.state.file !== "") {
      profile_preview = (
        <img
          src={this.state.previewURL}
          alt="profile"
          style={{ height: "45vh" }}
        ></img>
      );
      content = profile_preview;
    } else {
      content = (
        <Plus>
          +<br />
          <p style={{ fontSize: "20px" }}>사진을 넣어주세요</p>
        </Plus>
      );
    }
    return (
      <div>
        <label for="input-file">
          <Photo>{content}</Photo>
        </label>
        <input
          type="file"
          accept="image/jpg,impge/png,image/jpeg,image/gif"
          name="profile_img"
          onChange={this.handleFileOnChange}
          style={{ display: "none" }}
          id="input-file"
        ></input>
      </div>
    );
  }
}

function Result(props) {
  return (
    <div>
      <h1 style={{ color: props.color, margin: 0 }}>{props.progress}</h1>
      <p>거북목 교정 운동법</p>
      <Solution></Solution>
      <br />
      <Link to="Hospital" style={{ textDecoration: "none" }}>
        <BtnFind>병원 찾기</BtnFind>
      </Link>
    </div>
  );
}

const HomeContent = (props) => {
  return {
    0: <Guide />,
    1: <Check />,
    2: <Result progress="주의" color="orange" />,
  }[props.id];
};
export default HomeContent;
