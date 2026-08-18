
import BlogFormat from "../../components/blog/BlogFormat";

const MyJourney = () => {
  return (
    <BlogFormat
      title="My Journey into Software Development"
      subtitle="From learning programming fundamentals to building real-world applications."
      category="Career"
      date="August 18, 2026"
      readTime="5 min read"
      tags={[
        "Career",
        "Software Development",
        "Learning",
        "Programming",
      ]}
    >

      <h2>
        Where it all started
      </h2>

      <p>
        My journey into software development started with curiosity
        about how websites and applications actually work.
      </p>

      <p>
        As I started learning programming, I gradually became
        interested in solving problems through code and building
        things that people can actually use.
      </p>


      <h2>
        Learning the fundamentals
      </h2>

      <p>
        I started by understanding programming fundamentals,
        problem solving, data structures and algorithms.
      </p>

      <blockquote>
        Consistency is more important than trying to learn
        everything at once.
      </blockquote>


      <h3>
        Technologies I explored
      </h3>

      <ul>
        <li>JavaScript</li>
        <li>React.js</li>
        <li>Node.js</li>
        <li>Express.js</li>
        <li>MongoDB</li>
        <li>Java</li>
      </ul>


      <h2>
        Building real projects
      </h2>

      <p>
        After learning the fundamentals, I started building
        practical projects to understand how different technologies
        work together.
      </p>


      <h3>
        Example code
      </h3>

      <pre>
{`const developer = {
  name: "Krishna Kumar Shukla",
  role: "Software Developer",
  stack: ["React", "Node.js", "MongoDB"],
};`}
      </pre>


      <h2>
        What I learned
      </h2>

      <p>
        One of the biggest lessons from this journey is that
        building projects exposes you to problems that tutorials
        often don't cover.
      </p>

      <hr />

      <p>
        The journey is still continuing. There is always another
        technology to learn, another problem to solve and another
        project to build.
      </p>

    </BlogFormat>
  );
};

export default MyJourney;