import ProjectItem from "./ProjectItem";
import project1 from "../assets/project1.jpg";
import project2 from "../assets/project2.png";

const Projects = () => {
  return (
    <div id="projects" className="max-w-[1040px] m-auto md:pl-20 p-4 py16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">Projects</h1>
      <p className="text-center py-8">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa veniam
        cumque omnis minima non ea accusamus quidem totam dicta, consequuntur
        illo, sapiente molestias temporibus unde similique consectetur sunt
        aliquam et!
      </p>
      <div className="grid sm:grid-cols-2 gap-12">
        <ProjectItem img={project2} title="Project 1"/>
        <ProjectItem img={project1} title="Project 2"/>
        <ProjectItem img={project1} title="Project 3"/>
        <ProjectItem img={project2} title="Project 4"/>
      </div>
    </div>
  );
};

export default Projects;
