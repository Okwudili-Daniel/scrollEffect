import react from "react"
import styled  from "styled-components"
import img from "../Assets/feautres-banner.png"
import {HiOutlineLightBulb} from "react-icons/hi"
import {IoColorPaletteOutline} from "react-icons/io5"
import {BsCodeSlash} from "react-icons/bs"
import {HiOutlineRocketLaunch} from "react-icons/hi2"

const Features = () => {
    return(
        <div>
            <Container>
                <Wrapper>
                    <WrapperTop>
                        <H1>Our Features</H1>
                        <Line/>
                    </WrapperTop>
                    <Wrapper2>
                        <FirstDiv>
                            <Idea>
                                <Bulb>
                                    <HiOutlineLightBulb/>
                                </Bulb>
                                <Text>
                                    <H2>Idea & Analysis</H2>
                                    <P>Praesent tincidunt congue est ut hendrerit. Pellentesque et eros sit amet ipsum venenatis.</P>
                                </Text>
                            </Idea>
                            <Design>
                            <Bulb>
                                    <IoColorPaletteOutline/>
                                </Bulb>
                                <Text>
                                    <H2>Designing</H2>
                                    <P>Praesent tincidunt congue est ut hendrerit. Pellentesque et eros sit amet ipsum venenatis.</P>
                                </Text>
                            </Design>
                        </FirstDiv>
                        <MiddleDiv>
                            <img src = {img}/>
                        </MiddleDiv>
                        <LastDiv>
                            <Develop>
                            <Bulb>
                                    <BsCodeSlash/>
                                </Bulb>
                                <Text>
                                    <H2>Development</H2>
                                    <P>Praesent tincidunt congue est ut hendrerit. Pellentesque et eros sit amet ipsum venenatis</P>
                                </Text>
                            </Develop>
                            <Test>
                            <Bulb>
                                    <HiOutlineRocketLaunch/>
                                </Bulb>
                                <Text>
                                    <H2>Testing and Launching</H2>
                                    <P>Praesent tincidunt congue est ut hendrerit. Pellentesque et eros sit amet ipsum venenatis</P>
                                </Text>
                            </Test>
                        </LastDiv>
                    </Wrapper2>                    
                </Wrapper>
            </Container> 
        </div>
    )
}

export default Features;
const Test = styled.div`
width: 100%;
height: 45%;
// background-color: blue;
display: flex;
// align-items: center;
justify-content: space-between;`

const Develop = styled.div`
width: 100%;
height: 45%;
// background-color: blue;
display: flex;
// align-items: center;
justify-content: space-between;`

const H2 = styled.div`
color:#1f2470;
font-weight: bold;
font-size: 25px;
margin-bottom: 15px; `

const P = styled.div`
color:#1f2470;`

const Bulb = styled.div`
color: white;
font-size: 30px;
width: 70px;
border-radius: 50px;
height: 70px;
background-color:#271f66;
display: flex;
align-items: center;
justify-content: center;`

const Text = styled.div`
width: 75%;
height: 100%;
// background-color: yellow;`

const LastDiv = styled.div`
height: 90%;
width: 30%;
// background-color: purple;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;`

const MiddleDiv = styled.div`
height: 90%;
width: 30%;
// background-color: purple;
display: flex;
align-items: center;
justify-content: center;`

const Idea = styled.div`
width: 100%;
height: 45%;
// background-color: blue;
display: flex;
// align-items: center;
justify-content: space-between;`

const Design = styled.div`
width: 100%;
height: 45%;
// background-color: blue;
display: flex;
// align-items: center;
justify-content: space-between;`

const FirstDiv = styled.div`
height: 90%;
width: 30%;
// background-color: purple;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;`

const Wrapper2 = styled.div`
width: 100%;
height: 80%;
// background-color: gray;
display: flex;
align-items: center;
justify-content: space-between;`

const H1 = styled.div`
color: #1f2470;
font-weight: bold;
font-size: 40px;
margin-bottom: 15px;`

const Line = styled.div`
width: 200px;
border-radius: 20px;
height: 8px;
background-color: rgb(240, 36, 110)`

const WrapperTop = styled.div`
width: 100%;
// background-color: gold;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center`

const Wrapper = styled.div`
width: 90%;
height: 450px;
// background-color: red;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;`

const Container = styled.div`
// background-color: yellow;
width: 100%;
height: 500px;
display: flex;
justify-content: center;
align-items: center;
margin-top: 25px;`