// ─────────────────────────────────────────────────────────────────────────────
// This is the ONLY file you need to edit to change site content.
// Anything still marked TODO is a placeholder — see SETUP.md.
// ─────────────────────────────────────────────────────────────────────────────

export const METADATA = {
  author: "Shan Sai",
  title: "Shan Sai || Stuart.dev",
  description:
    "Shan Sai is a Software Engineer and Web Developer building production-grade web applications — multi-vendor marketplaces, restaurant POS systems and property platforms — with Next.js, React, TypeScript, Laravel and MongoDB.",
  siteUrl: "https://portfolio-alpha-smoky-50.vercel.app/", // TODO: your real deployed URL
  twitterHandle: "@stuartdev", // TODO: your real handle, or remove
  keywords: [
    "Shan Sai",
    "Stuart Shanthosh",
    "Stuart.dev",
    "Software Engineer",
    "Web Developer",
    "Full-Stack Web Developer",
    "MERN Stack Developer",
    "Next.js Developer",
    "React Developer",
    "TypeScript Developer",
    "Laravel Developer",
    "Node.js Developer",
    "MongoDB",
    "Software Engineer",
    "Portfolio",
  ].join(", "),
  image: "/social_preview.png", // TODO: add a 1200x630 image at public/social_preview.png
  language: "English",
  themeColor: "#000000",
};

export const MENULINKS = [
  { name: "Home", ref: "home" },
  { name: "Skills", ref: "skills" },
  { name: "Projects", ref: "projects" },
  { name: "Work", ref: "work" },
  { name: "Contact", ref: "contact" },
];

// The rotating typewriter line under your name in the hero.
export const TYPED_STRINGS = [
  "A Software Engineer and Web Developer",
  "I build things for the web",
  "I ship production-grade web apps",
];

export const SOCIAL_LINKS = [
  { name: "mail", url: "mailto:you@example.com" }, // TODO: your email
  {
    name: "linkedin",
    url: "https://www.linkedin.com/in/shanthosh-saisangar14/",
  },
  { name: "github", url: "https://github.com/Stuart-Vision" },
];

// Each string must match a file in /public/skills/<name>.svg
// Bundled: antdesign, bootstrap, chakra-ui, css, cursor, expo, figma, firebase,
// git, html, javascript, laravel, mongodb, mysql, nextjs, nodejs, php, react,
// react-query, redux, sanity, sass, styledcomponents, tailwindcss, tanstack,
// typescript, vite, webpack
// Need another? Grab the SVG from https://devicon.dev/ and drop it in that folder.
export const SKILLS = {
  languagesAndTools: [
    "html",
    "css",
    "javascript",
    "typescript",
    "php",
    "nodejs",
    "git",
    "figma",
  ],
  librariesAndFrameworks: [
    "react",
    "nextjs",
    "laravel",
    "tailwindcss",
    "bootstrap",
    "redux",
    "react-query",
    "sass",
  ],
  databases: ["mongodb", "mysql"],
  other: ["vite", "webpack", "cursor", "firebase"],
};

// To add a project:
//   1. drop a .webp into /public/projects/
//   2. import it + add it to PROJECT_IMAGES in components/Projects/images.js
//   3. add an entry below whose `imageKey` matches that key
// `tech` icons resolve to /public/projects/tech/<name>.svg
//
// Every card image is a real screenshot — see SETUP.md for how they were made
// and how to regenerate one.
export const PROJECTS = [
  {
    name: "Liza's Ribbon",
    imageKey: "liza-ribbon",
    description: "Personalised gifting commerce with custom gift builder 🎁",
    gradient: ["#9b1e3c", "#5e1226"],
    url: "https://liza-g.vercel.app",
    tech: ["typescript", "react", "nextjs", "tailwindcss", "mongodb"],
  },
  {
    name: "DineFlow POS",
    imageKey: "dineflow-pos",
    description: "Multi-branch restaurant POS & management platform 🍽️",
    gradient: ["#8b31ff", "#5b1bb5"],
    url: "https://github.com/Stuart-Vision/dineflow-pos",
    tech: ["typescript", "react", "nextjs", "tailwindcss", "mongodb"],
  },
  {
    name: "Velora",
    imageKey: "velora",
    description: "Multi-vendor marketplace with commission accounting 🛍️",
    gradient: ["#ff8a00", "#c2410c"],
    url: "https://github.com/Stuart-Vision/Multivendor-ecommerce",
    tech: ["typescript", "react", "nextjs", "tailwindcss", "mongodb"],
  },
  {
    name: "Sear & Saffron",
    imageKey: "sear-saffron",
    description: "Restaurant ordering & table reservation platform 🔥",
    gradient: ["#e95420", "#a32d0c"],
    url: "https://github.com/Stuart-Vision/sear-saffron",
    tech: ["typescript", "react", "nextjs", "tailwindcss", "react-query"],
  },
  {
    name: "Gyra Real Estate",
    imageKey: "gyra-real-estate",
    description: "Full-stack property marketplace for agents & buyers 🏡",
    gradient: ["#d4a853", "#8a6a20"],
    url: "https://github.com/Stuart-Vision/Gyra-Real-Estate",
    tech: ["typescript", "react", "nextjs", "tailwindcss", "mongodb"],
  },
  {
    name: "MOTIONA",
    imageKey: "motiona",
    description: "Editorial art platform with scroll-driven motion 🎨",
    gradient: ["#ec4899", "#9d174d"],
    url: "https://github.com/Stuart-Vision/MOTIONA",
    tech: ["typescript", "react", "nextjs", "tailwindcss"],
  },
  {
    name: "EduManage",
    imageKey: "edumanage",
    description: "Laravel student management system with RBAC 🎓",
    gradient: ["#3884ff", "#1d4ed8"],
    url: "https://github.com/Stuart-Vision/eduman",
    tech: ["php", "laravel", "mysql", "bootstrap"],
  },
  {
    name: "Fire Zone",
    imageKey: "fire-zone",
    description: "MERN food ordering, room booking & events 🍕",
    gradient: ["#ef4444", "#991b1b"],
    url: "https://github.com/Stuart-Vision/Fire_Zone",
    tech: ["javascript", "react", "redux", "nodejs", "mongodb"],
  },
  {
    name: "React Dashboard",
    imageKey: "react-dashboard",
    description: "Editable dashboard with Cloudinary uploads ⚡",
    gradient: ["#22c5c2", "#0f766e"],
    url: "https://github.com/Stuart-Vision/React-Dashboard",
    tech: ["typescript", "react", "tailwindcss", "nodejs", "mongodb"],
  },
];

