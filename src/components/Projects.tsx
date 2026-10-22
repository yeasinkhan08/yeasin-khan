"use client";

import { useState } from "react";
import Image from "next/image";

export interface Project {
  id: number;
  title: string;
  category: "Full Stack" | "Frontend" | "Backend" | "Mobile / Web";
  description: string;
  tags: string[];
  githubUrl: string;
  liveUrl?: string;
  image?: string; // Add your picture path here e.g. "/images/projects/bazar-dor.png"
}

const allProjects: Project[] = [
  {
    id: 1,
    title: "Bazar Dor - Online Price Tracker",
    category: "Full Stack",
    description:
      "A comprehensive daily commodity and grocery price tracking web application with categorized market trends, search, and responsive price analytics.",
    tags: ["React", "JavaScript", "Tailwind CSS", "Vercel"],
    githubUrl: "https://github.com/yeasinkhan08/bazar-dor-online-price",
    liveUrl: "https://bazar-dor-online-price.vercel.app",
    // image: "/images/projects/bazar-dor.png",
  },
  {
    id: 2,
    title: "FitLog - Workout & Fitness Tracker",
    category: "Full Stack",
    description:
      "Interactive workout logging and fitness tracking application featuring customized routine management, progress charts, and personal health goals.",
    tags: ["TypeScript", "Next.js", "React", "Tailwind CSS"],
    githubUrl: "https://github.com/yeasinkhan08/fit-log",
    liveUrl: "https://fit-log-one-alpha.vercel.app",
    // image: "/images/projects/fit-log.png",
  },
  {
    id: 3,
    title: "News24 - Real-Time Media Portal",
    category: "Frontend",
    description:
      "24/7 breaking news web portal featuring categorized articles, editorial sections, fast content rendering, and mobile-friendly responsive layout.",
    tags: ["TypeScript", "Next.js", "React", "Tailwind CSS"],
    githubUrl: "https://github.com/yeasinkhan08/news-24",
    // image: "/images/projects/news-24.png",
  },
  {
    id: 4,
    title: "BookVibe - Book Discovery & Review",
    category: "Full Stack",
    description:
      "Web application for discovering books, writing user reviews, tracking personal reading lists, and organizing custom wishlist collections.",
    tags: ["React", "TypeScript", "Tailwind CSS"],
    githubUrl: "https://github.com/yeasinkhan08/book-vibe",
    // image: "/images/projects/book-vibe.png",
  },
  {
    id: 5,
    title: "BPL Player - Cricket Team Auction",
    category: "Frontend",
    description:
      "Dynamic Bangladesh Premier League player bidding platform with real-time budget calculation, team roster limits, and player statistics.",
    tags: ["React", "TypeScript", "Tailwind CSS"],
    githubUrl: "https://github.com/yeasinkhan08/Bpl-player",
    // image: "/images/projects/bpl-player.png",
  },
  {
    id: 6,
    title: "User Management Portal & Admin Client",
    category: "Backend",
    description:
      "Full stack administration dashboard with secure authentication, role-based access control, and complete CRUD user operations.",
    tags: ["React", "Node.js", "Express", "MongoDB"],
    githubUrl: "https://github.com/yeasinkhan08/user-management-client",
    // image: "/images/projects/user-management.png",
  },
  {
    id: 7,
    title: "BetterAuth - Modern Authentication Engine",
    category: "Backend",
    description:
      "Security-first authentication middleware and session handler with token encryption, password hashing, and OAuth support.",
    tags: ["Node.js", "JavaScript", "JWT", "Security"],
    githubUrl: "https://github.com/yeasinkhan08/better-auth",
    // image: "/images/projects/better-auth.png",
  },
  {
    id: 8,
    title: "DevStack - Developer Tools Explorer",
    category: "Mobile / Web",
    description:
      "Curated directory of modern developer tools, libraries, and frameworks with filterable categorization and documentation links.",
    tags: ["TypeScript", "React", "Tailwind CSS"],
    githubUrl: "https://github.com/yeasinkhan08/DevStack",
    // image: "/images/projects/devstack.png",
  },
];

