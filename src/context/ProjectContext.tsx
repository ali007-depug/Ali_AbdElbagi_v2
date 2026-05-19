"use client";
/**
 * ----- This us Context used to  : -------
 * Provide componets with selected catgeroy & set func to selected category & func to fileterd projects based on the selected category
 */

import { createContext, useContext, useState } from "react";

// my work items
const worksItems = [
  {
    id: 0,
    title: "Maryam Elsheikh Portfolio",
    modalTitle: "Maryam-Elsheikh-Portfolio",
    details: "Design for fellowship Maryam",
    imgs: [
      "maryam1.webp",
      "maryam2.webp",
      "maryam3.webp",
      "maryam4.webp",
      "maryam5.webp",
      "maryam6.webp",
    ],
    href: "https://maryamelsheikh.netlify.app/",
    repo: "https://github.com/ali007-depug/Maryam-Elsheikh/",
    description:
      "A premium, client-focused portfolio web application built for Maryam Elsheikh, a Chemical Engineer and professional content writer. This project balances an elegant frontend showcase with a robust backend management system.\n\nKey Ecosystem Features:\n• Secure Administrative Dashboard: Built with a dedicated login and signup authentication flow, allowing the client to securely access their private workspace.\n• Dynamic Content Management: The dashboard eliminates the need for code modifications, enabling the client to create, read, update, and delete portfolio items on the fly.\n• State-of-the-Art Architecture: Engineered using Vite, TypeScript, and React for high-performance rendering, paired with Firebase for lightning-fast database persistence and secure authorization guards.\n• Seamless UI/UX: Styled with Tailwind CSS and premium components from Shadcn UI, featuring fluid dark/light design principles and full responsiveness across all screen breakpoints.",
    category: "freelancing",
    builtWith: {
      react: "react.webp",
      TypeScript: "typeScript.webp",
      tailwind: "tailwindCss.webp",
      vite: "vite.svg",
      shadcn: "shadcn.webp",
      firebase: "firebase.webp",
    },
  },
  {
    id: 1,
    title: "Students Grades App",
    modalTitle: "Students-Grades-App",
    details: "Built for University Of Kordofan - Facluty Of Medicine ",
    imgs: ["std4.webp", "std2.webp", "std3.webp", "std1.webp"],
    href: "https://ali007-depug.github.io/students-grade-app/",
    repo: "https://github.com/ali007-depug/students-grade-app/",
    description:
      "A tailored, data-driven academic management system built specifically for the Faculty of Medicine (Batch 28) at the University of Kordofan. The web application features a secure administrative dashboard and a comprehensive student database that empowers professors and faculty teachers to efficiently manage academic records. Teachers can authenticate securely to add, update, track, and compute student grades across various medical modules dynamically. Developed with React and Vite for blazing-fast performance, styled with Tailwind CSS, and powered by Firebase for secure authentication and real-time database persistence, this system replaces manual grading workflows with a reliable, responsive digital environment.",
    category: "freelancing",
    builtWith: {
      react: "react.webp",
      tailwind: "tailwindCss.webp",
      firebase: "firebase.webp",
      vite: "vite.svg",
    },
  },
  {
    id: 2,
    title: "Multi step Form",
    modalTitle: "Multi-step-Form",
    details: "Forntend Mentor Challegne",
    imgs: ["multi1.webp", "multi2.webp", "multi3.webp", "multi4.webp"],
    href: "https://bucolic-pony-727a7f.netlify.app/",
    repo: "https://github.com/ali007-depug/Multi-step-form/",
    description:
      "An advanced implementation of the classic Frontend Mentor Multi-Step Form challenge, designed to test complex state synchronization and form validation workflows. The application guides users through a multi-stage checkout funnel, including personal information gathering, subscription plan toggles (monthly vs. yearly), add-on selections, and a dynamic final summary page with real-time price calculations. Built using vanilla JavaScript, semantic HTML5, and structured Sass (SCSS), the project features rigorous client-side input validation, responsive layouts across all device breakpoints, and fluid transitions between steps to maximize completion rates and deliver a polished user experience.",
    category: "frontend mentor",
    builtWith: {
      html: "html.webp",
      sass: "sass.webp",
      js: "js.webp",
    },
  },
  {
    id: 3,
    title: "Electric Status",
    modalTitle: "Electric-Status",
    details: "To show Electrical Stauts for Some Of Sudan Cities",
    imgs: ["eStatus.jpg"],
    href: "https://ali007-depug.github.io/E-status/",
    repo: "https://github.com/ali007-depug/E-status/",
    description:
      "A vital, community-focused utility web application developed to track and display the live electricity availability status across various cities in Sudan. Built as a real-time informational hub, the platform addresses critical infrastructure tracking challenges by providing citizens with a clear, reliable, and instantaneous overview of grid availability. Leveraging React and Vite for highly responsive rendering alongside a lightweight, mobile-first Tailwind CSS UI, the application utilizes Firebase as its real-time data layer to ensure status updates propagate immediately to users, demonstrating a practical frontend solution to a pressing real-world civic need.",
    category: "personal",
    builtWith: {
      react: "react.webp",
      tailwind: "tailwindCss.webp",
      firebase: "firebase.webp",
      vite: "vite.svg",
    },
  },
  {
    id: 4,
    title: "Promise Web App",
    modalTitle: "Promise-Web-App",
    details: "Todo App",
    imgs: ["promiseApp.jpg"],
    href: "https://ali007-depug.github.io/promise-web-app/",
    repo: "https://github.com/ali007-depug/promise-web-app/",
    description:
      "A beautifully crafted vanilla productivity ecosystem built around the concept of personal accountability. Moving beyond a simple utility list, the application manages the CRUD lifecycle of daily tasks and objectives with high-precision client-side state manipulation. Engineered entirely using modular vanilla JavaScript, semantic HTML5 structures, and compiled Sass (SCSS), the app delivers lightning-fast load times, seamless DOM updates, and an elegant interface designed to maximize task completion through minimalist UI/UX design tokens and fluid user interactions.",
    category: "personal",

    builtWith: {
      html: "html.webp",
      sass: "sass.webp",
      js: "js.webp",
    },
  },
  {
    id: 5,
    title: "7essAbAt - حسابات",
    modalTitle: "7essAbAt",
    details: "built to helpe me in small busniess calculations",
    imgs: ["7essabat.webp", "7essabat2.webp", "7essabat3.webp"],
    href: "https://7essabat-app.netlify.app/",
    repo: "https://github.com/ali007-depug/7essAbAt-App-V3/",
    description:
      "A specialized micro-accounting and bookkeeping web application custom-built to streamline fiscal operations, tracking, and balance calculations for small businesses. Designed as a localized financial dashboard, the platform manages complex ledger operations, income and expense tracking, and real-time net profit valuations. Built with React and structured inside TypeScript to enforce robust data schemas and eliminate arithmetic floating-point errors, the application uses Shadcn UI and Tailwind CSS to present multi-layered financial datasets in an ultra-clean, accessible, and responsive user layout.",
    category: "personal",

    builtWith: {
      react: "react.webp",
      typescript: "typeScript.webp",
      tailwind: "tailwindCss.webp",
      shadcn: "shadcn.webp",
    },
  },
  {
    id: 6,
    title: "URL Shorten API",
    modalTitle: "URL-Shorten-API",
    details: "forntEnd mentor challegne",
    imgs: ["urlShorten.jpg"],
    href: "https://ali007-depug.github.io/Frontend-Mentor-Shortly-URL-shortening-API-Challenge/",
    repo: "https://github.com/ali007-depug/Frontend-Mentor-Shortly-URL-shortening-API-Challenge/",

    category: "frontend mentor",
    builtWith: {
      react: "react.webp",
      tailwind: "tailwindCss.webp",
      epress: "express.webp",
      vite: "vite.svg",
    },
  },
  {
    id: 7,
    title: "Bookmark landing page",
    modalTitle: "Bookmark-landing-page",
    details: "forntEnd mentor challegne",
    imgs: ["bookmark.jpg"],
    href: "https://ali007-depug.github.io/bookmark-landing-page-master/",
    repo: "https://github.com/ali007-depug/bookmark-landing-page-master/",
    category: "frontend mentor",
    builtWith: {
      react: "react.webp",
      sass: "sass.webp",
      vite: "vite.svg",
    },
  },
  {
    id: 8,
    title: "Product List With Cart Menu",
    modalTitle: "Product-List-With-Cart-Menu",
    details: "forntEnd mentor challegne",
    imgs: ["pList.jpg"],
    href: "https://ali007-depug.github.io/Proudct-list-with-cart-menu/",
    repo: "https://github.com/ali007-depug/Prouduct-list-with-cart-menu/",
    category: "frontend mentor",
    builtWith: {
      html: "html.webp",
      sass: "sass.webp",
      js: "js.webp",
    },
  },
  {
    id: 9,
    title: "Room Homepage",
    modalTitle: "Room-Homepage",
    details: "forntEnd mentor challegne",
    imgs: ["room.jpg"],
    href: "https://ali007-depug.github.io/room-home-page/",
    repo: "https://github.com/ali007-depug/room-home-page/",
    category: "frontend mentor",
    builtWith: {
      html: "html.webp",
      sass: "sass.webp",
      js: "js.webp",
    },
  },
  {
    id: 10,
    title: "Intro Section With Dropdown Menu",
    modalTitle: "Intro-Section-With-Dropdown-Menu",
    details: "forntEnd mentor challegne",
    imgs: ["intro.jpg"],
    href: "https://ali007-depug.github.io/intero-section-with-dropdown-menu/",
    repo: "https://github.com/ali007-depug/intero-section-with-dropdown-menu/",
    category: "frontend mentor",
    builtWith: {
      html: "html.webp",
      sass: "sass.webp",
      js: "js.webp",
    },
  },
  {
    id: 11,
    title: "Mortgage repayment calculator",
    modalTitle: "Mortgage-repayment-calculator",
    details: "forntEnd mentor challegne",
    imgs: ["Mortgage_repayment_calculator.webp"],
    href: "https://mortgage0repayment.netlify.app/",
    repo: "https://github.com/ali007-depug/Mortgage-Repayment-Calc",
    category: "frontend mentor",
    builtWith: {
      react: "react.webp",
      TypeScript: "typeScript.webp",
      tailwind: "tailwindCss.webp",
      vite: "vite.svg",
    },
  },
];

// create Context
const projcetsContext = createContext({});

//   create a provider components
export function ProjcetsProvider({ children }: { children: React.ReactNode }) {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const allProjects = worksItems.length;

  // if the slected category == all then render the all item if it's not then filter it & return the corrseponding item
  const filterdProjects =
    selectedCategory === "all"
      ? worksItems
      : worksItems.filter((item) => item.category === selectedCategory);

  return (
    <projcetsContext.Provider
      value={{
        selectedCategory,
        setSelectedCategory,
        filterdProjects,
        allProjects,
      }}
    >
      {children}
    </projcetsContext.Provider>
  );
}

export function useProjects() {
  return useContext(projcetsContext);
}
