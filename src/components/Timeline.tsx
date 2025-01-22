import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="June 2024 - present"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Python Software Developer Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">Blue CoLab | Pleasantville, NY</h4>
            <p>
              • Lead team of 3 technology student interns creating sonification app, implementing Python Flask, Pandas & Matplotlib
              analyzing file to convert CSV into MIDI/WAV files<br />
              • Design data graph visualization with Matplotlib, researched the effect of different normalization algorithms<br />
              • Manage normalization project of annual 40,000 row dataset with Pandas & NumPy removing defective rows, using treated
              data to make a Discord Bot reporting faulty data and hardware outages in real-time reducing down-time by 75%<br />
              • Develop Python machine learning pipeline with PyTorch, design for binary image classification to determine the presence of
              duckweed in pond images <br />
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="September 2024 - December 2024"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Cyber Security Trainee</h3>
            <h4 className="vertical-timeline-element-subtitle">Cyber Immersion Program | Pleasantville, NY</h4>
            <p>
              • Deployed website hosted on docker container to simulate past cyber-attacks for vulnerability/exploitation testing<br />
              • Used Social Engineering Toolkit to harvest user credentials cloning websites for HTTP POST requests on local network
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="June 2021 - August 2022"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Property Manager</h3>
            <h4 className="vertical-timeline-element-subtitle">Hudson Valley Community Management | Yorktown Heights, NY</h4>
            <p>
              • Managed 4 Condo, and HOA properties, providing oversight via site visits & updates for client with monthly meetings
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;