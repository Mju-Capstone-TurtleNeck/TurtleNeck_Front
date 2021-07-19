import React from "react";
import Helmet from "react-helmet";
import styled from "styled-components";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import { BsCursor } from "react-icons/bs";
import { PropTypes } from "prop-types";

const MapContainer = styled.div`
  position: fixed;
  top: 20%;
  left: 30%;
  width: 40%;
  height: 60%;
  overflow: hidden;
`;
const SearchContainer = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  top: 10%;
  left: 40%;
  width: 20%;
  height: 5%;
  background-color: #cae9da;
`;

const SearchInput = styled.input`
  width: 80%;
  height: 50%;
  border: none;
  border-radius: 10px 0px 0px 10px;
  outline: none;
`;

const SearchButton = styled.button`
  height: 55%;
  border-radius: 0px 10px 10px 0px;
  background-color: white;
  border-color: transparent;
  border: none;
  background-color: white;
  font-size: 15px;
  margin-left: 0;
  margin-right: 0;
  &:active {
    box-shadow: none;
    background-color: #0d9e61;
    color: white;
  }
  &:hover {
    background-color: #0d9e61;
  }
`;

const HospitalPresenter = (props) => (
  <>
    <Helmet>
      <title>Hospital | TurtleNeck</title>
    </Helmet>
    <Header />
    <MapContainer id="Map" />
    <SearchContainer>
      <SearchInput
        placeholder="ex.용인시 남동"
        value={props.Keyword}
        id="keyword"
        onChange={props.changeKeyword}
      />
      <SearchButton onClick={() => props.setKeyword()}>
        <BsCursor />
      </SearchButton>
    </SearchContainer>
    <Footer />
  </>
);

HospitalPresenter.propTypes = {
  Keyword: PropTypes.string,
  Search: PropTypes.bool,
  changeKeyword: PropTypes.func,
  setKeyword: PropTypes.func,
};

export default HospitalPresenter;
