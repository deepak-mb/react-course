import React, { Component } from "react";
import Contact from "./components/Contact";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header branding="Contact Manager" />
        <div className="container">
          <Contact name="John" email="john@gmail.com" phone="111 111 1111" />
          <Contact name="Karen" email="karen@gmail.com" phone="222 222 2222" />
        </div>
      </div>
    );
  }
}

export default App;
