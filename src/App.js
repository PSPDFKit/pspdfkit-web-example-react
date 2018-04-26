import React, { Component } from 'react'
import PSPDFKit from './components/pspdfkit'
import './App.css'

if (!process.env.REACT_APP_PSPDFKIT_KEY.trim() || process.env.REACT_APP_PSPDFKIT_KEY === 'YOUR_LICENSE_KEY_GOES_HERE') {
  throw new Error(`No PSPDFKit license key found.
Please open package.json and assign it to REACT_APP_PSPDFKIT_KEY

Example:
"start": "cross-env REACT_APP_PSPDFKIT_KEY='YOUR_LICENSE_KEY_GOES_HERE' react-scripts start",

`)
}

const baseUrl = `${window.location.protocol}//${window.location.host}/${process.env.PUBLIC_URL}`

class App extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      pdf: 'example.pdf'
    }
    this.openAnother = this.openAnother.bind(this)
  }

  openAnother() {
    this.setState({
      pdf: 'another-example.pdf'
    })
  }

  render() {
    return (
      <div className="App">
        <div className="App-viewer">
          <PSPDFKit pdfUrl={this.state.pdf} licenseKey={process.env.REACT_APP_PSPDFKIT_KEY} baseUrl={baseUrl} />
        </div>
        <button className="App-button" onClick={this.openAnother}>open another document</button>
      </div>
    )
  }
}

export default App
