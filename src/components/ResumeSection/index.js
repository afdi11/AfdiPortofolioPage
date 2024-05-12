import React from 'react'
import {
    ResumeContainer,
    CaptionHeading,
    ResumeWrapper,
    Heading,
    Big,
    Organization,
    ContentWrapper,
    Content,
    Detail,
    Button,
    Caption,
    Column,
    Credential,
    Univ,
    DownloadWrapper
} from './ResumeElements'
import { data } from './Data'
import { FcDownload } from 'react-icons/fc'
import resume from "../../doc/AFDI-SOFTWAREENGINEER_BACKENDENGINEER-CV.pdf"
import cv from "../../doc/cv.pdf"


const ResumeSection = () => {
    const drive = "https://drive.google.com/drive/folders/1QHGwZqvjA0vzMhSr3CzHgBn99Jtj0elT?usp=sharing"

    const printEducation = () => {
        // console.log('education', data.education)
        return data.education.map((item) => {
            return  <>
                        <Big>
                            <Detail>{item.org}</Detail>
                            <Detail>{item.year}</Detail>
                        </Big>
                        <Organization>{item.subject}</Organization>
                        <ContentWrapper>
                            {item.desc.map((item => {
                                return <Content>{item.title}</Content>
                            }))}
                        </ContentWrapper>
                    </>
        })
    }

    const printExperience = () => {
        return data.experience.map((item) => {
            console.log("data",item.desc[0])
            return  <>
                        <Big>
                            <Detail>{item.org}</Detail>
                            <Detail>{item.year}</Detail>
                        </Big>
                        <Organization>{item.subject}</Organization>
                        <ContentWrapper>
                            {item.desc.map((item => {
                                return <Content>{item.title}</Content>
                            }))}
                        </ContentWrapper>
                    </>
        })
    }

    const printCourses = () => {
        return data.courses.map((item) => {
            return  <>  
                        <Content>
                            <Credential href={item.credential} target="_blank">{item.subject} - <Univ>{item.org}</Univ></Credential>
                        </Content>
                    </>
        })
    }

    return (
        <>
            <ResumeContainer>
                <CaptionHeading>Detail & Files</CaptionHeading>
                <DownloadWrapper>
                    <Button href={resume} target="_blank">
                        <FcDownload/>
                        <Caption>Cover Letter</Caption>
                    </Button>
                    <Button href={cv} target="_blank">
                        <FcDownload/>
                        <Caption>Curriculum Vitae</Caption>
                    </Button>
                    <Button href={drive} target="_blank">
                        <FcDownload/>
                        <Caption>Transkrip & Ijazah</Caption>
                    </Button>
                </DownloadWrapper>
                <ResumeWrapper>
                    <Heading>Education</Heading>
                    {printEducation()}
                    <Heading>Experience</Heading>
                    {printExperience()}
                    ...
                    <Heading>Courses and Certifications</Heading>
                    <Column>
                    {printCourses()}
                    </Column>
                </ResumeWrapper>
            </ResumeContainer>
        </>
    )
}

export default ResumeSection
