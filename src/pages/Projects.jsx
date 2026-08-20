import {
  ArrowUpRight,
  ExternalLink,
  CheckCircle2,
  Code2,
  Layers3,
  CalendarDays,
  UserRound,
  CircleDot,
  ArrowRight,
} from "lucide-react";

import {
  FaGithub,
  // FaLinkedinIn,
  // FaInstagram,
  // FaFacebookF,
  // FaXTwitter,
} from "react-icons/fa6";

import projects from "../data/projects";

import "../styles/Projects.css";


function Projects() {

  // =========================================================
  // SORT PROJECTS
  // Latest / highest ID first
  // Oldest / lowest ID last
  // =========================================================

  const sortedProjects = [...projects].sort(
    (a, b) => Number(b.id) - Number(a.id)
  );


  return (
    <main className="projects-page">

      {/* =================================================
          PROJECT PAGE HERO
      ================================================= */}

      <section className="projects-hero">

        <div className="projects-container">

          <span className="projects-eyebrow">
            MY WORK
          </span>

          <h1>
            Projects &
            <span> Case Studies.</span>
          </h1>

          <p>
            A collection of applications, systems and experiments
            that showcase my development skills, technical
            problem-solving and practical experience.
          </p>


          {/* Project Statistics */}

          <div className="projects-stats">

            <div>

              <strong>
                {projects.length}
              </strong>

              <span>
                Projects
              </span>

            </div>


            <div>

              <strong>
                {new Set(
                  projects.flatMap(
                    (project) =>
                      project.technologies.map(
                        (technology) => technology.name
                      )
                  )
                ).size}
              </strong>

              <span>
                Technologies
              </span>

            </div>


            <div>

              <strong>
                Full Stack
              </strong>

              <span>
                Development Focus
              </span>

            </div>

          </div>

        </div>

      </section>


      {/* =================================================
          PROJECTS
      ================================================= */}

      <section className="projects-section">

        <div className="projects-container">

          <div className="projects-list">

            {/* Latest project first */}

            {sortedProjects.map((project) => (

              <article
                className="project-case-study"
                key={project.id}
              >

                {/* =========================================
                    PROJECT HEADER
                ========================================= */}

                <div className="project-case-header">

                  <div className="project-case-number">
                    {project.number}
                  </div>

                  <div className="project-case-heading">

                    <span className="project-case-category">
                      {project.category}
                    </span>

                    <h2>
                      {project.title}
                    </h2>

                    <p>
                      {project.shortDescription}
                    </p>

                  </div>

                </div>


                {/* =========================================
                    PROJECT META
                ========================================= */}

                <div className="project-meta">

                  <div>

                    <CalendarDays size={15} />

                    <span>

                      <small>
                        Year
                      </small>

                      {project.year}

                    </span>

                  </div>


                  <div>

                    <UserRound size={15} />

                    <span>

                      <small>
                        Role
                      </small>

                      {project.role}

                    </span>

                  </div>


                  <div>

                    <CircleDot size={15} />

                    <span>

                      <small>
                        Status
                      </small>

                      {project.status}

                    </span>

                  </div>

                </div>


                {/* =========================================
                    PROJECT SCREENSHOTS
                ========================================= */}

                <div className="project-gallery">

                  {project.screenshots.map(
                    (screenshot, index) => (

                      <div
                        className="project-screenshot"
                        key={index}
                      >

                        <img
                          src={screenshot.image}
                          alt={screenshot.title}
                        />

                        <div className="screenshot-overlay">

                          <span>
                            {screenshot.title}
                          </span>

                        </div>

                      </div>

                    )
                  )}

                </div>


                {/* =========================================
                    OVERVIEW
                ========================================= */}

                <div className="project-overview-grid">

                  <div className="project-section-block">

                    <span className="project-section-label">
                      OVERVIEW
                    </span>

                    <h3>
                      About the project
                    </h3>

                    <p>
                      {project.overview}
                    </p>

                  </div>


                  <div className="project-section-block">

                    <span className="project-section-label">
                      PROBLEM
                    </span>

                    <h3>
                      The problem
                    </h3>

                    <p>
                      {project.problem}
                    </p>

                  </div>

                </div>


                {/* =========================================
                    SOLUTION
                ========================================= */}

                <div className="project-solution">

                  <div className="project-solution-icon">

                    <Layers3 size={22} />

                  </div>


                  <div>

                    <span className="project-section-label">
                      SOLUTION
                    </span>

                    <h3>
                      How I approached it
                    </h3>

                    <p>
                      {project.solution}
                    </p>

                  </div>

                </div>


                {/* =========================================
                    TECHNOLOGIES
                ========================================= */}

                <div className="project-detail-section">

                  <div className="project-detail-heading">

                    <Code2 size={19} />

                    <div>

                      <span className="project-section-label">
                        TECHNOLOGY
                      </span>

                      <h3>
                        Built with
                      </h3>

                    </div>

                  </div>


                  <div className="project-tech-table">

                    {project.technologies.map(
                      (technology, index) => (

                        <div
                          className="project-tech-row"
                          key={index}
                        >

                          <strong>
                            {technology.name}
                          </strong>

                          <span>
                            {technology.purpose}
                          </span>

                        </div>

                      )
                    )}

                  </div>

                </div>


                {/* =========================================
                    FEATURES
                ========================================= */}

                <div className="project-detail-section">

                  <div className="project-detail-heading">

                    <CheckCircle2 size={19} />

                    <div>

                      <span className="project-section-label">
                        FEATURES
                      </span>

                      <h3>
                        Key capabilities
                      </h3>

                    </div>

                  </div>


                  <div className="project-features-grid">

                    {project.features.map(
                      (feature, index) => (

                        <div
                          className="project-feature"
                          key={index}
                        >

                          <CheckCircle2 size={15} />

                          <span>
                            {feature}
                          </span>

                        </div>

                      )
                    )}

                  </div>

                </div>


                {/* =========================================
                    ARCHITECTURE
                ========================================= */}

                <div className="project-detail-section">

                  <div className="project-detail-heading">

                    <Layers3 size={19} />

                    <div>

                      <span className="project-section-label">
                        ARCHITECTURE
                      </span>

                      <h3>
                        Application architecture
                      </h3>

                    </div>

                  </div>


                  <div className="project-architecture">

                    {project.architecture.map(
                      (technology, index) => (

                        <div
                          className="architecture-item"
                          key={index}
                        >

                          <div className="architecture-icon">
                            {index + 1}
                          </div>

                          <span>
                            {technology}
                          </span>

                          {index <
                            project.architecture.length - 1 && (

                            <ArrowRight
                              className="architecture-arrow"
                              size={15}
                            />

                          )}

                        </div>

                      )
                    )}

                  </div>

                </div>


                {/* =========================================
                    CHALLENGES
                ========================================= */}

                <div className="project-detail-section">

                  <div className="project-detail-heading">

                    <Code2 size={19} />

                    <div>

                      <span className="project-section-label">
                        DEVELOPMENT
                      </span>

                      <h3>
                        Challenges & solutions
                      </h3>

                    </div>

                  </div>


                  <div className="project-challenges">

                    {project.challenges.map(
                      (challenge, index) => (

                        <div
                          className="challenge-card"
                          key={index}
                        >

                          <span>
                            0{index + 1}
                          </span>

                          <h4>
                            {challenge.title}
                          </h4>

                          <p>
                            {challenge.description}
                          </p>

                        </div>

                      )
                    )}

                  </div>

                </div>


                {/* =========================================
                    FUTURE IMPROVEMENTS
                ========================================= */}

                <div className="project-future">

                  <span className="project-section-label">
                    FUTURE
                  </span>

                  <h3>
                    Future improvements
                  </h3>

                  <div>

                    {project.futureImprovements.map(
                      (improvement, index) => (

                        <span key={index}>
                          {improvement}
                        </span>

                      )
                    )}

                  </div>

                </div>


                {/* =========================================
                    PROJECT LINKS
                ========================================= */}

                <div className="project-actions">

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-action-secondary"
                  >

                    <FaGithub size={17} />

                    View Source Code

                    <ArrowUpRight size={15} />

                  </a>


                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-action-primary"
                  >

                    <ExternalLink size={17} />

                    View Live Project

                    <ArrowUpRight size={15} />

                  </a>

                </div>

              </article>

            ))}

          </div>

        </div>

      </section>


      {/* =================================================
          CTA
      ================================================= */}

      <section className="projects-cta">

        <div className="projects-container">

          <span className="projects-eyebrow">
            LET'S BUILD SOMETHING
          </span>

          <h2>
            Have an idea or
            <span> project in mind?</span>
          </h2>

          <p>
            I'm always interested in building useful products,
            solving interesting problems and exploring new
            technologies.
          </p>

          <a
            href="/contact"
            className="projects-cta-button"
          >

            Let's Connect

            <ArrowUpRight size={17} />

          </a>

        </div>

      </section>

    </main>
  );
}

export default Projects;