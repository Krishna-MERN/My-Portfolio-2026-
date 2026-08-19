import { ArrowRight, Award, FileText, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

import "../styles/ResearchPreview.css";

import Paper from "../assets/project/research-paper/IJRAR26A3518.pdf";
import Report from "../assets/project/research-paper/Report Pages_merged.pdf";
import Certificate from "../assets/project/research-paper/Krishna Kumar Shukla.pdf";

const researchItems = [
  {
    type: "Research Paper",
    title: "Automated Bus Scheduling And Route Management For Delhi Transport Corporation ",
    description:
      " The Automated Bus Scheduling and Route Management System is designed to address these challenges by integrating modern technologies and computational logic. ",
    date: "2026",
    icon: FileText,
    link: Paper,
  },
  {
    type: "Research Report",
    title: "Automated Bus Scheduling And Route Management For DTC",
    description:
      " The Automated Bus Scheduling and Route Management System is designed to address these challenges by integrating modern technologies and computational logic. ",
    date: "2026",
    icon: FileText,
    link: Report,
  },
  {
    type: "Certificate",
    title: "Research Certificate",
    description:
      "Certificate of my research & publication",
    date: "2026",
    icon: Award,
    link: Certificate,
  },
];

const ResearchPreview = () => {
  return (
    <section className="research-preview">

      <div className="research-preview-container">

        {/* Header */}
        <div className="research-preview-header">

          <div>
            <span className="research-preview-eyebrow">
              RESEARCH & DOCUMENTATION
            </span>

            <h2>
              Research, Papers
              <span> & Reports.</span>
            </h2>

            <p>
              A collection of my research work, technical reports,
              papers and related certificates.
            </p>
          </div>

          <Link
            to="/research"
            className="research-preview-view-all"
          >
            View Details
            <ArrowRight size={14} />
          </Link>

        </div>


        {/* Cards */}
        <div className="research-preview-grid">

          {researchItems.map((item, index) => {

            const Icon = item.icon;

            return (
              <article
                className="research-preview-card"
                key={index}
              >

                <div className="research-preview-card-top">

                  <div className="research-preview-icon">
                    <Icon size={17} />
                  </div>

                  <span className="research-preview-type">
                    {item.type}
                  </span>

                  <span className="research-preview-date">
                    {item.date}
                  </span>

                </div>


                <h3>
                  {item.title}
                </h3>

                <p>
                  {item.description}
                </p>


                <a
                  href={item.link}
                  className="research-preview-link"
                >
                  View Pdf File
                  <ExternalLink size={13} />
                </a>

              </article>
            );
          })}

        </div>

      </div>

    </section>
  );
};

export default ResearchPreview;