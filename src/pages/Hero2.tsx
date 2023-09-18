import react from "react";
import styled from "styled-components";
import img from "../Assets/hero-bg-bottom.png"


const Hero2 = () =>{
    return(
        <div>
            <Container>
                <img src = {img}/>
            </Container>
        </div>
    )
}

export default Hero2;
const Container = styled.div`
width: 100%;
height: 100vh;
display: flex;
position: relative;
background-color: red;
overflow: hidden;`