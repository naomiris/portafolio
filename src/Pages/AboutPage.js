import React from "react";
import styled from "styled-components";
import ImageSection from "../Components/ImageSection";
import ServicesSection from "../Components/ServicesSection";
import Title from "../Components/Title";
import {MainLayout} from '../styles/Layout'
function AboutPage () {
    return (
        <MainLayout>
            <AboutStyled>
            <Title  title={'About Me'} span={'About Me'}/>
            <ImageSection/>
            <ServicesSection/>
        </AboutStyled>
        </MainLayout>
    )
}
const AboutStyled = styled.section`
  

`;
export default AboutPage;