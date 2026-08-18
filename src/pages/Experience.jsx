import {
  ArrowRight,
  BriefcaseBusiness,
  Building2,
  CalendarDays,
  MapPin,
  Code2,
  CheckCircle2,
  ExternalLink,
  Users,
  Rocket,
} from "lucide-react";

import "../styles/Experience.css";

const Experience = () => {
  return (
    <main className="experience-page">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="experience-hero">

        <div className="experience-container">

          <div className="experience-hero-content">

            <span className="experience-eyebrow">
              EXPERIENCE
            </span>

            <h1>
              Turning
              <span> knowledge </span>
              into
              <span> real work.</span>
            </h1>

            <p>
              A detailed overview of my professional experience,
              internships, client projects, responsibilities and
              practical exposure to software development.
            </p>

            <div className="experience-hero-actions">

              <a
                href="/projects"
                className="experience-primary-btn"
              >
                View My Projects
                <ArrowRight size={16} />
              </a>

              <a
                href="/contact"
                className="experience-secondary-btn"
              >
                Let's Connect
              </a>

            </div>

          </div>


          <div className="experience-hero-stats">

            <div className="experience-stat-card">

              <div className="experience-stat-icon">
                <BriefcaseBusiness size={21} />
              </div>

              <strong>
                Professional
              </strong>

              <span>
                Experience
              </span>

            </div>


            <div className="experience-stat-card">

              <div className="experience-stat-icon">
                <Code2 size={21} />
              </div>

              <strong>
                Software
              </strong>

              <span>
                Development
              </span>

            </div>


            <div className="experience-stat-card">

              <div className="experience-stat-icon">
                <Rocket size={21} />
              </div>

              <strong>
                Project
              </strong>

              <span>
                Based Learning
              </span>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          EXPERIENCE OVERVIEW
      ===================================================== */}

      <section className="experience-overview">

        <div className="experience-container">

          <div className="experience-section-heading">

            <span>
              PROFESSIONAL JOURNEY
            </span>

            <h2>
              My experience,
              <strong> step by step.</strong>
            </h2>

            <p>
              Every experience has contributed to my technical
              growth, professional mindset and understanding of
              real-world software development.
            </p>

          </div>


          {/* =================================================
              EXPERIENCE ITEM 01
          ================================================= */}

          <article className="experience-card">

            <div className="experience-card-header">

              <div className="experience-company">

                <div className="experience-company-icon">
                  <Building2 size={22} />
                </div>

                <div>

                  <span className="experience-label">
                    SOFTWARE DEVELOPMENT
                  </span>

                  <h3>
                    Software Developer / Intern
                  </h3>

                  <h4>
                    Company Name
                  </h4>

                </div>

              </div>


              <div className="experience-duration">

                <span>
                  <CalendarDays size={14} />
                  2025 – Present
                </span>

                <span>
                  <MapPin size={14} />
                  India
                </span>

              </div>

            </div>


            <div className="experience-divider"></div>


            <div className="experience-card-body">

              <div className="experience-description">

                <h4>
                  About the role
                </h4>

                <p>
                  Worked on software development tasks involving
                  frontend development, web applications, APIs and
                  modern development technologies. Contributed to
                  building practical solutions while improving
                  development and problem-solving skills.
                </p>

              </div>


              <div className="experience-responsibilities">

                <h4>
                  Key responsibilities
                </h4>

                <ul>

                  <li>
                    <CheckCircle2 size={15} />
                    Developed responsive and user-friendly web
                    interfaces.
                  </li>

                  <li>
                    <CheckCircle2 size={15} />
                    Worked with modern JavaScript and React-based
                    development.
                  </li>

                  <li>
                    <CheckCircle2 size={15} />
                    Integrated APIs and handled application data.
                  </li>

                  <li>
                    <CheckCircle2 size={15} />
                    Debugged issues and improved application
                    functionality.
                  </li>

                  <li>
                    <CheckCircle2 size={15} />
                    Collaborated on real-world development tasks.
                  </li>

                </ul>

              </div>

            </div>


            <div className="experience-technologies">

              <span>JavaScript</span>
              <span>React.js</span>
              <span>Node.js</span>
              <span>Express.js</span>
              <span>MongoDB</span>
              <span>Git</span>

            </div>

          </article>


          {/* =================================================
              EXPERIENCE ITEM 02
          ================================================= */}

          <article className="experience-card">

            <div className="experience-card-header">

              <div className="experience-company">

                <div className="experience-company-icon">
                  <Building2 size={22} />
                </div>

                <div>

                  <span className="experience-label">
                    WEB DEVELOPMENT
                  </span>

                  <h3>
                    Web Developer / Project Experience
                  </h3>

                  <h4>
                    Datara Softwares
                  </h4>

                </div>

              </div>


              <div className="experience-duration">

                <span>
                  <CalendarDays size={14} />
                  2025 – 2026
                </span>

                <span>
                  <MapPin size={14} />
                  India
                </span>

              </div>

            </div>


            <div className="experience-divider"></div>


            <div className="experience-card-body">

              <div className="experience-description">

                <h4>
                  About the role
                </h4>

                <p>
                  Worked on professional web development projects
                  and contributed to building responsive websites
                  for real-world requirements. Focused on frontend
                  implementation, responsive design and delivering
                  clean user experiences.
                </p>

              </div>


              <div className="experience-responsibilities">

                <h4>
                  Key contributions
                </h4>

                <ul>

                  <li>
                    <CheckCircle2 size={15} />
                    Developed responsive React-based interfaces.
                  </li>

                  <li>
                    <CheckCircle2 size={15} />
                    Implemented reusable UI components.
                  </li>

                  <li>
                    <CheckCircle2 size={15} />
                    Worked with responsive layouts for desktop,
                    tablet and mobile devices.
                  </li>

                  <li>
                    <CheckCircle2 size={15} />
                    Implemented navigation and structured page
                    layouts.
                  </li>

                  <li>
                    <CheckCircle2 size={15} />
                    Worked according to client requirements and
                    design expectations.
                  </li>

                </ul>

              </div>

            </div>


            <div className="experience-technologies">

              <span>React</span>
              <span>JavaScript</span>
              <span>Vite</span>
              <span>Tailwind CSS</span>
              <span>Git</span>

            </div>

          </article>


          {/* =================================================
              EXPERIENCE ITEM 03
          ================================================= */}

          <article className="experience-card">

            <div className="experience-card-header">

              <div className="experience-company">

                <div className="experience-company-icon">
                  <Code2 size={22} />
                </div>

                <div>

                  <span className="experience-label">
                    PROJECT EXPERIENCE
                  </span>

                  <h3>
                    Full-Stack Development
                  </h3>

                  <h4>
                    Personal & Academic Projects
                  </h4>

                </div>

              </div>


              <div className="experience-duration">

                <span>
                  <CalendarDays size={14} />
                  2024 – Present
                </span>

                <span>
                  <MapPin size={14} />
                  India
                </span>

              </div>

            </div>


            <div className="experience-divider"></div>


            <div className="experience-card-body">

              <div className="experience-description">

                <h4>
                  What I worked on
                </h4>

                <p>
                  Built multiple software projects to strengthen
                  practical development skills and understand the
                  complete development lifecycle, from planning and
                  UI development to APIs, databases and deployment.
                </p>

              </div>


              <div className="experience-responsibilities">

                <h4>
                  Areas of work
                </h4>

                <ul>

                  <li>
                    <CheckCircle2 size={15} />
                    Full-stack web application development.
                  </li>

                  <li>
                    <CheckCircle2 size={15} />
                    REST API development and integration.
                  </li>

                  <li>
                    <CheckCircle2 size={15} />
                    MongoDB database design and management.
                  </li>

                  <li>
                    <CheckCircle2 size={15} />
                    Authentication and application logic.
                  </li>

                  <li>
                    <CheckCircle2 size={15} />
                    Responsive frontend development.
                  </li>

                </ul>

              </div>

            </div>


            <div className="experience-technologies">

              <span>JavaScript</span>
              <span>React</span>
              <span>Node.js</span>
              <span>Express</span>
              <span>MongoDB</span>
              <span>REST API</span>

            </div>

          </article>

        </div>

      </section>


      {/* =====================================================
          PROFESSIONAL SKILLS
      ===================================================== */}

      <section className="experience-skills">

        <div className="experience-container">

          <div className="experience-section-heading centered">

            <span>
              PROFESSIONAL SKILLS
            </span>

            <h2>
              What I bring to
              <strong> a team.</strong>
            </h2>

            <p>
              Technical and professional capabilities developed
              through education, projects and practical experience.
            </p>

          </div>


          <div className="experience-skill-grid">

            <div className="experience-skill-card">

              <Code2 size={20} />

              <h3>
                Technical Development
              </h3>

              <p>
                Building modern web applications using
                JavaScript, React and full-stack technologies.
              </p>

            </div>


            <div className="experience-skill-card">

              <Users size={20} />

              <h3>
                Collaboration
              </h3>

              <p>
                Comfortable working with team members and
                understanding project requirements.
              </p>

            </div>


            <div className="experience-skill-card">

              <Rocket size={20} />

              <h3>
                Problem Solving
              </h3>

              <p>
                Breaking complex problems into manageable tasks
                and developing practical solutions.
              </p>

            </div>


            <div className="experience-skill-card">

              <BriefcaseBusiness size={20} />

              <h3>
                Professional Growth
              </h3>

              <p>
                Continuously learning new technologies and
                improving development practices.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          CAREER TIMELINE
      ===================================================== */}

      <section className="experience-timeline-section">

        <div className="experience-container">

          <div className="experience-section-heading centered">

            <span>
              CAREER TIMELINE
            </span>

            <h2>
              Growing through
              <strong> every experience.</strong>
            </h2>

          </div>


          <div className="experience-simple-timeline">

            <div className="experience-simple-item">

              <span>
                2024
              </span>

              <div>
                <h3>
                  Started strengthening software development
                  fundamentals
                </h3>

                <p>
                  Focused on programming, web development and
                  problem-solving.
                </p>
              </div>

            </div>


            <div className="experience-simple-item">

              <span>
                2025
              </span>

              <div>
                <h3>
                  Started working on real-world web projects
                </h3>

                <p>
                  Applied development skills to practical
                  requirements and client-oriented projects.
                </p>
              </div>

            </div>


            <div className="experience-simple-item">

              <span>
                2026
              </span>

              <div>
                <h3>
                  Preparing for professional software development
                  roles
                </h3>

                <p>
                  Expanding technical knowledge while pursuing
                  opportunities to contribute to professional
                  software teams.
                </p>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="experience-cta">

        <div className="experience-container">

          <div className="experience-cta-card">

            <span>
              LET'S BUILD SOMETHING
            </span>

            <h2>
              Looking for someone who
              <strong> loves to build?</strong>
            </h2>

            <p>
              I'm interested in software development opportunities,
              internships and projects where I can learn, contribute
              and create meaningful solutions.
            </p>

            <div className="experience-cta-actions">

              <a href="/contact">
                Get In Touch
                <ArrowRight size={16} />
              </a>

              <a
                href="/projects"
                className="experience-cta-secondary"
              >
                Explore Projects
                <ExternalLink size={15} />
              </a>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
};

export default Experience;