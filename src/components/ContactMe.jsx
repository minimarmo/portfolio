import {
  FiGithub,
  FiInstagram,
  FiLinkedin,
  FiMail,
  FiPhone,
} from "react-icons/fi";
import { TbBrandWechat } from "react-icons/tb";

const contacts = [
  {
    value: "renuka.phoubol@gmail.com",
    href: "mailto:renuka.phoubol@gmail.com",
    icon: <FiMail />,
  },
  {
    value: "+66 97-984-9940",
    href: "tel:+66979849940",
    icon: <FiPhone />,
  },
  {
    value: "linkedin.com/in/renuka-phoubol",
    href: "https://www.linkedin.com/in/renuka-phoubol",
    icon: <FiLinkedin />,
  },
  {
    value: "github.com/minimarmo",
    href: "https://github.com/minimarmo",
    icon: <FiGithub />,
  },
  {
    value: "instagram.com/marmo_ii",
    href: "https://www.instagram.com/marmo_ii",
    icon: <FiInstagram />,
  },
  {
    value: "marmo_ii",
    icon: <TbBrandWechat />,
  },
];

const ContactMe = () => {
  return (
    <section
      id="contact-me"
      className="px-6 py-16 md:px-12 lg:px-20 xl:px-24 bg-white text-gray-800"
    >
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10">
        Contact Me
      </h2>

      <div className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-12">
        {contacts.map(({ value, href, icon }, index) => (
          <div key={index} className="flex items-center gap-3">
            <span className="text-xl text-gray-700">{icon}</span>
            {href ? (
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm sm:text-base text-gray-800 hover:underline break-all"
              >
                {value}
              </a>
            ) : (
              <span className="text-sm sm:text-base text-gray-800 break-all">
                {value}
              </span>
            )}
          </div>
        ))}
      </div>

      <div className="text-center mt-10">
        <a
          href="/portfolio/files/Renuka_Phoubol_CV.pdf"
          download
          className="inline-block px-6 py-2 bg-black text-white rounded-md shadow hover:bg-gray-800 transition"
        >
          Download CV
        </a>
      </div>
    </section>
  );
};

export default ContactMe;
