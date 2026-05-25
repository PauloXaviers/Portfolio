import React from "react";
import ProjectSection from "../components/projects/ProjectSection";
import TechStack from "../components/home/TechStack";
import WorkAndStudies from "../components/home/WorkAndStudies";
import AboutMe from "../components/home/AboutMe";


const Home = () => {
  return (
    <section className="flex flex-col justify-center items-center w-screen overflow-x-hidden">
      <AboutMe />
      <ProjectSection variant="homePage" />
      <TechStack />
      <WorkAndStudies />
    </section>
  );
};

export default Home;
