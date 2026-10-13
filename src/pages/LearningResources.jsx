
import React, { useMemo, useState } from "react";

import {
  Search,
  ExternalLink,
  Download,
  FileText,
  
  Globe,
  BookOpen,
  GraduationCap,
  Bookmark,
  BookmarkCheck,
  Filter,
  Code2,
} from "lucide-react";

import { FaGithub } from "react-icons/fa";

import "../styles/learningResources.css";

/* =========================================================
   RESOURCE DATA
   ========================================================= */

const resources = [
  {
    id: 1,
    title: "JavaScript Tutorial",
    description:
      "Complete JavaScript documentation covering fundamentals, syntax, APIs and modern JavaScript.",
    category: "JavaScript",
    type: "Website",
    level: "Beginner",
    tags: ["JavaScript", "Web Development"],
    url: "https://www.javascripttutorial.net/",
  },

  {
    id: 2,
    title: "React Documentation",
    description:
      "Official React documentation covering components, hooks, state and modern React development.",
    category: "React",
    type: "Website",
    level: "Intermediate",
    tags: ["React", "Frontend"],
    url: "https://react.dev/",
  },
  {
    id: 3,
    title: "React Youtube Video",
    description:
      "Official React documentation covering components, hooks, state and modern React development.",
    category: "React",
    type: "Youtube",
    level: "Intermediate",
    tags: ["React", "Frontend"],
    url: "https://www.youtube.com/watch?v=3LRZRSIh_KE",
  },

  {
    id: 4,
    title: "Java Programming Notes",
    description:
      "Useful Java notes covering OOP, collections, exception handling and core Java concepts.",
    category: "Java",
    type: "PDF",
    level: "Beginner",
    tags: ["Java", "OOP", "Programming"],
    url: "/resources/java-notes.pdf",
    download: true,
  },

  {
    id: 5,
    title: "DSA Problem Solution ",
    description:
      "Practice algorithms and data structures to improve your problem-solving skills.",
    category: "DSA",
    type: "Website",
    level: "Intermediate",
    tags: ["DSA", "Algorithms", "Problem Solving"],
    url: "https://www.techiedelight.com/data-structures-and-algorithms-problems/",
  },
  {
    id: 6,
    title: "DSA Problem to solve ",
    description:
      "Practice algorithms and data structures to improve your problem-solving skills.",
    category: "DSA",
    type: "Website",
    level: "Intermediate",
    tags: ["DSA", "Algorithms", "Problem Solving"],
    url: "https://www.techiedelight.com/",
  },
  {
    id: 7,
    title: "DSA Youtube Playlist GfG ",
    description:
      "Practice algorithms and data structures to improve your problem-solving skills.",
    category: "DSA",
    type: "Youtube",
    level: "Intermediate",
    tags: ["DSA", "Algorithms", "Problem Solving"],
    url: "https://youtu.be/m3fg2PRY1u4",
  },

  {
    id: 8,
    title: "MERN Stack Learning",
    description:
      "Useful resources for learning MongoDB, Express, React and Node.js.",
    category: "MERN",
    type: "Course",
    level: "Intermediate",
    tags: ["MongoDB", "Express", "React", "Node"],
    url: "https://www.youtube.com/",
  },

  {
    id: 9,
    title: "GitHub",
    description:
      "Explore open-source projects, repositories and real-world development practices.",
    category: "Development",
    type: "GitHub",
    level: "Beginner",
    tags: ["Git", "GitHub", "Open Source"],
    url: "https://github.com/",
  },

  {
    id: 10,
    title: "Node.js Documentation",
    description:
      "Official Node.js documentation for backend development and server-side JavaScript.",
    category: "MERN",
    type: "Website",
    level: "Intermediate",
    tags: ["Node.js", "Backend", "JavaScript"],
    url: "https://nodejs.org/docs/latest/api/",
  },

  {
    id: 11,
    title: "MongoDB Documentation",
    description:
      "Official MongoDB documentation covering databases, collections, queries and aggregation.",
    category: "MERN",
    type: "Website",
    level: "Intermediate",
    tags: ["MongoDB", "Database", "Backend"],
    url: "https://www.mongodb.com/docs/",
  },

  {
    id: 12,
    title: "JavaScript Learning Playlist",
    description:
      "A useful YouTube resource for learning JavaScript concepts from basics to advanced topics.",
    category: "JavaScript",
    type: "YouTube",
    level: "Beginner",
    tags: ["JavaScript", "YouTube", "Frontend"],
    url: "https://www.youtube.com/",
  },

  {
    id: 13,
    title: "Git Documentation",
    description:
      "Learn Git commands, branching, merging and version control workflows.",
    category: "Development",
    type: "Website",
    level: "Beginner",
    tags: ["Git", "Version Control"],
    url: "https://git-scm.com/doc",
  },
  {
    id: 14,
    title: "System design Notes",
    description:
      "Learn Git commands, branching, merging and version control workflows.",
    category: "System Design",
    type: "Website",
    level: "Beginner",
    tags: ["Git", "Version Control"],
    url: "https://github.com/Liquidslr/system-design-notes",
  },
];

