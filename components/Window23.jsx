import React from "react";
import "../css/style.css";

function ProjectList(props) {
    return (
        <div className="project">
            <div className="projectHeader">
                <div className="title">{props.title}</div>
                <div className="link">
                    <a href="" target="_blank">
                        <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_iconCarrier"> <path d="M20 4L12 12M20 4V8.5M20 4H15.5M19 12.5V16.8C19 17.9201 19 18.4802 18.782 18.908C18.5903 19.2843 18.2843 19.5903 17.908 19.782C17.4802 20 16.9201 20 15.8 20H7.2C6.0799 20 5.51984 20 5.09202 19.782C4.71569 19.5903 4.40973 19.2843 4.21799 18.908C4 18.4802 4 17.9201 4 16.8V8.2C4 7.0799 4 6.51984 4.21799 6.09202C4.40973 5.71569 4.71569 5.40973 5.09202 5.21799C5.51984 5 6.07989 5 7.2 5H11.5" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> </g> </svg> 
                    </a> 
                </div>
            </div>
            <div className="projectDesc">{props.desc}</div>
            <div className="projectTools">
                <span>HTML</span>
                <span>CSS</span>
                <span>JS</span>
                <span>REACT</span>
            </div>
        </div>
    )
}

function Window22() {
    return (
        <div className="window w2">
            <div className="sectionTitle">
                <span>RECENT</span>
                <span>PROJECT</span>
            </div>
            <div className="sectionContent project-list">
                <ProjectList 
                    title="DAPUR IMOOET WEBSITE" 
                    desc="The Dapur Imooet website is an e-commerce platform that simplifies online cake ordering. 
                    Its main features include a product catalog, ordering system, product management, and admin 
                    authentication. With a responsive and user-friendly design, this website was developed based on 
                    the store owner's needs analysis and tested to ensure optimal performance."
                />
                <ProjectList 
                    title="KIDZSEMA EDUCATION WEBSITE" 
                    desc="The Kidzsema Education website is a marketing platform for children's educational 
                    services, showcasing programs, advantages, and the registration system. Developed by a team, 
                    I played a role as a programmer, ensuring the website is responsive, user-friendly, and 
                    effective in enhancing business visibility and digital reach."/>
                <ProjectList title="PROJECT 3"/>
                <ProjectList title="PROJECT 4" />
                <ProjectList title="PROJECT 5" />
            </div>
        </div>
    );
}

export default Window22;