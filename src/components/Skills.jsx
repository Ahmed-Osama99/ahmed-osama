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
  return (
    <section className="container py-16">
      <h2 className="text-3xl font-bold text-headline text-center mb-8">
        Skills & Tools
      </h2>
      <div className="text-2xl font-bold mx-auto w-fit text-headline">
        <p>
          Make it
          <span className="text-main font-caveat text-3xl"> beautiful</span>,
          Make it
          <span className="text-main font-caveat text-3xl"> fast.</span>
        </p>
        <p>
          Make it 
          <span className="text-main font-caveat text-3xl"> unique</span>,
          Make it
          <span className="text-main font-caveat text-3xl "> worthy.</span>
        </p>
        <p className="text-center">Make it.</p>
      </div>
      <Marquee speed={50} gradient={true} pauseOnHover={true} className="mt-8">
        <img src={htmlSVG} alt="HTML" className="w-16 h-16 mx-8" title="HTML" />
        <img src={cssSVG} alt="CSS" className="w-16 h-16 mx-8" title="CSS" />
        <img
          src={jsSVG}
          alt="JavaScript"
          className="w-16 h-16 mx-8"
          title="JavaScript"
        />
        <img
          src={reactSVG}
          alt="React"
          className="w-16 h-16 mx-8"
          title="React"
        />
        <img
          src={tailwindSVG}
          alt="Tailwind CSS"
          className="w-16 h-16 mx-8"
          title="Tailwind CSS"
        />
        <img src={viteSVG} alt="Vite" className="w-16 h-16 mx-8" title="Vite" />
        <img
          src={nodeSVG}
          alt="Node.js"
          className="w-16 h-16 mx-8"
          title="Node.js"
        />
        <img src={gitSVG} alt="Git" className="w-16 h-16 mx-8" title="Git" />
        <img
          src={gitHubSVG}
          alt="GitHub"
          className="w-16 h-16 mx-8"
          title="GitHub"
        />
        <img
          src={vercelSVG}
          alt="Vercel"
          className="w-16 h-16 mx-8"
          title="Vercel"
        />
        <img
          src={figmaSVG}
          alt="Figma"
          className="w-16 h-16 mx-8"
          title="Figma"
        />
        <img src={npmSVG} alt="NPM" className="w-16 h-16 mx-8" title="NPM" />
      </Marquee>
    </section>
  );
};

export default Skills;
