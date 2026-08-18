import BlogFormat from "../../components/blog/BlogFormat";

import "../../styles/blogDemo.css";

const BlogDemo = () => {
  return (
    <BlogFormat
      title="How I Started My Journey as a Software Developer"
      subtitle="A detailed look at my learning journey, the technologies I explored, the projects I built and the lessons I learned along the way."
      category="CAREER"
      date="August 18, 2026"
      readTime="8 min read"
      author="Krishna Kumar Shukla"
      tags={[
        "Software Development",
        "JavaScript",
        "React",
        "MERN",
        "Career",
        "Learning",
      ]}
    >

      {/* =====================================================
          INTRODUCTION
      ===================================================== */}

      <p className="blog-lead">
        Becoming a software developer is not something that happens
        overnight. It is a continuous process of learning, building,
        making mistakes and improving every day.
      </p>


      <p>
        My journey started with a simple curiosity about how websites
        and applications work. Over time, that curiosity turned into
        an interest in programming, problem solving and software
        development.
      </p>


      <p>
        In this article, I am sharing my journey, the technologies
        I have explored, the projects I have worked on and some of
        the important lessons I have learned.
      </p>


      {/* =====================================================
          TABLE OF CONTENTS
      ===================================================== */}

      <div className="blog-info-box">

        <strong>
          In this article
        </strong>

        <ul>
          <li>
            <a href="#beginning">
              Where it started
            </a>
          </li>

          <li>
            <a href="#technologies">
              Technologies I learned
            </a>
          </li>

          <li>
            <a href="#projects">
              Building projects
            </a>
          </li>

          <li>
            <a href="#lessons">
              Lessons I learned
            </a>
          </li>

          <li>
            <a href="#future">
              What's next
            </a>
          </li>
        </ul>

      </div>


      {/* =====================================================
          SECTION 1
      ===================================================== */}

      <h2 id="beginning">
        Where it all started
      </h2>

      <p>
        Every developer has a starting point. For me, it was the
        curiosity to understand how software works behind the
        screen.
      </p>

      <p>
        Initially, programming felt difficult because there were
        many new concepts to understand. Variables, functions,
        loops, conditions and data structures were just the
        beginning.
      </p>


      <h3>
        Learning the fundamentals
      </h3>

      <p>
        Before jumping into frameworks, I focused on understanding
        the fundamentals of programming and problem solving.
      </p>

      <ul>
        <li>
          Variables and data types
        </li>

        <li>
          Conditional statements
        </li>

        <li>
          Loops and functions
        </li>

        <li>
          Arrays and objects
        </li>

        <li>
          Object-oriented programming
        </li>

        <li>
          Basic data structures and algorithms
        </li>
      </ul>


      {/* =====================================================
          BLOCKQUOTE
      ===================================================== */}

      <blockquote>
        The goal is not to know everything. The goal is to keep
        learning something new every day.
      </blockquote>


      {/* =====================================================
          IMAGE
      ===================================================== */}

      <figure className="blog-demo-image">

        <img
          src="/assets/blog/developer-journey.jpg"
          alt="Software developer working on a project"
        />

        <figcaption>
          Learning and building projects are important parts of
          becoming a better developer.
        </figcaption>

      </figure>


      {/* =====================================================
          SECTION 2
      ===================================================== */}

      <h2 id="technologies">
        Technologies I learned
      </h2>

      <p>
        After building a strong programming foundation, I started
        exploring web development and different technologies used
        to build modern applications.
      </p>


      <h3>
        Frontend development
      </h3>

      <p>
        I started with the basic technologies of the web:
        <strong> HTML, CSS and JavaScript.</strong>
      </p>

      <p>
        Later, I moved towards React.js because of its component
        based architecture and its popularity in modern frontend
        development.
      </p>


      <h3>
        Backend development
      </h3>

      <p>
        To understand complete web applications, I started learning
        Node.js and Express.js and worked with REST APIs.
      </p>


      <h3>
        Database
      </h3>

      <p>
        I also explored MongoDB to understand how application data
        can be stored, retrieved and managed.
      </p>


      {/* =====================================================
          TECHNOLOGY TABLE
      ===================================================== */}

      <h3>
        My current technology stack
      </h3>

      <div className="blog-table-wrapper">

        <table>

          <thead>

            <tr>
              <th>Category</th>
              <th>Technologies</th>
              <th>Level</th>
            </tr>

          </thead>

          <tbody>

            <tr>
              <td>Frontend</td>
              <td>HTML, CSS, JavaScript, React</td>
              <td>Learning / Building</td>
            </tr>

            <tr>
              <td>Backend</td>
              <td>Node.js, Express.js</td>
              <td>Learning / Building</td>
            </tr>

            <tr>
              <td>Database</td>
              <td>MongoDB</td>
              <td>Learning / Building</td>
            </tr>

            <tr>
              <td>Programming</td>
              <td>Java, JavaScript</td>
              <td>Learning</td>
            </tr>

            <tr>
              <td>Problem Solving</td>
              <td>DSA</td>
              <td>Practicing</td>
            </tr>

          </tbody>

        </table>

      </div>


      {/* =====================================================
          LINKS
      ===================================================== */}

      <h3>
        Useful resources
      </h3>

      <p>
        When learning a new technology, documentation and practical
        examples are extremely useful.
      </p>

      <p>
        Some resources that I regularly use include{" "}
        <a
          href="https://developer.mozilla.org/"
          target="_blank"
          rel="noreferrer"
        >
          MDN Web Docs
        </a>
        {" "}and{" "}
        <a
          href="https://react.dev/"
          target="_blank"
          rel="noreferrer"
        >
          React Documentation
        </a>
        .
      </p>


      {/* =====================================================
          SECTION 3
      ===================================================== */}

      <h2 id="projects">
        Building real-world projects
      </h2>

      <p>
        Learning concepts is important, but building projects is
        where those concepts become practical knowledge.
      </p>

      <p>
        While working on projects, I learned how different parts
        of an application communicate with each other and how to
        solve problems that are not always covered in tutorials.
      </p>


      <h3>
        Example project workflow
      </h3>

      <ol>
        <li>
          Understand the problem
        </li>

        <li>
          Plan the application
        </li>

        <li>
          Design the user interface
        </li>

        <li>
          Create the frontend
        </li>

        <li>
          Build APIs and backend logic
        </li>

        <li>
          Connect the database
        </li>

        <li>
          Test and improve the application
        </li>

        <li>
          Deploy the project
        </li>
      </ol>


      {/* =====================================================
          CODE
      ===================================================== */}

      <h3>
        Example JavaScript code
      </h3>

      <p>
        For example, a simple developer profile object can be
        represented like this:
      </p>

      <pre>
{`const developer = {
  name: "Krishna Kumar Shukla",
  role: "Software Developer",
  skills: [
    "JavaScript",
    "React",
    "Node.js",
    "MongoDB",
    "Java",
    "DSA"
  ],
  available: true
};`}
      </pre>


      {/* =====================================================
          INLINE CODE
      ===================================================== */}

      <p>
        In React, components are normally created as reusable
        JavaScript functions. For example, you can create a
        component using <code>const MyComponent = () =&gt; {}</code>.
      </p>


      {/* =====================================================
          HIGHLIGHT BOX
      ===================================================== */}

      <div className="blog-highlight-box">

        <div className="blog-highlight-title">
          💡 Important
        </div>

        <p>
          Don't learn technologies only because they are trending.
          First understand the fundamentals and then use
          technologies to solve real problems.
        </p>

      </div>


      {/* =====================================================
          SECTION 4
      ===================================================== */}

      <h2 id="lessons">
        Lessons I learned
      </h2>

      <p>
        My journey has taught me several lessons that are more
        valuable than simply knowing a programming language.
      </p>


      <h3>
        1. Consistency matters
      </h3>

      <p>
        Programming becomes easier when you practice regularly.
        Even small improvements every day can produce significant
        results over time.
      </p>


      <h3>
        2. Projects teach differently
      </h3>

      <p>
        Tutorials can teach you concepts, but projects teach you
        how to use those concepts together.
      </p>


      <h3>
        3. Errors are part of development
      </h3>

      <p>
        Debugging is not a sign that you are bad at programming.
        It is a normal and important part of software development.
      </p>


      {/* =====================================================
          CHECKLIST
      ===================================================== */}

      <div className="blog-checklist">

        <div>
          <span>✓</span>
          Keep learning
        </div>

        <div>
          <span>✓</span>
          Build projects
        </div>

        <div>
          <span>✓</span>
          Practice DSA
        </div>

        <div>
          <span>✓</span>
          Read documentation
        </div>

        <div>
          <span>✓</span>
          Learn from mistakes
        </div>

      </div>


      {/* =====================================================
          HORIZONTAL LINE
      ===================================================== */}

      <hr />


      {/* =====================================================
          SECTION 5
      ===================================================== */}

      <h2 id="future">
        What's next?
      </h2>

      <p>
        My journey is still continuing. There are many technologies,
        concepts and real-world problems that I want to explore.
      </p>

      <p>
        My current focus is on improving my software development
        skills, strengthening Java and DSA, building better projects
        and preparing myself for professional opportunities.
      </p>


      <p>
        If you are also learning programming, remember that you do
        not have to become perfect before starting to build.
        <strong> Start building, learn from the process and keep
        improving.</strong>
      </p>


      {/* =====================================================
          FINAL QUOTE
      ===================================================== */}

      <blockquote>
        Learn → Build → Break → Debug → Improve → Repeat.
      </blockquote>


      {/* =====================================================
          FINAL LINK
      ===================================================== */}

      <p>
        You can explore more about my work on my{" "}
        <a href="/projects">
          Projects page
        </a>
        {" "}or connect with me through the{" "}
        <a href="/contact">
          Contact page
        </a>
        .
      </p>

    </BlogFormat>
  );
};

export default BlogDemo;