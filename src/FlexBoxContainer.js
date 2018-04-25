//@flow
import React, { Component } from "react";
import FlexPropertiesContainer from "./FlexPropertiesContainer";
import FlexBoxDemo from "./FlexBoxDemo";
import "./FlexBoxContainer.css";

export default class FlexBoxContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      properties: null
    };
  }

  handleProperties(properties) {
    this.setState({ properties });
  }
  render() {
    return (
      <div className="FlexBoxContainer">
        <FlexPropertiesContainer
          handleProperties={this.handleProperties.bind(this)}
        />
        <FlexBoxDemo properties={this.state.properties} />
        {/* <div>{JSON.stringify(this.state.properties)}</div> */}
      </div>
    );
  }
}
