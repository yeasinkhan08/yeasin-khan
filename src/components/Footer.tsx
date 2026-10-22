import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full border-t border-white/5 py-8 md:py-10 bg-black">
      <div className="mx-auto flex max-w-[1296px] flex-col items-center justify-between gap-4 px-4 sm:flex-row text-[14px] text-[#9f9f9f]">
        <div>
          <p>
            Copyright © 2026,{" "}
            <Link
              href="/"
              className="text-[#f15b3a] transition-colors hover:underline"
            >
              Yeasin Khan
            </Link>
            . All Rights Reserved.
          </p>
        </div>

        <div>
          <p>
            Crafted with <span className="text-[#f15b3a]">❤️</span> by Yeasin Khan
          </p>
        </div>
      </div>
    </footer>
  );
}
