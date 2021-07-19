import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import GuidePresenter from "./GuidePresenter";

export default class extends React.Component {
  componentDidMount() {
    AOS.init({
      duration: "",
    });
  }
  render() {
    //const {} = this.state;
    return <GuidePresenter />;
  }
}
