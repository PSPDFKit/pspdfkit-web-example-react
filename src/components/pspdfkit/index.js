import React, { Component } from "react";
import PSPDFKitWeb from "pspdfkit";

export default class PSPDFKit extends Component {
  constructor(props, context) {
    super(props, context);
    this._instance = null;
    this._container = null;

    this.onRef = this.onRef.bind(this);
    this.load = this.load.bind(this);
    this.unload = this.unload.bind(this);
  }

  onRef(container) {
    this._container = container;
  }

  async load(props) {
    console.log(`Loading ${props.pdfUrl}`);

    this._instance = await PSPDFKitWeb.load({
      pdf: props.pdfUrl,
      container: this._container,
      licenseKey: props.licenseKey,
      baseUrl: props.baseUrl
    });
    console.log("Successfully mounted PSPDFKit", this._instance);
  }

  unload() {
    PSPDFKitWeb.unload(this._instance || this._container);
    this._instance = null;
  }

  componentDidMount() {
    this.load(this.props);
  }

  componentDidUpdate(prevProps) {
    const nextProps = this.props;
    // We only want to reload the document when the pdfUrl prop changes.
    if (nextProps.pdfUrl !== prevProps.pdfUrl) {
      this.unload();
      this.load(nextProps);
    }
  }

  componentWillUnmount() {
    this.unload();
  }

  render() {
    return (
      <div
        ref={this.onRef}
        style={{ width: "100%", height: "100%", position: "absolute" }}
      />
    );
  }
}
