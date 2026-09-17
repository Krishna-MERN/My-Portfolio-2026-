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
      role: "Associate Operations",
      company: "AionOS ",
      location: "Noida Sector 142",
      duration: "Sept 2026 – Current",
      type: "Full-Time Job",

      description:
        "Currently working at AionOS as an Associate – Operations, gaining hands-on experience in business operations, process management, data handling, and professional workflows.",

      responsibilities: [
        "Handle and process operational data with accuracy and attention to detail.",
"Manage day-to-day workflows and ensure timely process execution.",
"Perform data validation, quality checks, and issue identification.",
"Use technology and analytical skills to improve process efficiency.",

      ],

      technologies: [
        "Data Handling ",
        "Problam Solving ",
        "Quality Control",
        "Data Processing ",
      ],
    },


    {
      id: 2,
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