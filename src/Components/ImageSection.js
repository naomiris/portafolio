import React from "react";
import styled from "styled-components";
import fotoNaomi from '../img/LinkedIn.jpeg'

function ImageSection () {
    return (
        <ImageSectionStyled>
            <div className="left-content">
                <img src={fotoNaomi} alt="resume img"/>
            </div>
            <div className="right-content">
                    <h4>I am Naomi<span>Lorem Ipsum</span></h4>
                <p className="paragraphy">
                Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen
                </p>
                <div className="about-info">
                    <div className="info-title">
                        <p>Full Name</p>
                        <p>Age</p>
                        <p>Nationality</p>
                        <p>Langueges</p>
                        <p>Location</p>
                        <p>Services</p>
                    </div>
                    <div className="info">
                        <p>: Naomi Iris Del Castillo</p>
                        <p>: 20</p>
                        <p>: Argentina</p>
                        <p>: Spanish / English</p>
                        <p>: Buenos Aires, Argentina</p>
                        <p>: Fullstack Developer</p>
                    </div>
                    
                </div>
            </div>
        </ImageSectionStyled>
    )
}

const ImageSectionStyled = styled.div`
margin-top: 5rem;
display: flex;
.left-content{
width: 100%;
    img{
        width: 250%;
        object-fit: cover;
    }
}
.right-content{
    padding-left: 9rem;
    h4{
        font-size: 2rem;
        color: var(--white-color);
        span{
            font-size: 2rem;
        }
    }
    .paragraphy{
        padding: 1rem 0;
    }
    .about-info{
        display: flex;
        padding-bottom: 1.4rem;
        .info-title{
            padding-right: 3rem ;
            p{
                font-weight: 600
            }
        }
        .info-title, .info{
            p{
                padding: .3rem 0;
            }
        }
    }
}

`;

export default ImageSection