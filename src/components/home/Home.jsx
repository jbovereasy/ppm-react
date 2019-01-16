import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Jumbotron, Grid, Button } from "react-bootstrap";
import "./Home.css";

export default class Home extends Component {
  render() {
    return (
      <Grid>
        <Jumbotron className="text-center">
          <h2>Welcome to CSUN TimeTracking</h2>
          <Link to="/login">
            <Button bsStyle="danger">Login</Button>
          </Link>
        </Jumbotron>
      </Grid>
    );
  }
}
