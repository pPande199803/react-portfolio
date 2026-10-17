import { motion } from "framer-motion";
import { skills } from "../../data/skills";

const Skills = () => {
  const allSkills = skills.flatMap((category) => category.items);

  return (
    <section className="bg-[#FFFDF7] py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="text-center mb-12">
          <span className="text-[#2F7A73] uppercase font-semibold tracking-widest">
            My Skills
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F172A] mt-4">
            Technologies I Work With
          </h2>

          <p className="text-gray-500 mt-5 max-w-2xl mx-auto">
            Here are the technologies I use to build scalable,
            responsive and high-performance web applications.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4">

          {allSkills.map(({ name, Icon }) => (
            <motion.div
              key={name}
              whileHover={{ y: -6, scale: 1.06 }}
              className="group relative flex items-center justify-center w-16 h-16 rounded-full bg-white border border-gray-200 shadow-sm transition duration-300 hover:bg-[#2F7A73] hover:border-[#2F7A73]"
            >
              <Icon
                size={26}
                className="text-[#2F7A73] transition duration-300 group-hover:text-white"
              />

              <span className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-[#2F7A73] px-3 py-1 text-xs font-medium text-white opacity-0 transition duration-300 group-hover:opacity-100">
                {name}
              </span>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Skills;