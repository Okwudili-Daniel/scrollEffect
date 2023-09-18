import styled from "styled-components"
import Contact  from "./Contact"
import Features from "./Features"
import Hero from "./Hero"
import About from "./About"
import Blog from "./Blog"


const HomeScreen = () =>{
    return(
        <div>
            <Hero/>
            <About/>
            <Contact/>
            <Features/>
            <Blog/>
        </div>
    )
}

export default HomeScreen;