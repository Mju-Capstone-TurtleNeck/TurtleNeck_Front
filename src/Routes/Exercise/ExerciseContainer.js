import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ExercisePresenter from "./ExercisePresenter";

export default class extends React.Component {
  componentDidMount() {
    AOS.init({
      duration: 2000,
    });
  }

  render() {
    //const {} = this.state;
    return <ExercisePresenter />;
  }
}
