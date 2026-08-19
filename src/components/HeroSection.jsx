const HeroSection = () => {
  return (
    <section className="relative h-[calc(100vh-76px)] flex items-center bg-white overflow-hidden">
      {/* Background Glowing Orb (FIXED: Removed -z-10, separated opacity for strict Tailwind v4 variable support) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[60%] w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] rounded-full bg-[var(--color-main)] opacity-20 blur-[80px] sm:blur-[120px] pointer-events-none"></div>

      {/* Added 'relative z-10' here to guarantee content stays above the orb */}
      <div className="container relative z-10 h-fit -mt-15 flex flex-col items-center text-center justify-center">
        <p className="bg-black/5 pl-1.5 pr-4 py-2.5 rounded-full text-sm md:text-lg">
          <span className="px-3 py-1.5 text-gray-300 bg-main-tag rounded-full">
            Front-End Developer
          </span>{" "}
          <span className="font-medium text-sm ml-1 font-sans leading-3.5">
            Hey there, I'm AHMED
          </span>
        </p>
        <h1 className="text-2xl sm:text-5xl lg:text-7xl bg-linear-to-br from-headline to-headline/70 bg-clip-text text-transparent font-semibold mt-4">
          Building digital products,
          <br />
          brands and experiences.
        </h1>
        <a
          href="https://wa.me/201147480962"
          rel="noreferrer"
          className="bg-main px-4 py-2.5 rounded-full ring-4 transition-all ring-main/20 uppercase text-white mt-10"
        >
          Let's Talk
        </a>
        </div>
    </section>
  );
};

export default HeroSection;
