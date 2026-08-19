import {
  ArrowUpRight,
  ExternalLink,
} from "lucide-react";
import {
  FaGithub,
 
} from "react-icons/fa6";

import projects from "../data/projects";

import "../styles/ProjectPreview.css";
import { Link } from "react-router-dom";



function ProjectPreview() {

  // Show only the first 3 projects on Home
  const featuredProjects = projects.slice(0, 3);

  return (
    <section className="project-preview">

      <div className="project-preview-container">

        {/* =================================================
            SECTION HEADER
        ================================================= */}

        <div className="project-preview-header">

          <div>

            <span className="project-preview-eyebrow">
              SELECTED WORK
            </span>

            <h2>
              Projects I've
              <span> built.</span>
            </h2>

          </div>


          <p>
            A selection of projects that reflect my
            development skills, technical knowledge and
            problem-solving approach.
          </p>

        </div>


        {/* =================================================
            PROJECT GRID
        ================================================= */}

        <div className="project-preview-grid">

          {featuredProjects.map((project) => (

            <article
              className="project-preview-card"
              key={project.id}
            >

              {/* =========================================
                  IMAGE
              ========================================= */}

              <div className="project-preview-image">

                <img
                  src={
                    project.screenshots?.[0]?.image ||
                    "/projects/placeholder.png"
                  }
                  alt={project.title}
                />

                <div className="project-preview-overlay">

                  <span>
                    {project.number}
                  </span>

                  <a
                    href={`/projects#project-${project.id}`}
                    aria-label={`View ${project.title}`}
                  >
                    <ArrowUpRight size={18} />
                  </a>

                </div>

              </div>


              {/* =========================================
                  CONTENT
              ========================================= */}

              <div className="project-preview-content">

                <div className="project-preview-meta">

                  <span>
                    {project.category}
                  </span>

                  <span>
                    {project.year}
                  </span>

                </div>


                <h3>
                  {project.title}
                </h3>


                <p>
                  {project.shortDescription}
                </p>


                {/* =======================================
                    TECHNOLOGIES
                ======================================= */}

                <div className="project-preview-tech">

                  {project.technologies
                    .slice(0, 4)
                    .map((technology, index) => (

                      <span key={index}>
                        {technology.name}
                      </span>

                    ))}

                  {project.technologies.length > 4 && (
                    <span>
                      +{project.technologies.length - 4}
                    </span>
                  )}

                </div>


                {/* =======================================
                    LINKS
                ======================================= */}

                <div className="project-preview-actions">

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-preview-github"
                  >

                    <FaGithub size={15} />

                    GitHub

                  </a>


                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-preview-live"
                  >

                    <ExternalLink size={15} />

                    Live Demo

                  </a>

                </div>

              </div>

            </article>

          ))}

        </div>


        {/* =================================================
            VIEW ALL
        ================================================= */}

        <div className="project-preview-footer">

          <Link 
            to="projects"
            className="project-preview-all"
          >

            View All Projects

            <ArrowUpRight size={17} />

          </Link>

        </div>

      </div>

    </section>
  );
}

export default ProjectPreview;