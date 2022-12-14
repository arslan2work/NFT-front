import React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';

const LogoText = styled.h1`
font-family: 'Akaya Telivigala', cursive;
font-size: ${props => props.theme.fontxxx};
color: ${props => props.theme.text};

&:hover{
    transform: scale(1.1);
    transition: all 0.2s ease-in-out;
}
`

const Logo = () => {
    return (
        <LogoText>
            <Link to="/" >
                W.
            </Link>
        </LogoText>
    )
}

export default Logo