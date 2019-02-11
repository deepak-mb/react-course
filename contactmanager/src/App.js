import React, { Component } from "react";
import Header from "./Components/Header";
import Contact from "./Components/Contact";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header branding="Contact Manager" />
        <Contact name="John Doe" email="jdow@gmail.com" phone="555-555-5555" />
        <Contact name="Karen Smith" email="karen@gmail.com" phone="555-555-6666" />
      </div>
    );
  }
}

export default App;