// The "Experience" section — one tab per company.
// `items` are the cards that scroll inside a tab: first is the company, the
// rest are your roles / achievements there.
//
// TODO: the two employment tabs below are placeholders — replace the company
// names, roles and descriptions with your real work history, or delete them and
// keep only Stuart.dev.
export const WORK_CONTENTS = [
  {
    company: "Stuart.dev",
    value: "stuart-dev",
    items: [
      {
        title: "Stuart.dev",
        description:
          "My independent practice, building complete web products end to end — data model, API, dashboard and storefront. The focus is on applications that actually run a business: ordering pipelines, inventory, payments and role-based access, not static templates.",
        content: (
          <div className="h-full w-full flex items-center justify-center text-white px-4">
            Software Engineer &amp; Web Developer
          </div>
        ),
      },
      {
        title: "Commerce at scale",
        description:
          "Velora is a multi-vendor marketplace where independent sellers run their own storefronts. It carries a transactional order pipeline, commission accounting, inventory auditing and three role-based dashboards — seeded with 72 products across 12 vendors and covered by 64 passing tests.",
        content: (
          <div className="h-full w-full flex items-center justify-center text-white px-4">
            Next.js · TypeScript · MongoDB
          </div>
        ),
      },
      {
        title: "Operations software",
        description:
          "DineFlow POS brings front-of-house ordering, a real-time kitchen display, stock control, purchasing, CRM and multi-branch reporting into one responsive app. Split payments, refunds, PDF invoices, shift scheduling and an audit trail — the workflows a real restaurant runs on.",
        content: (
          <div className="h-full w-full flex items-center justify-center text-white px-4">
            Next.js · Mongoose · Zustand
          </div>
        ),
      },
      {
        title: "Shipped and live",
        description:
          "Liza's Ribbon is a personalised gifting platform for a Sri Lankan custom-frame business — product personalisation with private photo uploads, cart and checkout, WhatsApp ordering, order tracking, loyalty rewards and gift vouchers, behind a protected admin workspace. It's deployed and running at liza-g.vercel.app.",
        content: (
          <div className="h-full w-full flex items-center justify-center text-white px-4">
            Next.js 16 · React 19 · Cloudinary
          </div>
        ),
      },
      {
        title: "Across the stack",
        description:
          "Not just the JavaScript side. EduManage is a Laravel 12 student management system with role-based dashboards for admins, teachers and students, and a fully tested backend on MySQL — proof the same product thinking carries into a PHP codebase.",
        content: (
          <div className="h-full w-full flex items-center justify-center text-white px-4">
            Laravel · PHP · MySQL
          </div>
        ),
      },
    ],
  },
  {
    company: "Company Name", // TODO: your employer
    value: "company-one",
    items: [
      {
        title: "Company Name", // TODO
        description:
          "What the company does, in a sentence or two. This is the intro card for the tab.", // TODO
        content: (
          <div className="h-full w-full flex items-center justify-center text-white px-4">
            Company tagline
          </div>
        ),
      },
      {
        title: "Impact", // TODO
        description:
          "What you built and what changed because of it. Lead with the problem, then the fix, then the result — numbers land hardest here.", // TODO
        content: (
          <div className="h-full w-full flex items-center justify-center text-white px-4">
            Your role
          </div>
        ),
      },
    ],
  },
  {
    company: "Freelance",
    value: "freelance",
    items: [
      {
        title: "Freelance Developer", // TODO
        description:
          "The kind of clients you work with and the kind of work you deliver.", // TODO
        content: (
          <div className="h-full w-full flex items-center justify-center text-white px-4">
            Independent projects
          </div>
        ),
      },
      {
        title: "Delivery", // TODO
        description:
          "A standout client project — what it was, what you built, how it went.", // TODO
        content: (
          <div className="h-full w-full flex items-center justify-center text-white px-4">
            Freelance Developer
          </div>
        ),
      },
    ],
  },
];

// Your own Google Analytics measurement ID, or "" to disable analytics.
export const GTAG = "";
