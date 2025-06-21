import projects from "../datas/projects";

const Showcase = () => {
  const handleScrollTo = (id, offset = 80) => {
    const section = document.getElementById(id);
    if (section) {
      const top = section.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <section id="showcases">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6 sm:mb-8 md:mb-10 lg:mb-12 xl:mb-16">
        Showcases
      </h2>

      <div className="flex flex-wrap justify-center gap-4 md:gap-8 lg:gap-10 xl:gap-12">
        {projects.map((project) => (
          <div
            key={project.id}
            className="w-full sm:w-[300px] bg-white rounded-2xl shadow-md border border-gray-200 hover:shadow-lg transition-shadow"
          >
            <img
              src={project.imageUrl}
              alt={project.title}
              className="w-full h-40 object-cover rounded-t-2xl"
            />
            <button className="p-5" onClick={() => handleScrollTo(project.id)}>
              <h3 className="text-lg font-semibold mb-1">{project.title}</h3>
              <p className="text-gray-600 text-sm">
                {project.shortDescription}
              </p>
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Showcase;
