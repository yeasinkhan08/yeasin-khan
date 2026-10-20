import MarqueeText from "react-marquee-text";
import "react-marquee-text/dist/styles.css";

const Marquee = () => {
  return (
    <div className="w-full overflow-hidden py-4 text-gray-400">
      <MarqueeText direction="right" duration={50}>
        <div className="flex items-center gap-12 px-6 text-1xl font-bold md:gap-16 md:text-3xl">
          <span>HTML5</span>
          <span>CSS3</span>
          <span>React</span>
          <span>Next.js</span>
          <span>Tailwind CSS</span>
          <span>Node.Js</span>
          <span>Express.js</span>
          <span>MongoDB</span>
        </div>
      </MarqueeText>
    </div>
  );
};

export default Marquee;
