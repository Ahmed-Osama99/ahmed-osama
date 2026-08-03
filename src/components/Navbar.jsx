import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const toggleNav = () => setIsNavOpen(!isNavOpen);
  return (
    <header className=" container py-3 shadow flex items-center justify-between">
      <h1 className="ao-name font-caveat text-deep-teal text-2xl font-bold">Ahmed Osama</h1>
      <button>
        <FontAwesomeIcon
          icon={faBars}
          onClick={toggleNav}
          className="text-xl md:hidden text-deep-teal "
        />
      </button>
      {/* mobile menu */}
      
        <nav className={`absolute p-4 z-10 top-0 left-0 right-0 w-full bg-deep-teal md:hidden transition-transform duration-200 ease-in-out transform ${isNavOpen ? "translate-y-0" : "-translate-y-full"}`}>
          <button>
            <FontAwesomeIcon
              icon={faXmark}
              onClick={toggleNav}
              className="text-xl absolute top-4 right-4"
            />
          </button>
          <ul className=" flex flex-col justfiy-center space-y-8">
            <li>
              <NavLink href="#portfolio" className="hover:text-muted-teal">
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink href="#about" className="hover:text-muted-teal">
                Skills
              </NavLink>
            </li>
            <li>
              <NavLink href="#contact" className="hover:text-muted-teal">
                Contact Me
              </NavLink>
            </li>
          </ul>
        </nav>
      
      {/* mobile overlay */}
      {isNavOpen && (
        <div
          className="fixed inset-0 bg-[#222]/20 bg-opacity-50 transition-opacity duration-300 ease-in-out"
          onClick={toggleNav}
        ></div>
      )}
    </header>
  );
};

export default Navbar;
