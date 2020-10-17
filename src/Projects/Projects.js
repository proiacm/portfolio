import React from 'react';
import './Projects.css'

const Projects = (props) => {
    
    return (
        <div className='Project-card'>
            <h1>{props.name}</h1>
            <div className='Project'>
                <a target='_blank' href={props.link}>
                    <img className='Project-img' src={props.gif}/>
                </a>
            </div>
        </div>
    )
}

export default Projects;