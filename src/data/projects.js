import busimage1 from "../assets/project/bus/busimage1.png";
import busimage2 from "../assets/project/bus/busimage2.png";
import busimage3 from "../assets/project/bus/busimage3.png";

import examimage1 from "../assets/project/examprep/examimage1.png";
import examimage2 from "../assets/project/examprep/examimage2.png";
import examimage3 from "../assets/project/examprep/examimage3.png";
import examimage4 from "../assets/project/examprep/examimage4.png";

import growimage1 from "../assets/project/grow-scale/growimage1.png";
import growimage2 from "../assets/project/grow-scale/growimage2.png";
import growimage3 from "../assets/project/grow-scale/growimage3.png";
import growimage4 from "../assets/project/grow-scale/growimage4.png";
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

    architecture: ["React.js", "Express.js", "Node.js", "MongoDB"],

    screenshots: [
      {
        image: busimage1,

        title: "Bus Management",
      },
      {
        image: busimage2,
        title: "Bus Scheduling",
      },
      {
        image: busimage3,
        title: "Admin Dashboard",
      },
    ],

    futureImprovements: [
      "Real-time bus tracking",
      "Online payment integration",
      "Advanced scheduling analytics",
      "Driver management",
      "Role-based authentication",
    ],

    github: "https://github.com/Krishna-MERN/Automated-Bus-Scheduling-",
    live: "https://github.com/Krishna-MERN/Automated-Bus-Scheduling-",
  },

  /* =====================================================
     ADD YOUR NEXT PROJECT HERE
  ===================================================== */

  {
    id: 2,
    number: "02",
    title: "ExamPrep - A Exam Management System",
    category: "Full Stack - MERN",
    year: "2025",
    role: "Full Stack Developer",
    status: "Completed",

    shortDescription:
      "ExamPrep is a web-based exam preparation platform designed to help students practice questions, improve their knowledge, and track their preparation progress.",

    overview:
      "ExamPrep provides students with a structured platform for practicing MCQs, mock tests, and subject-wise questions. It aims to make exam preparation more organized, interactive, and accessible.",

    problem:
      "Students struggle to find organized practice material. Difficult to track preparation and performance. Manual evaluation of practice tests is time-consuming. Lack of personalized practice and instant feedback.",

    solution:
      "Centralized platform for exam preparation. Interactive MCQ-based practice and tests. Automatic evaluation and score generation. Performance tracking to identify weak areas.",

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
    ],

    features: [
      "📚 Subject-wise Question Practice",
      "📝 Online Mock Tests",
      "✅ MCQ-based Exams",
      "⚡ Instant Result & Evaluation",
      "📊 Performance Tracking",
      "👤 User Profile",
      "🔍 Question/Topic Selection",
      "📱 Responsive Interface",
    ],

    challenges: [
      {
        title: "Question Management",
        description:
          "Designing an efficient system to organize and manage questions based on subjects, topics and difficulty levels.",
      },
      {
        title: "Test Evaluation",
        description:
          "Implementing an automatic evaluation process to calculate scores and display accurate results instantly.",
      },
      {
        title: "Frontend & Backend Integration",
        description:
          "Connecting React interfaces with REST APIs for questions, tests, users and performance data.",
      },
      {
        title: "Performance Tracking",
        description:
          "Managing and analyzing user test results to provide meaningful performance insights.",
      },
    ],

    architecture: ["React.js", "Express.js", "Node.js", "MongoDB"],

    screenshots: [
      {
        image: examimage1,

        title: "Admin Dashboard",
      },
      {
        image: examimage2,
        title: "Examinee Dashboard",
      },
      {
        image: examimage3,
        title: "Registration",
      },
    ],

    futureImprovements: [
      "AI-based personalized question recommendations.",
      "Adaptive difficulty based on performance.",
      "Previous-year question paper integration.",
      "Detailed performance analytics.",
      "Leaderboard and ranking system.",
      "Mobile application.",
      "AI-powered doubt-solving assistant.",
    ],

    github: "https://github.com/Krishna-MERN/ExamPrep1",
    live: "https://examprep1.vercel.app/",
  },

  /* =====================================================
     ADD YOUR NEXT PROJECT HERE
  ===================================================== */

  {
    id: 3,
  number: "03",
  title: "Grow Scale - Nursery & Landscaping Website",
  category: "Frontend - React.js",
  year: "2025",
  role: "Frontend Developer",
  status: "Completed",

  shortDescription:
    "A modern responsive website developed for Grow Scale to showcase its nursery, landscaping, plantation, soil testing, and consultancy services.",

  overview:
    "Grow Scale is a professional business website designed to present the company's landscaping and plantation services, showcase projects, provide information about its branches, and help potential customers connect with the business.",

  problem:
    "The business needed a professional online presence to showcase its services, projects, branch locations, and expertise while making it easier for potential customers to explore and contact the company.",

  solution:
    "Developed a responsive and user-friendly React website with dedicated service and project sections, branch information, company details, career and contact pages, and a clear navigation structure.",

  technologies: [
    {
      name: "React.js",
      purpose: "Frontend UI development",
    },
    {
      name: "JavaScript",
      purpose: "Application logic and interactions",
    },
    {
      name: "Tailwind CSS",
      purpose: "Responsive UI styling",
    },
    {
      name: "Vite",
      purpose: "Development and build tool",
    },
  ],

 features: [
    "🌱 Landscaping & Plantation Services",
    "🏡 Residential & Farm Landscaping",
    "🛣️ Road & Highway Plantation",
    "🌿 Commercial Plantation",
    "🧪 Soil Testing & Green Planning",
    "🔧 Maintenance & Consultancy",
    "📁 Projects Showcase",
    "📍 Branch Locations",
    "💼 Career Section",
    "📞 Contact & Inquiry Section",
    "📱 Fully Responsive Design",
  ],

  challenges: [
    {
      title: "Service Presentation",
      description:
        "Designing a clear and engaging interface to present multiple landscaping, plantation and consultancy services.",
    },
    {
      title: "Responsive Design",
      description:
        "Creating a responsive layout that provides a consistent user experience across desktop, tablet and mobile devices.",
    },
    {
      title: "Project Showcase",
      description:
        "Structuring project content and visuals in an attractive way to effectively showcase the company's work and expertise.",
    },
    {
      title: "Navigation & User Experience",
      description:
        "Creating an intuitive navigation structure that allows visitors to quickly explore services, projects, branches and contact information.",
    },
  ],

  architecture: ["React.js", "JavaScript", "Tailwind CSS", "Vite"],


    screenshots: [
      {
        image: growimage1,

        title: "Home",
      },
      {
        image: growimage2,
        title: "Offers",
      },
      {
        image: growimage3,
        title: "Projects",
      },
    ],

   futureImprovements: [
  "Online quotation and inquiry management.",
  "Customer inquiry and lead management system.",
  "Dynamic project and portfolio management.",
  "Online booking/request system for landscaping services.",
  "Customer reviews and testimonials section.",
  "Integration with Google Maps for branch locations.",
  "Admin dashboard for managing services, projects and inquiries.",
  "SEO optimization and performance improvements.",
],

    github: "https://github.com/Krishna-MERN",
    live: "grow-scale.vercel.app",
  },

  /* =====================================================
     ADD YOUR NEXT PROJECT HERE
  ===================================================== */

  // {
  //   id: 4,
  //   number: "04",
  //   title: "My Next Project is comming soon...",
  //   category: "Mistry..",
  //   year: "2026",
  //   role: "Developer",
  //   status: "Ongoing",

  //   shortDescription:
  //     "Add a short professional description of your project here.",

  //   overview: "Add a detailed overview of the project here.",

  //   problem: "Describe the problem this project was designed to solve.",

  //   solution: "Explain the approach and solution you implemented.",

  //   technologies: [
  //     {
  //       name: "React.js",
  //       purpose: "Frontend UI",
  //     },
  //     {
  //       name: "JavaScript",
  //       purpose: "Application logic",
  //     },
  //   ],

  //   features: ["Feature one", "Feature two", "Feature three", "Feature four"],

  //   challenges: [
  //     {
  //       title: "Challenge",
  //       description: "Describe an important development challenge.",
  //     },
  //   ],

  //   architecture: ["React.js", "JavaScript"],

  //   screenshots: [
  //     {
  //       image: "/",
  //       title: "Project Dashboard",
  //     },
  //   ],

  //   futureImprovements: ["Future improvement one", "Future improvement two"],

  //   github: "#",
  //   live: "#",
  // },
];

export default projects;
