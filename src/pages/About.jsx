import {
  ArrowRight,
  Code2,
  GraduationCap,
  BriefcaseBusiness,
  Target,
  BookOpen,
  ExternalLink,
  CheckCircle2,
} from "lucide-react";
import {
  FaGithub,
  FaLinkedinIn,
//   FaInstagram,
//   FaFacebookF,
//   FaXTwitter,
} from "react-icons/fa6";
import "../styles/About.css";


function About() {

  return (
    <main className="about-page">


      {/* =====================================================
          ABOUT HERO
      ===================================================== */}

      <section className="about-hero">

        <div className="about-container">

          <div className="about-hero-content">

            <span className="about-eyebrow">
              ABOUT ME
            </span>

            <h1>
              Building with
              <span> curiosity.</span>
              <br />
              Growing with
              <span> purpose.</span>
            </h1>

            <p>
              I'm Krishna Kumar Shukla, a Computer Science
              graduate and aspiring Software Developer who enjoys
              turning ideas into practical, reliable and
              user-friendly software solutions.
            </p>

            <div className="about-hero-actions">

              <a
                href="/projects"
                className="about-primary-btn"
              >
                Explore My Projects
                <ArrowRight size={16} />
              </a>

              <a
                href="/contact"
                className="about-secondary-btn"
              >
                Let's Connect
              </a>

            </div>

          </div>


          {/* Hero Side */}

          <div className="about-hero-side">

            <div className="about-profile-card">

              <div className="about-profile-icon">
                <Code2 size={25} />
              </div>

              <span>
                CURRENTLY FOCUSED ON
              </span>

              <strong>
                Software Development
              </strong>

              <p>
                Java · JavaScript · React · MERN
              </p>

            </div>

          </div>

        </div>

      </section>



      {/* =====================================================
          PROFESSIONAL SUMMARY
      ===================================================== */}

      <section className="about-summary">

        <div className="about-container">

          <div className="about-section-heading">

            <span>
              WHO I AM
            </span>

            <h2>
              More than just
              <strong> code.</strong>
            </h2>

          </div>


          <div className="about-summary-grid">

            <div className="about-summary-main">

              <p>
                I am passionate about software development and
                enjoy understanding how technology can solve
                real-world problems. My journey in Computer
                Science has given me a strong foundation in
                programming, web development and problem solving.
              </p>

              <p>
                My development experience includes working with
                modern web technologies such as JavaScript,
                React, Node.js, Express and MongoDB. I am also
                actively strengthening my Java and Data
                Structures & Algorithms skills.
              </p>

              <p>
                I believe good software is not only about writing
                code. It is also about understanding the problem,
                designing a clean solution, creating a good user
                experience and continuously improving the final
                product.
              </p>

            </div>


            <div className="about-summary-points">

              <div className="about-point">

                <CheckCircle2 size={18} />

                <div>
                  <strong>
                    Problem Solver
                  </strong>

                  <span>
                    Enjoy breaking complex problems into
                    manageable solutions.
                  </span>
                </div>

              </div>


              <div className="about-point">

                <CheckCircle2 size={18} />

                <div>
                  <strong>
                    Continuous Learner
                  </strong>

                  <span>
                    Always exploring new technologies and
                    improving existing skills.
                  </span>
                </div>

              </div>


              <div className="about-point">

                <CheckCircle2 size={18} />

                <div>
                  <strong>
                    Product Mindset
                  </strong>

                  <span>
                    Focused on creating useful and
                    maintainable solutions.
                  </span>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>



      {/* =====================================================
          JOURNEY
      ===================================================== */}

      <section className="about-journey">

        <div className="about-container">

          <div className="about-section-heading centered">

            <span>
              MY JOURNEY
            </span>

            <h2>
              From learning to
              <strong> building.</strong>
            </h2>

            <p>
              A continuous journey of education, experimentation,
              projects and professional growth.
            </p>

          </div>


          <div className="about-timeline">


            {/* Education */}

            <div className="about-timeline-item">

              <div className="about-timeline-icon">
                <GraduationCap size={18} />
              </div>

              <div className="about-timeline-content">

                <span>
                  EDUCATION
                </span>

                <h3>
                  Computer Science & Engineering
                </h3>

                <p>
                  Built a strong foundation in programming,
                  computer science fundamentals, software
                  development and problem solving.
                </p>

              </div>

            </div>


            {/* Development */}

            <div className="about-timeline-item">

              <div className="about-timeline-icon">
                <Code2 size={18} />
              </div>

              <div className="about-timeline-content">

                <span>
                  DEVELOPMENT
                </span>

                <h3>
                  Exploring Full-Stack Development
                </h3>

                <p>
                  Started building applications using
                  JavaScript, React, Node.js, Express and
                  MongoDB while developing practical projects.
                </p>

              </div>

            </div>


            {/* Current */}

            <div className="about-timeline-item">

              <div className="about-timeline-icon">
                <Target size={18} />
              </div>

              <div className="about-timeline-content">

                <span>
                  CURRENT FOCUS
                </span>

                <h3>
                  Becoming a Strong Software Developer
                </h3>

                <p>
                  Currently focusing on Java, DSA, modern
                  development practices and building
                  industry-ready projects.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>



      {/* =====================================================
          SKILLS
      ===================================================== */}

      <section className="about-skills">

        <div className="about-container">

          <div className="about-section-heading">

            <span>
              TECHNICAL SKILLS
            </span>

            <h2>
              Technologies I
              <strong> work with.</strong>
            </h2>

          </div>


          <div className="about-skills-grid">


            <div className="about-skill-group">

              <div className="about-skill-heading">
                <Code2 size={17} />

                <h3>
                  Languages
                </h3>
              </div>

              <div className="about-skill-tags">

                <span>Java</span>
                <span>JavaScript</span>
                <span>C</span>
                <span>HTML</span>
                <span>CSS</span>

                {/* Future Skills */}

                {/* <span>TypeScript</span> */}
                {/* <span>Python</span> */}

              </div>

            </div>


            <div className="about-skill-group">

              <div className="about-skill-heading">
                <Code2 size={17} />

                <h3>
                  Frontend
                </h3>
              </div>

              <div className="about-skill-tags">

                <span>React</span>
                <span>JavaScript</span>
                <span>Tailwind CSS</span>
                <span>Responsive Design</span>

                {/* <span>Next.js</span> */}
                {/* <span>Redux</span> */}

              </div>

            </div>


            <div className="about-skill-group">

              <div className="about-skill-heading">
                <Code2 size={17} />

                <h3>
                  Backend
                </h3>
              </div>

              <div className="about-skill-tags">

                <span>Node.js</span>
                <span>Express.js</span>
                <span>REST APIs</span>
                <span>MongoDB</span>

                {/* <span>Spring Boot</span> */}
                <span>MySQL</span>

              </div>

            </div>


            <div className="about-skill-group">

              <div className="about-skill-heading">
                <Code2 size={17} />

                <h3>
                  Tools & Practices
                </h3>
              </div>

              <div className="about-skill-tags">

                <span>Git</span>
                <span>GitHub</span>
                <span>VS Code</span>
                <span>Postman</span>

                {/* <span>Docker</span> */}
                {/* <span>AWS</span> */}
                {/* <span>CI/CD</span> */}

              </div>

            </div>

          </div>

        </div>

      </section>



      {/* =====================================================
          DEVELOPMENT FOCUS
      ===================================================== */}

      <section className="about-focus">

        <div className="about-container">

          <div className="about-focus-grid">


            <div>

              <span className="about-eyebrow">
                WHAT I ENJOY
              </span>

              <h2>
                Solving problems
                <br />
                through <strong>technology.</strong>
              </h2>

            </div>


            <div className="about-focus-list">

              <div>
                <Code2 size={17} />

                <div>
                  <strong>
                    Web Development
                  </strong>

                  <span>
                    Creating responsive and intuitive
                    web applications.
                  </span>
                </div>
              </div>


              <div>
                <BriefcaseBusiness size={17} />

                <div>
                  <strong>
                    Software Engineering
                  </strong>

                  <span>
                    Learning clean architecture,
                    maintainability and scalable development.
                  </span>
                </div>
              </div>


              <div>
                <BookOpen size={17} />

                <div>
                  <strong>
                    Continuous Learning
                  </strong>

                  <span>
                    Improving programming, DSA and
                    software engineering fundamentals.
                  </span>
                </div>
              </div>

            </div>

          </div>

        </div>

      </section>



      {/* =====================================================
          DEVELOPER PROFILES
      ===================================================== */}

      <section className="about-profiles">

        <div className="about-container">

          <div className="about-section-heading centered">

            <span>
              DEVELOPER PROFILES
            </span>

            <h2>
              Find me
              <strong> online.</strong>
            </h2>

          </div>


          <div className="about-profile-links">


            <a
              href="https://github.com/Krishna-MERN/Datara-Softwares"
              target="_blank"
              rel="noopener noreferrer"
            >

              <FaGithub size={20} />

              <div>

                <strong>
                  GitHub
                </strong>

                <span>
                  Projects & source code
                </span>

              </div>

              <ExternalLink size={15} />

            </a>


            <a
              href="https://www.linkedin.com/in/krishna-kumar-shukla/"
              target="_blank"
              rel="noopener noreferrer"
            >

              <FaLinkedinIn size={20} />

              <div>

                <strong>
                  LinkedIn
                </strong>

                <span>
                  Professional network
                </span>

              </div>

              <ExternalLink size={15} />

            </a>

          </div>

        </div>

      </section>



      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      {/* <section className="about-final-cta">

        <div className="about-container">

          <div className="about-final-card">

            <span>
              HAVE A PROJECT OR OPPORTUNITY?
            </span>

            <h2>
              Let's create something
              <strong> valuable.</strong>
            </h2>

            <p>
              Whether it's a software development opportunity,
              collaboration or an interesting project, I'd be
              happy to connect.
            </p>

            <a href="/contact">

              Get In Touch

              <ArrowRight size={16} />

            </a>

          </div>

        </div>

      </section> */}

    </main>
  );
}

export default About;