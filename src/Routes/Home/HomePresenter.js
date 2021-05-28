import React from "react";
import Helmet from "react-helmet";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import Home from "../../Components/Home";
const HomePresenter = () => (
  <>
    <Helmet>
      <title>Home | TurtleNeck</title>
    </Helmet>
    <Header />
    <Home />
    <Footer />
  </>
);

export default HomePresenter;
