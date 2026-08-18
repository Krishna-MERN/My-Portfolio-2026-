
const projects = [
  {
    id: 1,
    number: "01",
    title: "Automated Bus Scheduling and Route Management System",
    category: "Full Stack",
    year: "2026",
    role: "Full Stack Developer",
    status: "Completed",

    shortDescription:
      "A MERN-based transportation management system designed to automate bus scheduling, route management and passenger ticket operations.",

    overview:
      "The system provides a centralized platform for managing buses, routes, schedules and passenger tickets. It helps automate the scheduling process by considering bus availability and capacity while providing separate workflows for administrators and passengers.",

    problem:
      "Managing bus schedules, routes and available vehicles manually can be time-consuming and difficult to coordinate. The project was designed to provide a centralized web application that simplifies these operations.",

    solution:
      "A full-stack MERN application was developed with dedicated APIs for buses, routes, tickets and schedules. The scheduling system processes available buses and assigns them according to defined scheduling criteria.",

    technologies: [
      {
        name: "React.js",
        purpose: "Frontend UI",
      },
      {
        name: "Node.js",
        purpose: "Backend runtime",
      },
      {
        name: "Express.js",
        purpose: "REST APIs",
      },
      {
        name: "MongoDB",
        purpose: "Database",
      },
      {
        name: "Tailwind CSS",
        purpose: "UI styling",
      },
      {
        name: "JavaScript",
        purpose: "Application logic",
      },
      {
        name: "date-fns",
        purpose: "Date & scheduling operations",
      },
    ],

    features: [
      "Automated bus scheduling",
      "Bus availability management",
      "Bus capacity prioritization",
      "Route and stop management",
      "Passenger ticket booking",
      "Admin scheduling dashboard",
      "Passenger dashboard",
      "REST API integration",
    ],

    challenges: [
      {
        title: "Automated Scheduling",
        description:
          "Designing a scheduling process that could consider available buses and their capacity while generating schedules.",
      },
      {
        title: "Frontend & Backend Integration",
        description:
          "Connecting React interfaces with REST APIs for buses, routes, tickets and schedules.",
      },
      {
        title: "Data Management",
        description:
          "Designing MongoDB collections for buses, routes, tickets and generated schedules.",
      },
    ],

    architecture: [
      "React.js",
      "Express.js",
      "Node.js",
      "MongoDB",
    ],

    screenshots: [
      {
        image: "https://i.ytimg.com/vi/Xk7rW0hQyMo/maxresdefault.jpg",
        
        title: "Admin Dashboard",
      },
      {
        image: "/projects/bus/scheduling.png",
        title: "Bus Scheduling",
      },
      {
        image: "/projects/bus/ticket-booking.png",
        title: "Ticket Booking",
      },
    ],

    futureImprovements: [
      "Real-time bus tracking",
      "Online payment integration",
      "Advanced scheduling analytics",
      "Driver management",
      "Role-based authentication",
    ],

    github: "#",
    live: "#",
  },


  /* =====================================================
     ADD YOUR NEXT PROJECT HERE
  ===================================================== */

  {
    id: 2,
    number: "02",
    title: "Your Next Project",
    category: "Frontend",
    year: "2026",
    role: "Developer",
    status: "Completed",

    shortDescription:
      "Add a short professional description of your project here.",

    overview:
      "Add a detailed overview of the project here.",

    problem:
      "Describe the problem this project was designed to solve.",

    solution:
      "Explain the approach and solution you implemented.",

    technologies: [
      {
        name: "React.js",
        purpose: "Frontend UI",
      },
      {
        name: "JavaScript",
        purpose: "Application logic",
      },
    ],

    features: [
      "Feature one",
      "Feature two",
      "Feature three",
      "Feature four",
    ],

    challenges: [
      {
        title: "Challenge",
        description:
          "Describe an important development challenge.",
      },
    ],

    architecture: [
      "React.js",
      "JavaScript",
    ],

    screenshots: [
      {
        image: "/projects/project-2/dashboard.png",
        title: "Project Dashboard",
      },
    ],

    futureImprovements: [
      "Future improvement one",
      "Future improvement two",
    ],

    github: "#",
    live: "#",
  },
];

export default projects;