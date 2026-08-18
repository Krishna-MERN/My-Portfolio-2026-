import {
  ArrowRight,
  BriefcaseBusiness,
  CalendarDays,
  CheckCircle2,
  Code2,
  GraduationCap,
  Lightbulb,
  MapPin,
  Rocket,
  Trophy,
} from "lucide-react";

import "../styles/CareerJourney.css";

const careerJourneyData = [
  {
    year: "2022",
    type: "Education",
    icon: GraduationCap,
    title: "Started My B.Tech Journey",
    organization: "Bachelor of Technology — Computer Science & Engineering",
    description:
      "Started my engineering journey with a focus on computer science, programming fundamentals and understanding how software systems are designed.",
    skills: ["Programming Fundamentals", "Computer Science", "Problem Solving"],
  },

  {
    year: "2023",
    type: "Learning",
    icon: Code2,
    title: "Started Building My Programming Foundation",
    organization: "Programming & Web Development",
    description:
      "Started learning programming more seriously and explored web technologies, JavaScript and the fundamentals required to build modern applications.",
    skills: ["JavaScript", "HTML", "CSS", "Programming"],
  },

  {
    year: "2024",
    type: "Development",
    icon: Code2,
    title: "Started Working with the MERN Stack",
    organization: "Full-Stack Web Development",
    description:
      "Moved from learning individual technologies to building complete web applications using React, Node.js, Express.js and MongoDB.",
    skills: ["React.js", "Node.js", "Express.js", "MongoDB"],
  },

  {
    year: "2025",
    type: "Projects",
    icon: Rocket,
    title: "Started Building Real-World Projects",
    organization: "Project-Based Learning",
    description:
      "Focused on turning theoretical knowledge into practical applications by designing and developing complete projects with real-world use cases.",
    skills: ["MERN Stack", "REST APIs", "Git", "Responsive UI"],
  },

  {
    year: "2026",
    type: "Advanced Learning",
    icon: Lightbulb,
    title: "Focused on Java & DSA",
    organization: "Problem Solving & Interview Preparation",
    description:
      "Started focusing more strongly on Java, data structures and algorithms, logical problem solving and technical interview preparation.",
    skills: ["Java", "DSA", "Algorithms", "Problem Solving"],
  },

  {
    year: "2026",
    type: "Career",
    icon: BriefcaseBusiness,
    title: "Started My Professional Career Journey",
    organization: "Software Development",
    description:
      "Started actively pursuing entry-level software development opportunities where I can apply my technical skills, contribute to real projects and continue growing as a developer.",
    skills: ["Software Development", "React", "Java", "DSA"],
    current: true,
  },
];

const milestones = [
  {
    icon: GraduationCap,
    number: "01",
    title: "Education",
    text: "Computer Science & Engineering",
  },
  {
    icon: Code2,
    number: "02",
    title: "Development",
    text: "MERN Stack & Java",
  },
  {
    icon: Trophy,
    number: "03",
    title: "Projects",
    text: "Real-world applications",
  },
  {
    icon: Rocket,
    number: "04",
    title: "Career",
    text: "Software Development",
  },
];

