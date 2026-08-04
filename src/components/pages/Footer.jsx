import { FaGithub, FaLinkedin, FaArrowUp, FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const footerLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Skills", path: "/skills" },
    { name: "Projects", path: "/projects" },
    { name: "Experience", path: "/experience" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <footer className="bg-[#0F172A] text-white">
      {/* Top */}

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-10 items-center">
          {/* Left */}

          <div>
            <h2 className="text-3xl font-bold">
              Prathamesh
              <span className="text-[#2F7A73]">.</span>
            </h2>

            <p className="text-gray-400 mt-5 leading-8">
              Frontend Developer specializing in Angular, React, TypeScript,
              JavaScript, Node.js and modern web technologies. Passionate about
              building scalable, responsive and high-performance applications.
            </p>
          </div>

          {/* Center */}

          <div className="flex flex-col gap-4 md:items-center">
            {footerLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="hover:text-[#2F7A73] transition"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Right */}

          <div className="md:text-right">
            <h3 className="text-xl font-semibold">Follow Me</h3>

            <div className="flex md:justify-end gap-4 mt-6">
              <a
                href="https://github.com/pPande199803"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-[#1E293B] hover:bg-[#2F7A73] flex items-center justify-center transition"
              >
                <FaGithub size={20} />
              </a>

              <a
                href="https://www.linkedin.com/in/pande-prathamesh/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-[#1E293B] hover:bg-[#2F7A73] flex items-center justify-center transition"
              >
                <FaLinkedin size={20} />
              </a>
            </div>

            <button
              onClick={scrollToTop}
              className="mt-8 inline-flex items-center gap-2 bg-[#2F7A73] hover:bg-[#25655f] px-6 py-3 rounded-full transition"
            >
              Back to Top
              <FaArrowUp />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom */}

      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-center md:text-left">
            © {new Date().getFullYear()} Prathamesh Pande. All Rights Reserved.
          </p>

          <p className="flex items-center gap-2 text-gray-400">
            Built with
            <FaHeart className="text-red-500" />
            Angular | React | TypeScript | JavaScript | Node.js
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
