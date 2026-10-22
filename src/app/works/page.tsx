import Projects from "@/components/Projects";
import CallToAction from "@/components/CallToAction";

export const metadata = {
  title: "Works & Projects - Yeasin Khan",
  description: "Browse the portfolio of web applications, frontend UIs, and full-stack projects built by Yeasin Khan.",
};

export default function WorksPage() {
  return (
    <div className="pt-28 pb-12 bg-black text-white">
      <Projects showTitle={true} />
      <CallToAction />
    </div>
  );
}
