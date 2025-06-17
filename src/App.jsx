import "./App.css";
import Layout from "./components/Layout";
import ProjectCard from "./components/ProjectCard";
import Showcase from "./components/Showcase";
import Skill from "./components/Skill";

function App() {
  return (
    <Layout>
      <Showcase />
      <Skill />
      <ProjectCard
        title="E-commerce Website"
        description="Online store with authentication and real-time inventory"
        stack={["React", "Ant Design", "Supabase"]}
        imageUrl="/portfolio/images/placeholder.png"
        demoUrl="https://demo.example.com"
        sourceUrl="https://github.com/username/project"
      />
      <ProjectCard
        title="E-commerce Website"
        description="Online store with authentication and real-time inventory"
        stack={["React", "Ant Design", "Supabase"]}
        imageUrl="/portfolio/images/placeholder.png"
        demoUrl="https://demo.example.com"
      />
    </Layout>
  );
}

export default App;
