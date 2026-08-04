import { motion } from "framer-motion";
import { skills } from "../../data/skills";

const Skills = () => {
  return (
    <section className="bg-[#FFFDF7] py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="text-center mb-16">
          <span className="text-[#2F7A73] uppercase font-semibold tracking-widest">
            My Skills
          </span>

          <h2 className="text-4xl lg:text-5xl font-bold text-[#0F172A] mt-4">
            Technologies I Work With
          </h2>

          <p className="text-gray-500 mt-5 max-w-2xl mx-auto">
            Here are the technologies I use to build scalable,
            responsive and high-performance web applications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">

          {skills.map((category) => (
            <motion.div
              key={category.title}
              whileHover={{ y: -8 }}
              className="bg-white rounded-3xl p-8 shadow-md"
            >
              <h3 className="text-2xl font-bold text-[#0F172A] mb-6">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-3">

                {category.items.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 rounded-full bg-[#FFFDF7] border border-gray-200 hover:bg-[#2F7A73] hover:text-white transition"
                  >
                    {skill}
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

export default Skills;