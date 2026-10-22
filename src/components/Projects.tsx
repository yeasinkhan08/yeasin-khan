"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export interface Project {
  id: number;
  title: string;
  category: "Full Stack" | "Frontend" | "Backend" | "Mobile / Web";
  image: string;
  description: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
}

const allProjects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Web Application",
    category: "Full Stack",
    image: "/images/projects/work1.jpg",
    description: "Full-featured online store with payment processing, user authentication, inventory management, and shopping cart.",
    tags: ["Next.js", "React", "Node.js", "MongoDB", "Tailwind CSS"],
    liveUrl: "https://github.com/yeasinkhan08",
    githubUrl: "https://github.com/yeasinkhan08",
  },
  {
    id: 2,
    title: "Modern SaaS Analytics Platform",
    category: "Frontend",
    image: "/images/projects/work2.jpg",
    description: "Real-time metrics, interactive charts, and clean responsive dashboard engineered with high performance.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Recharts"],
    liveUrl: "https://github.com/yeasinkhan08",
    githubUrl: "https://github.com/yeasinkhan08",
  },
  {
    id: 3,
    title: "RESTful API & Microservices Engine",
    category: "Backend",
    image: "/images/projects/work3.jpg",
    description: "Robust authentication, role-based access control, caching layers, and database optimization.",
    tags: ["Node.js", "Express.js", "MongoDB", "JWT", "Docker"],
    liveUrl: "https://github.com/yeasinkhan08",
    githubUrl: "https://github.com/yeasinkhan08",
  },
  {
    id: 4,
    title: "Interactive Task & Project Management App",
    category: "Full Stack",
    image: "/images/projects/work4.jpg",
    description: "Kanban workflow app with real-time updates, drag-and-drop tasks, and team collaboration features.",
    tags: ["Next.js", "React", "Tailwind CSS", "Express", "MongoDB"],
    liveUrl: "https://github.com/yeasinkhan08",
    githubUrl: "https://github.com/yeasinkhan08",
  },
  {
    id: 5,
    title: "Cross-Platform Mobile Portfolio",
    category: "Mobile / Web",
    image: "/images/projects/work5.jpg",
    description: "Pixel-perfect, fluid, touch-optimized mobile experience with offline sync and dynamic interactions.",
    tags: ["React", "Next.js", "Tailwind CSS", "PWA"],
    liveUrl: "https://github.com/yeasinkhan08",
    githubUrl: "https://github.com/yeasinkhan08",
  },
  {
    id: 6,
    title: "Creative Agency & Studio Showcase",
    category: "Frontend",
    image: "/images/projects/work6.jpg",
    description: "Immersive portfolio with custom animations, glassmorphism UI, and lightning-fast load times.",
    tags: ["Next.js", "TypeScript", "DaisyUI", "Tailwind CSS"],
    liveUrl: "https://github.com/yeasinkhan08",
    githubUrl: "https://github.com/yeasinkhan08",
  },
];

const categories = ["All", "Full Stack", "Frontend", "Backend", "Mobile / Web"] as const;

interface ProjectsProps {
  showTitle?: boolean;
}

export default function Projects({ showTitle = true }: ProjectsProps) {
  const [activeFilter, setActiveFilter] = useState<string>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

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
            <h2 className="text-[32px] sm:text-[42px] md:text-[50px] font-normal tracking-tight text-white">
              Works &amp; Projects
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-[15px] sm:text-[16px] leading-relaxed text-[#9f9f9f]">
              Check out some of my web development and design projects, meticulously crafted with love and dedication, each one reflecting the passion and soul I poured into every detail.
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

        {/* Project Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bento-card p-4 sm:p-5 flex flex-col justify-between transition-all duration-300 hover:border-[#f15b3a]/40"
            >
              {/* Image & Center Hover Button */}
              <div
                className="relative aspect-[16/11] w-full overflow-hidden rounded-xl bg-[#1a1a1e] cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Dark Overlay on Hover */}
                <div className="absolute inset-0 bg-black/45 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                {/* Circular Details Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="details-btn scale-75 opacity-0 transition-all duration-300 ease-out group-hover:scale-100 group-hover:opacity-100">
                    <svg
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="22"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="pt-5 pb-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#f15b3a]">
                  {project.category}
                </span>
                <h3
                  onClick={() => setSelectedProject(project)}
                  className="mt-1 text-[19px] sm:text-[20px] font-semibold text-white transition-colors duration-200 group-hover:text-[#f15b3a] cursor-pointer"
                >
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for Project Details */}
        {selectedProject && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <div
              className="relative max-w-lg w-full rounded-2xl border border-white/10 bg-[#121214] p-6 sm:p-8 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 text-white/70 hover:text-white"
              >
                ✕
              </button>

              <div className="relative aspect-video w-full overflow-hidden rounded-xl">
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="mt-5">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#f15b3a]">
                  {selectedProject.category}
                </span>
                <h3 className="mt-1 text-2xl font-bold text-white">
                  {selectedProject.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#9f9f9f]">
                  {selectedProject.description}
                </p>

                {/* Tech tags */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {selectedProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-lg border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-[#cecece]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="mt-6 flex items-center gap-3">
                  <a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="theme-btn text-xs py-2.5 px-4"
                  >
                    View Project →
                  </a>
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="theme-btn-outline text-xs py-2.5 px-4 rounded-[15px]"
                  >
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
