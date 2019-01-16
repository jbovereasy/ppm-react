import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Cnavbar from "./components/Cnavbar";
import Home from "./components/Home";
import Login from "./components/Login";
import Cform from "./components/Cform";
import Workorder from "./components/Workorder";
import Cfooter from "./components/Cfooter";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Cnavbar />
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/form" component={Cform} />
          <Route path="/workorder" component={Workorder} />
          <Cfooter />
        </div>
      </Router>
    );
  }
}

export default App;
