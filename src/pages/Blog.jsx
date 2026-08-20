import {
  ArrowRight,
  BookOpen,
  CalendarDays,
  Clock3,
  Search,
  Sparkles,
} from "lucide-react";

import { Link } from "react-router-dom";

import blogData from "../data/blogData";

import "../styles/Blog.css";

const Blog = () => {
  // =========================================================
  // FEATURED POSTS
  // Featured logic remains unchanged
  // =========================================================

  const featuredPosts = blogData.filter((post) => post.featured);

  // =========================================================
  // LATEST POSTS
  // Highest ID first
  // Lowest ID last
  // =========================================================

  const latestPosts = blogData
    .filter((post) => !post.featured)
    .sort((a, b) => Number(b.id) - Number(a.id));

  const categories = ["All", ...new Set(blogData.map((post) => post.category))];

  return (
    <main className="blog-page">
      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="blog-hero">
        <div className="blog-container">
          <div className="blog-hero-content">
            <span className="blog-eyebrow">
              <BookOpen size={13} />
              MY BLOG
            </span>

            <h1>
              Thoughts,
              <span>ideas & lessons.</span>
            </h1>

            <p>
              I write about software development, programming, technology,
              career growth, learning experiences and things I discover while
              building products.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          BLOG CONTENT
      ===================================================== */}

      <section className="blog-content">
        <div className="blog-container">
          {/* =================================================
              CATEGORY FILTER
          ================================================= */}

          <div className="blog-toolbar">
            <div className="blog-categories">
              {categories.map((category, index) => (
                <button
                  key={category}
                  className={
                    index === 0 ? "blog-category active" : "blog-category"
                  }
                >
                  {category}
                </button>
              ))}
            </div>

            <div className="blog-search">
              <Search size={15} />

              <input
                type="text"
                placeholder="Search articles..."
                aria-label="Search articles"
              />
            </div>
          </div>

          {/* =================================================
              FEATURED POSTS
          ================================================= */}

          {featuredPosts.length > 0 && (
            <section className="blog-featured">
              <div className="blog-section-heading">
                <div>
                  <span>FEATURED</span>

                  <h2>
                    Featured
                    <strong>articles.</strong>
                  </h2>
                </div>

                <Sparkles size={19} />
              </div>

              <div className="featured-blog-grid">
                {featuredPosts.map((post) => (
                  <article className="featured-blog-card" key={post.id}>
                    <div className="featured-blog-top">
                      <span className="blog-post-category">
                        {post.category}
                      </span>

                      <span className="blog-featured-label">Featured</span>
                    </div>

                    <div className="featured-blog-body">
                      <h3>{post.title}</h3>

                      <p>{post.excerpt}</p>

                      <div className="blog-tags">
                        {post.tags.map((tag) => (
                          <span key={tag}>{tag}</span>
                        ))}
                      </div>
                    </div>

                    <div className="blog-card-footer">
                      <div className="blog-meta">
                        <span>
                          <CalendarDays size={12} />

                          {post.date}
                        </span>

                        <span>
                          <Clock3 size={12} />

                          {post.readTime}
                        </span>
                      </div>

                      <Link to={`/blog/${post.id}`} className="blog-read-link">
                        Read Article
                        <ArrowRight size={14} />
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          )}

          {/* =================================================
              LATEST ARTICLES
          ================================================= */}

          <section className="blog-latest">
            <div className="blog-section-heading">
              <div>
                <span>LATEST ARTICLES</span>

                <h2>
                  From the
                  <strong>blog.</strong>
                </h2>
              </div>
            </div>

            <div className="latest-blog-grid">
              {latestPosts.map((post) => (
                <article className="latest-blog-card" key={post.id}>
                  <div className="latest-blog-category">{post.category}</div>

                  <h3>{post.title}</h3>

                  <p>{post.excerpt}</p>

                  <div className="latest-blog-tags">
                    {post.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>

                  <div className="latest-blog-footer">
                    <div className="blog-meta">
                      <span>
                        <CalendarDays size={12} />

                        {post.date}
                      </span>

                      <span>
                        <Clock3 size={12} />

                        {post.readTime}
                      </span>
                    </div>

                    <Link
                      to={`/blog/${post.id}`}
                      aria-label={`Read ${post.title}`}
                    >
                      <ArrowRight size={15} />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* =================================================
              BLOG CTA
          ================================================= */}

          <section className="blog-cta">
            <div className="blog-cta-content">
              <BookOpen size={24} />

              <span>KEEP LEARNING</span>

              <h2>
                Always learning.
                <strong>Always building.</strong>
              </h2>

              <p>
                Follow my journey as I continue learning new technologies,
                solving problems and building software.
              </p>

              <Link to="/projects">
                Explore My Projects
                <ArrowRight size={15} />
              </Link>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
};

export default Blog;
