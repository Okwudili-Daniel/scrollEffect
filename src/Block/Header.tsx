import react, {useState} from "react"
import styled from "styled-components"
import {FaAngleRight} from "react-icons/fa"
import {Link} from "react-scroll"

const Header = () =>{

const [Header, setHeader] = useState(false);

const headerChange = () =>{
    const scroll = window.pageYOffset;
        if (scroll >= 600){
            setHeader(true)
        }else(
            setHeader(false)
        )
}

window.addEventListener("scroll", headerChange);

    return (
        <div>
            {Header? (
                <Head bg = "#fff" po = "fixed">
                <Holder>
                    <Logo cl="#1f2563">Resolution</Logo>
                    <Navs cl="#1f2563">
                        <Nav>Home</Nav>
                        <Nav>About</Nav>
                        <Nav>Service</Nav>
                        <Nav>Features</Nav>
                        <Nav>Blog</Nav>
                        <Nav>Contact Us</Nav>
                        <Button>
                            <Icon>
                                <FaAngleRight/>
                            </Icon>
                            Get A Quote</Button>
                    </Navs>
                </Holder>
            </Head>
            ) : (
                <Head bg = "#1f2563" po = "sticky">
                <Holder>
                    <Logo cl="#fff">Resolution</Logo>
                    <Navs cl="#fff">
                        <Nav>Home</Nav>
                        <Nav>About</Nav>
                        <Nav>Service</Nav>
                        <Nav>Features</Nav>
                        <Nav>Blog</Nav>
                        <Nav>Contact Us</Nav>
                        <Button>
                            <Icon>
                                <FaAngleRight/>
                            </Icon>
                            Get A Quote</Button>
                    </Navs>
                </Holder>
            </Head>
            )}
        </div>
    )
}

export default Header;
const Icon = styled.div``

const Button = styled.div`
height: 100%;
width: 190px;
background-color:#f0246e;
color: white;
font-weight: 600;
font-size: 20px;
border-bottom-left-radius: 30px;
border-top-right-radius: 30px;
display: flex;
align-items: center;
justify-content: center;
cursor: pointer;
`

const Nav = styled.div`

`;

const Navs = styled.div<{cl: string}>`
width: 690px;
height: 50px;
color: ${({cl}) => cl};
display: flex;
align-items: center;
justify-content: space-between;
font-weight: 600;
font-size: 19px;
cursor: pointer;`

const Logo = styled.div <{cl: string}>`
font-weight: 600;
font-size: 30px;
color: ${({cl}) => cl};
width: 150px;
height: 50px;
cursor: pointer;`

const Holder = styled.div`
width: 1200px;
height: 60px;
color: white;
display: flex;
align-items: center;
justify-content: space-between`;

const Head = styled.div <{bg: string, po:string}>`
width: 100%;
background-color: ${({bg}) => bg};
display: flex;
align-items: center;
position: ${({po}) => po};
justify-content: center;
padding: 10px 0px`;