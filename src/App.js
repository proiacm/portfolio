import React, { Component } from 'react';
import './App.css';
import About from './About/About';
import Contact from './Contact/Contact';
import Projects from './Projects/Projects';

class App extends Component {

  render() {
    return (
      <div className="App">
        Welcome!
        <About />
        <Contact />
        <Projects />
      </div>
    );
  }
}

export default App;
