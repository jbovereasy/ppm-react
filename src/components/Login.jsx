import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Jumbotron,
  Grid,
  Button,
  Form,
  FormGroup,
  Col,
  FormControl,
  ControlLabel
} from "react-bootstrap";

export default class Login extends Component {
  render() {
    return (
      <Grid>
        <h2 className="text-center">Login</h2>
        <Jumbotron>
          <Form horizontal>
            <FormGroup controlId="formHorizontalEmail">
              <Col componentClass={ControlLabel} sm={2}>
                Username
              </Col>
              <Col sm={10}>
                <FormControl type="text" placeholder="Username" />
              </Col>
            </FormGroup>

            <FormGroup controlId="formHorizontalPassword">
              <Col componentClass={ControlLabel} sm={2}>
                Password
              </Col>
              <Col sm={10}>
                <FormControl type="password" placeholder="Password" />
              </Col>
            </FormGroup>

            <FormGroup>
              <Col smOffset={2} sm={10}>
                <Link to="/form">
                  <Button bsStyle="primary">Enter</Button>
                </Link>
              </Col>
            </FormGroup>
          </Form>
        </Jumbotron>
      </Grid>
    );
  }
}
