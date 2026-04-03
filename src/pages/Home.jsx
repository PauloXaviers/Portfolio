import React from "react"
import StaggerChildren from "../components/StaggerChildren"
import AboutMe from "../components/home/AboutMe"
import ProjectSection from "../components/projects/ProjectSection"

const Home = () => {
    return(
    <section className="flex flex-col justify-center items-center w-screen overfle-x-hidden mt-25 md:mt-35">
        <AboutMe />
        <ProjectSection variant="homePage"/>
        <StaggerChildren />
    </section>
    )
}

export default Home