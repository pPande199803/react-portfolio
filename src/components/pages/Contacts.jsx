import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import resume from "../../assets/Resume_Prathamesh_Pande.pdf";
import { HiDownload } from "react-icons/hi";

const Contact = () => {
  return (
    <section id="contact" className="bg-[#FFFDF7] py-24">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center">
          <p className="uppercase tracking-widest text-[#2F7A73] font-semibold">
            Contact
          </p>

          <h2 className="text-5xl font-bold mt-3">Let's Connect</h2>

          <p className="text-gray-500 mt-4">
            Available for Angular Developer | Frontend Developer | MEAN Stack
            Developer opportunities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-16">
          <div className="bg-white rounded-3xl p-8 shadow-lg">
            <div className="flex items-center gap-4 mb-8">
              <FaEnvelope size={24} className="text-[#2F7A73]" />

              <div>
                <p className="text-gray-500">Email</p>

                <h3 className="font-semibold">prathameshpande789@email.com</h3>
              </div>
            </div>

            <div className="flex items-center gap-4 mb-8">
              <FaPhoneAlt size={24} className="text-[#2F7A73]" />

              <div>
                <p className="text-gray-500">Phone</p>

                <h3 className="font-semibold">+91 83297 58097</h3>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <FaMapMarkerAlt size={24} className="text-[#2F7A73]" />

              <div>
                <p className="text-gray-500">Location</p>

                <h3 className="font-semibold">Amravati, Maharashtra</h3>
              </div>
            </div>
          </div>

          <div className="bg-[#2F7A73] rounded-3xl text-white p-8 flex flex-col justify-center">
            <h3 className="text-3xl font-bold">Connect with me</h3>

            <p className="mt-4 text-white/80">
              You can also find me on GitHub and LinkedIn.
            </p>

            <div className="flex gap-5 mt-8">
              <a href="https://github.com/pPande199803">
                <FaGithub size={30} />
              </a>

              <a href="https://www.linkedin.com/in/pande-prathamesh/">
                <FaLinkedin size={30} />
              </a>
            </div>

            <a
              href={resume}
              download="Prathamesh_Pande_Resume.pdf"
              className="mt-10 inline-flex items-center justify-center gap-2 bg-white text-[#2F7A73] px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition duration-300"
            >
              <HiDownload size={20} />
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
