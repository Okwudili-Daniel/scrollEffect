import react from "react"
import styled from "styled-components"
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";

const Footer = () =>{
    return (
        <div>
            <Container>
                <Wrapper>
                    <Inner>
                    <Resolution>
           <h1 style={{ fontWeight: "600" }}>Resolution</h1>
           <p style={{ fontWeight: "500" }}>
             Maecenas pellentesque placerat quam, in finibus nisl tincidunt sed.
             Aliquam magna augue, malesuada ut feugiat eget, cursus eget felis.
           </p>
           <Icons>
             <FB>
               <FaFacebook />
             </FB>
             <IG>
               <FaInstagram />
             </IG>
             <TT>
               <FaTwitter />
             </TT>
           </Icons>
      </Resolution>
                        <OurLink>
                        <h1 style={{ fontWeight: "600" }}>Our Link</h1>
          <p style={{ fontWeight: "500" }}>Home</p>
           <p style={{ fontWeight: "500" }}>About Us</p>
           <p style={{ fontWeight: "500" }}>Services</p>
           <p style={{ fontWeight: "500" }}>Team</p>
           <p style={{ fontWeight: "500" }}>Blog</p>
                        </OurLink>
                        <OurService>
                        <h1 style={{ fontWeight: "600" }}>Our Services</h1>
           <p style={{ fontWeight: "500" }}>Strategy & Research</p>
           <p style={{ fontWeight: "500" }}>Web Development</p>
           <p style={{ fontWeight: "500" }}>Web Solution</p>
           <p style={{ fontWeight: "500" }}>Digital Marketing</p>
          <p style={{ fontWeight: "500" }}>App Design</p>
                        </OurService>
                        <OtherLink>
                        <h1 style={{ fontWeight: "600" }}>Other Links</h1>
          <p style={{ fontWeight: "500" }}>FAQ</p>
           <p style={{ fontWeight: "500" }}>Portfoliot</p>
           <p style={{ fontWeight: "500" }}>Privacy Polio</p>
           <p style={{ fontWeight: "500" }}>Terms & Conditions</p>
           <p style={{ fontWeight: "500" }}>Support</p>
                        </OtherLink>
                        <ContactUs>
                        <h1 style={{ fontWeight: "600" }}>Contact Us</h1>
           <p style={{ fontWeight: "500", display: "flex" }}>
             <Call>
               <FaPhone />
             </Call>
             +234-8484-5119
             <br />
             +234-5661-0685
           </p>
           <p style={{ fontWeight: "500", display: "flex" }}>
             <Call>
               <FaEnvelope />
             </Call>
             help@desinic.com
             <br />
             info@desimic.com
           </p>
           <p style={{ fontWeight: "500", display: "flex" }}>
             <Call>
               <IoLocation />
             </Call>
             Pontiac, Michigan, United
             <br />
             States of America
          </p>
                        </ContactUs>
                    </Inner>
                </Wrapper>
                <Wrapper1>
                <End>
                    © 2022 <Span> TechSis.</Span> All Right Reserved
                </End>
                <UP></UP>
                </Wrapper1>
            </Container>
        </div>
    )
}

export default Footer;
const UP = styled.div``

const Span = styled.div`
  text-decoration: underline;
  margin: 6px;
`;

const End = styled.div`
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: 500px;
`;

const Call = styled.div`
  border-radius: 50%;
  height: 35px;
  margin-right: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35px;
  background: linear-gradient(to right, #f2376a, #fc955b);
`;

const IG = styled.div`
  color: #ef1f76;
  width: 40px;
  height: 40px;
  margin-right: 10px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const TT = styled.div`
  color: #ef1f76;
  width: 40px;
  margin-right: 10px;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FB = styled.div`
  color: #ef1f76;
  width: 40px;
  margin-right: 10px;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Icons = styled.div`
  display: flex;
`;

const ContactUs = styled.div`
width: 20%;
height: 85%;
color: white;
// background-color: green;`

const OurService= styled.div`
width: 15%;
height: 85%;
color: white;
// background-color: green;`

const OtherLink= styled.div`
width: 15%;
height: 85%;
color: white;
// background-color: green;`

const OurLink = styled.div`
width: 15%;
height: 85%;
// background-color: green;
color: white;`

const Resolution = styled.div`
width: 20%;
height: 85%;
color: white;
// background-color: green;
`

const Wrapper1 = styled.div`
position: relative;
width: 100%;
height: 15%;
background-color: #111941`

const Inner = styled.div`
width: 90%;
height: 90%;
// background-color: yellow;
display: flex;
align-items: center;
justify-content: space-between;`

const Wrapper = styled.div`
width: 100%;
height: 85%;
background-color: #1f2563;
display: flex;
align-items: center;
justify-content: center;`

const Container = styled.div`
background-color: red;
width: 100%;
height: 500px;`