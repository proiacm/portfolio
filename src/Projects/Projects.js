import React from 'react';
import './Projects.css'

const Projects = (props) => {
    
    return (
        <div className='Project-card'>
            <div className='Project'>
                {props.name}
                <a href="https://www.qries.com/">
                    <img src="https://www.qries.com/images/banner_logo.png"/>
                </a>
            </div>
        </div>
    )
}

export default Projects;