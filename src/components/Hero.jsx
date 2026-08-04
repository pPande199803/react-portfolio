import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import profile from "../assets/profile.png";
import resume from "../assets/Resume_Prathamesh_pande.pdf";

import { FaGithub, FaLinkedin, FaArrowRight } from "react-icons/fa";

import { HiDownload } from "react-icons/hi";

const Hero = () => {
  return (
    <section className="bg-[#FFFDF7] pt-24 lg:pt-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-14">
          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left order-2 lg:order-1"
          >
            <p className="text-[#2F7A73] font-semibold text-lg mb-4">
              👋 Hello There,
            </p>

            <h1 className="font-bold text-[#0F172A] leading-tight text-5xl md:text-6xl lg:text-7xl">
              I'm
              <br />
              <span className="text-[#1E3A5F]">Prathamesh</span>
              <br />
              Pande
            </h1>

            <div className="mt-6 text-2xl lg:text-3xl font-semibold text-[#2F7A73] min-h-[40px]">
              <TypeAnimation
                sequence={[
                  "Frontend Developer",
                  2000,
                  "Angular Developer",
                  2000,
                  "React Developer",
                  2000,
                  "Node.js Developer",
                  2000,
                ]}
                speed={40}
                repeat={Infinity}
              />
            </div>

            <p className="mt-8 text-gray-600 leading-8 max-w-xl mx-auto lg:mx-0">
              I build scalable, responsive and high-performance web applications
              using Angular, React, TypeScript, JavaScript and modern frontend
              technologies.
            </p>

            {/* Buttons */}

            <div className="flex flex-col sm:flex-row gap-5 mt-10 justify-center lg:justify-start">
              {/* Hire Me */}
              <a
                href="#contact"
                className="bg-[#2F7A73] hover:bg-[#255F59] text-white px-8 py-4 rounded-full flex items-center justify-center gap-3 transition duration-300"
              >
                Hire Me
                <FaArrowRight />
              </a>

              {/* Download Resume */}
              <a
                href={resume}
                download="Prathamesh_Pande_Resume.pdf"
                className="border-2 border-[#2F7A73] text-[#2F7A73] px-8 py-4 rounded-full flex items-center justify-center gap-3 hover:bg-[#2F7A73] hover:text-white transition duration-300"
              >
                Resume
                <HiDownload />
              </a>
            </div>

            {/* Social */}

            <div className="flex gap-5 mt-10 justify-center lg:justify-start">
              <a
                href="https://github.com/pPande199803"
                className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-[#2F7A73] hover:text-white transition"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/pande-prathamesh/"
                className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-[#2F7A73] hover:text-white transition"
              >
                <FaLinkedin />
              </a>
            </div>
          </motion.div>

          {/* RIGHT */}

          {/* RIGHT */}

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center order-1 lg:order-2"
          >
            {/* Circle + Image cropped together */}

            <div
              className="relative z-10 rounded-full overflow-hidden shadow-2xl
      w-[260px] h-[260px]
      sm:w-[330px] sm:h-[330px]
      lg:w-[430px] lg:h-[430px]
      bg-[#DDEEE8]"
            >
              <img
                src={profile}
                alt="Prathamesh"
                className="w-full h-full object-cover object-top"
              />
            </div>

            {/* Experience */}

            <motion.div
              animate={{ y: [-8, 8, -8] }}
              transition={{ repeat: Infinity, duration: 4 }}
              className="absolute top-4 -left-4 lg:top-10 lg:-left-6 bg-white rounded-2xl shadow-xl px-5 py-4 z-20"
            >
              <h2 className="text-2xl font-bold text-[#2F7A73]">2+</h2>

              <p className="text-sm text-gray-500">Years Experience</p>
            </motion.div>

            {/* Projects */}

            <motion.div
              animate={{ y: [8, -8, 8] }}
              transition={{ repeat: Infinity, duration: 5 }}
              className="absolute bottom-4 -right-4 lg:bottom-10 lg:-right-6 bg-white rounded-2xl shadow-xl px-5 py-4 z-20"
            >
              <h2 className="text-2xl font-bold text-[#2F7A73]">15+</h2>

              <p className="text-sm text-gray-500">Projects</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
