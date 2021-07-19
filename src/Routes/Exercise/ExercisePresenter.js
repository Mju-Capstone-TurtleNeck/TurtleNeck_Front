import React from "react";
import Helmet from "react-helmet";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import styled from "styled-components";
import YouTube from "react-youtube";

const Section = styled.div`
  text-align: center;
  overflow-x: hidden;
`;
const SectionBox = styled.div`
  display: inline-block;
  width: 700px;
  background: #cae9da;
  height: 700px;
  border-radius: 10px;
  text-align: center;
  box-shadow: 3px 3px 3px gray;
  margin-top: 6%;
  margin-bottom: 50px;
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
const opt = {
  height: "390",
  width: "640",
  playerVars: {
    // https://developers.google.com/youtube/player_parameters
    autoplay: 0,
  },
};
const ExercisePresenter = () => (
  <>
    <Helmet>
      <title>Exercise | TurtleNeck</title>
    </Helmet>
    <Header />
    <Section>
      <SectionBox data-aos="zoom-in-out">
        <Title>교정 운동법</Title>
        <MiddleBox>
          <YouTube videoId="3aTPapvWpKs" opts={opt} onReady={opt._onReady} />
        </MiddleBox>
      </SectionBox>
    </Section>
    <Footer />
  </>
);

export default ExercisePresenter;
