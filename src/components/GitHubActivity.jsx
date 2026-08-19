import {

  GitCommitHorizontal,
  GitPullRequest,
  Star,
  Users,
  BookOpen,
  ArrowUpRight,
  ExternalLink,
} from "lucide-react";
import {
  FaGithub,
 
} from "react-icons/fa6";

import "../styles/GitHubActivity.css";


function GitHubActivity() {

  /*
    =========================================================
    GITHUB DATA

    Update these values whenever you want.

    Later we can replace this static data with GitHub API.
    =========================================================
  */

  const githubData = {
    username: "Krishna-MERN",

    profileUrl: "https://github.com/Krishna-MERN/",

    stats: [
      {
        label: "Repositories",
        value: "15+",
        icon: BookOpen,
      },
      {
        label: "Contributions",
        value: "300+",
        icon: GitCommitHorizontal,
      },
      {
        label: "Followers",
        value: "10+",
        icon: Users,
      },
      {
        label: "Stars Earned",
        value: "20+",
        icon: Star,
      },
    ],

    /*
      Recent repositories
    */

    repositories: [
      {
        name: "Automated-Bus-Scheduling",
        description:
          "MERN-based automated bus scheduling and route management system.",
        language: "JavaScript",
        stars: 3,
        url: "https://github.com/Krishna-MERN/",
      },

      {
        name: "Portfolio",
        description:
          "Personal developer portfolio built with React and Vite.",
        language: "JavaScript",
        stars: 2,
        url: "https://github.com/Krishna-MERN/",
      },

      {
        name: "DSA-Java",
        description:
          "Data structures and algorithm practice using Java.",
        language: "Java",
        stars: 1,
        url: "https://github.com/Krishna-MERN/",
      },
    ],
  };


  /*
    =========================================================
    CONTRIBUTION DATA

    Each number represents contribution intensity.

    0 = No contribution
    1 = Low
    2 = Medium
    3 = High
    4 = Very High

    This is intentionally static for now.
    =========================================================
  */

  const contributionWeeks = [
    [0, 1, 0, 2, 1, 0, 0],
    [1, 2, 3, 1, 0, 2, 1],
    [0, 1, 2, 3, 2, 1, 0],
    [2, 3, 4, 2, 1, 3, 2],
    [1, 2, 1, 3, 4, 2, 1],
    [0, 2, 3, 4, 2, 3, 1],
    [1, 3, 2, 4, 3, 2, 0],
    [0, 1, 2, 3, 1, 2, 1],
    [2, 3, 4, 3, 2, 4, 2],
    [1, 2, 3, 2, 4, 3, 1],
    [0, 1, 2, 3, 2, 1, 0],
    [1, 3, 4, 2, 3, 4, 2],
    [0, 2, 3, 4, 3, 2, 1],
    [1, 2, 1, 3, 4, 2, 3],
    [0, 1, 3, 2, 1, 3, 2],
    [2, 3, 4, 3, 0, 4, 3],
  ];


  return (
    <section className="github-activity">

      <div className="github-activity-container">

        {/* =================================================
            HEADER
        ================================================= */}

        <div className="github-activity-header">

          <div>

            <span className="github-activity-eyebrow">
              GITHUB ACTIVITY
            </span>

            <h2>
              Building in
              <span> public.</span>
            </h2>

          </div>


          <p>
            My GitHub reflects my coding practice, projects,
            experiments and continuous development activity.
          </p>

        </div>


        {/* =================================================
            GITHUB MAIN CARD
        ================================================= */}

        <div className="github-main-card">

          {/* =================================================
              PROFILE HEADER
          ================================================= */}

          <div className="github-profile-header">

            <div className="github-profile-info">

              <div className="github-profile-icon">
                <FaGithub size={25} />
              </div>


              <div>

                <h3>
                  @{githubData.username}
                </h3>

                <span>
                  Software Developer • Open Source Enthusiast
                </span>

              </div>

            </div>


            <a
              href={githubData.profileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="github-profile-button"
            >

              Visit GitHub

              <ArrowUpRight size={15} />

            </a>

          </div>


          {/* =================================================
              STATS
          ================================================= */}

          <div className="github-stats">

            {githubData.stats.map((stat, index) => {

              const Icon = stat.icon;

              return (

                <div
                  className="github-stat"
                  key={index}
                >

                  <div className="github-stat-icon">
                    <Icon size={15} />
                  </div>

                  <div>

                    <strong>
                      {stat.value}
                    </strong>

                    <span>
                      {stat.label}
                    </span>

                  </div>

                </div>

              );

            })}

          </div>


          {/* =================================================
              CONTRIBUTION GRAPH
          ================================================= */}

          <div className="github-contributions">

            <div className="github-contributions-header">

              <div>

                <h4>
                  Contribution Activity
                </h4>

                <span>
                  Coding activity over recent weeks
                </span>

              </div>

              <span className="github-contribution-count">
                300+ contributions
              </span>

            </div>


            <div className="github-graph-wrapper">

              <div className="github-week-labels">

                <span>Mon</span>
                <span>Wed</span>
                <span>Fri</span>

              </div>


              <div className="github-graph">

                {contributionWeeks.map(
                  (week, weekIndex) => (

                    <div
                      className="github-week"
                      key={weekIndex}
                    >

                      {week.map(
                        (level, dayIndex) => (

                          <span
                            className={`github-cell level-${level}`}
                            key={dayIndex}
                            title={`${level} contribution level`}
                          />

                        )
                      )}

                    </div>

                  )
                )}

              </div>

            </div>


            <div className="github-graph-footer">

              <span>
                Less
              </span>

              <div className="github-legend">

                <span className="level-0" />
                <span className="level-1" />
                <span className="level-2" />
                <span className="level-3" />
                <span className="level-4" />

              </div>

              <span>
                More
              </span>

            </div>

          </div>


          {/* =================================================
              RECENT REPOSITORIES
          ================================================= */}

          <div className="github-repositories">

            <div className="github-repositories-header">

              <div>

                <h4>
                  Recent Repositories
                </h4>

                <span>
                  Selected projects from my GitHub
                </span>

              </div>


              <a
                href={githubData.profileUrl}
                target="_blank"
                rel="noopener noreferrer"
              >

                View all

                <ArrowUpRight size={14} />

              </a>

            </div>


            <div className="github-repository-grid">

              {githubData.repositories.map(
                (repository, index) => (

                  <a
                    className="github-repository"
                    href={repository.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    key={index}
                  >

                    <div className="github-repository-top">

                      <BookOpen size={16} />

                      <ExternalLink size={13} />

                    </div>


                    <h5>
                      {repository.name}
                    </h5>


                    <p>
                      {repository.description}
                    </p>


                    <div className="github-repository-meta">

                      <span>
                        <i />
                        {repository.language}
                      </span>

                      <span>
                        <Star size={12} />
                        {repository.stars}
                      </span>

                    </div>

                  </a>

                )
              )}

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default GitHubActivity;
