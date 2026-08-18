import {
  Code2,
  Trophy,
  ExternalLink,
  ArrowUpRight,
} from "lucide-react";

import "../styles/CodingProfiles.css";


function CodingProfiles() {

  const profiles = [

    {
      id: "leetcode",
      name: "LeetCode",
      username: "your_username",

      description:
        "Problem solving, DSA and competitive programming.",

      stats: [
        {
          label: "Problems",
          value: "250+",
        },
        {
          label: "Rating",
          value: "1650",
        },
      ],

      icon: Code2,

      url: "https://leetcode.com/",
    },


    {
      id: "hackerrank",
      name: "HackerRank",
      username: "your_username",

      description:
        "Programming challenges, certifications and skill badges.",

      stats: [
        {
          label: "Badges",
          value: "5+",
        },
        {
          label: "Skills",
          value: "10+",
        },
      ],

      icon: Trophy,

      url: "https://www.hackerrank.com/",
    },


    // {
    //   id: "geeksforgeeks",
    //   name: "GeeksforGeeks",
    //   username: "your_username",

    //   description:
    //     "Data structures, algorithms and computer science practice.",

    //   stats: [
    //     {
    //       label: "Problems",
    //       value: "300+",
    //     },
    //     {
    //       label: "Score",
    //       value: "800+",
    //     },
    //   ],

    //   icon: Code2,

    //   url: "https://www.geeksforgeeks.org/",
    // },


    // {
    //   id: "codechef",
    //   name: "CodeChef",
    //   username: "your_username",

    //   description:
    //     "Competitive programming and algorithmic problem solving.",

    //   stats: [
    //     {
    //       label: "Rating",
    //       value: "1450",
    //     },
    //     {
    //       label: "Problems",
    //       value: "100+",
    //     },
    //   ],

    //   icon: Trophy,

    //   url: "https://www.codechef.com/",
    // },


    {
      id: "github",
      name: "GitHub",
      username: "your_username",

      description:
        "Projects, open-source work and development activity.",

      stats: [
        {
          label: "Repositories",
          value: "15+",
        },
        {
          label: "Projects",
          value: "10+",
        },
      ],

      icon: Code2,

      url: "https://github.com/",
    },

  ];


  return (
    <section className="coding-profiles">

      <div className="coding-profiles-container">

        {/* =================================================
            HEADER
        ================================================= */}

        <div className="coding-profiles-header">

          <div>

            <span className="coding-profiles-eyebrow">
              CODING PROFILES
            </span>

            <h2>
              I build,
              <span> solve & learn.</span>
            </h2>

          </div>


          <p>
            My coding journey across problem-solving,
            competitive programming and developer
            platforms.
          </p>

        </div>


        {/* =================================================
            PROFILE GRID
        ================================================= */}

        <div className="coding-profiles-grid">

          {profiles.map((profile) => {

            const Icon = profile.icon;

            return (

              <article
                className="coding-profile-card"
                key={profile.id}
              >

                {/* =================================================
                    CARD HEADER
                ================================================= */}

                <div className="coding-profile-card-header">

                  <div className="coding-profile-icon">
                    <Icon size={21} />
                  </div>


                  <a
                    href={profile.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="coding-profile-external"
                    aria-label={`Visit ${profile.name}`}
                  >
                    <ExternalLink size={15} />
                  </a>

                </div>


                {/* =================================================
                    CONTENT
                ================================================= */}

                <div className="coding-profile-content">

                  <h3>
                    {profile.name}
                  </h3>

                  <span className="coding-profile-username">
                    @{profile.username}
                  </span>

                  <p>
                    {profile.description}
                  </p>

                </div>


                {/* =================================================
                    STATS
                ================================================= */}

                <div className="coding-profile-stats">

                  {profile.stats.map((stat, index) => (

                    <div
                      className="coding-profile-stat"
                      key={index}
                    >

                      <strong>
                        {stat.value}
                      </strong>

                      <span>
                        {stat.label}
                      </span>

                    </div>

                  ))}

                </div>


                {/* =================================================
                    PROFILE LINK
                ================================================= */}

                <a
                  href={profile.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="coding-profile-link"
                >

                  View Profile

                  <ArrowUpRight size={15} />

                </a>

              </article>

            );
          })}

        </div>


        {/* =================================================
            FOOTER
        ================================================= */}

        <div className="coding-profiles-footer">

          <span>
            More platforms and achievements coming soon.
          </span>

        </div>

      </div>

    </section>
  );
}

export default CodingProfiles;