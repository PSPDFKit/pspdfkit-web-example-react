import React, { PureComponent } from 'react'
import PSPDFKitWeb from 'pspdfkit'

export default class PSPDFKit extends PureComponent {
  constructor(props, context) {
    super(props, context)
    this._instance = null
    this._container = null

    this.onRef = this.onRef.bind(this)
    this.load = this.load.bind(this)
    this.unload = this.unload.bind(this)
  }

  onRef(container) {
    this._container = container
  }

  load(props) {
    console.log(`Loading ${props.pdfUrl}`)

    PSPDFKitWeb.load({
      pdf: props.pdfUrl,
      container: this._container,
      licenseKey: props.licenseKey,
      baseUrl: props.baseUrl
    })
      .then(instance => {
        console.log("Successfully mounted PSPDFKit", instance)
        this._instance = instance
      })
      .catch(error => {
        throw error
      })
  }

  unload() {
    PSPDFKitWeb.unload(this._instance || this._container)
    this._instance = null
  }

  componentDidMount() {
    this.load(this.props)
  }

  componentWillUpdate(nextProps) {
    this.unload()
    this.load(nextProps)
  }

  componentWillUnmount() {
    this.unload()
  }

  render() {
    return (
      <div ref={this.onRef} style={{width: '100%', height: '100%', position: 'absolute'}} />
    )
  }
}
