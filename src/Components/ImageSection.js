import React from "react";
import styled from "styled-components";
import fotoNaomi from '../img/fotoLinkedIn.jpeg'
import PrimaryButton from "./PrimaryButton";

function ImageSection () {
    return (
        <ImageSectionStyled>
            <div className="left-content">
                <img src={fotoNaomi} alt="resume img"/>
            </div>
            <div className="right-content">
                    <h4>Hi everyone, I'm <span>Naomi Iris Del Castillo</span></h4>
                <p className="paragraph">
                  I'm from Buenos Aires, Argentina. Born in 2001 on the 9th of July, to be exact. <br/> 
                  I consider myselft as a positive and analytical person, actively searching for my best version. I made the decision to start a new professional path to work on what I enjoy the most and that motivates me: thinking and learning something new every day. 
                  I love new challenges, especially learning from my mistakes and growing as a professional, I adapt easily to changes and I always give my best effort.

                </p>
                <div className="about-info">
                    <div className="info-title">
                        <p>Age:</p>
                        <p>Nationality:</p>
                        <p>Langueges:</p>
                        <p>Location:</p> <br/>
                    </div>
                    <div className="info">
                        <p> 20 years old</p>
                        <p> Argentina</p>
                        <p> Spanish / English</p>
                        <p> Buenos Aires, Argentina</p>
                    </div>
                </div>
                    <PrimaryButton title={"Download CV"}/>
            </div>
        </ImageSectionStyled>
    )
}

const ImageSectionStyled = styled.div`
 margin-top: 5rem;
    display: flex;
    @media screen and (max-width:1000px){
        flex-direction: column;
        .left-content{
            margin-bottom: 2rem;
        }
    }
    .left-content{
        width: 100%;
        img{
            width: 95%;
            object-fit: cover;
        }
    }
    .right-content{
        width: 100%;
        h4{
            font-size: 2rem;
            color: var(--white-color);
            span{
                font-size: 2rem;
            }
        }
        .paragraph{
            padding: 1rem 0;
        }
        .about-info{
            display: flex;
            padding-bottom: 1.4rem;
            .info-title{
                padding-right: 3rem;
                p{
                    font-weight: 600;
                }
            }
            .info-title, .info{
                p{
                    padding: .3rem ;
                }
            }
        }
    }

`;

export default ImageSection