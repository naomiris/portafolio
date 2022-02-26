import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../styles/Layout";
import SmallTitle from "./SmallTitle";
import Title from "./Title";
import SchoolIcon from '@material-ui/icons/School'
import ResumeItem from "./ResumenItem";

function Resume () {
  
    const school = <SchoolIcon/>
    return (
          <ResumeStyled>
              <Title  title={'Resume'} span={'Resume'}/>
                <InnerLayout>
                    <div className="small-title">
                    <SmallTitle icon={school} title={'Academic Experience'}/>
                    </div>
                    <div className="resume-content">
                        <ResumeItem 
                        year={'Dec 2021'}
                        title={'Full Stack Developer - Doggy App'}
                        subTitle={'Henry Bootcamp'}
                        text={'Development of a SPA (Single Page Application) using React for the Front End and redux as state management. All components were developed with CSS without the use of external libraries. The SPA consumes data from an API (Doggy App) through a Back End developed in Node.js using express, adding new features to the original API. Some features of the project: Cache of searches, ordering and filters, forms for the creation of new pokemones and pagination of the same.'}
                        />
                    </div>
                    <div className="small-title u-small-title-margin">
                    <SmallTitle icon={school} title={'Academic Formation'}/>
                    </div>
                    <div className="resume-content">
                    <ResumeItem 
                        year={'2021 - 2022'}
                        title={'Full Stack Developer'}
                        subTitle={'Henry Bootcamp'}
                        text={'+800 hours of programming where the following technologies are mastered: HTML, CSS, JS, React, Redux, Node js, Express, Sequelize and PostgreSQL, as well as Git and GitHub tools.Participating on individual and group projects. Daily pair programming practices.'}
                        />
                    <ResumeItem 
                        year={'2016 - 2019'}
                        title={'High School'}
                        subTitle={'Tangaroa College, Auckland New Zealand'}
                        text={'Graduated from high school with a focus on medicine, forming part of the Health Science Academy.'}
                        />
                    </div>
                </InnerLayout>
          </ResumeStyled>
    )
}


const ResumeStyled = styled.div`
    .small-title{
        padding-bottom: 3rem;
    }
    .u-small-title-margin{
        margin-top: 4rem;
    }
    .resume-content{
        border-left: 2px solid var(--border-color);

    }

`;


export default Resume;


