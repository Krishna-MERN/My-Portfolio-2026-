import {
  ArrowRight,
  CalendarDays,
  BookOpen,
  Code2,
  BriefcaseBusiness,
  Award,
} from "lucide-react";

import updates from "../data/updates";

import "../styles/UpdatesPreview.css";


function UpdatesPreview() {

  // Show only the latest 2 updates
  const latestUpdates = updates.slice(0, 2);


  const getCategoryIcon = (category) => {

    switch (category) {

      case "Learning":
        return <BookOpen size={14} />;

      case "Project":
        return <Code2 size={14} />;

      case "Career":
        return <BriefcaseBusiness size={14} />;

      case "Achievement":
        return <Award size={14} />;

      default:
        return <Code2 size={14} />;

    }
  };


  return (
    <section className="updates-preview">

      <div className="updates-preview-container">

        {/* =================================================
            SECTION HEADER
        ================================================= */}

        <div className="updates-preview-header">

          <div>

            <span className="updates-preview-eyebrow">
              LATEST UPDATES
            </span>

            <h2>
              What I'm
              <span> up to.</span>
            </h2>

          </div>

          <p>
            A quick look at what I'm currently learning,
            building and working on.
          </p>

        </div>


        {/* =================================================
            UPDATE LIST
        ================================================= */}

        <div className="updates-preview-list">

          {latestUpdates.map((update) => (

            <article
              className="updates-preview-card"
              key={update.id}
            >

              {/* Left date section */}

              <div className="updates-preview-date">

                <CalendarDays size={16} />

                <span>
                  {update.date}
                </span>

              </div>


              {/* Main content */}

              <div className="updates-preview-content">

                <div className="updates-preview-meta">

                  <span className="updates-preview-category">

                    {getCategoryIcon(update.category)}

                    {update.category}

                  </span>

                </div>


                <h3>
                  {update.title}
                </h3>

                <p>
                  {update.description}
                </p>


                {/* Tags */}

                <div className="updates-preview-tags">

                  {update.tags?.slice(0, 3).map((tag) => (

                    <span key={tag}>
                      {tag}
                    </span>

                  ))}

                </div>

              </div>

            </article>

          ))}

        </div>


        {/* =================================================
            CTA
        ================================================= */}

        <div className="updates-preview-cta">

          <a href="/updates">

            View All Updates

            <ArrowRight size={16} />

          </a>

        </div>

      </div>

    </section>
  );
}

export default UpdatesPreview;