import React from "react";
import styled from "styled-components";
import {NavLink} from 'react-router-dom';
import avatar from '../img/fotoLinkedIn.jpeg'

function Navigation() {
    return (
        <NavigationStyled>
            <div className="avatar">
                <img src={avatar} alt=''/>
            </div>
            <ul className="nav-items">
                <li className="nav-item">
                    <NavLink to='/' ActiveClassName="active-class" exact='true'>Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to='/about' ActiveClassName="active-class" exact='true'>About</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to='/resume' ActiveClassName="active-class" exact='true'>Resume</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to='/portfolios' ActiveClassName="active-class" exact='true'>Portfolios</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to='/contact' ActiveClassName="active-class" exact='true'>Contact</NavLink>
                </li>
            </ul>
            <footer className="footer">
                <p>@2022 Naomi's Portfolio</p>
            </footer>
        </NavigationStyled>

    )
}

const NavigationStyled = styled.nav`
display: flex;
justify-content: space-between;
flex-direction: column;
align-items: center;
height: 100%;
width: 100%;
border-right: 1px solid var(--border-color);


.avatar{
    width:100%;
    border-bottom: 1px solid var(--border-color);
    text-align: center;
    padding: 1rem 0;
    img{
        width:70%;
        border-radius: 50%;
        border: 8px solid var(--border-color);
    }

}
.nav-items{
    width: 100%;
    text-align: center;
    .active-class{
        background-color: var(--primary-color);
        color: white;
    }
    li{
        display: block;
        a{
            display: block;
            padding: .45rem 0;
            position: relative;
            z-index: 10;
            text-transform: uppercase;
            transition: all .4s ease-in-out;
            font-weight: 600;
            letter-spacing: 1px;
            &:hover{
                cursor:pointer;
            }
            &::before{
                content: "";
                position: absolute;
                bottom: 0;
                left: 0;
                width: 0;
                height: 50%;
                background-color: var(--primary-color);
                transition: all 0.4s cubic-bezier(1,-0.2, .25, .95);
                z-index: 3;
                opacity: 0.21;
                transform-origin: right;

            }
        }
        a:hover::before{
            width: 100%;
            height: 100%;

        }
    }
}
.footer{
    border-top: 1px solid var(--border-color);
    width: 100%;
    p{
        padding: 1rem 0;
        font-size: .90rem;
        display: block;
        text-align: center;
        font-family: dm sans,Sans-serif;

    }
}
`;

export default Navigation;