import React, { Component } from 'react';
import './project-images/kaitlyn.png';
import './App.css';
import ContactPanel from './contactpanel.js';

class App extends Component {
  render() {
    return (
      <div className="App">
     
        <div className="App-intro">
        <img className="profPic" src={require("./project-images/kaitlyn.png")} alt="profile" />

        <h1 className="App-title">KAITLYN HELSTROM</h1>

        </div>

        <ContactPanel />


      </div>
    );
  }
}

export default App;