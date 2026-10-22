import ContactForm from "@/components/ContactForm";
import CallToAction from "@/components/CallToAction";

export const metadata = {
  title: "Contact Me - Yeasin Khan",
  description: "Get in touch with Yeasin Khan for web development projects, freelance opportunities, or engineering roles.",
};

export default function ContactPage() {
  return (
    <div className="pt-28 pb-12 bg-black text-white">
      <section className="py-8 md:py-16">
        <div className="mx-auto max-w-[1296px] px-4">

          {/* Section Title */}
          <div className="text-center mb-12 md:mb-16">
            <p className="text-sm font-semibold uppercase tracking-wider text-[#f15b3a]">
              Contact
            </p>
            <h1 className="mt-2 text-[32px] sm:text-[42px] md:text-[50px] font-normal tracking-tight text-white">
              Get in Touch with Me!
            </h1>
            <p className="mx-auto mt-3 max-w-2xl text-[15px] sm:text-[16px] leading-relaxed text-[#9f9f9f]">
              Have a new project idea or looking to hire a full stack developer? Drop me a message and let&apos;s build something exceptional together.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

            {/* Left Column: Contact Cards */}
            <div className="lg:col-span-4 space-y-6">

              {/* Card 1: Location */}
              <div className="bento-card p-6 flex items-start gap-4">
                <div className="flex h-12 w-12 flex-none items-center justify-center rounded-xl border border-white/10 bg-[#17171a] text-[#f15b3a]">
                  <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
                    <path d="M12 20.8995L16.9497 15.9497C19.6834 13.2161 19.6834 8.78392 16.9497 6.05025C14.2161 3.31658 9.78392 3.31658 7.05025 6.05025C4.31658 8.78392 4.31658 13.2161 7.05025 15.9497L12 20.8995ZM12 23.7279L5.63604 17.364C2.12132 13.8492 2.12132 8.15076 5.63604 4.63604C9.15076 1.12132 14.8492 1.12132 18.364 4.63604C21.8787 8.15076 21.8787 13.8492 18.364 17.364L12 23.7279ZM12 13C13.1046 13 14 12.1046 14 11C14 9.89543 13.1046 9 12 9C10.8954 9 10 9.89543 10 11C10 12.1046 10.8954 13 12 13Z" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-xs font-semibold uppercase tracking-wider text-[#9f9f9f]">
                    Location / Office
                  </h2>
                  <p className="mt-1 text-[16px] font-semibold text-white">
                    Tongi,Gazipur
                  </p>
                </div>
              </div>

              {/* Card 2: Contact Number */}
              <div className="bento-card p-6 flex items-start gap-4">
                <div className="flex h-12 w-12 flex-none items-center justify-center rounded-xl border border-white/10 bg-[#17171a] text-[#f15b3a]">
                  <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
                    <path d="M9.36556 10.6821C10.302 12.3288 11.6712 13.698 13.3179 14.6344L14.2024 13.3961C14.4965 12.9845 15.0516 12.8573 15.4956 13.0998C16.9024 13.8683 18.4571 14.3353 20.0789 14.4637C20.599 14.5049 21 14.9389 21 15.4606V19.9234C21 20.4361 20.6122 20.8657 20.1022 20.9181C19.5723 20.9726 19.0377 21 18.5 21C9.93959 21 3 14.0604 3 5.5C3 4.96227 3.02742 4.42771 3.08189 3.89776C3.1343 3.38775 3.56394 3 4.07665 3H8.53942C9.0611 3 9.49513 3.40104 9.5363 3.92109C9.66467 5.54288 10.1317 7.09764 10.9002 8.50444C11.1427 8.9484 11.0155 9.50354 10.6039 9.79757L9.36556 10.6821ZM6.84425 10.0252L8.7442 8.66809C8.20547 7.50514 7.83628 6.27183 7.64727 5H5.00907C5.00303 5.16632 5 5.333 5 5.5C5 12.9558 11.0442 19 18.5 19C18.667 19 18.8337 18.997 19 18.9909V16.3527C17.7282 16.1637 16.4949 15.7945 15.3319 15.2558L13.9748 17.1558C13.4258 16.9425 12.8956 16.6915 12.3874 16.4061L12.3293 16.373C10.3697 15.2587 8.74134 13.6303 7.627 11.6707L7.59394 11.6126C7.30849 11.1044 7.05754 10.5742 6.84425 10.0252Z" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-xs font-semibold uppercase tracking-wider text-[#9f9f9f]">
                    Contact Number
                  </h2>
                  <p className="mt-1 text-[16px] font-semibold text-white">
                    +880 1781-775704
                  </p>
                </div>
              </div>

              {/* Card 3: Email */}
              <div className="bento-card p-6 flex items-start gap-4">
                <div className="flex h-12 w-12 flex-none items-center justify-center rounded-xl border border-white/10 bg-[#17171a] text-[#f15b3a]">
                  <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
                    <path d="M3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM20 7.23792L12.0718 14.338L4 7.21594V19H20V7.23792ZM4.51146 5L12.0619 11.662L19.501 5H4.51146Z" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-xs font-semibold uppercase tracking-wider text-[#9f9f9f]">
                    Email Us
                  </h2>
                  <a
                    href="mailto:kyeasin58@gmail.com"
                    className="mt-1 block text-[16px] font-semibold text-white hover:text-[#f15b3a] transition-colors"
                  >
                    kyeasin58@gmail.com
                  </a>
                </div>
              </div>

            </div>

            {/* Right Column: Form */}
            <div className="lg:col-span-8">
              <ContactForm />
            </div>

          </div>

        </div>
      </section>

      {/* Call To Action Banner */}
      <CallToAction />
    </div>
  );
}
