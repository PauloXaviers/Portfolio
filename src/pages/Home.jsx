import React from "react"
import Stagger from "../components/Stagger"


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

        <Stagger />
    </section>
    )
}

export default Home