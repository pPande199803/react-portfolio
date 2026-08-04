import { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { projectTabs } from "../../data/projects";

const Projects = () => {
  const [activeTab, setActiveTab] = useState("projects");

  return (
    <section id="projects" className="py-24 bg-[#FFFDF7]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center">

          <p className="uppercase tracking-widest text-[#2F7A73] font-semibold">
            Portfolio
          </p>

          <h2 className="text-4xl lg:text-5xl font-bold mt-3">
            My Projects
          </h2>

          <p className="text-gray-500 mt-4">
            Personal Projects & Professional Work
          </p>

        </div>

        {/* Tabs */}

        <div className="flex justify-center mt-12">

          <div className="bg-white shadow rounded-full p-2 flex gap-2">

            <button
              onClick={() => setActiveTab("projects")}
              className={`px-6 py-3 rounded-full transition ${
                activeTab === "projects"
                  ? "bg-[#2F7A73] text-white"
                  : ""
              }`}
            >
              Projects
            </button>

            <button
              onClick={() => setActiveTab("work")}
              className={`px-6 py-3 rounded-full transition ${
                activeTab === "work"
                  ? "bg-[#2F7A73] text-white"
                  : ""
              }`}
            >
              Professional Work
            </button>

          </div>

        </div>

        {/* Cards */}

        <div className="grid md:grid-cols-2 gap-8 mt-16">

          {projectTabs[activeTab].map((item) => (

            <motion.div
              key={item.id}
              whileHover={{ y: -8 }}
              className="bg-white rounded-3xl shadow-lg overflow-hidden"
            >

              {/* Image */}

              {/* {item.image && (
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-56 w-full object-cover"
                />
              )} */}

              <div className="p-8">

                <h3 className="text-2xl font-bold">
                  {item.title}
                </h3>

                <p className="text-[#2F7A73] mt-1">
                  {item.role}
                </p>

                {item.company && (
                  <p className="text-gray-500 text-sm mt-1">
                    {item.company}
                  </p>
                )}

                <p className="mt-5 text-gray-600 leading-7">
                  {item.description}
                </p>

                {/* Features / Tasks */}

                <div className="mt-6">

                  <h4 className="font-semibold mb-3">
                    {activeTab === "projects"
                      ? "Features"
                      : "Responsibilities"}
                  </h4>

                  <ul className="space-y-2">

                    {(activeTab === "projects"
                      ? item.features
                      : item.tasks
                    ).map((point, index) => (

                      <li
                        key={index}
                        className="flex gap-2"
                      >
                        <span className="text-[#2F7A73]">
                          ✔
                        </span>

                        <span>{point}</span>

                      </li>

                    ))}

                  </ul>

                </div>

                {/* Technologies */}

                <div className="flex flex-wrap gap-2 mt-6">

                  {item.tech.map((tech) => (

                    <span
                      key={tech}
                      className="px-3 py-2 rounded-full bg-[#FFFDF7] border"
                    >
                      {tech}
                    </span>

                  ))}

                </div>

                {/* Buttons only for personal projects */}

                {activeTab === "projects" && (

                  <div className="flex gap-4 mt-8">

                    <a
                      href={item.github}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 bg-[#2F7A73] text-white px-5 py-3 rounded-full"
                    >
                      <FaGithub />
                      GitHub
                    </a>

                    {/* <a
                      href={item.live}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 border border-[#2F7A73] text-[#2F7A73] px-5 py-3 rounded-full"
                    >
                      <FaExternalLinkAlt />
                      Live Demo
                    </a> */}

                  </div>

                )}

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
};

export default Projects;