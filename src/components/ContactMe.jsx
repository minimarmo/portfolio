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
    label: "Email",
    value: "renuka.phoubol@gmail.com",
    href: "mailto:renuka.phoubol@gmail.com",
    icon: <FiMail />,
  },
  {
    label: "Phone",
    value: "+66 91-234-5678",
    href: "tel:+66912345678",
    icon: <FiPhone />,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/renuka-phoubol",
    href: "https://www.linkedin.com/in/renuka-phoubol",
    icon: <FiLinkedin />,
  },
  {
    label: "GitHub",
    value: "github.com/minimarmo",
    href: "https://github.com/minimarmo",
    icon: <FiGithub />,
  },
  {
    label: "Instagram",
    value: "instagram.com/marmo_ii",
    href: "https://www.instagram.com/marmo_ii",
    icon: <FiInstagram />,
  },
  {
    label: "WeChat",
    value: "marmo_ii",
    icon: <TbBrandWechat />,
  },
];

const ContactMe = () => {
  return (
    <section
      id="contact-me"
      className="sm:px-6 md:px-12 lg:px-20 xl:px-24 bg-white text-gray-800"
    >
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10">
        Contact Me
      </h2>

      <div className="max-w-md mx-auto flex flex-col items-center gap-6">
        {contacts.map(({ label, value, href, icon }) => (
          <div key={label} className="flex gap-4">
            <div className="flex flex-col items-center">
              <div className="flex items-center gap-2">
                <span className="text-xl text-gray-600 mt-1 text-center">
                  {icon}
                </span>
                <span className="text-sm font-medium text-gray-500 text-center">
                  {label}
                </span>
              </div>
              {href ? (
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base text-gray-800 hover:underline break-all"
                >
                  {value}
                </a>
              ) : (
                <span className="text-base text-gray-800 break-all">
                  {value}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ContactMe;
