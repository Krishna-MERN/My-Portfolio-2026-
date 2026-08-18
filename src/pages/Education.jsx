import {
  ArrowRight,
  GraduationCap,
  BookOpen,
  Code2,
  Award,
  CalendarDays,
  MapPin,
  ExternalLink,
} from "lucide-react";

import "../styles/Education.css";



import "../styles/EducationPreview.css";



  const education = [
    {
      degree: "Bachelor of Technology",
      field: "Computer Science & Engineering",
      institution: "Integral University Lucknow",
      location: "India",
      duration: "2022 – 2026",
      status: "Completed",
      score: "CGPA: 8.3",
    },

    {
      degree: "Higher Secondary Certificate (HSC)",
      field: "Science (PCM)",
      institution: "R V P I College Pithla Ayodhya",
      location: "India",
      duration: "2020 – 2021",
      status: "Completed",
      score: "87.4 %",
    },

    {
      degree: "Secondary School Certificate (SSC)",
      field: "Science",
      institution: "R V P I College Pithla Ayodhya",
      location: "India",
      duration: "2018 – 2019",
      status: "Completed",
      score: "85.17 %",
    },
  ];

const Education = () => {
  return (
    <main className="education-page">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="education-hero">

        <div className="education-container">

          <div className="education-hero-content">

            <span className="education-eyebrow">
              EDUCATION
            </span>

            <h1>
              Learning the
              <span> fundamentals.</span>
              <br />
              Building the
              <span> future.</span>
            </h1>

            <p>
              My academic journey in Computer Science has helped me
              build a strong foundation in programming, software
              development, problem solving and computer science
              fundamentals.
            </p>

            <div className="education-hero-actions">

              <a
                href="/projects"
                className="education-primary-btn"
              >
                View My Projects
                <ArrowRight size={16} />
              </a>

              <a
                href="/about"
                className="education-secondary-btn"
              >
                About Me
              </a>

            </div>

          </div>


          <div className="education-hero-card">

            <div className="education-degree-icon">
              <GraduationCap size={28} />
            </div>

            <span>
              HIGHEST EDUCATION
            </span>

            <h2>
              B.Tech
            </h2>

            <strong>
              Computer Science & Engineering
            </strong>

            <div className="education-card-line"></div>

            <p>
              Computer Science & Engineering
            </p>

          </div>

        </div>

      </section>


      {/* =====================================================
          ACADEMIC JOURNEY
      ===================================================== */}

      <section className="education-journey">

        <div className="education-container">

          <div className="education-section-heading">

            <span>
              ACADEMIC JOURNEY
            </span>

            <h2>
              My path through
              <strong> education.</strong>
            </h2>

            <p>
              The academic experiences that shaped my technical
              foundation and prepared me for a career in software
              development.
            </p>

          </div>

            <div className="education-timeline">

          {education.map((item, index) => (

            <article
              className="education-item"
              key={index}
            >

              {/* Timeline */}

              <div className="education-timeline-marker">

                <div className="education-icon">
                  <GraduationCap size={19} />
                </div>

                {index !== education.length - 1 && (
                  <span className="education-line" />
                )}

              </div>


              {/* Content */}

              <div className="education-card">

                <div className="education-card-top">

                  <div>

                    <span className="education-status">
                      {item.status}
                    </span>

                    <h3>
                      {item.degree}
                    </h3>

                    <h4>
                      {item.field}
                    </h4>

                  </div>


                  <span className="education-number">
                    0{index + 1}
                  </span>

                </div>


                <div className="education-institution">

                  <strong>
                    {item.institution}
                  </strong>

                  <span>
                    <MapPin size={13} />
                    {item.location}
                  </span>

                </div>


                <div className="education-meta">

                  <span>
                    <CalendarDays size={14} />
                    {item.duration}
                  </span>

                  <span>
                    {item.score}
                  </span>

                </div>

              </div>

            </article>

          ))}

        </div>
          </div> 

        

      </section>


      {/* =====================================================
          DEGREE DETAILS
      ===================================================== */}

      <section className="education-details">

        <div className="education-container">

          <div className="education-section-heading">

            <span>
              DEGREE DETAILS
            </span>

            <h2>
              B.Tech in
              <strong> Computer Science.</strong>
            </h2>

          </div>


          <div className="education-details-grid">

            <div className="education-detail-card">

              <GraduationCap size={20} />

              <span>
                DEGREE
              </span>

              <strong>
                Bachelor of Technology
              </strong>

            </div>


            <div className="education-detail-card">

              <Code2 size={20} />

              <span>
                SPECIALIZATION
              </span>

              <strong>
                Computer Science & Engineering
              </strong>

            </div>


            <div className="education-detail-card">

              <CalendarDays size={20} />

              <span>
                DURATION
              </span>

              <strong>
                2022 – 2026
              </strong>

            </div>


            <div className="education-detail-card">

              <Award size={20} />

              <span>
                ACADEMIC PERFORMANCE
              </span>

              <strong>
                8.3 CGPA*
              </strong>

            </div>

          </div>

          <p className="education-note">
            * Academic performance can be updated with the final
            official result when available.
          </p>

        </div>

      </section>


      {/* =====================================================
          COURSEWORK
      ===================================================== */}

      <section className="education-coursework">

        <div className="education-container">

          <div className="education-section-heading centered">

            <span>
              RELEVANT COURSEWORK
            </span>

            <h2>
              What I learned
              <strong> academically.</strong>
            </h2>

            <p>
              Core subjects that contributed to my understanding of
              software development and computer science.
            </p>

          </div>


          <div className="education-course-grid">

            <div className="education-course-card">
              <Code2 size={18} />
              <strong>Programming</strong>
              <span>
                Programming fundamentals and problem solving.
              </span>
            </div>

            <div className="education-course-card">
              <Code2 size={18} />
              <strong>Data Structures & Algorithms</strong>
              <span>
                Algorithmic thinking and efficient problem solving.
              </span>
            </div>

            <div className="education-course-card">
              <BookOpen size={18} />
              <strong>Database Management</strong>
              <span>
                Database concepts, queries and data management.
              </span>
            </div>

            <div className="education-course-card">
              <Code2 size={18} />
              <strong>Object-Oriented Programming</strong>
              <span>
                OOP principles and software design concepts.
              </span>
            </div>

            <div className="education-course-card">
              <BookOpen size={18} />
              <strong>Operating Systems</strong>
              <span>
                Processes, memory, scheduling and system concepts.
              </span>
            </div>

            <div className="education-course-card">
              <Code2 size={18} />
              <strong>Computer Networks</strong>
              <span>
                Networking fundamentals and communication systems.
              </span>
            </div>

            <div className="education-course-card">
              <BookOpen size={18} />
              <strong>Software Engineering</strong>
              <span>
                Software development processes and engineering
                practices.
              </span>
            </div>

            <div className="education-course-card">
              <Code2 size={18} />
              <strong>Web Development</strong>
              <span>
                Frontend, backend and full-stack development
                concepts.
              </span>
            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          TECHNICAL LEARNING
      ===================================================== */}

      <section className="education-learning">

        <div className="education-container">

          <div className="education-learning-grid">

            <div>

              <span className="education-eyebrow">
                BEYOND CLASSROOM
              </span>

              <h2>
                Learning by
                <strong> building.</strong>
              </h2>

              <p>
                My learning does not stop with academic coursework.
                I actively practice programming, build projects and
                explore technologies that are relevant to modern
                software development.
              </p>

            </div>


            <div className="education-learning-list">

              <div>
                <Code2 size={18} />

                <div>
                  <strong>
                    Java & DSA
                  </strong>

                  <span>
                    Strengthening programming and problem-solving
                    skills through regular practice.
                  </span>
                </div>

              </div>


              <div>
                <Code2 size={18} />

                <div>
                  <strong>
                    MERN Stack
                  </strong>

                  <span>
                    Building full-stack applications using
                    JavaScript, React, Node.js, Express and MongoDB.
                  </span>
                </div>

              </div>


              <div>
                <BookOpen size={18} />

                <div>
                  <strong>
                    Software Development
                  </strong>

                  <span>
                    Learning development practices, clean code,
                    APIs and scalable application design.
                  </span>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          CERTIFICATIONS
      ===================================================== */}

      {/* <section className="education-certifications">

        <div className="education-container">

          <div className="education-section-heading centered">

            <span>
              CERTIFICATIONS & TRAINING
            </span>

            <h2>
              Continuous
              <strong> development.</strong>
            </h2>

            <p>
              Certifications, courses and professional training
              can be added here as they are completed.
            </p>

          </div>


          <div className="education-cert-placeholder">

            <div className="education-cert-icon">
              <Award size={22} />
            </div>

            <h3>
              Certifications will be added here
            </h3>

            <p>
              This section is ready for professional
              certifications, online courses, workshops and
              technical training.
            </p>

          </div>

        </div>

      </section> */}


      {/* =====================================================
          CTA
      ===================================================== */}

      {/* <section className="education-cta">

        <div className="education-container">

          <div className="education-cta-card">

            <span>
              WANT TO KNOW MORE?
            </span>

            <h2>
              Explore what I've
              <strong> built.</strong>
            </h2>

            <p>
              Education gave me the foundation. Projects and
              continuous learning help me turn that knowledge
              into practical solutions.
            </p>

            <a href="/projects">
              Explore Projects
              <ArrowRight size={16} />
            </a>

          </div>

        </div>

      </section> */}

    </main>
  );
};

export default Education;