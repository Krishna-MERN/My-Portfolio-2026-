import {
  ArrowLeft,
  CalendarDays,
  Clock3,
  Share2,
  
} from "lucide-react";

import {
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa6";

import "../../styles/blogformet.css";

const BlogFormat = ({
  title,
  subtitle,
  category,
  date,
  readTime,
  author = "Krishna Kumar Shukla",
  tags = [],
  children,
}) => {
  return (
    <main className="blog-format-page">

      {/* =====================================================
          ARTICLE HERO
      ===================================================== */}

      <section className="blog-format-hero">

        <div className="blog-format-container">

          <a
            href="/blog"
            className="blog-format-back"
          >
            <ArrowLeft size={15} />
            Back to Blog
          </a>


          <div className="blog-format-category">
            {category}
          </div>


          <h1>
            {title}
          </h1>


          {subtitle && (
            <p className="blog-format-subtitle">
              {subtitle}
            </p>
          )}


          {/* =================================================
              META
          ================================================= */}

          <div className="blog-format-meta">

            <span>
              <CalendarDays size={14} />
              {date}
            </span>

            <span>
              <Clock3 size={14} />
              {readTime}
            </span>

            <span>
              By {author}
            </span>

          </div>

        </div>

      </section>


      {/* =====================================================
          ARTICLE BODY
      ===================================================== */}

      <section className="blog-format-content">

        <div className="blog-format-layout">

          {/* Main Article */}

          <article className="blog-article">

            {children}

          </article>


          {/* =================================================
              SIDEBAR
          ================================================= */}

          <aside className="blog-format-sidebar">

            {/* Share */}

            <div className="blog-sidebar-card">

              <span className="blog-sidebar-label">
                SHARE ARTICLE
              </span>

              <div className="blog-share-buttons">

                <a
                  href="#"
                  aria-label="Share on LinkedIn"
                >
                  <FaLinkedinIn size={15} />
                </a>

                <a
                  href="#"
                  aria-label="Share on GitHub"
                >
                  <FaGithub size={15} />
                </a>

                <button
                  type="button"
                  aria-label="Share article"
                  onClick={() => {
                    if (navigator.share) {
                      navigator.share({
                        title,
                        text: subtitle,
                        url: window.location.href,
                      });
                    }
                  }}
                >
                  <Share2 size={15} />
                </button>

              </div>

            </div>


            {/* Tags */}

            {tags.length > 0 && (
              <div className="blog-sidebar-card">

                <span className="blog-sidebar-label">
                  TAGS
                </span>

                <div className="blog-format-tags">

                  {tags.map((tag) => (
                    <span key={tag}>
                      {tag}
                    </span>
                  ))}

                </div>

              </div>
            )}

          </aside>

        </div>

      </section>


      {/* =====================================================
          BOTTOM CTA
      ===================================================== */}

      <section className="blog-format-bottom">

        <div className="blog-format-container">

          <div className="blog-bottom-card">

            <span>
              THANKS FOR READING
            </span>

            <h2>
              Want to explore
              <strong> more?</strong>
            </h2>

            <p>
              Explore more articles, projects and experiences
              from my development journey.
            </p>

            <a href="/blog">
              Explore More Articles
              <ArrowLeft size={15} />
            </a>

          </div>

        </div>

      </section>

    </main>
  );
};

export default BlogFormat;