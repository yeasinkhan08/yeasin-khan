"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate sending
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 900);
  };

  return (
    <div className="bento-card p-6 sm:p-10">
      {submitted ? (
        <div className="py-12 text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 mb-4">
            <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor">
              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-white">Thank You!</h3>
          <p className="mt-2 text-[#9f9f9f] max-w-md mx-auto">
            Your message has been received. I will get back to you as soon as possible!
          </p>
          <button
            type="button"
            onClick={() => setSubmitted(false)}
            className="theme-btn mt-6"
          >
            Send Another Message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-[#cecece] mb-2"
              >
                Full Name <span className="text-[#f15b3a]">*</span>
              </label>
              <input
                type="text"
                id="name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Steve Milner"
                className="w-full rounded-xl border border-white/10 bg-[#17171a] px-4 py-3.5 text-sm text-white placeholder-[#66666d] focus:border-[#f15b3a] focus:outline-none focus:ring-1 focus:ring-[#f15b3a] transition-colors"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-[#cecece] mb-2"
              >
                Email Address <span className="text-[#f15b3a]">*</span>
              </label>
              <input
                type="email"
                id="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="hello@example.com"
                className="w-full rounded-xl border border-white/10 bg-[#17171a] px-4 py-3.5 text-sm text-white placeholder-[#66666d] focus:border-[#f15b3a] focus:outline-none focus:ring-1 focus:ring-[#f15b3a] transition-colors"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="subject"
              className="block text-sm font-medium text-[#cecece] mb-2"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              value={formData.subject}
              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              placeholder="Web Development Project Inquiry"
              className="w-full rounded-xl border border-white/10 bg-[#17171a] px-4 py-3.5 text-sm text-white placeholder-[#66666d] focus:border-[#f15b3a] focus:outline-none focus:ring-1 focus:ring-[#f15b3a] transition-colors"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-[#cecece] mb-2"
            >
              Your Message <span className="text-[#f15b3a]">*</span>
            </label>
            <textarea
              id="message"
              required
              rows={5}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Tell me about your project, timeline, and goals..."
              className="w-full rounded-xl border border-white/10 bg-[#17171a] px-4 py-3.5 text-sm text-white placeholder-[#66666d] focus:border-[#f15b3a] focus:outline-none focus:ring-1 focus:ring-[#f15b3a] transition-colors resize-none"
            />
          </div>

          <div>
            <button
              type="submit"
              disabled={loading}
              className="theme-btn w-full sm:w-auto px-8 py-3.5 font-semibold group"
            >
              {loading ? (
                <span>Sending...</span>
              ) : (
                <>
                  <span>Send Me Message</span>
                  <svg
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  >
                    <path d="M3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM20 7.23792L12.0718 14.338L4 7.21594V19H20V7.23792ZM4.51146 5L12.0619 11.662L19.501 5H4.51146Z" />
                  </svg>
                </>
              )}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
