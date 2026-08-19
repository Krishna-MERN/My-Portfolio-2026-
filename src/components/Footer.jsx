import {
  ArrowUp,
  ArrowUpRight,
  Mail,
  Phone,
  MapPin,
  Download,
  Code2,
  ExternalLink,
} from "lucide-react";
import {
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
  FaFacebookF,
  FaXTwitter,
} from "react-icons/fa6";

import "../styles/Footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="site-footer">
      {/* =====================================================
          MAIN FOOTER
      ===================================================== */}

      <div className="footer-container">
        <div className="footer-main">
          {/* =================================================
              BRAND / INTRO
          ================================================= */}

          <div className="footer-brand">
            <a href="/" className="footer-logo">
              <span className="footer-logo-mark">
                <Code2 size={18} />
              </span>

              <span>Krishna Kumar Shukla</span>
            </a>

            <p className="footer-description">
              Software Developer focused on building reliable, scalable and
              user-friendly web applications while continuously learning modern
              technologies.
            </p>

            {/* Availability */}

            <div className="footer-availability">
              <span className="footer-availability-dot" />

              <span>Open to opportunities</span>
            </div>

            {/* Social Links */}

            <div className="footer-social">
              <a href="https://wa.me/917985687221?text=Hello%20Krishna,%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20connect%20with%20you." target="_blank" rel="noreferrer">
                <FaWhatsapp size={19} />
              </a>

              <a href={socialLinks.facebook} target="_blank" rel="noreferrer">
                <FaFacebookF size={19} />
              </a>

              <a
                href="https://github.com/Krishna-MERN"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <FaGithub size={18} />
              </a>

              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn size={18} />
              </a>

              <a
                href={socialLinks.leetcode}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
              >
                <SiLeetcode size={18} />
              </a>
              {/* <a
                            href={socialLinks.hackerrank}
                            target="_blank"
                            rel="noreferrer"
                            aria-label="Instagram"
                          >
                            <SiHackerrank size={18} />
                          </a> */}

              <a
                href="https://github.com/Krishna-MERN"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <FaGithub size={16} />
              </a>

              <a
                href="https://www.linkedin.com/in/krishna-kumar-shukla/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn size={16} />
              </a>

              <a href="mailto:mail.kkshukla@gmail.com" aria-label="Email">
                <Mail size={16} />
              </a>
            </div>
          </div>

          {/* =================================================
              NAVIGATION
          ================================================= */}

          <div className="footer-column">
            <h3>Navigation</h3>

            <ul>
              <li>
                <a href="/">Home</a>
              </li>

              <li>
                <a href="/about">About</a>
              </li>

              <li>
                <a href="/projects">Projects</a>
              </li>

              <li>
                <a href="/education">Education</a>
              </li>

              <li>
                <a href="/experience">Experience</a>
              </li>

              <li>
                <a href="/updates">Updates</a>
              </li>
            </ul>
          </div>

          {/* =================================================
              EXPLORE
          ================================================= */}

          <div className="footer-column">
            <h3>Explore</h3>

            <ul>
              <li>
                <a href="/skills">Skills</a>
              </li>

              <li>
                <a href="/coding-profiles">Coding Profiles</a>
              </li>

              <li>
                <a href="/github">GitHub Activity</a>
              </li>

              <li>
                <a href="/blog">Blog</a>
              </li>

              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </div>

          {/* =================================================
              RESOURCES
          ================================================= */}

          <div className="footer-column">
            <h3>Resources</h3>

            <ul>
              <li>
                <a
                  href="YOUR_GOOGLE_DRIVE_RESUME_LINK"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Resume
                  <ExternalLink size={12} />
                </a>
              </li>

              <li>
                <a
                  href="https://github.com/Krishna-MERN"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                  <ArrowUpRight size={12} />
                </a>
              </li>

              <li>
                <a
                  href="https://www.linkedin.com/in/krishna-kumar-shukla/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                  <ArrowUpRight size={12} />
                </a>
              </li>
            </ul>

            {/* Resume Button */}

            <a
              href="YOUR_GOOGLE_DRIVE_RESUME_LINK"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-resume-btn"
            >
              <Download size={14} />
              View Resume
              <ArrowUpRight size={13} />
            </a>
          </div>
        </div>

        {/* =====================================================
            CONTACT STRIP
        ===================================================== */}

        <div className="footer-contact-strip">
          <div className="footer-contact-item">
            <div className="footer-contact-icon">
              <Mail size={16} />
            </div>

            <div>
              <span>Email</span>

              <a href="mailto:mail.kkshukla@gmail.com">
                mail.kkshukla@gmail.com
              </a>
            </div>
          </div>

          <div className="footer-contact-item">
            <div className="footer-contact-icon">
              <Phone size={16} />
            </div>

            <div>
              <span>Phone</span>

              <a href="tel:+917985687221">+91 79856 87221</a>
            </div>
          </div>

          <div className="footer-contact-item">
            <div className="footer-contact-icon">
              <MapPin size={16} />
            </div>

            <div>
              <span>Location</span>

              <strong>India</strong>
            </div>
          </div>

          <a href="/contact" className="footer-contact-btn">
            Let's Talk
            <ArrowUpRight size={15} />
          </a>
        </div>

        {/* =====================================================
            BOTTOM BAR
        ===================================================== */}

        <div className="footer-bottom">
          <div className="footer-copyright">
            <span>© {currentYear} Krishna Kumar Shukla.</span>

            <span className="footer-divider">|</span>

            <span>All rights reserved.</span>
          </div>

          <div className="footer-bottom-links">
            <a href="/privacy">Privacy</a>

            <a href="/terms">Terms</a>

            <button
              type="button"
              onClick={scrollToTop}
              className="footer-top-btn"
              aria-label="Back to top"
            >
              Back to top
              <ArrowUp size={14} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
