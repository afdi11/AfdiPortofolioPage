import React, {useState, useEffect} from 'react';
import { FaBars } from 'react-icons/fa';
import { GoRepoForked } from 'react-icons/go';
import { AiOutlineStar } from 'react-icons/ai';
import { BsCode, BsCodeSlash} from 'react-icons/bs';
import { animateScroll as scroll } from 'react-scroll'
import { Nav, Code, NavLogo, NavbarContainer, MobileIcon, NavMenu, NavItem, NavLinks, NavButton  } from './NavbarElements'
import { ResumePage } from '../AboutSection/aboutElements';
import { Link } from "react-router-dom";
import { FcDocument, FcNext } from 'react-icons/fc';


const Navbar = ({ toggle }) => {
    const [scrollNav, setScrollNav] = useState(false)
    
    const changeNav = () => {
        if(window.scrollY >= 80) {
            setScrollNav(true)
        }
        else {
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav);
    }, []);

    const toggleHome = () => {
        scroll.scrollToTop()
    }

    return (
        <>
            <Nav scrollNav={scrollNav}>
                <NavbarContainer>
                    <NavLogo to="/" onClick={toggleHome} >Afdi Fauzul Bahar</NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks 
                                to="about"
                                activeClass="active"
                                spy="true"
                                smooth={true} 
                                duration={500} 
                                offset={-80}>
                                About
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks 
                                to="projects"
                                activeClass="active"
                                spy="true"
                                smooth={true} 
                                duration={500} 
                                offset={-80}>
                                Projects
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks 
                                to="code"
                                activeClass="active"
                                spy="true"
                                smooth={true} 
                                duration={500} 
                                offset={-80}>
                                <Code><BsCode />Code<BsCodeSlash /></Code>
                            </NavLinks>
                        </NavItem>
                        <Link to="/resume" style={{textDecoration: 'none'}}>
                            <ResumePage>
                                <FcDocument />
                                <FcNext />
                                Detail & Files
                            </ResumePage>
                        </Link>
                    </NavMenu>
                    <NavButton href="https://github.com/afdi11/AfdiProfilePage" target="_blank">
                        <GoRepoForked />
                        <AiOutlineStar />
                    </NavButton>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar
