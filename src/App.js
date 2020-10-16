import React, { Component } from 'react';
import './App.css';
import About from './About/About';
import Contact from './Contact/Contact';
import Projects from './Projects/Projects';
import Nav from './Nav/Nav';
import Typical from 'react-typical'
import TextLoop from "react-text-loop";

class App extends Component {

  render() {
    return (
      <div className="App">
        <Nav animatedText={<Typical steps={['Hi, I\'m CiaraMaria...', 1000, 'and I\'m a software developer!', 500]}
        loop={Infinity}
        wrapper="h1"/>}/>
        <About loopText={<TextLoop interval={2000}>
                    <span>build something together.</span>
                    <span>solve a problem.</span>
                    <span>grab coffee.</span>
                    <span>share memes.</span>
                    </TextLoop>} />
        <Projects />
        <Projects />
        <Projects />
        <Contact />
      </div>
    );
  }
}

export default App;