/* =========================================================
   FILTER OPTIONS
   ========================================================= */

const categories = [
  "All",
  "JavaScript",
  "React",
  "Java",
  "MERN",
  "DSA",
  "System Design",
  "AI",
  "Development",
];

const types = [
  "All",
  "PDF",
  "Website",
  "YouTube",
  "Course",
  "GitHub",
];

/* =========================================================
   RESOURCE ICON
   ========================================================= */

const getResourceIcon = (type) => {
  switch (type) {
    case "PDF":
      return <FileText size={21} />;

    // case "YouTube":
    //   return <Youtube size={21} />;

    case "GitHub":
      return <FaGithub size={21} />;

    case "Course":
      return <GraduationCap size={21} />;

    case "Website":
      return <Globe size={21} />;

    default:
      return <Code2 size={21} />;
  }
};

/* =========================================================
   COMPONENT
   ========================================================= */

function LearningResources() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [type, setType] = useState("All");

  const [bookmarks, setBookmarks] = useState([]);

  /* =======================================================
     FILTER RESOURCES
     ======================================================= */

  const filteredResources = useMemo(() => {
    return resources.filter((resource) => {
      const searchText = search.toLowerCase().trim();

      const matchesSearch =
        searchText === "" ||
        resource.title.toLowerCase().includes(searchText) ||
        resource.description.toLowerCase().includes(searchText) ||
        resource.category.toLowerCase().includes(searchText) ||
        resource.type.toLowerCase().includes(searchText) ||
        resource.tags.some((tag) =>
          tag.toLowerCase().includes(searchText)
        );

      const matchesCategory =
        category === "All" ||
        resource.category === category;

      const matchesType =
        type === "All" ||
        resource.type === type;

      return (
        matchesSearch &&
        matchesCategory &&
        matchesType
      );
    });
  }, [search, category, type]);

  /* =======================================================
     BOOKMARK
     ======================================================= */

  const toggleBookmark = (id) => {
    setBookmarks((previous) => {
      if (previous.includes(id)) {
        return previous.filter(
          (bookmarkId) => bookmarkId !== id
        );
      }

      return [...previous, id];
    });
  };

  /* =======================================================
     CLEAR FILTERS
     ======================================================= */

  const clearFilters = () => {
    setSearch("");
    setCategory("All");
    setType("All");
  };

  /* =======================================================
     JSX
     ======================================================= */

  return (
    <section
      className="resources-section"
      id="resources"
    >
      {/* ===================================================
          HEADER
          =================================================== */}

      <div className="resources-header">

        <div className="resources-heading">

          <span className="section-label">
            <BookOpen size={16} />
            LEARNING HUB
          </span>

          <h2>
            Resources I Use<span>.</span>
          </h2>

          <p>
            A personal collection of useful resources,
            documentation, courses and references for
            continuous learning.
          </p>

        </div>

        <div className="resource-count">

          <strong>
            {resources.length}
          </strong>

          <span>
            Resources
          </span>

        </div>

      </div>

      {/* ===================================================
          SEARCH
          =================================================== */}

      <div className="resources-toolbar">

        <div className="resource-search">

          <Search size={18} />

          <input
            type="text"
            placeholder="Search resources..."
            value={search}
            onChange={(event) =>
              setSearch(event.target.value)
            }
          />

        </div>

        <div className="filter-icon">
          <Filter size={18} />
        </div>

      </div>

      {/* ===================================================
          CATEGORY FILTER
          =================================================== */}

      <div className="resource-filters">

        {categories.map((item) => (
          <button
            key={item}
            type="button"
            className={
              category === item
                ? "active"
                : ""
            }
            onClick={() =>
              setCategory(item)
            }
          >
            {item}
          </button>
        ))}

      </div>

      {/* ===================================================
          RESOURCE TYPE FILTER
          =================================================== */}

      <div className="resource-types">

        {types.map((item) => (
          <button
            key={item}
            type="button"
            className={
              type === item
                ? "active"
                : ""
            }
            onClick={() =>
              setType(item)
            }
          >
            {item}
          </button>
        ))}

      </div>

      {/* ===================================================
          RESULT INFORMATION
          =================================================== */}

      <div className="resources-result-info">

        <span>
          Showing{" "}
          <strong>
            {filteredResources.length}
          </strong>{" "}
          resources
        </span>

        {(search ||
          category !== "All" ||
          type !== "All") && (
          <button
            type="button"
            onClick={clearFilters}
          >
            Clear filters
          </button>
        )}

      </div>

      {/* ===================================================
          RESOURCE GRID
          =================================================== */}

      {filteredResources.length > 0 ? (

        <div className="resources-grid">

          {filteredResources.map((resource) => {

            const isBookmarked =
              bookmarks.includes(resource.id);

            return (
              <article
                className="resource-card"
                key={resource.id}
              >

                {/* CARD TOP */}

                <div className="resource-card-top">

                  <div className="resource-type-icon">
                    {getResourceIcon(
                      resource.type
                    )}
                  </div>

                  <button
                    type="button"
                    className="bookmark-btn"
                    onClick={() =>
                      toggleBookmark(
                        resource.id
                      )
                    }
                    aria-label={
                      isBookmarked
                        ? "Remove bookmark"
                        : "Bookmark resource"
                    }
                    title={
                      isBookmarked
                        ? "Remove bookmark"
                        : "Bookmark"
                    }
                  >
                    {isBookmarked ? (
                      <BookmarkCheck size={18} />
                    ) : (
                      <Bookmark size={18} />
                    )}
                  </button>

                </div>

                {/* CARD CONTENT */}

                <div className="resource-content">

                  <div className="resource-meta">

                    <span>
                      {resource.type}
                    </span>

                    <span className="dot">
                      •
                    </span>

                    <span>
                      {resource.level}
                    </span>

                  </div>

                  <h3>
                    {resource.title}
                  </h3>

                  <p>
                    {resource.description}
                  </p>

                  {/* TAGS */}

                  <div className="resource-tags">

                    {resource.tags.map(
                      (tag) => (
                        <span key={tag}>
                          #{tag}
                        </span>
                      )
                    )}

                  </div>

                </div>

                {/* CARD ACTION */}

                <div className="resource-actions">

                  {resource.download ? (

                    <a
                      href={resource.url}
                      download
                      className="resource-primary-btn"
                    >
                      <Download size={16} />
                      Download PDF
                    </a>

                  ) : (

                    <a
                      href={resource.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="resource-primary-btn"
                    >
                      <ExternalLink size={16} />
                      Open Resource
                    </a>

                  )}

                </div>

              </article>
            );
          })}

        </div>

      ) : (

        /* =================================================
           EMPTY STATE
           ================================================= */

        <div className="resources-empty">

          <Search size={35} />

          <h3>
            No resources found
          </h3>

          <p>
            Try another search term or
            change the filters.
          </p>

          <button
            type="button"
            onClick={clearFilters}
          >
            Reset Filters
          </button>

        </div>

      )}

    </section>
  );
}

export default LearningResources;
