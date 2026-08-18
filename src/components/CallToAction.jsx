import { ArrowRight, Mail, Download } from "lucide-react";

import {
  FaFacebookF,
  FaGithub,
  FaLinkedinIn,
  FaWhatsapp,
  //   FaInstagram,
    // FaFacebookF,
  //   FaXTwitter,
} from "react-icons/fa6";

import "../styles/CallToAction.css";
import { SiHackerrank, SiLeetcode } from "react-icons/si";

function CallToAction() {
  return (
    <section className="cta-section">
      <div className="cta-container">
        <div className="cta-card">
          {/* Decorative Elements */}

          <div className="cta-glow cta-glow-one" />
          <div className="cta-glow cta-glow-two" />

          {/* Content */}

          <div className="cta-content">
            <span className="cta-eyebrow">LET'S CONNECT</span>

            <h2>
              Let's build something
              <span> meaningful.</span>
            </h2>

            <p>
              I'm always open to discussing software development opportunities,
              interesting projects, collaborations and new ideas.
            </p>

            {/* Buttons */}

            <div className="cta-actions">
              <a
                href="mailto:your-email@gmail.com"
                className="cta-btn cta-btn-primary"
              >
                <Mail size={16} />
                Get In Touch
                <ArrowRight size={15} />
              </a>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="cta-btn cta-btn-secondary"
              >
                <Download size={15} />
                View Resume
              </a>
            </div>

            {/* Social Links */}

            <div className="cta-social">
              <span>Find me on</span>

              <div>
                <a
                  href="https://leetcode.com/u/Krishna-Kumar-Shukla/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LeetCode"
                >
                  <SiLeetcode/>
                </a>

                {/* <a
                  href={socialLinks.hackerrank}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="HackerRank"
                >
                  <SiHackerrank />
                </a> */}

                <a href="https://wa.me/917985687221?text=Hello%20Krishna,%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20connect%20with%20you." target="_blank" rel="noreferrer">
                  <FaWhatsapp size={19} />
                </a>

                <a href="{socialLinks.facebook}" target="_blank" rel="noreferrer">
                  <FaFacebookF size={19} />
                </a>

                <a
                  href="https://github.com/Krishna-MERN/Datara-Softwares"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <FaGithub size={16} />
                </a>

                <a
                  href= "https://www.linkedin.com/in/krishna-kumar-shukla/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <FaLinkedinIn size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CallToAction;
