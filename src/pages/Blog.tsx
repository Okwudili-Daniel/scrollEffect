import react from "react"
import styled from "styled-components"
import img from "../Assets/blog-1.jpg"
import img2 from "../Assets/blog-2.jpg"
import img3 from "../Assets/blog-3.jpg"
import img4 from "../Assets/blog-4.jpg"
import {CiClock2} from "react-icons/ci"
import {BiMessageRounded} from "react-icons/bi"
import {HiOutlineShare} from "react-icons/hi"


const Blog = () =>{
    return (
        <div>
            <Container>
                    <WrapperTop>
                        <H1>Our Blog & News</H1>
                        <Line/>
                    </WrapperTop>
                <Wrapper>
                    <Div>
                    <Wrapper1>
                        <img src = {img} width={"600"} height={"380"}/>
                    </Wrapper1>
                    <Wrapper2>
                        <H2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, ipsa.</H2>
                        <P>Sed quis sagittis velit. Aliquam velit eros, bibendum ut massa et, consequat laoreet erat nam ac imperdiet.</P>
                        <Time>
                            <Icon>
                                <CiClock2/>
                            </Icon>
                            <H3>7 March, 2022</H3>
                            <Icon>
                                <BiMessageRounded/>
                            </Icon>
                            <P>15</P>
                            <Icon>
                                <HiOutlineShare/>
                            </Icon>
                        </Time>
                    </Wrapper2>
                    </Div>
                </Wrapper>
                <Wrapper4>
                    <Div2>
                    <Wrapper1>
                        <img src = {img2} width={"600"} height={"280"}/>
                    </Wrapper1>
                    <Wrapper22>
                        <H2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, ipsa.</H2>
                        <P>Sed quis sagittis velit. Aliquam velit eros, bibendum ut massa et, consequat laoreet erat nam ac imperdiet.</P>
                        <Time>
                            <Icon>
                                <CiClock2/>
                            </Icon>
                            <H3>7 March, 2022</H3>
                            <Icon>
                                <BiMessageRounded/>
                            </Icon>
                            <P>15</P>
                            <Icon>
                                <HiOutlineShare/>
                            </Icon>
                        </Time>
                    </Wrapper22>
                    </Div2>
                </Wrapper4>
                <Wrapper>
                    <Div>
                    <Wrapper1>
                        <img src = {img3} width={"600"} height={"380"}/>
                    </Wrapper1>
                    <Wrapper2>
                        <H2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, ipsa.</H2>
                        <P>Sed quis sagittis velit. Aliquam velit eros, bibendum ut massa et, consequat laoreet erat nam ac imperdiet.</P>
                        <Time>
                            <Icon>
                                <CiClock2/>
                            </Icon>
                            <H3>7 March, 2022</H3>
                            <Icon>
                                <BiMessageRounded/>
                            </Icon>
                            <P>15</P>
                            <Icon>
                                <HiOutlineShare/>
                            </Icon>
                        </Time>
                    </Wrapper2>
                    </Div>
                </Wrapper>
                <Wrapper>
                    <Div>
                    <Wrapper1>
                        <img src = {img4} width={"600"} height={"380"}/>
                    </Wrapper1>
                    <Wrapper2>
                        <H2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, ipsa.</H2>
                        <P>Sed quis sagittis velit. Aliquam velit eros, bibendum ut massa et, consequat laoreet erat nam ac imperdiet.</P>
                        <Time>
                            <Icon>
                                <CiClock2/>
                            </Icon>
                            <H3>7 March, 2022</H3>
                            <Icon>
                                <BiMessageRounded/>
                            </Icon>
                            <P>15</P>
                            <Icon>
                                <HiOutlineShare/>
                            </Icon>
                        </Time>
                    </Wrapper2>
                    </Div>
                </Wrapper>
            </Container>
        </div>
    )
}

export default Blog;
const Wrapper4 = styled.div`
background-color: White;
box-shadow: 0px 5px 5px 5px gray;
border-radius: 10px;
width: 100%;
height: 350px;
margin-bottom: 1px;
display: flex;
justify-content: center;
align-items: center;`

const Div2 = styled.div`
width: 95%;
height: 100%;
// background-color: pink;
display: flex;
align-items: center;
justify-content: space-between;`

const Wrapper22 = styled.div`
width: 53%;
height: 70%;
// background-color: green;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;`

const H3 = styled.div`
color: #1f2470;
margin-right: 20px;`

const Icon = styled.div`
margin-right: 20px;`

const Time = styled.div`
width: 100%;
// background-color: gold;
display: flex;
// justify-content: center;
// align-items: center;`

const P = styled.div`
color: #1f2470`

const H2 = styled.div`
width: 100%;
color: #1f2470;
cursor: pointer;
font-weight: bold;`

const Wrapper2 = styled.div`
width: 53%;
height: 100%;
// background-color: green;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;`

const Wrapper1 = styled.div`
width: 45%;
height: 100%;
// background-color: gray;
display: flex;
justify-content: center;
align-items: center;`

const Div = styled.div`
width: 95%;
height: 90%;
// background-color: pink;
display: flex;
align-items: center;
justify-content: space-between;`

const Line = styled.div`
width: 280px;
border-radius: 20px;
height: 8px;
background-color: rgb(240, 36, 110)`

const H1 = styled.div`
color: #1f2470;
font-weight: bold;
font-size: 45px;
margin-bottom: 15px;`

const WrapperTop = styled.div`
width: 100%;
// background-color: gold;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
margin-bottom: 30px;`

const Wrapper = styled.div`
background-color: White;
box-shadow: 0px 5px 5px 5px gray;
border-radius: 10px;
width: 100%;
height: 450px;
margin-bottom: 1px;
display: flex;
justify-content: center;
align-items: center;`

const Container = styled.div`
// background-color: #1f2563;
width:100%;
height: 315vh;
 `