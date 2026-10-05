import { useState } from "react";
import { NavLink } from "react-router-dom";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";
import { FiMoon, FiDownload } from "react-icons/fi";
import resume from "../assets/Resume_Prathamesh_pande.pdf";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Skills", path: "/skills" },
  { name: "Projects", path: "/projects" },
  { name: "Experience", path: "/experience" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);


  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#FFFDF7]/90 backdrop-blur-lg border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="h-20 flex items-center justify-between">
          {/* Logo */}

          <NavLink to="/">
            <h1 className="text-3xl font-bold text-[#1E3A5F]">
              Prathamesh P<span className="text-[#2F7A73]">.</span>
            </h1>
          </NavLink>

          {/* Desktop Menu */}

          <nav className="hidden lg:flex items-center gap-10">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `relative font-medium transition duration-300

                  ${
                    isActive
                      ? "text-[#2F7A73]"
                      : "text-gray-700 hover:text-[#2F7A73]"
                  }

                  after:absolute after:left-0 after:-bottom-2
                  after:h-[2px] after:bg-[#2F7A73]
                  after:transition-all after:duration-300

                  ${isActive ? "after:w-full" : "after:w-0 hover:after:w-full"}
                  `
                }
              >
                {item.name}
              </NavLink>
            ))}
          </nav>

          {/* Right Side */}

          <div className="hidden lg:flex items-center gap-4">
            {/* <button className="w-11 h-11 rounded-full border border-gray-300 flex items-center justify-center hover:bg-[#2F7A73] hover:text-white transition">
              <FiMoon size={18} />
            </button> */}

            <a
              href={resume}
              download="Prathamesh_Pande_Resume.pdf"
              className="flex items-center gap-2 bg-[#2F7A73] hover:bg-[#245F59]
  text-white px-5 py-3 rounded-full transition"
            >
              <FiDownload />
              Resume
            </a>
          </div>

          {/* Mobile */}

          <button className="lg:hidden text-3xl" onClick={() => setOpen(!open)}>
            {open ? <HiOutlineX /> : <HiOutlineMenuAlt3 />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}

      {open && (
        <div className="lg:hidden bg-[#FFFDF7] shadow-xl">
          <div className="flex flex-col">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `px-8 py-5 border-b

                  ${
                    isActive ? "text-[#2F7A73] font-semibold" : "text-gray-700"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}

            <div className="p-6">
              <button className="w-full bg-[#2F7A73] text-white py-4 rounded-full">
                Download Resume
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
