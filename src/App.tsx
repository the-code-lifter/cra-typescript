import React, { Component } from "react"

import Description from "./Description"
import Header from "./Header"
import Form from "./Form"
import "./App.css"

const formRender = (value: string) => <div>{value}</div>

const App = () => (
  <div className="App">
    <header className="App-header">
      <Header name="Bob" />
      <Description countBy={3} />
      <Form render={formRender} />
    </header>
  </div>
)

App.displayName = "App"

export default App
