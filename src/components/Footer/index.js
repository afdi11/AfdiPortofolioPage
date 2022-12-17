import React from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { AiFillMail, AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { Footer, FooterContainer, Logo, FooterMenu, Copyright, MediaItem, MediaButton } from './FooterElements';


const FooterSection = () => {

    const toggleHome = () => {
        scroll.scrollToTop()
    }

    return (
        <>
            <Footer>
                <FooterContainer>
                    <Logo to="/" onClick={toggleHome} >^ Back to top</Logo>
                    <FooterMenu>
                        <MediaItem>
                            <MediaButton href="mailto:fauzulbaharafdi@gamil.com" target="_blank">
                                <AiFillMail />
                            </MediaButton>
                        </MediaItem>
                        <MediaItem>
                            <MediaButton href="https://github.com/afdi11" target="_blank">
                                <AiFillGithub />
                            </MediaButton>
                        </MediaItem>
                        <MediaItem>
                            <MediaButton href="https://www.linkedin.com/in/afdifauzulbahar/" target="_blank">
                                <AiFillLinkedin />
                            </MediaButton>
                        </MediaItem>
                    </FooterMenu>
                    <Copyright>
                        Designed by Ido and Customize by Afdi
                    </Copyright>
                </FooterContainer>
            </Footer>
        </>
    )
}

export default FooterSection
