import aboutImg from "../assets/ahmedosama.jpg";

const About = () => {
  return (
    <section className="container py-16">
      <div className="w-full relative max-w-8xl mx-auto @container rounded-2xl overflow-hidden">
        <img src={aboutImg} alt="Ahmed Osama" className="w-full" />
        <p className="absolute bottom-[-24%] text-headline mix-blend-hard-light left-[-4%] text-[16.1cqw] text-center whitespace-nowrap">
          A bit about me
        </p>
      </div>
      <div className="mt-12 flex flex-col md:flex-row gap-8 md:gap-16 items-center justify-center   ">
        <div>
          <h3 className="text-2xl font-bold text-headline">Beyond the Code</h3>
          <p className="mt-4 text-headline/90 max-w-[50ch]">
            I build interfaces that feel effortless—fast, accessible, and
            thoughtfully crafted. Every detail matters, from the first
            interaction to the final animation. My goal is simple: create
            digital experiences that people enjoy using and businesses are proud
            to ship.
          </p>
          <p className="mt-4 text-headline/90 max-w-[50ch]">
            Every project is an opportunity to transform ideas into intuitive,
            high-performance digital experiences that people genuinely enjoy
            using.
          </p>
        </div>
        <div>
          <div>3+ Years in IT</div>
          <div>15+ Projects</div>
          
        </div>
      </div>
    </section>
  );
};

export default About;
