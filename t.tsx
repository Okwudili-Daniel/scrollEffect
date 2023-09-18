import react, { useState } from "react";
import { styled } from "styled-components";
import { FaAngleRight } from "react-icons/fa";
import { Link } from "react-scroll";

const Header = () => {
  const [header, setHeader] = useState(false);

  const headerChange = () => {
    const scroll = window.pageYOffset;

    if (scroll >= 100) {
      setHeader(true);
    } else {
      setHeader(false);
    }
  };

  window.addEventListener("scroll", headerChange);
  return (
    <div>
      {header ? (
        <Wrapper bg="#fff" po="fixed">
          <Headercon1 cl="#212671">Resoultion</Headercon1>
          <Headercon2>
            <Nav1 cl="#212671" to="home" smooth={true}>
              Home
            </Nav1>
            <Nav1 cl="#212671" to="about">
              About
            </Nav1>
            <Nav1 cl="#212671" to="services">
              Services
            </Nav1>
            <Nav1 cl="#212671" to="features">
              Features
            </Nav1>
            <Nav1 cl="#212671" to="">
              Blog
            </Nav1>
            <Nav1 cl="#212671" to="">
              Contact Us
            </Nav1>
          </Headercon2>
          <Button>
            <Icon>
              <FaAngleRight />
            </Icon>
            Get A Quote
          </Button>
        </Wrapper>
      ) : (
        <Wrapper bg="#4E257A" po="sticky">
          <Headercon1 cl="#fff">Resoultion</Headercon1>
          <Headercon2>
            <Nav1 cl="#fff" to="home">
              Home
            </Nav1>
            <Nav1 cl="#fff" to="about">
              About
            </Nav1>
            <Nav1 cl="#fff" to="services">
              Services
            </Nav1>
            <Nav1 cl="#fff" to="features">
              Features
            </Nav1>
            <Nav1 cl="#fff" to="blog">
              Blog
            </Nav1>
            <Nav1 cl="#fff" to="contact">
              Contact Us
            </Nav1>
          </Headercon2>
          <Button>
            <Icon>
              <FaAngleRight />
            </Icon>
            Get A Quote
          </Button>
        </Wrapper>
      )}
    </div>
  );
};

export default Header;
const Icon = styled.div``;

const Nav1 = styled(Link)<{ cl: string }>`
  font-size: 16px;
  font-weight: bold;
  color: ${({ cl }) => cl};
  cursor: pointer;
`;
const Button = styled.button`
  background-color: rgb(245, 85, 101);
  padding: 15px 55px;
  cursor: pointer;
  border: 0px;
  border-bottom-left-radius: 30px;
  border-top-right-radius: 30px;
  margin-right: 100px;
  color: white;
  display: flex;

  &:hover {
    background-color: #f97760;
  }
`;
const Headercon2 = styled.div`
  // background-color:red;
  width: 35vw;
  height: 60px;
  margin-left: 225px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Headercon1 = styled.div<{ cl: string }>`
  // background-color: yellow;
  padding: 11px 45px;
  font-size: 30px;
  font-weight: 700;
  margin-left: 20px;
  color: ${({ cl }) => cl};
`;
const Wrapper = styled.div<{ bg: string; po: string }>`
  background-color: ${({ bg }) => bg};
  padding: 13px;
  display: flex;
  align-items: center;
  justify-content: center;
  justify-content: space-between;
  position: ${({ po }) => po};
  width: 100%;
  transition: all ease-in-out 350ms;
`;