import React, { Component } from 'react';
import './App.css';
import About from './About/About';
import Contact from './Contact/Contact';
import Projects from './Projects/Projects';
import Nav from './Nav/Nav';
import Typical from 'react-typical'

class App extends Component {

  render() {
    return (
      <div className="App">
        <Nav animatedText={<Typical steps={['Hi, I\'m CiaraMaria...', 1000, 'and I\'m a software developer!', 500]}
        loop={Infinity}
        wrapper="h1"/>}/>
        <About />
        <Projects />
        <Projects />
        <Projects />
        <Contact />
      </div>
    );
  }
}

export default App;
