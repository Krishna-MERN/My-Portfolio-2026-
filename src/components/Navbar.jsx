import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Menu,
  X,
  Mail,
  FileText,
  ChevronDown,
} from "lucide-react";

import {
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
  FaFacebookF,
  FaXTwitter,
  FaWhatsapp,
} from "react-icons/fa6";

import {
  SiLeetcode,
  SiHackerrank,
} from "react-icons/si";

import "../styles/Navbar.css";


const resumeUrl = "YOUR_GOOGLE_DRIVE_RESUME_LINK";

const socialLinks = {
  github: "https://github.com/Krishna-MERN",
  linkedin: "https://www.linkedin.com/in/krishna-kumar-shukla",
  leetcode: "https://leetcode.com/u/Krishna-Kumar-Shukla/",
  facebook: "https://www.facebook.com/yourusername",
  whatsapp: "https://wa.me/917985687221?text=Hello%20Krishna,%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20connect%20with%20you.",
  email: " Mail.kkshukla@gmail.com",
};

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
    setMoreOpen(false);
  };

  return (
    <header className="navbar">
      <div className="navbar-container">

        {/* Logo / Brand */}
        <a href="/" className="navbar-logo" onClick={closeMenu}>
          <span className="logo-mark">K</span>
          <span className="logo-text">
            Krishna<span>.</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className={`navbar-menu ${menuOpen ? "active" : ""}`}>
        
          <Link to ="/" onClick={closeMenu}>Home</Link>
          <Link to ="/about" onClick={closeMenu}>About</Link>
          <Link to ="/education" onClick={closeMenu}>Education</Link>
          <Link to ="/experience" onClick={closeMenu}>Experience</Link>
          <Link to ="/projects" onClick={closeMenu}>Projects</Link>
          <Link to ="/skills" onClick={closeMenu}>Skills</Link>
          

          {/* More Dropdown */}
          <div className="nav-dropdown">
            <button
              className="dropdown-button"
              onClick={() => setMoreOpen(!moreOpen)}
            >
              More
              <ChevronDown
                size={16}
                className={moreOpen ? "rotate-icon" : ""}
              />
            </button>

            <div className={`dropdown-menu ${moreOpen ? "show" : ""}`}>
             
              <Link to = "certifications"onClick={closeMenu}>Certifications</Link>  
              <Link to = "achievements"onClick={closeMenu}>Achievements</Link>  
              <Link to = "updates"onClick={closeMenu}>Professional Updates</Link>  
              <Link to = "blog"onClick={closeMenu}>Blog</Link>  
              <Link to = "career-journey"onClick={closeMenu}>Career Journey</Link>  
        
        
            </div>
          </div>

          <a href="/contact" onClick={closeMenu}>Contact</a>

          {/* Mobile Social Links */}
          <div className="mobile-socials">
            <a href={socialLinks.github} target="_blank" rel="noreferrer">
              <FaGithub size={19} />
            </a>

            <a href={socialLinks.linkedin} target="_blank" rel="noreferrer">
              <FaLinkedinIn size={19} />
            </a>

            <a href={socialLinks.leetcode} target="_blank" rel="noreferrer">
              <SiLeetcode size={19} />
            </a>


            <a href={socialLinks.email}>
              <Mail size={19} />
            </a>

            <a href={socialLinks.whatsapp} target="_blank" rel="noreferrer">
              <FaWhatsapp size={19} />
            </a>

            <a href={socialLinks.facebook} target="_blank" rel="noreferrer">
              <FaFacebookF size={19} />
            </a>
           


            <a href={socialLinks.hackerrank} target="_blank" rel="noreferrer">
              <SiHackerrank size={19} />
            </a>

          </div>
        </nav>

        {/* Desktop Actions */}
        <div className="navbar-actions">

          <div className="navbar-socials">

            <a href={socialLinks.whatsapp} target="_blank" rel="noreferrer">
              <FaWhatsapp size={19} />
            </a>

            <a href={socialLinks.facebook} target="_blank" rel="noreferrer">
              <FaFacebookF size={19} />
            </a>

            <a
              href={socialLinks.github}
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
          </div>

          <a
            href={resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="resume-button"
          >
            <FileText size={17} />
            Resume
          </a>

          {/* Mobile Menu Button */}
          <button
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={25} /> : <Menu size={25} />}
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;