import Link from "next/link";

interface PricingPlan {
  id: number;
  name: string;
  tagline: string;
  price: string;
  period: string;
  features: { text: string; included: boolean }[];
  isPopular?: boolean;
}

const plans: PricingPlan[] = [
  {
    id: 1,
    name: "Basic",
    tagline: "Have design ready to build? Or small MVP budget",
    price: "$299",
    period: "project",
    features: [
      { text: "Need your wireframe or Figma", included: true },
      { text: "Frontend build with React / Next.js", included: true },
      { text: "Responsive Mobile & Tablet Layout", included: true },
      { text: "Backend API integration", included: false },
      { text: "Continuous priority support", included: false },
    ],
  },
  {
    id: 2,
    name: "Standard",
    tagline: "Need a complete custom web app? Leave it to me",
    price: "$799",
    period: "project",
    isPopular: true,
    features: [
      { text: "Full Stack Web Development", included: true },
      { text: "Next.js + Node.js + MongoDB", included: true },
      { text: "Authentication & Database Design", included: true },
      { text: "REST API & Payment Gateway", included: true },
      { text: "SEO & Core Web Vitals Optimization", included: true },
    ],
  },
  {
    id: 3,
    name: "Enterprise",
    tagline: "Large scale web architecture & ongoing product development",
    price: "$1,499",
    period: "project",
    features: [
      { text: "Complete Custom System Architecture", included: true },
      { text: "Complex Database & Cloud Integration", included: true },
      { text: "Performance Audits & Speed Optimization", included: true },
      { text: "Automated Deployment & CI/CD Setup", included: true },
      { text: "Dedicated Priority 24/7 Support", included: true },
    ],
  },
];

export default function Pricing() {
  return (
    <section className="py-12 md:py-20 bg-black text-white">
      <div className="mx-auto max-w-[1296px] px-4">
        
        {/* Section Title */}
        <div className="text-center mb-10 md:mb-14">
          <p className="text-sm font-semibold uppercase tracking-wider text-[#f15b3a]">
            Pricing
          </p>
          <h2 className="mt-2 text-[32px] sm:text-[42px] font-normal tracking-tight text-white">
            Flexible Pricing Plan
          </h2>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 items-stretch">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`bento-card p-8 flex flex-col justify-between relative transition-all duration-300 hover:border-[#f15b3a]/50 ${
                plan.isPopular ? "border-[#f15b3a]/60 shadow-xl shadow-[#f15b3a]/10" : ""
              }`}
            >
              {plan.isPopular && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-[#f15b3a] px-3.5 py-1 text-xs font-bold text-white shadow-md">
                  Most Popular
                </span>
              )}

              <div>
                <div className="border-b border-white/10 pb-6">
                  <h4 className="text-2xl font-bold text-white">{plan.name}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-[#9f9f9f]">
                    {plan.tagline}
                  </p>
                  <div className="mt-4 flex items-baseline gap-1">
                    <span className="text-4xl font-extrabold text-white">
                      {plan.price}
                    </span>
                    <span className="text-sm text-[#77777d]">/ {plan.period}</span>
                  </div>
                </div>

                {/* Features List */}
                <ul className="mt-6 space-y-3.5 text-sm">
                  {plan.features.map((feat, index) => (
                    <li
                      key={index}
                      className={`flex items-center gap-2.5 ${
                        feat.included ? "text-[#cecece]" : "text-[#55555c] line-through"
                      }`}
                    >
                      <svg
                        viewBox="0 0 24 24"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className={feat.included ? "text-[#f15b3a]" : "text-[#55555c]"}
                      >
                        <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
                      </svg>
                      {feat.text}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-4">
                <Link
                  href="/contact"
                  className={`w-full ${
                    plan.isPopular ? "theme-btn" : "theme-btn-outline rounded-[15px] py-3 font-semibold"
                  }`}
                >
                  Order Now
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                    <path d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
