import React, { Component } from 'react';
import './App.css';
import About from './About/About';
import Contact from './Contact/Contact';
import Projects from './Projects/Projects';
import Nav from './Nav/Nav';
import Typical from 'react-typical'
import TextLoop from 'react-text-loop';

class App extends Component {


  state = { 
    projects: [
     { name: 'Glamlex'},
     { name: 'Untriggered'},
     { name: 'Traveler'}
   ]
 }

  render() {

    let projectList = <div>
      {this.state.projects.map((project, index) => {
        return <Projects key={index} name={project.name} />
      })}
    </div>

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
        {projectList}
        <Contact />
      </div>
    );
  }
}

export default App;
