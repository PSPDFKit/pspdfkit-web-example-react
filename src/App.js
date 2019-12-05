import React, { Component } from "react";
import PSPDFKit from "./components/pspdfkit";
import "./App.css";

const LICENSE_KEY =
  process.env.REACT_APP_PSPDFKIT_LICENSE_KEY &&
  process.env.REACT_APP_PSPDFKIT_LICENSE_KEY.trim();

if (!LICENSE_KEY || LICENSE_KEY === "YOUR_LICENSE_KEY_GOES_HERE") {
  throw new Error(`No or invalid PSPDFKit license key found.
Please open package.json and assign it to REACT_APP_PSPDFKIT_LICENSE_KEY.

To request a trial license, please go to:

  https://pspdfkit.com/try/.

After requesting a trial license, you can find your license key by opening the
link in the email and going to:

  https://pspdfkit.com/guides/web/current/standalone/integration/#toc_example-application`);
} else if (LICENSE_KEY.length < 120) {
  throw new Error(`The supplied PSPDFKit license key is too short.

This usually happens when using the NPM_KEY instead of the LICENSE_KEY.

After requesting a trial license, you can find your license key by opening the
link in the email and going to:

  https://pspdfkit.com/guides/web/current/standalone/integration/#toc_example-application`);
}

const baseUrl = `${window.location.protocol}//${window.location.host}/${
  process.env.PUBLIC_URL
}`;

class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      pdf: "example.pdf"
    };
    this.openAnother = this.openAnother.bind(this);
  }

  openAnother() {
    this.setState({
      pdf: "another-example.pdf"
    });
  }

  render() {
    return (
      <div className="App">
        <div className="App-viewer">
          <PSPDFKit
            pdfUrl={this.state.pdf}
            licenseKey={LICENSE_KEY}
            baseUrl={baseUrl}
          />
        </div>
        <button className="App-button" onClick={this.openAnother}>
          Open another document
        </button>
      </div>
    );
  }
}

export default App;
