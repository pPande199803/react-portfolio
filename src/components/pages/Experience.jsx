import { motion } from "framer-motion";
import { FaBriefcase, FaCalendarAlt } from "react-icons/fa";
import { experiences } from "../../data/experience";

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-24 bg-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-20">

          <p className="uppercase tracking-[4px] text-[#2F7A73] font-semibold">
            Experience
          </p>

          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mt-3">
            Professional Journey
          </h2>

          <p className="text-gray-500 mt-5 max-w-2xl mx-auto">
            My experience building scalable web applications,
            AI-powered solutions and enterprise software.
          </p>

        </div>

        <div className="space-y-10">

          {experiences.map((exp) => (

            <motion.div
              key={exp.id}
              whileHover={{ y: -8 }}
              transition={{ duration: .3 }}
              className="bg-[#FFFDF7] rounded-3xl p-8 shadow-lg hover:shadow-2xl"
            >

              <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center">

                <div className="flex items-center gap-5">

                  <div className="w-16 h-16 rounded-full bg-[#2F7A73] text-white flex items-center justify-center">

                    <FaBriefcase size={24} />

                  </div>

                  <div>

                    <h3 className="text-2xl font-bold text-slate-900">
                      {exp.role}
                    </h3>

                    <p className="text-[#2F7A73] font-semibold">
                      {exp.company}
                    </p>

                  </div>

                </div>

                <div className="flex items-center gap-2 mt-5 lg:mt-0 text-gray-500">

                  <FaCalendarAlt />

                  <span>{exp.duration}</span>

                </div>

              </div>

              <p className="mt-8 text-gray-600 leading-8">
                {exp.description}
              </p>

              <div className="mt-8">

                <h4 className="font-semibold text-lg mb-4">
                  Key Responsibilities
                </h4>

                <ul className="space-y-3">

                  {exp.responsibilities.map((item) => (

                    <li
                      key={item}
                      className="flex gap-3"
                    >
                      <span className="text-[#2F7A73] font-bold">
                        ✔
                      </span>

                      <span className="text-gray-600">
                        {item}
                      </span>

                    </li>

                  ))}

                </ul>

              </div>

              <div className="flex flex-wrap gap-3 mt-8">

                {exp.tech.map((tech) => (

                  <span
                    key={tech}
                    className="px-4 py-2 rounded-full border border-[#DDEEE8] bg-white text-sm font-medium hover:bg-[#2F7A73] hover:text-white transition"
                  >
                    {tech}
                  </span>

                ))}

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
};

export default Experience;