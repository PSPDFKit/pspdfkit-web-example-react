import React, { Component } from "react";
import PSPDFKit from "./components/pspdfkit";
import "./App.css";

const baseUrl = `${window.location.protocol}//${window.location.host}/${process.env.PUBLIC_URL}`;

class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      document: "example.pdf",
    };
    this.openAnother = this.openAnother.bind(this);
  }

  openAnother() {
    this.setState({
      document: "another-example.pdf",
    });
  }

  render() {
    return (
      <div className="App">
        <div className="App-viewer">
          <PSPDFKit documentUrl={this.state.document} baseUrl={baseUrl} />
        </div>
        <button className="App-button" onClick={this.openAnother}>
          Open another document
        </button>
      </div>
    );
  }
}

export default App;
