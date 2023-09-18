import react from "react"
import styled  from "styled-components"
import {FiMonitor} from "react-icons/fi"
import {LiaAngleDoubleRightSolid} from "react-icons/lia"
import {IoTelescopeOutline} from "react-icons/io5"
import {TbWorld} from "react-icons/tb"

const Contact = () => {
    return(
        <div>
            <Container>
                <Wrapper>
                    <WrapperTop>
                        <H1>Our Specialization</H1>
                        <Line/>
                    </WrapperTop>
                    <CardHolder>
                        <Card1>
                        <Card2Wrapper>
                            <Icon>
                            <IoTelescopeOutline/>
                            </Icon>
                            <H2>Strategy & Research</H2>
                            <Lorem>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse consectetur voluptatem, molestias consequuntur excepturi architecto facilis reiciendis veniam animi minus perferendis praesentium laborum placeat sed?</Lorem>
                            <Icon2>
                                <LiaAngleDoubleRightSolid/>
                            </Icon2>
                            </Card2Wrapper>
                        </Card1>
                        <Card2>
                            <Card2Wrapper>
                            <Icon>
                            <FiMonitor/>
                            </Icon>
                            <H2>Web Development</H2>
                            <Lorem>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse consectetur voluptatem, molestias consequuntur excepturi architecto facilis reiciendis veniam animi minus perferendis praesentium laborum placeat sed?</Lorem>
                            <Icon2>
                                <LiaAngleDoubleRightSolid/>
                            </Icon2>
                            </Card2Wrapper>
                        </Card2>
                        <Card3>
                        <Card2Wrapper>
                            <Icon>
                            <TbWorld/>
                            </Icon>
                            <H2>Web Solution</H2>
                            <Lorem>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse consectetur voluptatem, molestias consequuntur excepturi architecto facilis reiciendis veniam animi minus perferendis praesentium laborum placeat sed?</Lorem>
                            <Icon2>
                                <LiaAngleDoubleRightSolid/>
                            </Icon2>
                            </Card2Wrapper>
                        </Card3>
                    </CardHolder>
                </Wrapper>
            </Container>
        </div>
    )
}

export default Contact;
const Lorem = styled.div`
text-align: center;
color:#1f2470 `

const H2 = styled.div`
color: #1f2470;
font-weight: bold;
font-size: 25px;
margin-bottom: 15px;`

const Icon2 = styled.div`
// background-color: green;
width: 50px;
display: flex;
align-items: center;
justify-content: center;
height: 50px;
border-radius: 30px;
border: 2px solid #f25094;
cursor: pointer;`

const Icon = styled.div`
font-weight: 900;
color: white;
font-size: 40px;
width: 80px;
display: flex;
align-items: center;
justify-content: center;
background-color:  #fde4ee;
height: 80px;
border-radius: 50px;
border: 2px solid #fde4ee`

const Card3 = styled.div`
width: 30%;
display: flex;
align-items: center;
justify-content: center;
height: 100%;
background-color: white;
border-radius: 5px;
box-shadow: 0px 1px 1px 2px gray;`

const Card2Wrapper = styled.div`
width: 80%;
height: 80%;
// background-color: blue;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
`

const Card2 = styled.div`
width: 30%;
height: 100%;
display: flex;
align-items: center;
justify-content: center;
background-color: white;
border-radius: 5px;
box-shadow: 0px 1px 1px 2px gray;`

const Card1 = styled.div`
width: 30%;
display: flex;
align-items: center;
justify-content: center;
height: 100%;
background-color: white;
border-radius: 5px;
box-shadow: 0px 1px 1px 2px gray;`

const CardHolder = styled.div`
// background-color: green;
width: 100%;
height: 80%;
display: flex;
justify-content: space-between;
align-items: center`

const H1 = styled.div`
color: #1f2470;
font-weight: bold;
font-size: 45px;
margin-bottom: 15px;`

const Line = styled.div`
width: 280px;
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
height: 550px;
// background-color: red;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;`

const Container = styled.div`
// background-color: yellow;
width: 100%;
height: 600px;
display: flex;
justify-content: center;
align-items: center;`