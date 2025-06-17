const projects = [
  {
    title: "Portfolio Website",
    description: "Personal site with React & Tailwind",
    image: "/portfolio/images/placeholder.png",
  },
  {
    title: "UI Library",
    description: "Reusable components with DaisyUI",
    image: "/portfolio/images/placeholder.png",
  },
  {
    title: "Landing Page",
    description: "Marketing page for a startup",
    image: "/portfolio/images/placeholder.png",
  },
  {
    title: "Admin Dashboard",
    description: "Internal tool using Chart.js",
    image: "/portfolio/images/placeholder.png",
  },
  {
    title: "Analytics Tool",
    description: "Data visualizations & reports",
    image: "/portfolio/images/placeholder.png",
  },
];

const Showcase = () => {
  return (
    <section id="showcase">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6 sm:mb-8 md:mb-10 lg:mb-12 xl:mb-16">
        Showcase
      </h2>

      <div className="flex flex-wrap justify-center gap-4 md:gap-8 lg:gap-10 xl:gap-12">
        {projects.map((project, index) => (
          <div
            key={index - project.title}
            className="w-full sm:w-[300px] bg-white rounded-2xl shadow-md border border-gray-200 hover:shadow-lg transition-shadow"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-40 object-cover rounded-t-2xl"
            />
            <div className="p-5">
              <h3 className="text-lg font-semibold mb-1">{project.title}</h3>
              <p className="text-gray-600 text-sm">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Showcase;
