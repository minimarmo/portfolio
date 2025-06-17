const skills = [
  {
    name: "HTML",
    icon: "/portfolio/images/skills/icon-html.png",
    category: "Frontend",
  },
  {
    name: "CSS",
    icon: "/portfolio/images/skills/icon-css3.png",
    category: "Frontend",
  },
  {
    name: "JavaScript",
    icon: "/portfolio/images/skills/icon-javascript.png",
    category: "Frontend",
  },
  {
    name: "TypeScript",
    icon: "/portfolio/images/skills/icon-typescript.png",
    category: "Frontend",
  },
  {
    name: "React",
    icon: "/portfolio/images/skills/icon-react.png",
    category: "Frontend",
  },
  {
    name: "Tailwind CSS",
    icon: "/portfolio/images/skills/icon-tailwind.png",
    category: "Styling",
  },
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
                isLast ? "" : "mb-6 sm:mb-10 md:mb-12 lg:mb-16 xl:mb-16"
              }`}
            >
              {skills
                .filter((skill) => skill.category === cat)
                .map((skill, index) => (
                  <div
                    key={index - skill.name}
                    className="flex flex-col items-center hover:scale-105 transition-transform"
                  >
                    <div className="tooltip" data-tip={skill.name}>
                      <img
                        src={skill.icon}
                        alt={skill.name}
                        className="w-12 h-12 sm:w-16 sm:h-16 object-contain rounded-lg mb-2"
                      />
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
