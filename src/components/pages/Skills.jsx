import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { skills } from "../../data/skills";

const Skills = () => {
  const allSkills = skills.flatMap((category) => category.items);
  const [activeSkill, setActiveSkill] = useState(null);

  // On mobile & small screens (≤720px) the skill name shows on tap/click
  // (tapping the same icon again closes it). Bigger screens stay hover-only.
  const handleSelect = (name) => {
    const isMobile = window.matchMedia("(max-width: 720px)").matches;
    if (!isMobile) return;
    setActiveSkill((prev) => (prev === name ? null : name));
  };

  // If the viewport is resized to desktop, clear any tapped (active) skill.
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 721px)");
    const handleChange = (e) => {
      if (e.matches) setActiveSkill(null);
    };
    mq.addEventListener("change", handleChange);
    return () => mq.removeEventListener("change", handleChange);
  }, []);

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

          {allSkills.map(({ name, Icon }) => {
            const isActive = activeSkill === name;

            return (
              <motion.div
                key={name}
                whileHover={{ y: -6, scale: 1.06 }}
                onClick={() => handleSelect(name)}
                className={`group relative flex items-center justify-center w-16 h-16 rounded-full shadow-sm transition duration-300 hover:bg-[#2F7A73] hover:border-[#2F7A73] ${
                  isActive
                    ? "bg-[#2F7A73] border-[#2F7A73]"
                    : "bg-white border border-gray-200"
                }`}
              >
                <Icon
                  size={26}
                  className={`transition duration-300 group-hover:text-white ${
                    isActive ? "text-white" : "text-[#2F7A73]"
                  }`}
                />

                <span
                  className={`pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-[#2F7A73] px-3 py-1 text-xs font-medium text-white transition duration-300 group-hover:opacity-100 max-[720px]:max-w-[10rem] max-[720px]:whitespace-normal max-[720px]:text-center ${
                    isActive ? "opacity-100" : "opacity-0"
                  }`}
                >
                  {name}
                </span>
              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
};

export default Skills;