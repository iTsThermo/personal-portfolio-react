import elby from '../assets/images/elby.png';
import decimalBudget from '../assets/images/decimal-budget.png';
import odin from '../assets/images/odin.png';


import '../assets/styles/Project.scss';

function Project() {
    return (
        <div className="projects-container" id="projects">
            <h1>Personal Projects</h1>
            <div className="projects-grid">
                <div className="project">
                    <a href="https://testflight.apple.com/join/qdnmsmE9" target="_blank" rel="noreferrer"><img src={elby} className="zoom" alt="thumbnail" width="100%" style={{objectFit: "fill"}} /></a>
                    <a href="https://testflight.apple.com/join/qdnmsmE9" target="_blank" rel="noreferrer"><h2>Elby</h2></a>
                    <p>Automated record-keeping mobile app for short-term rental owners using React Native and Supabase, featuring mileage tracking, expense logging, IRS-compliant reporting, real-time geofencing, and automated visit tracking to enhance accuracy and efficiency. [Beta Avaliable]</p>
                </div>
                <div className="project">
                    <a href="https://www.theodinproject.com/paths/full-stack-javascript" target="_blank" rel="noreferrer"><img src={odin} className="zoom" alt="thumbnail" width="100%" style={{objectFit: "fill"}}/></a>
                    <a href="https://www.theodinproject.com/paths/full-stack-javascript" target="_blank" rel="noreferrer"><h2>Odin Project</h2></a>
                    <p>Built and deployed full-stack web applications as part of The Odin Project, leveraging HTML, CSS, and JavaScript for responsive front-end design and Node.js with Express for backend functionality. Implemented RESTful APIs, user authentication, and database management using MongoDB, focusing on best practices and modern development workflows.</p>
                </div>
                <div className="project">
                    <a href="https://github.com/iTsThermo/Decimal-Budget" target="_blank" rel="noreferrer"><img src={decimalBudget} className="zoom" alt="thumbnail" width="100%" style={{objectFit: "fill"}}/></a>
                    <a href="https://github.com/iTsThermo/Decimal-Budget" target="_blank" rel="noreferrer"><h2>Decimal Budget</h2></a>
                    <p>Developed a Java application with authentication, transaction logging, and personalized budgeting features, utilizing MySQL to store financial data and track expenditures against set budgets. Designed a JavaFX-based GUI with three menus, enabling users to create, edit, and categorize budgets with seamless SQL data integration.</p>
                </div>
            </div>
        </div>
    );
}

export default Project;