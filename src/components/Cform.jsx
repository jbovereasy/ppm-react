import React, { Component } from "react";
import {
  Form,
  FormGroup,
  FormControl,
  ControlLabel,
  Button
} from "react-bootstrap";
import "./Cform.css";

export default class Cform extends Component {
  render() {
    return (
      <div class="container">
        <div class="row">
          <div class="col">
            <h2 class="text-center">Azzier Time Tracking</h2>
          </div>
        </div>

        <Form>
          <FormGroup>
            <ControlLabel>WO#</ControlLabel>
            <FormControl
              type="number"
              placeholder="WO# number"
              maxlength="6"
              required
            />
          </FormGroup>

          <FormGroup>
            <ControlLabel>Hours</ControlLabel>
            <FormControl type="number" placeholder="Hours" required />
          </FormGroup>

          <FormGroup>
            <ControlLabel>Time Type</ControlLabel>
            <FormControl type="type" placeholder="REG" required />
          </FormGroup>

          <FormGroup>
            <ControlLabel>Work Date</ControlLabel>
            <FormControl type="date" placeholder="mm/dd/yy" required />
          </FormGroup>

          <FormGroup>
            <ControlLabel>Comments</ControlLabel>
            <FormControl type="text" placeholder="Additional Comments" />
          </FormGroup>
        </Form>
        <div class="alert alert-info wo-location">Location of Work Order</div>
        <div class="alert alert-info wo-desc"> Description of Work Order</div>
        <Button bsStyle="warning" type="submit" id="submit" name="submit">
          Submit
        </Button>
      </div>
    );
  }
}
