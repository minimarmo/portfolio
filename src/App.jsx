import "./App.css";
import ContactMe from "./components/ContactMe";
import Layout from "./components/Layout";
import MyJourney from "./components/MyJourney";
import ProjectCard from "./components/ProjectCard";
import Showcase from "./components/Showcase";
import Skill from "./components/Skill";
import projects from "./datas/projects";

function App() {
  return (
    <Layout>
      <Showcase />
      <Skill />
      <MyJourney />
      <ContactMe />
      <section id="projects">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            id={project.id}
            title={project.title}
            description={project.description}
            stack={project.stack}
            imageUrl={project.imageUrl}
            demoUrl={project.demoUrl}
            sourceUrl={project.sourceUrl}
          />
        ))}
      </section>
    </Layout>
  );
}

export default App;
