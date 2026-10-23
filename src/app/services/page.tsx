import CallToAction from "@/components/CallToAction";

export const metadata = {
  title: "Services - Yeasin Khan",
  description: "Explore the full stack web development and frontend engineering services offered by Yeasin Khan.",
};

const services = [
  {
    id: 1,
    title: "Full Stack Web Development",
    description: "End-to-end development of modern web applications using Next.js, React, Node.js, and MongoDB with production-ready security and scale.",
    icon: (
      <svg viewBox="0 0 24 24" width="48" height="48" fill="currentColor">
        <path d="M2.04932 12.9999H7.52725C7.70624 16.2688 8.7574 19.3053 10.452 21.8809C5.98761 21.1871 2.5001 17.5402 2.04932 12.9999ZM2.04932 10.9999C2.5001 6.45968 5.98761 2.81276 10.452 2.11902C8.7574 4.69456 7.70624 7.73111 7.52725 10.9999H2.04932ZM21.9506 10.9999H16.4726C16.2936 7.73111 15.2425 4.69456 13.5479 2.11902C18.0123 2.81276 21.4998 6.45968 21.9506 10.9999ZM21.9506 12.9999C21.4998 17.5402 18.0123 21.1871 13.5479 21.8809C15.2425 19.3053 16.2936 16.2688 16.4726 12.9999H21.9506ZM9.53068 12.9999H14.4692C14.2976 15.7828 13.4146 18.3732 11.9999 20.5915C10.5852 18.3732 9.70229 15.7828 9.53068 12.9999ZM9.53068 10.9999C9.70229 8.21709 10.5852 5.62672 11.9999 3.40841C13.4146 5.62672 14.2976 8.21709 14.4692 10.9999H9.53068Z" />
      </svg>
    ),
  },
  {
    id: 2,
    title: "Frontend Engineering & UI",
    description: "Pixel-perfect, ultra-responsive interfaces engineered with Tailwind CSS, DaisyUI, and React. Clean typography, animations, and fluid user experiences.",
    icon: (
      <svg viewBox="0 0 24 24" width="48" height="48" fill="currentColor">
        <path d="M6.93912 14.0328C6.7072 14.6563 6.51032 15.2331 6.33421 15.8155C7.29345 15.1189 8.43544 14.6767 9.75193 14.5121C12.2652 14.198 14.4976 12.5385 15.6279 10.4537L14.1721 8.99888L15.5848 7.58417C15.9185 7.25004 16.2521 6.91614 16.5858 6.58248C17.0151 6.15312 17.5 5.35849 18.0129 4.2149C12.4197 5.08182 8.99484 8.50647 6.93912 14.0328ZM17 8.99739L18 9.99669C17 12.9967 14 15.9967 10 16.4967C7.33146 16.8303 5.66421 18.6636 4.99824 21.9967H3C4 15.9967 6 1.99669 21 1.99669C20.0009 4.99402 19.0018 6.99313 18.0027 7.99402C17.6662 8.33049 17.3331 8.66382 17 8.99739Z" />
      </svg>
    ),
  },
  {
    id: 3,
    title: "Backend & RESTful APIs",
    description: "Architecting high-concurrency Node.js and Express servers, secure token-based JWT authentication, rate limiting, and third-party API integrations.",
    icon: (
      <svg viewBox="0 0 24 24" width="48" height="48" fill="currentColor">
        <path d="M4.00021 18.9223L2.65056 18.377C2.13849 18.1701 1.89109 17.5873 2.09798 17.0752L4.00021 12.3671V18.9223ZM8.85987 21H7.00021C6.44792 21 6.00021 20.5523 6.00021 20V13.9221L8.85987 21ZM6.02202 5.96771L15.2939 2.22164C15.8059 2.01475 16.3888 2.26215 16.5956 2.77422L22.2147 16.682C22.4216 17.194 22.1742 17.7769 21.6622 17.9838L12.3903 21.7298C11.8783 21.9367 11.2954 21.6893 11.0885 21.1773L5.46944 7.2695C5.26255 6.75743 5.50995 6.1746 6.02202 5.96771ZM9.00021 9.00004C9.55249 9.00004 10.0002 8.55233 10.0002 8.00004C10.0002 7.44776 9.55249 7.00004 9.00021 7.00004C8.44792 7.00004 8.00021 7.44776 8.00021 8.00004C8.00021 8.55233 8.44792 9.00004 9.00021 9.00004Z" />
      </svg>
    ),
  },
  {
    id: 4,
    title: "Database Architecture",
    description: "Designing schema models with MongoDB, Mongoose, PostgreSQL, indexing, caching, and data pipelines to maintain integrity and fast query times.",
    icon: (
      <svg viewBox="0 0 24 24" width="48" height="48" fill="currentColor">
        <path d="M12 2C6.48 2 2 4.02 2 6.5v11C2 19.98 6.48 22 12 22s10-2.02 10-4.5v-11C22 4.02 17.52 2 12 2zm0 2c4.42 0 8 1.43 8 2.5S16.42 9 12 9s-8-1.43-8-2.5S7.58 4 12 4zm8 13.5c0 1.07-3.58 2.5-8 2.5s-8-1.43-8-2.5V14.8c1.94 1.15 4.8 1.7 8 1.7s6.06-.55 8-1.7v2.7zm0-4c0 1.07-3.58 2.5-8 2.5s-8-1.43-8-2.5V10.8c1.94 1.15 4.8 1.7 8 1.7s6.06-.55 8-1.7v2.7z" />
      </svg>
    ),
  },
  {
    id: 5,
    title: "Performance & SEO Optimization",
    description: "Auditing and elevating Core Web Vitals, server-side rendering, metadata optimization, caching strategies, and asset compression for top Google rankings.",
    icon: (
      <svg viewBox="0 0 24 24" width="48" height="48" fill="currentColor">
        <path d="M13 2.05v2.02c3.95.49 7 3.85 7 7.93 0 3.21-1.89 6.01-4.63 7.31L14 17.5c2.14-1.07 3.6-3.29 3.6-5.5 0-3.41-2.6-6.21-6-6.5V7.5L7.5 4.5 11 1.5v.55zm-2 0L7.5 4.5 11 7.5V5.5c-3.4.29-6 3.09-6 6.5 0 2.21 1.46 4.43 3.6 5.5l-1.37 1.81C4.49 17.94 2.6 15.14 2.6 11.93c0-4.08 3.05-7.44 7-7.93V2.05l1.4-.05z" />
      </svg>
    ),
  },
  {
    id: 6,
    title: "Deployment & Maintenance",
    description: "Automated continuous delivery, cloud hosting on Vercel, Netlify, AWS, SSL setup, and ongoing code maintenance to keep your applications running smoothly.",
    icon: (
      <svg viewBox="0 0 24 24" width="48" height="48" fill="currentColor">
        <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z" />
      </svg>
    ),
  },
];

