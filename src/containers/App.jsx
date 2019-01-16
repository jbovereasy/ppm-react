import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Home from "../components/home/Home";
import Login from "../components/login/Login";
import Form from "../components/form/Form";
import Footer from "../components/footer/Footer";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/form" component={Form} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
