import React from "react";
import Helmet from "react-helmet";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";

const HomePresenter = () => (
  <>
    <Helmet>
      <title>Hospital | TurtleNeck</title>
    </Helmet>
    <Header />
    <Footer />
  </>
);

export default HomePresenter;
