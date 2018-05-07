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
          <span>
            如果你觉得这个FlexBox 演示站对你有所帮助，请点击<a href="https://github.com/springHyc/FlexBoxDemoStation">
              链接
            </a>，给我个star，非常感谢！
          </span>
        </header>
        <FlexBoxContainer />
      </div>
    );
  }
}

export default App;
