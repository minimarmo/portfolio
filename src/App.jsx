import "./App.css";
import ContactMe from "./components/ContactMe";
import Layout from "./components/Layout";
import MyJourney from "./components/MyJourney";
import ProjectCard from "./components/ProjectCard";
import Showcase from "./components/Showcase";
import Skill from "./components/Skill";

function App() {
  return (
    <Layout>
      <Showcase />
      <Skill />
      <MyJourney />
      <ContactMe />
      <section id="projects">
        <ProjectCard
          id="e-commerce1"
          title="E-commerce Website"
          description="Online store with authentication and real-time inventory"
          stack={["React", "Ant Design", "Supabase"]}
          imageUrl="/portfolio/images/placeholder.png"
          demoUrl="https://demo.example.com"
          sourceUrl="https://github.com/username/project"
        />
        <ProjectCard
          id="e-commerce2"
          title="E-commerce Website"
          description="Online store with authentication and real-time inventory"
          stack={["React", "Ant Design", "Supabase"]}
          imageUrl="/portfolio/images/placeholder.png"
          demoUrl="https://demo.example.com"
        />
      </section>
    </Layout>
  );
}

export default App;
