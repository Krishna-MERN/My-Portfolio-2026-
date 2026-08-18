import {
  Trophy,
  Medal,
  Award,
  Star,
  CalendarDays,
  ExternalLink,
  ArrowRight,
  Target,
  Sparkles,
} from "lucide-react";

import "../styles/Achievements.css";

const Achievements = () => {
  /*
   * =========================================================
   * ACHIEVEMENTS DATA
   *
   * Add your achievements here.
   *
   * Examples:
   * - Hackathon
   * - Coding competition
   * - Academic achievement
   * - Project recognition
   * - Competition rank
   * - Leadership
   * - Awards
   *
   * Keep future achievements commented until completed.
   * =========================================================
   */

  const achievements = [
    {
      title: "Academic Achievement",
      category: "Academic",
      date: "2026",
      organization: "Your College / University",
      description:
        "Maintained strong academic performance throughout the B.Tech Computer Science and Engineering program.",
      icon: Medal,
      highlight: "B.Tech CSE",
      link: "#",
    },

    {
      title: "Competitive Programming",
      category: "Coding",
      date: "2026",
      organization: "LeetCode / HackerRank",
      description:
        "Consistently practicing data structures, algorithms and problem solving through competitive programming platforms.",
      icon: Trophy,
      highlight: "Problem Solving",
      link: "#",
    },

    {
      title: "Full-Stack Development Projects",
      category: "Development",
      date: "2026",
      organization: "Personal / Academic Projects",
      description:
        "Designed and developed practical web applications using modern technologies and full-stack development practices.",
      icon: Star,
      highlight: "MERN Stack",
      link: "/projects",
    },


    /*
     * =======================================================
     * FUTURE ACHIEVEMENTS
     * Uncomment when applicable.
     * =======================================================

    {
      title: "Hackathon Winner",
      category: "Hackathon",
      date: "2026",
      organization: "Hackathon Name",
      description:
        "Won / secured a position in a competitive hackathon by building an innovative technology solution.",
      icon: Trophy,
      highlight: "Winner",
      link: "https://...",
    },

    {
      title: "Coding Competition Achievement",
      category: "Competition",
      date: "2026",
      organization: "Competition Name",
      description:
        "Achieved a notable rank in a competitive programming or coding competition.",
      icon: Medal,
      highlight: "Top Performer",
      link: "https://...",
    },

    {
      title: "Project Recognition",
      category: "Project",
      date: "2026",
      organization: "Organization / Institution",
      description:
        "Received recognition for developing an impactful software project.",
      icon: Award,
      highlight: "Recognized Project",
      link: "https://...",
    },

    {
      title: "Leadership Achievement",
      category: "Leadership",
      date: "2026",
      organization: "Organization / College",
      description:
        "Led a team or initiative and successfully delivered the planned outcome.",
      icon: Star,
      highlight: "Leadership",
      link: "https://...",
    },

    */
  ];


  return (
    <main className="achievements-page">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="achievements-hero">

        <div className="achievements-container">

          <div className="achievements-hero-content">

            <span className="achievements-eyebrow">
              ACHIEVEMENTS & MILESTONES
            </span>

            <h1>
              Milestones that
              <span> define the journey.</span>
            </h1>

            <p>
              A collection of milestones, accomplishments and
              experiences that represent my growth in academics,
              technology, problem solving and professional development.
            </p>

            <div className="achievement-stats">

              <div className="achievement-stat">
                <strong>{achievements.length}</strong>
                <span>Achievements</span>
              </div>

              <div className="achievement-stat">
                <strong>∞</strong>
                <span>Learning</span>
              </div>

              <div className="achievement-stat">
                <strong>01</strong>
                <span>Journey</span>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          ACHIEVEMENTS
      ===================================================== */}

      <section className="achievements-section">

        <div className="achievements-container">

          <div className="achievements-heading">

            <span>
              MY MILESTONES
            </span>

            <h2>
              Achievements &
              <strong> accomplishments.</strong>
            </h2>

            <p>
              Some of the milestones that have contributed to my
              technical and personal growth.
            </p>

          </div>


          <div className="achievements-grid">

            {achievements.map((achievement, index) => {

              const Icon = achievement.icon;

              return (
                <article
                  className="achievement-card"
                  key={index}
                >

                  {/* Card Header */}

                  <div className="achievement-card-header">

                    <div className="achievement-icon">
                      <Icon size={22} />
                    </div>

                    <span className="achievement-category">
                      {achievement.category}
                    </span>

                  </div>


                  {/* Main Content */}

                  <div className="achievement-content">

                    <div className="achievement-highlight">
                      {achievement.highlight}
                    </div>

                    <h3>
                      {achievement.title}
                    </h3>

                    <div className="achievement-organization">
                      <Award size={13} />
                      {achievement.organization}
                    </div>

                    <p>
                      {achievement.description}
                    </p>

                  </div>


                  {/* Footer */}

                  <div className="achievement-footer">

                    <div className="achievement-date">
                      <CalendarDays size={13} />
                      {achievement.date}
                    </div>

                    {achievement.link &&
                      achievement.link !== "#" && (
                        <a
                          href={achievement.link}
                          className="achievement-link"
                          target={
                            achievement.link.startsWith("http")
                              ? "_blank"
                              : undefined
                          }
                          rel={
                            achievement.link.startsWith("http")
                              ? "noopener noreferrer"
                              : undefined
                          }
                        >
                          View Details
                          <ExternalLink size={13} />
                        </a>
                      )}

                  </div>

                </article>
              );
            })}

          </div>

        </div>

      </section>


      {/* =====================================================
          ACHIEVEMENT PHILOSOPHY
      ===================================================== */}

      <section className="achievement-philosophy">

        <div className="achievements-container">

          <div className="philosophy-card">

            <div className="philosophy-icon">
              <Target size={25} />
            </div>

            <div className="philosophy-content">

              <span>
                MY APPROACH
              </span>

              <h2>
                Achievements are
                <strong> milestones, not destinations.</strong>
              </h2>

              <p>
                Every achievement represents something I learned,
                built or improved. I focus on using each milestone
                as motivation to take on more challenging problems
                and continue developing as a software developer.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          GROWTH AREAS
      ===================================================== */}

      <section className="achievement-growth">

        <div className="achievements-container">

          <div className="growth-heading">

            <span>
              FUTURE MILESTONES
            </span>

            <h2>
              More goals.
              <strong> More challenges.</strong>
            </h2>

            <p>
              Areas where I want to continue challenging myself
              and build meaningful achievements.
            </p>

          </div>


          <div className="growth-grid">

            <div className="growth-item">

              <div className="growth-number">
                01
              </div>

              <div>
                <h3>
                  Competitive Programming
                </h3>

                <p>
                  Improve problem solving and algorithmic thinking
                  through consistent coding practice.
                </p>
              </div>

            </div>


            <div className="growth-item">

              <div className="growth-number">
                02
              </div>

              <div>
                <h3>
                  Hackathons
                </h3>

                <p>
                  Participate in technical competitions and build
                  innovative solutions under real-world constraints.
                </p>
              </div>

            </div>


            <div className="growth-item">

              <div className="growth-number">
                03
              </div>

              <div>
                <h3>
                  Open Source
                </h3>

                <p>
                  Contribute to open-source projects and collaborate
                  with developers from the community.
                </p>
              </div>

            </div>


            <div className="growth-item">

              <div className="growth-number">
                04
              </div>

              <div>
                <h3>
                  Professional Growth
                </h3>

                <p>
                  Continue developing industry-ready skills and
                  contribute to impactful software projects.
                </p>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="achievements-cta">

        <div className="achievements-container">

          <div className="achievements-cta-card">

            <Sparkles size={25} />

            <span>
              KEEP BUILDING
            </span>

            <h2>
              The next milestone
              <strong> starts here.</strong>
            </h2>

            <p>
              Explore the projects, skills and experiences behind
              these achievements.
            </p>

            <div className="achievements-cta-actions">

              <a href="/projects">
                Explore Projects
                <ArrowRight size={15} />
              </a>

              <a
                href="/experience"
                className="secondary-achievement-cta"
              >
                View Experience
                <ArrowRight size={15} />
              </a>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
};

export default Achievements;