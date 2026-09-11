import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <footer className="bg-headline relative overflow-hidden text-white @container">
      <div className="container py-16">
        <h2 className="text-center text-4xl md:text-7xl tracking-tight leading-16">
          Have an idea?
        </h2>
        <a
          href="https://wa.me/201147480962"
          target="_blank"
          rel="noreferrer"
          className="border-b w-fit mx-auto special-hover text-xl flex justify-center items-center gap-1 md:text-3xl mt-8"
        >
          Let's talk{" "}
          <FontAwesomeIcon
            icon={faArrowUpRightFromSquare}
            className="text-sm md:text-xl"
          />
        </a>
        <div className="flex flex-col md:flex-row gap-6 items-center md:justify-evenly mt-15">
          <p>ahmed.osama.web@outlook.com</p>
          <div className="flex items-center justify-center gap-6">
            <a
              href="https://www.instagram.com/ahmed.osama.99/"
              target="_blank"
               rel="noreferrer"
              className="border-b"
            >
              Instagram
            </a>
            <a
              href="https://www.linkedin.com/in/ahmedosama-it-react/"
              className="border-b"
              target="_blank"
               rel="noreferrer"
            >
              LinkedIn
            </a>
            <a
              href="https://www.upwork.com/freelancers/~01ddab436f32db0c34?mp_source=share"
              className="border-b"
              target="_blank"
               rel="noreferrer"
            >
              Upwork
            </a>
          </div>
        </div>
      </div>
      <p aria-hidden className="relative uppercase  leading-[40%] left-[-3%] text-[13.5cqw] font-bold text-center whitespace-nowrap text-white/30 select-none pointer-events-none">
        Ahmed Osama
      </p>
    </footer>
  );
};

export default Footer;
