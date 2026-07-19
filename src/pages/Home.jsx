import React from "react";
import ProjectSection from "../components/ProjectSection";
import TechStack from "../components/home/TechStack";
import WorkAndStudies from "../components/home/WorkAndStudies";
import AboutMe from "../components/home/AboutMe";


const Home = () => {
  return (
    <main className="flex flex-col justify-center items-center w-screen overflow-x-hidden">
      <AboutMe />
      <ProjectSection variant="homePage" />
      <TechStack />
      <WorkAndStudies />
    </main>
  );
};

export default Home;