export default function ServicesPage() {
  return (
    <div className="pt-28 pb-12 bg-black text-white">
      {/* Services Section */}
      <section className="py-8 md:py-16">
        <div className="mx-auto max-w-[1296px] px-4">
          
          {/* Section Title */}
          <div className="text-center mb-12 md:mb-16">
            <p className="text-sm font-semibold uppercase tracking-wider text-[#f15b3a]">
              Services
            </p>
            <h1 className="mt-2 text-[32px] sm:text-[42px] md:text-[50px] font-normal tracking-tight text-white">
              Quality Services
            </h1>
            <p className="mx-auto mt-3 max-w-2xl text-[15px] sm:text-[16px] leading-relaxed text-[#9f9f9f]">
              I provide comprehensive full stack engineering solutions to bring your digital concepts to life with unmatched speed, clean architecture, and aesthetic visual polish.
            </p>
          </div>

          {/* 6 Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                className="bento-card p-8 flex flex-col justify-between transition-all duration-300 hover:border-[#f15b3a] group cursor-default"
              >
                <div>
                  <div className="text-[#999999] transition-colors duration-300 group-hover:text-[#f15b3a] mb-6">
                    {service.icon}
                  </div>
                  <h3 className="text-[20px] font-semibold text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-[14px] leading-relaxed text-[#9f9f9f]">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Call To Action Banner */}
      <CallToAction />
    </div>
  );
}
