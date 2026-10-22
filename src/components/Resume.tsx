export interface ResumeItem {
  id: number;
  period: string;
  role: string;
  company: string;
  description?: string;
}

const experiences: ResumeItem[] = [
  {
    id: 1,
    period: "2023 - Present",
    role: "Full Stack Developer",
    company: "Freelance & Remote Client Engagements",
    description: "Developing modern web apps with Next.js, React, Node.js, and MongoDB with scalable architecture.",
  },
  {
    id: 2,
    period: "2022 - 2023",
    role: "Frontend Engineer",
    company: "Digital Web Studio",
    description: "Built responsive, interactive user interfaces with Tailwind CSS, React, and performance optimizations.",
  },
  {
    id: 3,
    period: "2021 - 2022",
    role: "Junior Web Developer",
    company: "Tech Solutions Hub",
    description: "Assisted in building custom client websites, REST APIs, and database migrations.",
  },
];

const education: ResumeItem[] = [
  {
    id: 1,
    period: "2020 - 2024",
    role: "Bachelor in Computer Science & Engineering",
    company: "University of Information Technology",
    description: "Core computer science fundamentals, data structures, algorithms, and software engineering principles.",
  },
  {
    id: 2,
    period: "2018 - 2020",
    role: "Higher Secondary Certificate (Science)",
    company: "Dhaka Central College",
    description: "Graduated with distinction in Mathematics, Physics, and Information Technology.",
  },
  {
    id: 3,
    period: "2021 - 2022",
    role: "Full Stack Web Development Certification",
    company: "Professional Web Institute",
    description: "Intensive training in modern MERN stack development and deployment practices.",
  },
];

export default function Resume() {
  return (
    <section id="resume" className="py-12 md:py-16 bg-black text-white">
      <div className="mx-auto max-w-[1296px] px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">

          {/* Experience Column */}
          <div className="bento-card p-6 sm:p-9">
            <div className="flex items-center gap-3 mb-8">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#f15b3a]/15 text-[#f15b3a]">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
                </svg>
              </span>
              <h2 className="text-[26px] sm:text-[30px] font-bold text-white">Experience</h2>
            </div>

            <div className="space-y-6">
              {experiences.map((item, idx) => (
                <div
                  key={item.id}
                  className={`flex gap-4 sm:gap-6 pb-6 ${idx !== experiences.length - 1 ? "border-b border-white/10" : ""
                    }`}
                >
                  <div className="flex-none">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-[#19191d] text-[#f15b3a]">
                      <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
                        <path d="M3 18.5V5C3 3.34315 4.34315 2 6 2H20C20.5523 2 21 2.44772 21 3V21C21 21.5523 20.5523 22 20 22H6.5C4.567 22 3 20.433 3 18.5ZM19 20V17H6.5C5.67157 17 5 17.6716 5 18.5C5 19.3284 5.67157 20 6.5 20H19ZM5 15.3368C5.45463 15.1208 5.9632 15 6.5 15H19V4H6C5.44772 4 5 4.44772 5 5V15.3368Z" />
                      </svg>
                    </div>
                  </div>

                  <div>
                    <span className="inline-block rounded-md bg-white/5 px-2.5 py-0.5 text-xs font-semibold text-[#f15b3a]">
                      {item.period}
                    </span>
                    <h4 className="mt-1 text-[18px] sm:text-[20px] font-semibold text-white">
                      {item.role}
                    </h4>
                    <p className="text-[14px] font-medium text-[#9f9f9f]">
                      {item.company}
                    </p>
                    {item.description && (
                      <p className="mt-2 text-[13.5px] leading-relaxed text-[#77777d]">
                        {item.description}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education Column */}
          <div className="bento-card p-6 sm:p-9">
            <div className="flex items-center gap-3 mb-8">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#f15b3a]/15 text-[#f15b3a]">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
                  <path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3zm0 14.54l-7-3.82v3.91l7 3.82 7-3.82v-3.91l-7 3.82z" />
                </svg>
              </span>
              <h2 className="text-[26px] sm:text-[30px] font-bold text-white">Education</h2>
            </div>

            <div className="space-y-6">
              {education.map((item, idx) => (
                <div
                  key={item.id}
                  className={`flex gap-4 sm:gap-6 pb-6 ${idx !== education.length - 1 ? "border-b border-white/10" : ""
                    }`}
                >
                  <div className="flex-none">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-[#19191d] text-[#f15b3a]">
                      <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
                        <path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3zm0 14.54l-7-3.82v3.91l7 3.82 7-3.82v-3.91l-7 3.82z" />
                      </svg>
                    </div>
                  </div>

                  <div>
                    <span className="inline-block rounded-md bg-white/5 px-2.5 py-0.5 text-xs font-semibold text-[#f15b3a]">
                      {item.period}
                    </span>
                    <h4 className="mt-1 text-[18px] sm:text-[20px] font-semibold text-white">
                      {item.role}
                    </h4>
                    <p className="text-[14px] font-medium text-[#9f9f9f]">
                      {item.company}
                    </p>
                    {item.description && (
                      <p className="mt-2 text-[13.5px] leading-relaxed text-[#77777d]">
                        {item.description}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