const categories = ["All", "Full Stack", "Frontend", "Backend", "Mobile / Web"] as const;

interface ProjectsProps {
  showTitle?: boolean;
}

export default function Projects({ showTitle = true }: ProjectsProps) {
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const filteredProjects =
    activeFilter === "All"
      ? allProjects
      : allProjects.filter((p) => p.category === activeFilter);

  return (
    <section id="works" className="py-12 md:py-20 bg-black text-white">
      <div className="mx-auto max-w-[1296px] px-4">
        {/* Section Title */}
        {showTitle && (
          <div className="text-center mb-10 md:mb-14">
            <p className="text-sm font-semibold uppercase tracking-wider text-[#f15b3a]">
              Portfolio
            </p>
            <h2 className="mt-2 text-[32px] sm:text-[42px] md:text-[50px] font-normal tracking-tight text-white">
              Works &amp; Projects
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-[15px] sm:text-[16px] leading-relaxed text-[#9f9f9f]">
              Explore my open-source projects and web applications on GitHub, crafted with love and dedication using modern frontend and backend technologies.
            </p>
          </div>
        )}

        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10 md:mb-14">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveFilter(cat)}
              className={`rounded-xl px-5 py-2.5 text-sm font-medium transition-all duration-300 ${
                activeFilter === cat
                  ? "bg-[#f15b3a] text-white shadow-lg shadow-[#f15b3a]/30"
                  : "border border-white/10 bg-[#121214] text-[#cecece] hover:border-white/20 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 items-stretch">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bento-card p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:border-[#f15b3a] hover:-translate-y-1 group"
            >
              <div>
                {/* Optional Project Screenshot / Picture */}
                {project.image && (
                  <div className="relative mb-5 aspect-[16/10] w-full overflow-hidden rounded-xl bg-[#1a1a1e]">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/30 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  </div>
                )}

                {/* Header: Category Badge + GitHub icon button */}
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-block rounded-md bg-[#f15b3a]/15 px-2.5 py-1 text-xs font-semibold text-[#f15b3a]">
                    {project.category}
                  </span>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`View ${project.title} on GitHub`}
                    className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-[#161618] text-[#cecece] transition-colors group-hover:border-[#f15b3a] group-hover:text-[#f15b3a]"
                  >
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.18-3.37-1.18-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.52 1.03 1.52 1.03.9 1.53 2.36 1.09 2.93.83.09-.65.35-1.09.64-1.34-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.6 9.6 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.85-2.34 4.7-4.57 4.95.36.31.68.92.68 1.85v2.59c0 .27.18.58.69.48A10 10 0 0 0 12 2Z"
                      />
                    </svg>
                  </a>
                </div>

                {/* Title */}
                <h3 className="text-[20px] font-bold text-white transition-colors duration-200 group-hover:text-[#f15b3a]">
                  <a href={project.liveUrl || project.githubUrl} target="_blank" rel="noreferrer">
                    {project.title}
                  </a>
                </h3>

                {/* Description */}
                <p className="mt-3 text-[14px] leading-relaxed text-[#9f9f9f]">
                  {project.description}
                </p>

                {/* Tech tags */}
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-lg border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-[#cecece]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-3">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-[#161618] px-3.5 py-2.5 text-xs font-semibold text-white transition-all hover:border-[#f15b3a] hover:bg-[#f15b3a]"
                >
                  <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.18-3.37-1.18-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.52 1.03 1.52 1.03.9 1.53 2.36 1.09 2.93.83.09-.65.35-1.09.64-1.34-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.6 9.6 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.85-2.34 4.7-4.57 4.95.36.31.68.92.68 1.85v2.59c0 .27.18.58.69.48A10 10 0 0 0 12 2Z"
                    />
                  </svg>
                  GitHub
                </a>

                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-xl bg-[#f15b3a] px-3.5 py-2.5 text-xs font-semibold text-white transition-all hover:bg-[#dc4829] shadow-md shadow-[#f15b3a]/20"
                  >
                    Live Demo
                    <svg
                      viewBox="0 0 24 24"
                      width="12"
                      height="12"
                      fill="currentColor"
                    >
                      <path d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z" />
                    </svg>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
