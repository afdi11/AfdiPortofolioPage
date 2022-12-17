import React from 'react'
import { ProjectsContainer, ProjectsH1, ProjectsWrapper, ProjectsCard, ProjectButton, ProjectsH2, ProjectsP } from './ProjectElements'
import komodo from '../../images/komodo.jpg'
import twitter from '../../images/twitter.png'
import ebay from '../../images/ebay.jpg'
import klassifikasi from '../../images/klassifikasi.png'
import visualiasi from '../../images/visualiasi.png'
import { FaGithub,  FaYoutube, FaMedapps } from 'react-icons/fa';

const Projects = () => {
    return (
        <>
            <ProjectsContainer id="projects">
                <ProjectsH1>Latest Project</ProjectsH1>
                <ProjectsWrapper>
                    <ProjectsCard style={{ backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.8) ), 
                    url(${komodo})` }}>
                        <ProjectsH2>E-Commerce Dashboard React+Laravel</ProjectsH2>
                        <ProjectButton logo={'github'}
                        href="https://github.com/afdi11/ecom-dashboard" target="_blank">
                            <FaGithub/>
                            <ProjectsP>Github</ProjectsP>
                        </ProjectButton>
                        <ProjectButton logo={'heroku'}
                        href="#" target="_blank">
                            <FaMedapps/>
                            <ProjectsP>Apps</ProjectsP>
                        </ProjectButton>
                    </ProjectsCard>
                    <ProjectsCard style={{ backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.8) ), 
                    url(${twitter})`}}>
                        <ProjectsH2>E-Commerce with Magento</ProjectsH2>
                        <ProjectButton logo={'github'}
                        href="#" target="_blank">
                            <FaGithub/>
                            <ProjectsP>Github</ProjectsP>
                        </ProjectButton>
                        <ProjectButton logo={'youtube'}
                        href="#" target="_blank">
                            <FaYoutube/>
                            <ProjectsP>YouTube</ProjectsP>
                        </ProjectButton>
                    </ProjectsCard>
                    <ProjectsCard style={{ backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.8) ), 
                    url(${ebay})` }}>
                        <ProjectsH2>Netflix Clone ReactJs</ProjectsH2>
                        <ProjectButton logo={'github'} 
                        href="#" target="_blank">
                            <FaGithub/>
                            <ProjectsP>Github</ProjectsP>
                        </ProjectButton>
                        <ProjectButton logo={'heroku'}
                        href="#" target="_blank">
                            <FaMedapps/>
                            <ProjectsP>Apps</ProjectsP>
                        </ProjectButton>
                    </ProjectsCard>
                    <ProjectsCard style={{ backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.8) ), 
                    url(${klassifikasi})` }}>
                        <ProjectsH2>Classification Scholarship Awardee</ProjectsH2>
                        <ProjectButton logo={'github'} 
                        href="https://github.com/afdi11/RekomendasiBeasiswa" target="_blank">
                            <FaGithub/>
                            <ProjectsP>Github</ProjectsP>
                        </ProjectButton>
                        <ProjectButton logo={'youtube'}
                        href="https://youtu.be/lrD_Tj-zbVY" target="_blank">
                            <FaYoutube/>
                            <ProjectsP>Youtube</ProjectsP>
                        </ProjectButton>
                    </ProjectsCard>
                    <ProjectsCard style={{ backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.8) ), 
                    url(${visualiasi})` }}>
                        <ProjectsH2>Visualiasi Laporan Keuangan</ProjectsH2>
                        <ProjectButton logo={'github'} 
                        href="https://github.com/afdi11/Dashboard" target="_blank">
                            <FaGithub/>
                            <ProjectsP>Github</ProjectsP>
                        </ProjectButton>
                        <ProjectButton logo={'youtube'}
                        href="https://youtu.be/e1qkWneIwHI" target="_blank">
                            <FaYoutube/>
                            <ProjectsP>Youtube</ProjectsP>
                        </ProjectButton>
                    </ProjectsCard>
                </ProjectsWrapper>
            </ProjectsContainer> 
        </>
    )
}

export default Projects
