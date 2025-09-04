import React from "react";
import "../components/Timeline.css"; // make sure this file exists next to the component

// Replace with your own data
const EXPERIENCES = [
  {
    id: "exp-1",
    company: "Qualys INC",
    role: "Software Engineer- SRE",
    logo:"/svgs/Logo-Qualys.svg",
    // NANTAR LOGO ADD KAR
    start: "April 2024",
    end: "Present",
    location: "Pune, Maharashtra, IN .",
    bullets: [
      "Developed internal tools and scripts that reduced manual overhead by over 80%, improving overall system maintainability.",
"Hosted and maintained servers for internal alerting systems to ensure 24/7 reliability of business-critical applications.",
"Created alerting mechanisms for monitoring key system processes, helping maintain 99% uptime across production envs.",
"Built and deployed API monitoring tools that enabled proactive incident response by detecting service downtimes in real time.",
"Built automation tools for generating SQL queries during incidents, significantly reducing mean time to resolution (MTTR).",

    ],
    link: "https://example.com",
  },
  {
    id: "exp-2",
    company: "Mercedes Benz India Pvt Ltd",
    role: "Software Enginnering Intern",
    logo:"/svgs/Mercedes.svg",
    start: "June 2023",
    end: "Dec 2023",
    location: "Pune, Maharashtra, IND.",
    bullets: [
      "Coded and streamlined automation for 3 core invoice flows: data extraction, automatic sorting, and database integration.",
"Utilized Python and Power Automate to process invoice emails, minimizing manual data handling and improving consistency.",
"Saved over 3 hours of manual work daily for the invoice processing team, boosting operational efficiency.",
"Prevented an additional full-time hire by fully automating repetitive tasks, reducing departmental overhead.",
"Collaborated with finance and operations teams to identify workflow bottlenecks and deliver tailored automation solutions.",
    ],
    link: "https://example.com",
  },
  {
    id: "exp-3",
    company: "BrewAndBuzz® Digital Solutions",
    role: "Software Engineer Intern",
    logo:"/svgs/brewandbuzz_logo.jpg",
    start: "June 2022",
    end: "August 2022",
    location: "Online",
    bullets: [
        "Developed and maintained full-stack ecommerce applications using MongoDB, Express.js, React, and Node.js (MERN stack).",
        "Implemented RESTful APIs with Express.js and integrated them with React frontends for seamless user interaction.",
        "Designed and optimized MongoDB schemas to support scalable and efficient data storage.",
    ],
    link: "https://example.com",
  },
  {
    id: "exp-3",
    company: "Innotek IT Systems",
    role: "Software Engineer Intern",
    logo:"/svgs/innotek.jpg",
    start: "June 2021",
    end: "August 2021",
    location: "Online",
    bullets: [
        "Developed and maintained full-stack web and e-commerce applications using MongoDB, Express.js, React, Node.js (MERN stack) and WordPress CMS.",
        "Implemented RESTful APIs with Express.js and integrated them with React frontends, while also customizing WordPress plugins and themes for dynamic functionality.",
        
    ],
    link: "https://example.com",
  }
];

export default function Timeline() {
  return (
    <main className="experience-page">
      <p className="experience-title">Experience</p>

      <section className="timeline" aria-label="Experience timeline">
        {EXPERIENCES.map((exp, idx) => (
          <TimelineItem key={exp.id} exp={exp} side={idx % 2 === 0 ? "left" : "right"} />
        ))}
      </section>
    </main>
  );
}

function TimelineItem({ exp, side }) {
  return (
    <article className={`timeline-item ${side}`}>
      <div className="content">
        <header className="header">
          <div className="namecol">
            <h3 className="role">{exp.role}</h3>
            <a href={exp.link} target="_blank" rel="noreferrer" className="company">
                {exp.company}
            </a>
          </div>
          <div className="logocol">
            <img src={exp.logo} className="logoimage"  alt="" />
          </div>
        </header>

        <p className="date">
          {exp.start} — {exp.end} · {exp.location}
        </p>

        <ul className="bullets">
          {exp.bullets.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}

/*
Create a sibling file named `ExperiencePage.css` and paste your CSS there.
Minimal starter (you can replace with your full styles):


*/
