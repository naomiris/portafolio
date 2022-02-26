import React from "react";
import styled from "styled-components";
import {InnerLayout} from '../styles/Layout'
import ServicesCard from "./ServicesCard";
import Title from "./Title";
import design from '../img/design.svg'


function ServicesSection () {
    return (
        <InnerLayout>
            <ServicesSectionStyled>
                <Title title={'Services'} span={'services'}/>
                <div className="services">
                    <ServicesCard 
                    image={design}
                     title={'Full Stack Developer'} 
                     paragraph={'Specialized in both Front End, Back End and Database technologies  '}/>
                </div>
            </ServicesSectionStyled>
        </InnerLayout>
    )
}
const ServicesSectionStyled = styled.section`
    .services{
        margin-top: 5rem;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 1.5rem;
        @media screen and (max-width:1000px){
            flex-direction: column;
        }
        @media screen and (max-width:950px){
            grid-template-columns: repeat(2, 1fr);
        }
        @media screen and (max-width:650px){
            grid-template-columns: repeat(1, 1fr);
        }
       
    }

`;

export default ServicesSection;