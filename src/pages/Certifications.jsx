import {
  Award,
  ExternalLink,
  CalendarDays,
  BadgeCheck,
  BookOpen,
  ArrowRight,
  Trophy,
} from "lucide-react";

import "../styles/Certifications.css";

const Certifications = () => {

  /*
   * =========================================================
   * CERTIFICATIONS DATA
   *
   * Add new certifications here.
   * Keep future certifications commented until completed.
   * =========================================================
   */

  const certifications = [

    // =======================================================
    // EXAMPLE / CURRENT CERTIFICATIONS
    // Replace these with your actual certificates.
    // =======================================================

    {
      title: "Java Programming",
      issuer: "Certification Provider",
      date: "2026",
      category: "Programming",
      credentialId: "XXXX-XXXX",
      description:
        "Certification covering Java programming fundamentals, object-oriented programming and core programming concepts.",
      skills: [
        "Java",
        "OOP",
        "Programming",
      ],
      certificateUrl: "#",
    },

    {
      title: "Web Development",
      issuer: "Certification Provider",
      date: "2026",
      category: "Web Development",
      credentialId: "XXXX-XXXX",
      description:
        "Certification focused on modern web development concepts, responsive interfaces and frontend technologies.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
      ],
      certificateUrl: "#",
    },


    // =======================================================
    // FUTURE CERTIFICATIONS
    // Uncomment when completed.
    // =======================================================

    {
      title: "React.js Certification",
      issuer: "Certification Provider",
      date: "2026",
      category: "Frontend",
      credentialId: "XXXX-XXXX",
      description:
        "Certification covering React.js concepts, components, hooks and modern frontend development.",
      skills: [
        "React",
        "JavaScript",
        "Frontend Development",
      ],
      certificateUrl: "https://...",
    },

    {
      title: "MongoDB Developer Certification",
      issuer: "MongoDB",
      date: "2026",
      category: "Database",
      credentialId: "XXXX-XXXX",
      description:
        "Certification covering MongoDB database development and data management concepts.",
      skills: [
        "MongoDB",
        "Database",
        "NoSQL",
      ],
      certificateUrl: "https://...",
    },

    // {
    //   title: "AWS Cloud Practitioner",
    //   issuer: "Amazon Web Services",
    //   date: "2026",
    //   category: "Cloud",
    //   credentialId: "XXXX-XXXX",
    //   description:
    //     "Certification demonstrating foundational knowledge of cloud computing and AWS services.",
    //   skills: [
    //     "AWS",
    //     "Cloud Computing",
    //   ],
    //   certificateUrl: "https://...",
    // },

  ];


  return (
    <main className="certifications-page">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="certifications-hero">

        <div className="certifications-container">

          <div className="certifications-hero-content">

            <span className="certifications-eyebrow">
              CERTIFICATIONS & ACHIEVEMENTS
            </span>

            <h1>
              Learning backed by
              <span> credentials.</span>
            </h1>

            <p>
              A collection of certifications and professional
              credentials that represent my continuous learning,
              technical development and commitment to improving
              my skills.
            </p>

            <div className="certification-summary">

              <div className="certification-summary-item">
                <strong>
                  {certifications.length}
                </strong>

                <span>
                  Certifications
                </span>
              </div>

              <div className="certification-summary-item">
                <strong>
                  2026
                </strong>

                <span>
                  Current Learning
                </span>
              </div>

              <div className="certification-summary-item">
                <strong>
                  ∞
                </strong>

                <span>
                  Continuous Growth
                </span>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          CERTIFICATIONS
      ===================================================== */}

      <section className="certifications-section">

        <div className="certifications-container">

          <div className="certifications-section-heading">

            <span>
              MY CREDENTIALS
            </span>

            <h2>
              Certifications &
              <strong> credentials.</strong>
            </h2>

            <p>
              Certifications I have completed as part of my
              academic and professional development.
            </p>

          </div>


          <div className="certifications-grid">

            {certifications.map((certificate, index) => (

              <article
                className="certification-card"
                key={index}
              >

                {/* Card Header */}

                <div className="certification-card-header">

                  <div className="certificate-icon">
                    <Award size={23} />
                  </div>

                  <span className="certificate-category">
                    {certificate.category}
                  </span>

                </div>


                {/* Content */}

                <div className="certificate-content">

                  <h3>
                    {certificate.title}
                  </h3>

                  <div className="certificate-issuer">
                    <BadgeCheck size={14} />

                    <span>
                      {certificate.issuer}
                    </span>
                  </div>

                  <p>
                    {certificate.description}
                  </p>

                </div>


                {/* Skills */}

                <div className="certificate-skills">

                  {certificate.skills.map(
                    (skill, skillIndex) => (

                      <span key={skillIndex}>
                        {skill}
                      </span>

                    )
                  )}

                </div>


                {/* Footer */}

                <div className="certificate-footer">

                  <div className="certificate-meta">

                    <span>
                      <CalendarDays size={13} />
                      {certificate.date}
                    </span>

                    <span>
                      ID: {certificate.credentialId}
                    </span>

                  </div>


                  {certificate.certificateUrl !== "#" && (

                    <a
                      href={certificate.certificateUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="certificate-link"
                    >
                      View Certificate
                      <ExternalLink size={13} />
                    </a>

                  )}

                </div>

              </article>

            ))}

          </div>


          {/* =================================================
              EMPTY STATE
          ================================================= */}

          {certifications.length === 0 && (

            <div className="certifications-empty">

              <Trophy size={30} />

              <h3>
                Certifications coming soon
              </h3>

              <p>
                I'm continuously learning and working toward
                new technical certifications.
              </p>

            </div>

          )}

        </div>

      </section>


      {/* =====================================================
          LEARNING SECTION
      ===================================================== */}

      <section className="certifications-learning">

        <div className="certifications-container">

          <div className="learning-card">

            <div className="learning-icon">
              <BookOpen size={24} />
            </div>

            <div className="learning-content">

              <span>
                CONTINUOUS LEARNING
              </span>

              <h2>
                The certificate is the proof.
                <strong> Learning is the goal.</strong>
              </h2>

              <p>
                I use certifications as milestones in my learning
                journey. My main focus is on understanding concepts,
                applying them through projects and continuously
                improving my technical abilities.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          FUTURE CERTIFICATIONS
      ===================================================== */}

      <section className="certifications-roadmap">

        <div className="certifications-container">

          <div className="certifications-roadmap-heading">

            <span>
              LEARNING ROADMAP
            </span>

            <h2>
              What's next in my
              <strong> learning journey?</strong>
            </h2>

            <p>
              Areas I may pursue through structured courses,
              certifications and practical projects as I continue
              developing my career.
            </p>

          </div>


          <div className="roadmap-grid">

            <div className="roadmap-item">

              <div className="roadmap-number">
                01
              </div>

              <div>
                <h3>
                  Advanced Java
                </h3>

                <p>
                  Strengthen Java development and enterprise
                  programming concepts.
                </p>
              </div>

            </div>


            <div className="roadmap-item">

              <div className="roadmap-number">
                02
              </div>

              <div>
                <h3>
                  Spring Boot
                </h3>

                <p>
                  Explore backend development and Java-based
                  application architecture.
                </p>
              </div>

            </div>


            <div className="roadmap-item">

              <div className="roadmap-number">
                03
              </div>

              <div>
                <h3>
                  Cloud & DevOps
                </h3>

                <p>
                  Build knowledge of cloud platforms,
                  deployment and modern development workflows.
                </p>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="certifications-cta">

        <div className="certifications-container">

          <div className="certifications-cta-card">

            <span>
              KEEP LEARNING
            </span>

            <h2>
              Every new skill is
              <strong> another milestone.</strong>
            </h2>

            <p>
              Explore my technical skills, projects and
              professional journey.
            </p>

            <div className="certifications-cta-actions">

              <a href="/skills">
                Explore Skills
                <ArrowRight size={15} />
              </a>

              <a
                href="/projects"
                className="secondary-cta"
              >
                View Projects
                <ArrowRight size={15} />
              </a>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
};

export default Certifications;