import learnify from "../assets/learnify.jpg";
import kaira from "../assets/kaira.jpg";
import dashstack from "../assets/dashstack.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { useInView } from "../hooks/useInView";

const Projects = () => {
  const [ref, inView] = useInView();

  const projectsData = [
    {
      id: 1,
      img: learnify,
      title: "Learnify - Courses Platform",
      url: "https://learnify-pied-rho.vercel.app/",
    },
    {
      id: 2,
      img: kaira,
      title: "Kaira - Shopping",
      url: "https://ahmed-osama99.github.io/kaira-ecommerce/",
    },
    {
      id: 3,
      img: dashstack,
      title: "DashStack - Monitor Your Business",
      url: "https://ahmed-osama99.github.io/DashStack/",
    },
  ];

  return (
    <section className="container py-16">
      <h2 className="text-3xl font-bold mb-4 text-center text-headline">
        Featured Projects
      </h2>
      <p className="text-lg text-gray-600 text-center">
        Real interfaces. Real problems. Thoughtfully engineered.
      </p>
      <div className="mx-auto mt-8 gap-8 grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))]">
        {projectsData.map((project, index) => (
          <a
            ref={ref}
            key={project.id}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${project.title} project`}
            style={{ transitionDelay: `${index * 80}ms` }}
            className={`group block overflow-hidden rounded-2xl bg-headline/10 shadow shadow-main-tag transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-main ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          >
            <div className="aspect-video overflow-hidden">
              <img
                src={project.img}
                alt={project.title}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="flex items-center justify-between gap-4 p-4">
              <span className="text-xl font-medium text-headline">
                {project.title}
              </span>
              <FontAwesomeIcon
                aria-hidden="true"
                icon={faArrowUpRightFromSquare}
              />
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects;
