import React, { Component } from "react";
import Header from "./Components/Header";
import Contacts from "./Components/Contacts";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header branding="Contact Manager" />
        <div className="container">
          <Contacts />
        </div>
      </div>
    );
  }
}

export default App;
