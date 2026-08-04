import { motion } from "framer-motion";
import {
  FaLaptopCode,
  FaMobileAlt,
  FaServer,
} from "react-icons/fa";

const services = [
  {
    icon: <FaLaptopCode size={28} />,
    title: "Frontend Development",
    subtitle: "Angular • React • TypeScript",
    color: "bg-[#2F7A73]",
  },
  {
    icon: <FaMobileAlt size={28} />,
    title: "Responsive UI",
    subtitle: "Tailwind CSS • Bootstrap",
    color: "bg-[#F4B740]",
  },
  {
    icon: <FaServer size={28} />,
    title: "API Integration",
    subtitle: "REST API • Node.js",
    color: "bg-[#F26A4B]",
  },
];

const About = () => {
  return (
    <section
      id="about"
      className="bg-white py-20 lg:py-28"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}

          <div className="space-y-6">

            {services.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                }}
                className="bg-[#FFFDF7] rounded-3xl p-6 shadow-md hover:shadow-xl transition-all duration-300 flex items-center gap-5"
              >
                <div
                  className={`${item.color} w-16 h-16 rounded-full flex justify-center items-center text-white`}
                >
                  {item.icon}
                </div>

                <div>
                  <h3 className="text-xl font-bold text-[#0F172A]">
                    {item.title}
                  </h3>

                  <p className="text-gray-500 mt-1">
                    {item.subtitle}
                  </p>
                </div>
              </motion.div>
            ))}

          </div>

          {/* RIGHT */}

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .8 }}
            viewport={{ once: true }}
          >

            <span className="text-[#2F7A73] font-semibold uppercase tracking-wider">
              About Me
            </span>

            <h2 className="text-4xl lg:text-5xl font-bold text-[#0F172A] mt-4 leading-tight">
              Building Modern &
              <br />
              Scalable Web Applications
            </h2>

            <p className="text-gray-600 leading-8 mt-8">
              I'm Prathamesh Pande, a Frontend Developer with
              nearly 3 years of experience developing
              enterprise-level web applications using Angular,
              React, TypeScript, JavaScript and modern UI
              technologies.
            </p>

            <p className="text-gray-600 leading-8 mt-5">
              I enjoy creating fast, responsive and user-friendly
              interfaces with clean code, reusable components and
              scalable architecture.
            </p>

            {/* Statistics */}

            <div className="grid grid-cols-3 gap-8 mt-12">

              <div>
                <h2 className="text-5xl font-bold text-[#0F172A]">
                  2+
                </h2>

                <p className="text-gray-500 mt-2">
                  Years Experience
                </p>
              </div>

              <div>
                <h2 className="text-5xl font-bold text-[#0F172A]">
                  15+
                </h2>

                <p className="text-gray-500 mt-2">
                  Projects
                </p>
              </div>

              <div>
                <h2 className="text-5xl font-bold text-[#0F172A]">
                  12+
                </h2>

                <p className="text-gray-500 mt-2">
                  Technologies
                </p>
              </div>

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default About;