import { BiLogoTypescript } from "react-icons/bi";
import { FaPython, FaReact } from "react-icons/fa";
import { FaDartLang, FaFlutter } from "react-icons/fa6";
import { IoLogoCss3, IoLogoHtml5 } from "react-icons/io";
import {
  RiJavascriptFill,
  RiSupabaseFill,
  RiTailwindCssFill,
} from "react-icons/ri";
import {
  SiAntdesign,
  SiAppwrite,
  SiChakraui,
  SiMui,
  SiRefine,
} from "react-icons/si";

const skills = [
  { name: "HTML", icon: <IoLogoHtml5 />, category: "Language" },
  { name: "CSS", icon: <IoLogoCss3 />, category: "Language" },
  { name: "JavaScript", icon: <RiJavascriptFill />, category: "Language" },
  { name: "TypeScript", icon: <BiLogoTypescript />, category: "Language" },
  { name: "Python", icon: <FaPython />, category: "Language" },
  { name: "Dart", icon: <FaDartLang />, category: "Language" },
  { name: "React", icon: <FaReact />, category: "Frontend" },
  { name: "Flutter", icon: <FaFlutter />, category: "Frontend" },
  { name: "Refine", icon: <SiRefine />, category: "Frontend" },
  { name: "Tailwind CSS", icon: <RiTailwindCssFill />, category: "Frontend" },
  { name: "MUI", icon: <SiMui />, category: "Frontend" },
  { name: "Ant Design", icon: <SiAntdesign />, category: "Frontend" },
  { name: "Chakra UI", icon: <SiChakraui />, category: "Frontend" },
  { name: "Appwrite", icon: <SiAppwrite />, category: "Backend&Database" },
  { name: "Supabase", icon: <RiSupabaseFill />, category: "Backend&Database" },
];

const Skill = () => {
  const categories = [...new Set(skills.map((s) => s.category))];
  return (
    <section id="skills">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6 sm:mb-8 md:mb-10 lg:mb-12 xl:mb-16">
        Skills
      </h2>

      {categories.map((cat, i) => {
        const isLast = i === categories.length - 1;
        return (
          <div key={cat}>
            <div
              className={`flex flex-wrap justify-center gap-6 sm:gap-10 md:gap-12 lg:gap-16 xl:gap-16 ${
                isLast ? "" : "mb-4 sm:mb-6 md:mb-8 lg:mb-10 xl:mb-12"
              }`}
            >
              {skills
                .filter((skill) => skill.category === cat)
                .map((skill) => (
                  <div
                    key={skill.name}
                    className="flex flex-col items-center hover:scale-105 transition-transform"
                  >
                    <div className="tooltip" data-tip={skill.name}>
                      <div
                        key={skill.name}
                        className="flex flex-col items-center hover:scale-105 transition-transform"
                      >
                        <div className="tooltip" data-tip={skill.name}>
                          <div className="text-4xl sm:text-5xl">
                            {skill.icon}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Skill;
