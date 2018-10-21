import React, { Component } from 'react'
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx'

export default class componentName extends Component {
  render() {
    return (
      <BrowserRouter>
        <App />
      </BrowserRouter>
    )
  }
}
