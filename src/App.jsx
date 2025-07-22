import "./App.css";
import ContactMe from "./components/ContactMe";
import Layout from "./components/Layout";
import MyJourney from "./components/MyJourney";
import Projects from "./components/Projects";
import Skill from "./components/Skill";

function App() {
  return (
    <Layout>
      <Projects />
      <Skill />
      <MyJourney />
      <ContactMe />
      {/* <section id="projects">
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
      </section> */}
    </Layout>
  );
}

export default App;
