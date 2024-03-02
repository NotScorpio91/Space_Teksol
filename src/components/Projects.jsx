import React from "react";
import ProjectCard from "../components/ProjectCard";
import Teksol from "../assets/teksol.png";
import Space_Teksol from "../assets/Space_Teksol.png";
import Nextjs from "../assets/nextjs.png";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src={Teksol}
          link='https://theteksol.com/'
          main='main'
          title="The Teksol"
          description="TEKSOL: Your trusted IT solutions partner. Experts in Laravel, Django, React, Vue.js. 100+ global projects. Client-focused for top-notch results. Experience innovation with TEKSOL."
        />
        <ProjectCard
          src={Space_Teksol}
          link='/#about-me'
          title="Space Themed Website"
          description="Experience the wonders of the cosmos with this captivating space-themed website. Dive into celestial realms and explore interactive features that bring the universe to life."
        />
        <ProjectCard
          src={Nextjs}
          title="Nextjs Web Clone"
          description="Discover our sleek Next.js web clone a modern, responsive, and customizable solution. Elevate your online presence with cutting-edge technology and stunning design. "
        />
      </div>
    </div>
  );
};

export default Projects;
