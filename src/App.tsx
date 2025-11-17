// src/App.tsx
import React, { useEffect, useState } from "react";
import "./App.css";

const FULL_CODE = `/**
 * Frontend Developer — React / TypeScript / Shopify
 * Building real-world apps with a strong product mindset.
 * Based in Milton Keynes, UK.
 */

export const kelvinLau = {
  info: {
    name: "Kelvin Lau",
    location: "Milton Keynes, UK",
    email: "kelllvinuk@gmail.com",
    github: "github.com/kelllvinl",
    linkedIn: "linkedin.com/in/kelllvinl"
    Website: "k317in.uk"
  },

  skills: [
    "React.js", "TypeScript", "JavaScript (ES6+)",
    "HTML5", "CSS3 / SCSS", "Tailwind",
    "Shopify (Liquid, Storefront/Admin API, App Bridge)",
    "Node.js", "REST", "GraphQL", "Firebase", "Socket.IO"
  ],

  experience: [
    {
      company: "DHL",
      role: "IT Analyst — Finished Vehicles Solution",
      location: "Milton Keynes, UK",
      period: "Feb 2025 – Present",
      highlights: [
        "Day-to-day IT support for internal users and ops team.",
        "Power BI reporting with SQL for data extraction and cleaning.",
        "Project coordination between customers, ops and development team."
      ]
    },
    {
      company: "WYSIWYG Ltd",
      role: "Software Engineer",
      location: "Milton Keynes, UK",
      period: "Jan 2023 – Jan 2025",
      highlights: [
        "Maintained and improved production codebases.",
        "Sports Event Membership & QR Check-in System (events, join/leave, admin dashboard, CSV, payments).",
        "Responsive UI with React + TypeScript and API-integrated internal tools."
      ]
    },
    {
      company: "Paradox Studios",
      role: "React Website Developer",
      location: "Northampton, UK",
      period: "Sep 2022 – Jan 2023",
      highlights: [
        "Startup environment: multiple websites across React & Vue.",
        "Shopify themes, scripts and Storefront/Admin API integrations.",
        "Affiliate marketing integrations (LeadDyno, ActiveCampaign)."
      ]
    },
    {
      company: "Freelance / Personal Projects",
      role: "Frontend Developer",
      period: "2023 – Present",
      highlights: [
        "Real-time Basketball Scoreboard (React + Socket.IO, multi-device).",
        "Sports Membership & Check-in System (QR, admin tools, Firebase).",
        "Restaurant Website with Google Sheets CMS.",
        "Dashboard & automation tools across React / TypeScript stacks."
      ]
    }
  ],

  education: {
    aiDiploma: "Diploma in AI & Programming — Tecky Academy Hong Kong",
    bachelor: "Business / Finance — Saint Martin's University"
  },

  languages: ["English (Fluent)", "Cantonese (Fluent)", "Mandarin (Fluent)"],

  interests: [
    "UI/UX design",
    "real-time systems",
    "automation tools",
    "hardware–software integration",
    "basketball community tools"
  ]
};
`;

const App: React.FC = () => {
  const [displayedText, setDisplayedText] = useState("");
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    let i = 0;
    const speed = 12; // 打字速度，數字愈細愈快

    const timer = setInterval(() => {
      i += 1;
      setDisplayedText(FULL_CODE.slice(0, i));
      if (i >= FULL_CODE.length) {
        clearInterval(timer);
        setIsDone(true);
      }
    }, speed);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="app-root">
      <div className="code-page">
        <div className="code-card">
          <header className="code-card-header">
            <div className="window-dots">
              <span className="dot dot-red" />
              <span className="dot dot-yellow" />
              <span className="dot dot-green" />
            </div>
            <span className="file-name">kelvin-lau.ts</span>
          </header>

          <main className="code-card-body">
            <pre>
              <code>{displayedText}</code>
              <span className={`cursor ${isDone ? "cursor--hidden" : ""}`}>
                ▋
              </span>
            </pre>
          </main>
        </div>
      </div>
    </div>
  );
};

export default App;