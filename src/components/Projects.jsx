import { useState } from "react";
import projects from "../datas/projects";
import ProjectModal from "./ProjectModal";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-10">
        Projects
      </h2>

      <div className="flex flex-wrap justify-center gap-4 md:gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="w-full sm:w-[300px] bg-white rounded-2xl shadow-md border border-gray-200 hover:shadow-lg transition-shadow"
          >
            <img
              src={project.thumbnail}
              alt={project.title}
              className="w-full h-45 object-cover rounded-t-2xl"
            />
            <button
              className="p-5 text-left w-full"
              onClick={() => setSelectedProject(project)}
              aria-label={`View details of ${project.title}`}
            >
              <h3 className="text-lg font-semibold mb-1">{project.title}</h3>
              <p className="text-gray-600 text-sm">
                {project.shortDescription}
              </p>
            </button>
          </div>
        ))}
      </div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};

export default Projects;
