import React from "react";
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

import Home from "../Routes/Home";
import Danger from "../Routes/Danger";
import Exercise from "../Routes/Exercise";
import Guide from "../Routes/Guide";
import Hospital from "../Routes/Hospital";
import Login from "../Routes/Login";
import Signup from "../Routes/Signup";
import Detail from "../Routes/Detail";
import Mypage from "../Routes/Mypage";

export default () => (
  <Router>
    <>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/Danger" exact component={Danger} />
        <Route path="/Exercise" exact component={Exercise} />
        <Route path="/Guide" exact component={Guide} />
        <Route path="/Hospital" exact component={Hospital} />
        <Route path="/Login" exact component={Login} />
        <Route path="/Mypage" exact component={Mypage} />
        <Route path="/Signup" exact component={Signup} />
        <Route path="/Detail" exact component={Detail} />
        <Redirect from="*" to="/" />
      </Switch>
    </>
  </Router>
);
