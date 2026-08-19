import learnify from "../assets/learnify.jpg";
import kaira from "../assets/kaira.jpg";
import dashstack from "../assets/dashstack.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

const Projects = () => {
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
        {projectsData.map((p) => (
          <div
            key={p.id}
            className="bg-headline/10 shadow shadow-main-tag transform hover:-translate-y-1 hover:shadow-2xl transition-all rounded-2xl overflow-hidden"
          >
            <div className="overflow-hidden">
              <img
                src={p.img}
                alt={p.title}
                className="hover:scale-125 transition-all duration-500 transform"
              />
            </div>
            <div className="flex justify-between items-center p-4">
              <p className="text-xl font-medium text-headline">{p.title}</p>
              <a href={p.url} target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="hover:text-main-tag transition-colors"/>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
