import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faReact, faPython, faLinux } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "React",
    "JavaScript",
    "HTML5",
    "CSS3",
    "MongoDB",
    "Express",
    "NodeJs"
];

const labelsSecond = [
    "C++",
    "C",
    "Python",
    "Java",
    "JavaScript",
    "TypeScript",
    "Go",
    "SQL",
    "PostgreSQL",
    "Flask",
    "React Native",
    "Scrum / Agile"
];

const labelsThird = [
    "Kali Linux",
    "Docker",
    "ISACA Competition 2025",
    "Computer Security Overview",
    "Penetration Testing & Ethical Hacking",
    "Information Risk Management",
    "Internet & Network Security",
    "WebGoat",
    "SQL Injection"
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>Full Stack Web Development</h3>
                    <p>I have built a diverse array of web applications from scratch using modern technologies such as MERN. I have a strong proficiency in the SDLC process and frontend + backend development.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faPython} size="3x"/>
                    <h3>Wide Range of Proficient Languages & Software Engineering knowledge</h3>
                    <p>As an aspiring software engineer, learning and mastering new languages is a must to stay versatile in the competitive market. This allows me to overcome any obstacle thrown my way.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faLinux} size="3x"/>
                    <h3>Cyber Security Proficiencies</h3>
                    <p>Secure systems from adversaries, and eliminate vulnerabilities</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;