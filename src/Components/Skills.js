import React from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../styles/Layout';
import ProgressBar from './ProgressBar';
import Title from './Title';

function Skills () {
    return (
        <SkillsStyles>
                    <Title title={'My Skills'} span={'My Skills'}/>
                <InnerLayout>
                    <div className='skills'>
                        <ProgressBar 
                        title={"HTML5"}
                        width={'90%'}
                        text={'90%'}
                        />
                        <ProgressBar 
                        title={"CSS3"}
                        width={'90%'}
                        text={'90%'}
                        />
                        <ProgressBar 
                        title={"Javascript"}
                        width={'90%'}
                        text={'90%'}
                        />
                        <ProgressBar 
                        title={"NodeJS"}
                        width={'60%'}
                        text={'60%'}
                        />
                        <ProgressBar 
                        title={"PostgreSQL"}
                        width={'60%'}
                        text={'60%'}
                        />
                        <ProgressBar 
                        title={"Express"}
                        width={'60%'}
                        text={'60%'}
                        />
                        <ProgressBar 
                        title={"React JS"}
                        width={'90%'}
                        text={'90%'}
                        />
                        <ProgressBar 
                        title={"Redux"}
                        width={'90%'}
                        text={'90%'}
                        />
                    </div>
                </InnerLayout>
        </SkillsStyles>
    )
}

const SkillsStyles = styled.section`
    .skills{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-row-gap: 2rem;
        grid-column-gap: 3rem;
        @media screen and (max-width: 700px) {
            grid-template-columns:repeat(1, 1fr) ;
        }
    }

`;

export default Skills