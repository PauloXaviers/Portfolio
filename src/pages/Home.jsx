import React from "react"
import StaggerChildren from "../components/StaggerChildren"


const Home = () => {
    return(
    <section>
    
        <div className="mt-10">
            <h1 className="text-amber-600">
                Voce esta na home
            </h1>
            <div className="h-[200px]">Teste teste teste</div>
            <div className="h-[200px]">Teste teste teste</div>
            <div className="h-[200px]">Teste teste teste</div>
            <div className="h-[200px]">Teste teste teste</div>
            <div className="h-[200px]">Teste teste teste</div>
            <div className="h-[200px]">Teste teste teste</div>
            
        
        </div>

        <StaggerChildren />
    </section>
    )
}

export default Home