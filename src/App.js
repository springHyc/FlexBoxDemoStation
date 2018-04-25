import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import FlexBoxContainer from "./FlexBoxContainer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">FlexBox 演示站</h1>
        </header>
        <FlexBoxContainer />
      </div>
    );
  }
}

export default App;
