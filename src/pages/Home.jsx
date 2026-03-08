import React from "react"
import StaggerChildren from "../components/StaggerChildren"
import AboutMe from "../components/home/AboutMe"

const Home = () => {
    return(
    <section className="flex flex-col w-screen overfle-x-hidden mt-25 md:mt-35">
        <AboutMe />
        <StaggerChildren />
    </section>
    )
}

export default Home