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
      title: "Introduction to Machine Learning",
      issuer: "NPTEL ONLINE CERTIFICATION",
      date: "Apr - 2026",
      category: "Machine Learning",
      credentialId: "NPTEL26CS74S159800272",
      description:
        "Topic covered Supervised Learning , UnSupervised Learning , Reinforcement Learning Regression , Clustering etc.",
      skills: [
        "Algorithms",
        "Java Programming ",
        "OOP Concept",
        "DSA",
      ],
      certificateUrl: "https://drive.google.com/file/d/1Byn1A_K381mPY4JrTJ0cQNmHzFOZFe69/view?usp=sharing",
    },

    {
      title: "Programming In Java",
      issuer: "NPTEL ONLINE CERTIFICATION",
      date: "Apr - 2025",
      category: "Programming",
      credentialId: "NPTEL25CS57S1250600442",
      description:
        "Certification covering Java programming fundamentals, object-oriented programming and core programming concepts",
      skills: [
        "Java code",
        "OOPs Concepts",
        "Algorithm",
      ],
      certificateUrl: "https://drive.google.com/file/d/1Oz9iqheusjOwKGftpg2KWhh-KXL2G_8j/view?usp=sharing",
    },


    // =======================================================
    // FUTURE CERTIFICATIONS
    // Uncomment when completed.
    // =======================================================

    {
      title: "CSV-22-01_Java for Beginners Run-1",
      issuer: "Department of Computer Science & Engineering",
      date: "Nov - 2022",
      category: "Programming",
      credentialId: "64882fe2-57b8-4c97-b958-08a540e3bed3",
      description:
        "Certification covering Basics of JAVA , Conditional statements , Control statement , basics of OOPs .",
      skills: [
        "Basic Java",
        "Loops",
        "Basic of OOPs",
      ],
      certificateUrl: "https://drive.google.com/file/d/1nWyaWSB5jXjOyNMkpIX5q-UwJ2Dy6D_b/view?usp=sharing",
    },

    {
      title: "Frontend Development",
      issuer: "MANYVERSITY",
      date: "Feb - 2024",
      category: "Development",
      credentialId: "65e5c1430ca97793b3b05ff3",
      description:
        "Certification covering HTML , CSS , some parts of JavaScript concepts.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
      ],
      certificateUrl: "https://drive.google.com/file/d/1L-_TcXka63wSOs4Rqrs4JtT-k0qEblWF/view?usp=sharing",
    },

    {
      title: "CSS , BOOTSTRAP , JAVASCRIPT Web Development Course",
      issuer: "Udemy",
      date: "Jul - 2024",
      category: "Development",
      credentialId: "UC-bb698211-20b8-4bef-b83e-f49fae3d60ea",
      description:
       " Certification covering HTML , CSS , some parts of JavaScript concepts.",
      skills: [
        "Styling",
        "Scripting",
        "Development",
       
      ],
      certificateUrl: "https://drive.google.com/file/d/1FCqf35JG0Hqt2tuT0iM_4Ry9dsad9zIC/view?usp=sharing",
    },
    {
      title: "Applied Machine Learning and Deep Learning with Python",
      issuer: "Department of Computer Application",
      date: "Jun - 2026",
      category: "Machine Learning",
      credentialId: "CAV-25-01/AMLDP/2026/6a51030c-b9d0-4dfe-a723-08a79df5633c",
      description:
        "Certification demonstrating Python Programming , Machine Learning , Deep Learning  etc.",
      skills: [
        "Python ",
        "Machine Learning ",
        "Deep Learning",
       
      ],
      certificateUrl: "https://drive.google.com/file/d/12uHC6V05ZnhoVAQKXWY5bEiF3LhW9qMD/view?usp=sharing",
    },

    {
      title: "R Programming",
      issuer: "IUCAT",
      date: "Jul - 2024",
      category: "Programming",
      credentialId: "CAIUCAT202324E00022 ",
      description:
        "Certification demonstrating R Programming , Machine Learning , Deep Learning  etc.",
      skills: [
        "R Programming",
        
       
      ],
      certificateUrl: "https://drive.google.com/file/d/1ydwAeJyyvzZOiU9cPRn2Lodnb9P9_x3d/view?usp=sharing",
    },

    {
        title: "Operating System Algorithms with UNIX Commands",
      issuer: "IUCAT",
      date: "Apr - 2024",
      category: "System Design",
      credentialId: "CAV-25-01/OSAU/2025/0023 ",
      description:
        "Certification demonstrating Operating System , Algorithms , Commands  etc.",
      skills: [
        "Operating System",
         "Algorithms",
        "UNIX Commands",
        
       
      ],
      certificateUrl: "https://drive.google.com/file/d/1LeQMgU3qQCf94LiWUYVpQ--jHqAJPuFl/view?usp=sharing",
    },
    {
        title: "“Full Stack Development with PHP & MySQL",
      issuer: "IUCAT",
      date: "Oct - 2024",
      category: "Development",
      credentialId: "IUCAT/FSD/2024/0022 ",
      description:
        "Certification demonstrating Development phases , php and SQL Quaries  etc.",
      skills: [
        "Development",
         "Website Designing",
        "SQL Quaries",
        
       
      ],
      certificateUrl: "https://drive.google.com/file/d/1T7w4JAJob5VEH0-EOgUFo3DGsn5ZFnYm/view?usp=sharing",
    },
    {
        title: "Data Structure using Advanced C Programming",
      issuer: "IUCAT",
      date: "Dec - 2024",
      category: "Programming",
      credentialId: "IUCAT/FSD/2024/002 ",
      description:
        "Certification demonstrating Data Structure and Algorithms for structuring the data using Advanced C Programming",
      skills: [
        "Programming",
         "Data Structure",
        "C",
        
       
      ],
      certificateUrl: "https://drive.google.com/file/d/1qvZCZAu5l_D3zUXvWHNP2oSmYAtvBv99/view?usp=sharing",
    },

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