import {
  GraduationCap,
  CalendarDays,
  MapPin,
  ArrowUpRight,
} from "lucide-react";

import "../styles/EducationPreview.css";


function EducationPreview() {
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


  return (
    <section className="education-preview">

      <div className="education-preview-container">

        {/* =================================================
            HEADER
        ================================================= */}

        <div className="education-preview-header">

          <div>

            <span className="education-preview-eyebrow">
              EDUCATION
            </span>

            <h2>
              My academic
              <span> journey.</span>
            </h2>

          </div>


          <p>
            My academic background in computer science,
            supported by continuous learning and practical
            software development experience.
          </p>

        </div>


        {/* =================================================
            EDUCATION TIMELINE
        ================================================= */}

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


        {/* =================================================
            FOOTER
        ================================================= */}

        <div className="education-preview-footer">

          <a
            href="/education"
            className="education-preview-link"
          >
            View Complete Education

            <ArrowUpRight size={16} />

          </a>

        </div>

      </div>

    </section>
  );
}

export default EducationPreview;