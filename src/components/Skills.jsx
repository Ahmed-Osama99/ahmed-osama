import MarqueeImport from "react-fast-marquee";
import reactSVG from "../assets/react.svg";
import tailwindSVG from "../assets/tailwind.svg";
import viteSVG from "../assets/vite.svg";
import jsSVG from "../assets/javascript.svg";
import nodeSVG from "../assets/node.svg";
import htmlSVG from "../assets/html-5.svg";
import cssSVG from "../assets/css-3.svg";
import gitSVG from "../assets/git.svg";
import gitHubSVG from "../assets/github.svg";
import vercelSVG from "../assets/vercel.svg";
import figmaSVG from "../assets/figma.svg";
import npmSVG from "../assets/npm.svg";

const Marquee = MarqueeImport.default || MarqueeImport;

const Skills = () => {
  // Array mapping keeps the JSX clean and makes adding new skills effortless
  const techStack = [
    { src: htmlSVG, name: "HTML" },
    { src: cssSVG, name: "CSS" },
    { src: jsSVG, name: "JavaScript" },
    { src: reactSVG, name: "React" },
    { src: tailwindSVG, name: "Tailwind CSS" },
    { src: viteSVG, name: "Vite" },
    { src: nodeSVG, name: "Node.js" },
    { src: gitSVG, name: "Git" },
    { src: gitHubSVG, name: "GitHub" },
    { src: vercelSVG, name: "Vercel" },
    { src: figmaSVG, name: "Figma" },
    { src: npmSVG, name: "NPM" },
  ];

  return (
    <section className="container py-16">
      <h2 className="text-3xl font-bold text-headline text-center mb-8">
        Skills & Tools
      </h2>
      
      <div className="text-xl md:text-2xl font-bold mx-auto w-fit text-headline text-center leading-relaxed">
        <p>
          Make it
          {/* Increased text size slightly and added margin for breathing room */}
          <span className="text-main font-caveat text-3xl md:text-4xl inline-block mx-2">
            beautiful
          </span>
          , Make it
          {/* Fixed invalid nested <p> tag by changing to <span> */}
          <span className="text-main font-caveat text-3xl md:text-4xl inline-block mx-2">
            fast.
          </span>
        </p>
        <p>
          Make it
          <span className="text-main font-caveat text-3xl md:text-4xl inline-block mx-2">
            unique
          </span>
          , Make it
          <span className="text-main font-caveat text-3xl md:text-4xl inline-block mx-2">
            worthy.
          </span>
        </p>
        <p className="text-center mt-2">Make it.</p>
      </div>

      <div className="mt-16">
        <Marquee speed={50} gradient={true} gradientColor="white" pauseOnHover={true} className="py-4 overflow-hidden">
          {techStack.map((skill, index) => (
            <img
              key={index}
              src={skill.src}
              alt={skill.name}
              title={skill.name}
              /* Grayscale default, color and scale on hover */
              className="w-16 h-16 mx-8 grayscale opacity-60 transition-all duration-300 hover:grayscale-0 hover:opacity-100 hover:scale-110 cursor-pointer"
            />
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default Skills;