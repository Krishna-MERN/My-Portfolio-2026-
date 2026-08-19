import {
  BriefcaseBusiness,
  CalendarDays,
  MapPin,
  ArrowUpRight,
  CheckCircle2,
} from "lucide-react";

import "../styles/ExperiencePreview.css";


function ExperiencePreview() {

  const experiences = [
    {
      id: 1,
      role: "MERN Stack Developer Intern",
      company: "Softpro India",
      location: "Lucknow India",
      duration: "June 2025 – August 2026",
      type: "Internship",

      description:
        "Worked on developing responsive web applications 'ExamPrep' and implementing practical software solutions using modern web technologies.",

      responsibilities: [
        "Developed responsive and reusable UI components for application.",
        "Worked with APIs and frontend-backend integration.",
       
      ],

      technologies: [
        "JavaScript",
        "React.js",
        "Node.js",
        "MongoDB",
      ],
    },


    // {
    //   id: 2,
    //   role: "Web Developer Intern",
    //   company: "Company Name",
    //   location: "India / Remote",
    //   duration: "Month 2025 – Month 2025",
    //   type: "Internship",

    //   description:
    //     "Contributed to web development projects with a focus on responsive design, frontend development and user experience.",

    //   responsibilities: [
    //     "Created responsive website interfaces.",
    //     "Implemented reusable frontend components.",
    //     "Worked on improving website usability and performance.",
    //   ],

    //   technologies: [
    //     "HTML",
    //     "CSS",
    //     "JavaScript",
    //     "React.js",
    //   ],
    // },
  ];


  return (
    <section className="experience-preview">

      <div className="experience-preview-container">

        {/* =================================================
            HEADER
        ================================================= */}

        <div className="experience-preview-header">

          <div>

            <span className="experience-preview-eyebrow">
              EXPERIENCE
            </span>

            <h2>
              My professional
              <span> journey.</span>
            </h2>

          </div>


          <p>
            My journey through software development,
            internships and practical industry experience,
            where I turn technical knowledge into real-world
            solutions.
          </p>

        </div>


        {/* =================================================
            EXPERIENCE TIMELINE
        ================================================= */}

        <div className="experience-timeline">

          {experiences.map((experience, index) => (

            <article
              className="experience-item"
              key={experience.id}
            >

              {/* =================================================
                  TIMELINE
              ================================================= */}

              <div className="experience-timeline-marker">

                <div className="experience-icon">
                  <BriefcaseBusiness size={18} />
                </div>

                {index !== experiences.length - 1 && (
                  <span className="experience-line" />
                )}

              </div>


              {/* =================================================
                  EXPERIENCE CARD
              ================================================= */}

              <div className="experience-card">

                {/* Top */}

                <div className="experience-card-top">

                  <div>

                    <span className="experience-type">
                      {experience.type}
                    </span>

                    <h3>
                      {experience.role}
                    </h3>

                    <h4>
                      {experience.company}
                    </h4>

                  </div>


                  <span className="experience-number">
                    0{index + 1}
                  </span>

                </div>


                {/* Meta */}

                <div className="experience-meta">

                  <span>
                    <CalendarDays size={13} />
                    {experience.duration}
                  </span>

                  <span>
                    <MapPin size={13} />
                    {experience.location}
                  </span>

                </div>


                {/* Description */}

                <p className="experience-description">
                  {experience.description}
                </p>


                {/* Responsibilities */}

                <div className="experience-responsibilities">

                  {experience.responsibilities
                    .slice(0, 3)
                    .map((responsibility, responsibilityIndex) => (

                      <div
                        className="experience-responsibility"
                        key={responsibilityIndex}
                      >

                        <CheckCircle2 size={14} />

                        <span>
                          {responsibility}
                        </span>

                      </div>

                    ))}

                </div>


                {/* Technologies */}

                <div className="experience-technologies">

                  {experience.technologies.map(
                    (technology, technologyIndex) => (
                          
                   
                      <span key={technologyIndex}>
                        {technology}
                      </span>

                    )
                  )}

                </div>

              </div>

            </article>

          ))}

        </div>


        {/* =================================================
            FOOTER
        ================================================= */}

        <div className="experience-preview-footer">

          <a
            href="/experience"
            className="experience-preview-link"
          >

            View Complete Experience

            <ArrowUpRight size={16} />

          </a>

        </div>

      </div>

    </section>
  );
}

export default ExperiencePreview;