import react, {useState} from "react"
import styled  from "styled-components"
import img from "../Assets/hero-banner.png"
import {AiOutlineArrowUp} from "react-icons/ai"

const Hero = () => {

const [button, setButton] = useState(false)
    const ScrollToTop = () =>{
        const Scroll = window.pageYOffset;
    if(Scroll >200){
        setButton(true)
    }else if(Scroll < 70)
        setButton(false)
    }

    const Scroll = () =>{
        window.scrollTo({top: 0, behavior: "smooth"})
    }

    window.addEventListener("scroll", ScrollToTop)


    return(
        <div>
            <Container>
                <Wrapper>
                    <Wrapper1>
                        <P>We are Web Developers from Nigeria</P>
                        <H1>We build and Deploy websites that Users Love</H1>
                        <Lorem>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda, laboriosam. Ad quas odio quibusdam iure reiciendis sapiente, rerum ducimus perspiciatis.</Lorem>
                        <Button>Learn More</Button>
                    </Wrapper1>
                    <Wrapper2>
                        <No src ={img} width={"550"} height={"450"}/>
                    </Wrapper2>
                    {button? (
                        <Arr onClick={Scroll} po ="fixed"><AiOutlineArrowUp/></Arr>
                    ) : (
                        <Arr2></Arr2>
                    )}
                </Wrapper>
            </Container>
        </div>
    )
}

export default Hero;
const Arr2 = styled.div``

const Arr = styled.div <{po: string}>`
width: 50px;
height: 50px;
border-radius: 5px;
background-color: #f0246e;
display: flex;
justify-content: center;
align-items: center;
color: white;
font-size: 30px;
cursor: pointer;
position: ${({po}) => po};
top: 500px;
left: 1270px;`

const No = styled.img`
height: 83%;
animation-name: shake 1s infinite alternate;
animation-duration: 1s;
animation-delay: 0s;


@keyframes shake{
    0%{
        transform: rotate(0)
    }
    50%{
        transform: rotate(2deg)
    }
}`

const Button = styled.div`
color: #ffff;
font-weight: bold;
font-size: 20px;
border-bottom-left-radius: 25px;
border-top-right-radius: 25px;
display: flex;
justify-content: center;
align-items: center;
width: 160px;
height: 50px;
background-color:#f0246e;
cursor: pointer;
`

const Lorem = styled.div`
color: #ffff;
padding-bottom: 15px;`

const H1 = styled.div`
color: #ffff;
font-weight: bold;
font-size: 50px;
padding-bottom: 15px;`

const P = styled.div`
color: #f2a90a;
font-weight: bold;
font-size: 15px;
padding-bottom: 15px;`

const Wrapper2 = styled.div`
width: 45%;
height: 400px;
display: flex;
justify-content: center;
align-items: center;`

const Wrapper1 = styled.div`
width: 45%;
height: 400px;`

const Wrapper = styled.div`
width: 88%;
height: 530px;
display: flex;
justify-content: space-between;
align-items: center;`

const Container = styled.div`
background-color: #1f2563;
position: relative;
width:100%;
height: 650px;
display: flex;
justify-content: center;
align-items: center; `