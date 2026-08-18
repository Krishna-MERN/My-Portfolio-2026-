import {
  ArrowUpRight,
  CalendarDays,
  CheckCircle2,
  Code2,
  BriefcaseBusiness,
  BookOpen,
  Award,
} from "lucide-react";

import updates from "../data/updates";

import "../styles/Updates.css";


function Updates() {

  const getCategoryIcon = (category) => {

    switch (category) {

      case "Learning":
        return <BookOpen size={15} />;

      case "Project":
        return <Code2 size={15} />;

      case "Career":
        return <BriefcaseBusiness size={15} />;

      case "Achievement":
        return <Award size={15} />;

      default:
        return <CheckCircle2 size={15} />;

    }
  };


  return (
    <main className="updates-page">

      {/* =====================================================
          PAGE HERO
      ===================================================== */}

      <section className="updates-hero">

        <div className="updates-container">

          <span className="updates-eyebrow">
            MY JOURNEY
          </span>

          <h1>
            Latest
            <span> Updates.</span>
          </h1>

          <p>
            A timeline of my learning, projects, achievements,
            career progress and other professional updates.
          </p>

        </div>

      </section>


      {/* =====================================================
          UPDATES CONTENT
      ===================================================== */}

      <section className="updates-content">

        <div className="updates-container">

          <div className="updates-header">

            <div>

              <span>
                TIMELINE
              </span>

              <h2>
                What I've been
                <strong> working on.</strong>
              </h2>

            </div>

            <p>
              Follow my progress as I continue learning,
              building projects and developing my career.
            </p>

          </div>


          {/* =================================================
              TIMELINE
          ================================================= */}

          <div className="updates-timeline">

            {updates.map((update, index) => (

              <article
                className="update-item"
                key={update.id}
              >

                {/* Timeline line */}

                <div className="update-timeline">

                  <div className="update-dot">
                    <span />
                  </div>

                  {index !== updates.length - 1 && (
                    <div className="update-line" />
                  )}

                </div>


                {/* =================================================
                    UPDATE CARD
                ================================================= */}

                <div className="update-card">

                  <div className="update-card-top">

                    <div className="update-date">

                      <CalendarDays size={14} />

                      <span>
                        {update.date}
                      </span>

                    </div>


                    <div className="update-category">

                      {getCategoryIcon(update.category)}

                      <span>
                        {update.category}
                      </span>

                    </div>

                  </div>


                  <div className="update-card-content">

                    <h3>
                      {update.title}
                    </h3>

                    <p>
                      {update.description}
                    </p>

                  </div>


                  {/* =================================================
                      TAGS
                  ================================================= */}

                  {update.tags?.length > 0 && (

                    <div className="update-tags">

                      {update.tags.map((tag) => (

                        <span key={tag}>
                          {tag}
                        </span>

                      ))}

                    </div>

                  )}


                  <div className="update-card-footer">

                    <span>
                      Professional Journey
                    </span>

                    <ArrowUpRight size={15} />

                  </div>

                </div>

              </article>

            ))}

          </div>


          {/* =================================================
              BOTTOM CTA
          ================================================= */}

          <div className="updates-bottom">

            <div className="updates-bottom-icon">
              <CheckCircle2 size={20} />
            </div>

            <div>

              <h3>
                More updates coming soon.
              </h3>

              <p>
                I'm continuously learning, building and
                improving. Check back for new updates.
              </p>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}

export default Updates;