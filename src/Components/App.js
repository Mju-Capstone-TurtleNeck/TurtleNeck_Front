import React from "react";
import Router from "./Router";

class App extends React.Component {
  componentDidMount() {
    console.log("asd");
  }

  render() {
    return (
      <>
        <Router />
      </>
    );
  }
}

export default App;
