import React from "react"
import Stagger from "../components/Stagger"
import AboutMe from "../components/Home/AboutMe"

const Home = () => {
    return(
    <section className="flex flex-col w-screen overfle-x-hidden mt-35">
        <AboutMe />
        <Stagger />
    </section>
    )
}

export default Home