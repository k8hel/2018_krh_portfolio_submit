import React, { Component } from 'react';
import './project-images/kaitlyn.png';
import './App.css';
import ContactPanel from './contactpanel.js';
import Navigation from './navbar.js';

class App extends Component {
  render() {
    return (
      <div>
        <div className='navigationbar'>
          </div>
      <div className="App">

     
        <div className="App-intro">
        <img className="profPic" src={require("./project-images/kaitlyn.png")} alt="profile" />

        <h1 className="App-title">KAITLYN HELSTROM</h1>
        </div>

        <ContactPanel />


      </div>
      </div>

    );
  }
}

export default App;