import react from "react";
import styled from "styled-components";
import img from "../Assets/about-banner.png"

const About =()=>{
    return (
        <div>
            <Container>
                <Wrapper>
                    <Wrapper1>
                        <img src = {img} width={"500"} height={"400"} />
                    </Wrapper1>
                    <Wrapper2>
                        <AboutFeature1>
                            <Why>Why Our Agency</Why>
                            <Line/>
                        </AboutFeature1>
                        <AboutFeature2>
                            <H2>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis, provident beatae, repellat asperiores sequi error esse assumenda quibusdam cumque, alias non earum explicabo sit officiis dignissimos architecto accusantium natus dolore nobis blanditiis consequatur! Sunt, at!
                            </H2>
                            <H2>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, quaerat. Quos reiciendis officiis nulla beatae illo deleniti molestias distinctio eius?
                            </H2>
                        </AboutFeature2>
                        <AboutFeature3>
                            <Box>
                            <Te>9875</Te>
                            <Xt>Satisfied Clients</Xt>
                            </Box>
                            <Box>
                            <Te>7894</Te>
                            <Xt>Project Lunched</Xt>
                            </Box>
                            <Box>
                            <Te>75</Te>
                            <Xt>Years Completed</Xt>
                            </Box>
                        </AboutFeature3>
                    </Wrapper2>
                </Wrapper>
            </Container>
        </div>
    )
}

export default About;
const Xt =styled.div`
color: #1f2470;
font-size: 20px;`
const Te =styled.div`
color: #1f2470;
font-weight: bold;
font-size: 30px;`

const Box = styled.div`
box-shadow: 0px 2px 2px 2px gray;
width: 30%;
height: 90%;
background-color: white;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
border-radius: 5px;
cursor: pointer;`

const H2 = styled.div`
color:#1f2470;
margin-bottom: 15px;`

const Line = styled.div`
width: 200px;
border-radius: 20px;
height: 8px;
background-color: rgb(240, 36, 110)`

const Why = styled.div`
color: #1f2470;
font-weight: bold;
font-size: 35px;
margin-bottom: 15px;`

const AboutFeature3 = styled.div`
width: 100%;
height: 30%;
// background-color: purple;
display: flex;
justify-content: space-between;
align-items: center`

const AboutFeature2 = styled.div`
// background-color:red;
width: 100%;
height: 40%;
margin-bottom: 30px;`

const AboutFeature1 = styled.div`
// background-color: yellow;
width: 100%;
height: 20%;
margin-bottom: 30px;`

const Wrapper2 = styled.div`
// background-color: blue;
width: 43.5%;
height: 350px;
`

const Wrapper1 = styled.div`
// background-color: green;
width: 45%;
height: 450px;
display: flex;
justify-content: center;
align-items: center
`

const Wrapper = styled.div`
width: 90%;
height: 550px;
display: flex;
justify-content: space-between;
align-items: center;`

const Container = styled.div`
width: 100%;
height: 800px;
display: flex;
justify-content: center;
align-items: center;`