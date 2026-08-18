import { ArrowUpRight, Download, Code2, Trophy } from "lucide-react";
import { FaInstagram, FaFacebookF, FaXTwitter, FaWhatsapp } from "react-icons/fa6";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";

import { SiLeetcode, SiHackerrank } from "react-icons/si";

import "../styles/Hero.css";

import heroProfile from "../assets/profilephoto.png";

const socialLinks = {
  github: "https://github.com/Krishna-MERN/Datara-Softwares",
  linkedin: "https://www.linkedin.com/in/krishna-kumar-shukla/",
  leetcode: "https://leetcode.com/u/Krishna-Kumar-Shukla/",
  hackerrank: "https://www.hackerrank.com/yourusername/",
  facebook: "https://www.facebook.com/yourusername",
  whatsapp:
    "https://wa.me/917985687221?text=Hello%20Krishna,%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20connect%20with%20you.",
  email: " Mail.kkshukla@gmail.com",
};

const resumeUrl = "YOUR_GOOGLE_DRIVE_RESUME_LINK";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-container">
        {/* =========================
            LEFT CONTENT
        ========================= */}

        <div className="hero-content">
          {/* Availability */}
          <div className="hero-status">
            <span className="status-dot"></span>
            Open to Software Development Opportunities
          </div>

          {/* Heading */}
          <h1 className="hero-title">
            Hi, I'm <span className="hero-name">Krishna Kumar Shukla</span>
            <br />
            <span className="hero-role">Software Developer</span>
          </h1>

          {/* Description */}
          <p className="hero-description">
            I build modern, responsive and user-focused web applications with a
            strong focus on clean code, problem solving and scalable software
            development.
          </p>

          {/* Technologies */}
          <div className="hero-tech">
            <span>
              <Code2 size={16} />
              MERN Stack
            </span>

            <span>
              <Trophy size={16} />
              Java & DSA
            </span>
          </div>

          {/* CTA Buttons */}
          <div className="hero-actions">
            <a href="#projects" className="hero-btn hero-btn-primary">
              View My Work
              <ArrowUpRight size={18} />
            </a>

            <a
              href={resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="hero-btn hero-btn-secondary"
            >
              <Download size={17} />
              View Resume
            </a>
          </div>

          {/* Social Profiles */}
          <div className="hero-social">
            <span className="social-label">Find me on</span>

            <div className="social-links">
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>

              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </a>

              <a
                href={socialLinks.leetcode}
                target="_blank"
                rel="noreferrer"
                aria-label="LeetCode"
              >
                <SiLeetcode />
              </a>

              <a
                href={socialLinks.hackerrank}
                target="_blank"
                rel="noreferrer"
                aria-label="HackerRank"
              >
                <SiHackerrank />
              </a>

              <a href={socialLinks.whatsapp} target="_blank" rel="noreferrer">
                <FaWhatsapp size={19} />
              </a>

              <a href={socialLinks.facebook} target="_blank" rel="noreferrer">
                <FaFacebookF size={19} />

              </a>
            </div>
          </div>
        </div>

        {/* =========================
            RIGHT VISUAL
        ========================= */}

        <div className="hero-visual">
          <div className="hero-orbit orbit-one"></div>
          <div className="hero-orbit orbit-two"></div>

          <div className="hero-image-wrapper">
            <div className="hero-image-placeholder">
              <span>
                <img src={heroProfile} alt="Krishna Kumar Shukla" />
              </span>
            </div>
          </div>

          {/* Floating Cards */}

          <div className="floating-card card-code">
            <Code2 size={18} />
            <div>
              <strong>Developer</strong>
              <span>MERN + Java</span>
            </div>
          </div>

          <div className="floating-card card-dsa">
            <Trophy size={18} />
            <div>
              <strong>Problem Solver</strong>
              <span>DSA Enthusiast</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}

      <div className="hero-scroll">
        <span>Scroll to explore</span>

        <div className="scroll-line"></div>
      </div>
    </section>
  );
}

export default Hero;
