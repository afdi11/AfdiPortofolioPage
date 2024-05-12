import React from 'react'
import { AiFillHtml5 } from 'react-icons/ai';
import { SiJavascript, SiGithub, SiGooglecloud, SiMysql, SiReact, SiPostgresql } from 'react-icons/si';
import { FaBootstrap,FaPhp, FaLaravel } from 'react-icons/fa';
import { Caption, CodeContainer, CodeWrapper, Heading, Logo } from './CodeElements';

const CodeSection = () => {
    const colourTheme = {
        background: "transparent",
        text: "#ffffff",
        grade0: "hsla(243, 100%, 95%, 1)",
        grade1: "hsla(243, 100%, 80%, 1)",
        grade2: "hsla(243, 100%, 65%, 1)",
        grade3: "hsla(243, 100%, 50%, 1)",
        grade4: "hsla(243, 100%, 35%, 1)",
    };

    return (
        <>
            <CodeContainer id="code">
                <Heading>Skillset</Heading>
                <CodeWrapper>
                    <Logo color={'#61DBFB'}>
                        <FaPhp />
                        <Caption>PHP</Caption>
                    </Logo>
                    <Logo color={'#61DBFB'}>
                        <FaLaravel />
                        <Caption>Laralel</Caption>
                    </Logo>
                    <Logo color={'#F7DF1E'}>
                        <SiJavascript />
                        <Caption>JavaScript</Caption>
                    </Logo>
                    <Logo color={'#61DAE9'}>
                        <SiReact />
                        <Caption>React Js</Caption>
                    </Logo>
                    <Logo color={'#6A1B9A'}>
                        <AiFillHtml5 />
                        <Caption>HTLM 5</Caption>
                    </Logo>
                    <Logo color={'#00ADD8'}>
                        <img src="https://go.dev/blog/go-brand/Go-Logo/SVG/Go-Logo_White.svg" alt="Go" width="50" height="50" style={{color: '#00ADD8'}} />
                        <Caption>Golang</Caption>
                    </Logo>
                    <Logo color={'#7952B3'}>
                        <FaBootstrap />
                        <Caption>Bootstrap</Caption>
                    </Logo> 
                    <Logo color={'#333'}>
                        <SiGithub />
                        <Caption>Github</Caption>
                    </Logo>
                    <Logo color={'#4169E1'}>
                        <SiMysql />
                        <Caption>My SQL</Caption>
                    </Logo>
                    <Logo color={'#4169E1'}>
                        <SiPostgresql />
                        <Caption>PostgreSQL</Caption>
                    </Logo>
                </CodeWrapper>
                {/* <Heading>Days I Code</Heading>
                <GitHubCalendar 
                    username="afdi11" 
                    blockSize={14} 
                    blockMargin={5} 
                    fontSize={16} 
                    theme={colourTheme}
                ></GitHubCalendar> */}
            </CodeContainer>
        </>
    )
}

export default CodeSection