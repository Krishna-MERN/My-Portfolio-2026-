import {
  ArrowUpRight,
  CheckCircle2,
  BriefcaseBusiness,
  GraduationCap,
 
} from "lucide-react";

import { Link } from "react-router-dom";

import "../styles/AboutPreview.css";

function AboutPreview() {
  return (
    <section className="about-preview" id="about">

      <div className="about-preview-container">

        {/* =========================
            LEFT - VISUAL
        ========================= */}

        <div className="about-preview-visual">

          <div className="about-preview-card">

            <div className="about-card-top">
              <span className="about-card-label">
                ABOUT ME
              </span>

              <span className="about-card-number">
                01
              </span>
            </div>

            <div className="about-card-line"></div>

            <div className="about-card-icon">
              <BriefcaseBusiness size={30} strokeWidth={1.5} />
            </div>

            <h3>
              Building solutions with
              <span> code & creativity.</span>
            </h3>

            <p>
              Focused on creating practical, scalable and
              user-friendly digital experiences.
            </p>

          </div>

        </div>


        {/* =========================
            RIGHT - CONTENT
        ========================= */}

        <div className="about-preview-content">

          <span className="section-eyebrow">
            WHO I AM
          </span>

          <h2 className="about-preview-title">
            Turning ideas into
            <span> meaningful software.</span>
          </h2>

          <p className="about-preview-text">
            I'm a Computer Science and Engineering graduate with
            a strong interest in software development and modern
            web technologies. I enjoy transforming ideas and
            requirements into clean, responsive and practical
            applications.
          </p>

          <p className="about-preview-text">
            My primary focus is on JavaScript, React, Node.js,
            Express.js and MongoDB, while I also work with Java
            and practice Data Structures & Algorithms to
            strengthen my problem-solving skills.
          </p>


          {/* Highlights */}

          <div className="about-highlights">

            <div className="about-highlight">

              <CheckCircle2 size={18} />

              <div>
                <strong>Development Focus</strong>
                <span>
                  MERN Stack & Software Development
                </span>
              </div>

            </div>


            <div className="about-highlight">

              <GraduationCap size={18} />

              <div>
                <strong>Education</strong>
                <span>
                  B.Tech in Computer Science & Engineering
                </span>
              </div>

            </div>

          </div>


          {/* CTA */}

         
           <Link className="about-preview-button" to="/about"> More About Me
            <ArrowUpRight size={17} />
        </Link>

        </div>

      </div>

    </section>
  );
}

export default AboutPreview;