import aboutImg from "../assets/ahmedosama.jpg";

const About = () => {
  return (
    <section className="container py-16">
      <div className="w-full relative max-w-8xl mx-auto @container rounded-2xl overflow-hidden">
        <img src={aboutImg} alt="Ahmed Osama" className="w-full" />
        
<p 
          className="absolute bottom-[-24%] left-[-3%] text-[15cqw] font-bold text-center whitespace-nowrap text-transparent select-none pointer-events-none"
          style={{ WebkitTextStroke: '3px rgba(255, 255, 255, 0.4)' }}
        >
          A bit about me
        </p>
      </div>
      
      <div className="mt-12 flex flex-col md:flex-row gap-8 md:gap-16 items-center justify-between">
        <div className="max-w-2xl">
          <h3 className="text-2xl font-bold text-headline">Beyond the Code</h3>
          <p className="mt-4 text-headline/90">
            I build interfaces that feel effortless—fast, accessible, and
            thoughtfully crafted. Every detail matters, from the first
            interaction to the final animation. My goal is simple: create
            digital experiences that people enjoy using and businesses are proud
            to ship.
          </p>
          <p className="mt-4 text-headline/90">
            With a background in IT and system administration, I bring both a
            developer's mindset and a strong understanding of the technical
            infrastructure behind the products I build.
          </p>
        </div>
        <div className="flex flex-col gap-4 md:gap-8 w-full md:w-auto flex-1">
          <div className="border border-pargraph/50 rounded-2xl p-6 uppercase text-headline/90">
            <span className="block text-3xl font-bold text-headline">3+</span>{" "}
            Years of experience in IT
          </div>
          <div className="border border-pargraph/50 rounded-2xl p-6 uppercase text-headline/90">
            <span className="block text-3xl font-bold text-headline">15</span>{" "}
            Web Apps shipped
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;