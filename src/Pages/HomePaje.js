import React from "react";
import Particle from '../Components/Particles'
import styled from "styled-components";
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';



function HomePage(){
    return (
        <HomePageStyled>
            <div className="particle-container">
                <Particle/>
            </div>
            <div className="typography">
                <h1>Hi I am <span>Naomi</span></h1>
                <p>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.</p>
                <div className="icons">
                    <a href="https://github.com/naomiris"className=" icon i-github">
                        <GitHubIcon/>
                    </a>
                    <a href="https://www.linkedin.com/in/naomi-del-castillo/"className="icon i-linkedin">
                        <LinkedInIcon/>
                    </a>
                    
                </div>
            </div>
        </HomePageStyled>

    )
}

const HomePageStyled = styled.main`
    width: 100%;
    height: 100vh;
    position: relative;
    .p-particles-js{
        position: absolute;
        top: 0;
        left: 0;
    }
    .typography{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        width: 80%;
        .icons{
            display: flex;
            justify-content: center;
            margin-top:1rem ;
            .icon{
                border: 2px solid var(--border-color);
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 50%;
                transform: all .4s ease-in-out ;
                cursor: pointer;
                &:hover{
                    border: 2px solid var(--primary-color) ;
                    color: var(--primary-color);
                }
                &:not(:last-child){
                    margin-right: 1rem;
                    
                }
                svg{
                    margin: .5rem;
                }
            }
            .i-github{
                &:hover{
                    border: 2px solid #5F4687;
                    color:  #5F4687;
                }
            }
        }
    }

`;

export default HomePage