import elby from '../assets/images/elby.png';
import decimalBudget from '../assets/images/decimal-budget.png';
import odin from '../assets/images/odin.png';
import golang from '../assets/images/golang.jpg';
import javaos from '../assets/images/javaos.jpg';


import '../assets/styles/Project.scss';

function Project() {
    return (
        <div className="projects-container" id="projects">
            <h1>Personal Projects</h1>
            <div className="projects-grid">
                <div className="project">
                    <a href="https://github.com/iTsThermo/GoLang-Lessons" target="_blank" rel="noreferrer"><img src={golang} className="zoom" alt="thumbnail" width="100%" style={{ objectFit: "fill" }} /></a>
                    <a href="https://github.com/iTsThermo/GoLang-Lessons" target="_blank" rel="noreferrer"><h2>Go Lang Lessons</h2></a>
                    <p>I'm currently expanding my expertise in Go by working through Jon Bodner's Learning Go: An Idiomatic Approach to Real-world Go (2nd Edition, 2024), published by O'Reilly Media. Guided by this comprehensive resource, I’m mastering Go's idiomatic style and applying it to real-world challenges. ISBN: 9781098139292. Assignments: Assignments from the book is available on my GitHub repository. Feel free to explore my solutions and see how I tackle Go’s unique features, from concurrency and interfaces to modules and error handling.</p>
                </div>
                <div className="project">
                    <a href="https://github.com/iTsThermo/javaOS" target="_blank" rel="noreferrer"><img src={javaos} className="zoom" alt="thumbnail" width="100%" style={{ objectFit: "fill" }} /></a>
                    <a href="https://github.com/iTsThermo/javaOS" target="_blank" rel="noreferrer"><h2>Java Operating System</h2></a>
                    <p>I'm building a Java-based operating system simulator that replicates core OS functionalities within the JVM. It features cooperative multitasking, priority scheduling that dynamically adjusts process execution, and paging with virtual memory management for efficient resource allocation. The system also includes interprocess communication through message passing and signaling, allowing processes to coordinate at the OS level.</p>
                </div>
                <div className="project">
                    <a href="https://apps.apple.com/us/app/elby/id6740222857" target="_blank" rel="noreferrer"><img src={elby} className="zoom" alt="thumbnail" width="100%" style={{ objectFit: "fill" }} /></a>
                    <a href="https://apps.apple.com/us/app/elby/id6740222857" target="_blank" rel="noreferrer"><h2>Elby</h2></a>
                    <p>Automated record-keeping mobile app for short-term rental owners using React Native and Supabase, featuring mileage tracking, expense logging, IRS-compliant reporting, real-time geofencing, and automated visit tracking to enhance accuracy and efficiency. [Available On App Store]</p>
                </div>
                <div className="project">
                    <a href="https://www.theodinproject.com/paths/full-stack-javascript" target="_blank" rel="noreferrer"><img src={odin} className="zoom" alt="thumbnail" width="100%" style={{ objectFit: "fill" }} /></a>
                    <a href="https://www.theodinproject.com/paths/full-stack-javascript" target="_blank" rel="noreferrer"><h2>Odin Project</h2></a>
                    <p>Built and deployed full-stack web applications as part of The Odin Project, leveraging HTML, CSS, and JavaScript for responsive front-end design and Node.js with Express for backend functionality. Implemented RESTful APIs, user authentication, and database management using MongoDB, focusing on best practices and modern development workflows.</p>
                </div>
                <div className="project">
                    <a href="https://github.com/iTsThermo/Decimal-Budget" target="_blank" rel="noreferrer"><img src={decimalBudget} className="zoom" alt="thumbnail" width="100%" style={{ objectFit: "fill" }} /></a>
                    <a href="https://github.com/iTsThermo/Decimal-Budget" target="_blank" rel="noreferrer"><h2>Decimal Budget</h2></a>
                    <p>Developed a Java application with authentication, transaction logging, and personalized budgeting features, utilizing MySQL to store financial data and track expenditures against set budgets. Designed a JavaFX-based GUI with three menus, enabling users to create, edit, and categorize budgets with seamless SQL data integration.</p>
                </div>
            </div>
        </div>
    );
}

export default Project;