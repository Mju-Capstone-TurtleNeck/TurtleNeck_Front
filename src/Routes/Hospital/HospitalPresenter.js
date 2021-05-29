import React from "react";
import Helmet from "react-helmet";
import styled from "styled-components";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import { FiSearch } from "react-icons/fi";

const MapContainer = styled.div`
  position: fixed;
  top: 20%;
  left: 28%;
  width: 40%;
  height: 60%;
  overflow: hidden;
`;

const SearchContainer = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 10%;
  left: 38%;
  width: 20%;
  height: 5%;
  background-color: #cae9da;
`;

const SearchInput = styled.input`
  width: 80%;
  height: 50%;
  border: none;
  outline: none;
`;

const SearchButton = styled.button`
  background-color: transparent !important;
  border-color: transparent;
  border: none;
  background-color: white;
  font-size: 15px;
`;
const HospitalPresenter = () => (
  <>
    <Helmet>
      <title>Hospital | TurtleNeck</title>
    </Helmet>
    <Header />
    <MapContainer id="Map" />
    <SearchContainer>
      <SearchInput placeholder="동,읍,면 입력"></SearchInput>
      <SearchButton>
        <FiSearch />
      </SearchButton>
    </SearchContainer>
    <Footer />
  </>
);

export default HospitalPresenter;