const CareerJourney = () => {
  return (
    <main className="career-page">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="career-hero">

        <div className="career-container">

          <div className="career-hero-content">

            <span className="career-eyebrow">
              <Rocket size={13} />
              MY CAREER JOURNEY
            </span>

            <h1>
              Learning.
              <span> Building.</span>
              <br />
              Growing.
            </h1>

            <p>
              A timeline of my journey through education, programming,
              projects, technical learning and my path toward becoming
              a professional software developer.
            </p>

            <div className="career-hero-actions">

              <a
                href="#timeline"
                className="career-primary-btn"
              >
                Explore My Journey
                <ArrowRight size={15} />
              </a>

              <a
                href="/about"
                className="career-secondary-btn"
              >
                About Me
              </a>

            </div>

          </div>


          {/* Hero Stats */}

          <div className="career-hero-stats">

            <div className="career-stat-card">

              <span className="career-stat-number">
                01
              </span>

              <span className="career-stat-label">
                Developer Journey
              </span>

            </div>

            <div className="career-stat-card">

              <span className="career-stat-number">
                MERN
              </span>

              <span className="career-stat-label">
                Full-Stack Development
              </span>

            </div>

            <div className="career-stat-card">

              <span className="career-stat-number">
                Java
              </span>

              <span className="career-stat-label">
                DSA & Problem Solving
              </span>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          MILESTONES
      ===================================================== */}

      <section className="career-milestones">

        <div className="career-container">

          <div className="career-section-heading">

            <span>
              THE BIG PICTURE
            </span>

            <h2>
              My journey in
              <strong> four stages.</strong>
            </h2>

          </div>


          <div className="career-milestone-grid">

            {milestones.map((item) => {

              const Icon = item.icon;

              return (
                <div
                  className="career-milestone-card"
                  key={item.number}
                >

                  <span className="milestone-number">
                    {item.number}
                  </span>

                  <div className="milestone-icon">
                    <Icon size={18} />
                  </div>

                  <h3>
                    {item.title}
                  </h3>

                  <p>
                    {item.text}
                  </p>

                </div>
              );
            })}

          </div>

        </div>

      </section>


      {/* =====================================================
          TIMELINE
      ===================================================== */}

      <section
        className="career-timeline-section"
        id="timeline"
      >

        <div className="career-container">

          <div className="career-section-heading timeline-heading">

            <span>
              TIMELINE
            </span>

            <h2>
              The road so
              <strong> far.</strong>
            </h2>

            <p>
              Every stage has added something new to my technical
              knowledge, problem-solving ability and understanding
              of software development.
            </p>

          </div>


          <div className="career-timeline">

            {careerJourneyData.map((item, index) => {

              const Icon = item.icon;

              return (
                <article
                  className={`career-timeline-item ${
                    item.current
                      ? "current"
                      : ""
                  }`}
                  key={`${item.year}-${index}`}
                >

                  {/* Year */}

                  <div className="timeline-year">
                    <span>
                      {item.year}
                    </span>
                  </div>


                  {/* Line Icon */}

                  <div className="timeline-marker">

                    <Icon size={17} />

                  </div>


                  {/* Content */}

                  <div className="timeline-card">

                    <div className="timeline-card-top">

                      <span className="timeline-type">
                        {item.type}
                      </span>

                      {item.current && (
                        <span className="timeline-current">
                          <span />
                          Current
                        </span>
                      )}

                    </div>


                    <h3>
                      {item.title}
                    </h3>


                    <div className="timeline-organization">

                      <BriefcaseBusiness size={13} />

                      {item.organization}

                    </div>


                    <p>
                      {item.description}
                    </p>


                    <div className="timeline-skills">

                      {item.skills.map((skill) => (
                        <span key={skill}>
                          {skill}
                        </span>
                      ))}

                    </div>


                    <div className="timeline-completed">

                      <CheckCircle2 size={13} />

                      Milestone completed

                    </div>

                  </div>

                </article>
              );
            })}

          </div>

        </div>

      </section>


      {/* =====================================================
          CURRENT FOCUS
      ===================================================== */}

      <section className="career-focus">

        <div className="career-container">

          <div className="career-focus-card">

            <div className="career-focus-icon">
              <Rocket size={24} />
            </div>

            <span>
              CURRENT FOCUS
            </span>

            <h2>
              Building the next
              <strong> chapter.</strong>
            </h2>

            <p>
              I am currently focused on improving my software
              development skills, strengthening DSA and Java,
              building practical projects and preparing for
              opportunities where I can grow as a professional
              developer.
            </p>


            <div className="career-focus-points">

              <div>
                <CheckCircle2 size={15} />
                <span>Software Development</span>
              </div>

              <div>
                <CheckCircle2 size={15} />
                <span>Java & DSA</span>
              </div>

              <div>
                <CheckCircle2 size={15} />
                <span>MERN Stack</span>
              </div>

              <div>
                <CheckCircle2 size={15} />
                <span>Real-world Projects</span>
              </div>

            </div>


            <a
              href="/projects"
              className="career-focus-btn"
            >
              Explore My Projects
              <ArrowRight size={15} />
            </a>

          </div>

        </div>

      </section>


      {/* =====================================================
          FOOTER NOTE
      ===================================================== */}

      <section className="career-ending">

        <div className="career-container">

          <MapPin size={15} />

          <p>
            The journey is still being written.
            <strong> This is only the beginning.</strong>
          </p>

          <CalendarDays size={15} />

        </div>

      </section>

    </main>
  );
};

export default CareerJourney;