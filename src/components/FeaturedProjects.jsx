import {
  ArrowUpRight,
  ExternalLink,
  FolderGit2,
} from "lucide-react";

import {
  FaGithub,
//   FaLinkedinIn,
//   FaInstagram,
//   FaFacebookF,
//   FaXTwitter,
} from "react-icons/fa6";

import "../styles/FeaturedProjects.css";


/* =========================================================
   PROJECT DATA

   Add / remove projects from this array.

   For a new project, simply copy one object and
   update its information.
========================================================= */

const projects = [

  /* =======================================================
     PROJECT 01
  ======================================================= */

  {
    number: "01",

    title: "Automated Bus Scheduling & Route Management",

    category: "Full Stack Web Application",

    description:
      "A MERN stack based system designed to automate bus scheduling, route management and passenger ticket operations for a public transportation environment.",

    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
    ],

    features: [
      "Automated bus scheduling",
      "Route and stop management",
      "Bus availability prioritization",
      "Passenger ticket booking",
    ],

    image: "/projects/bus-scheduling.png",

    github: "#",

    live: "#",
  },


  /* =======================================================
     PROJECT 02
  ======================================================= */

  {
    number: "02",

    title: "Project Management Platform",

    category: "Full Stack Application",

    description:
      "A modern project management platform for organizing projects, tasks, team members and development workflows.",

    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],

    features: [
      "Project management",
      "Task tracking",
      "User authentication",
      "Dashboard analytics",
    ],

    image: "/projects/project-management.png",

    github: "#",

    live: "#",
  },


  /* =======================================================
     PROJECT 03
  ======================================================= */

//   {
//     number: "03",

//     title: "Modern Business Website",

//     category: "Frontend Web Application",

//     description:
//       "A responsive business website focused on modern UI, responsive design and a smooth user experience across desktop and mobile devices.",

//     technologies: [
//       "React.js",
//       "JavaScript",
//       "CSS",
//       "Vite",
//     ],

//     features: [
//       "Responsive design",
//       "Modern UI",
//       "Reusable components",
//       "Mobile navigation",
//     ],

//     image: "/projects/business-website.png",

//     github: "#",

//     live: "#",
//   },


  /* =======================================================
     PROJECT 04
  ======================================================= */

//   {
//     number: "04",

//     title: "Personal Portfolio Website",

//     category: "Frontend Web Application",

//     description:
//       "A professional developer portfolio designed to showcase my education, technical skills, projects, professional journey and industry updates.",

//     technologies: [
//       "React.js",
//       "Vite",
//       "JavaScript",
//       "CSS",
//     ],

//     features: [
//       "Responsive portfolio",
//       "Project showcase",
//       "Professional profile",
//       "Resume integration",
//     ],

//     image: "/projects/portfolio.png",

//     github: "#",

//     live: "#",
//   },
];


function FeaturedProjects() {

  return (
    <section
      className="featured-projects"
      id="projects"
    >

      <div className="featured-projects-container">


        {/* =================================================
            SECTION HEADER
        ================================================= */}

        <div className="featured-projects-header">

          <div>

            <span className="section-eyebrow">
              MY WORK
            </span>

            <h2>
              Featured
              <span> Projects.</span>
            </h2>

          </div>


          <a
            href="/projects"
            className="projects-view-all"
          >
            View All Projects

            <ArrowUpRight size={17} />

          </a>

        </div>


        {/* =================================================
            PROJECTS
        ================================================= */}

        <div className="featured-projects-list">

          {projects.map((project) => (

            <article
              className="featured-project"
              key={project.number}
            >


              {/* =========================================
                  PROJECT IMAGE
              ========================================= */}

              <div className="project-image-wrapper">

                <div className="project-number">
                  {project.number}
                </div>


                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                />


                {/* Image fallback */}

                <div className="project-image-placeholder">

                  <FolderGit2 size={42} />

                  <span>
                    Project Preview
                  </span>

                </div>

              </div>


              {/* =========================================
                  PROJECT CONTENT
              ========================================= */}

              <div className="project-content">


                <span className="project-category">
                  {project.category}
                </span>


                <h3>
                  {project.title}
                </h3>


                <p className="project-description">
                  {project.description}
                </p>


                {/* Technologies */}

                <div className="project-technologies">

                  {project.technologies.map(
                    (technology, index) => (

                      <span key={index}>
                        {technology}
                      </span>

                    )
                  )}

                </div>


                {/* Features */}

                <ul className="project-features">

                  {project.features.map(
                    (feature, index) => (

                      <li key={index}>
                        {feature}
                      </li>

                    )
                  )}

                </ul>


                {/* Links */}

                <div className="project-links">

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link project-link-github"
                  >

                    <FaGithub size={16} />

                    GitHub

                  </a>


                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link project-link-live"
                  >

                    <ExternalLink size={16} />

                    Live Demo

                  </a>

                </div>

              </div>

            </article>

          ))}

        </div>

      </div>

    </section>
  );
}   

export default FeaturedProjects;