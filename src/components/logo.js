import React from 'react';
import styled from 'styled-components';

const Logo = () => {
    return(
        <>
            <a href="/"><InstaLogo src="images/insta_logo.png"  alt="logo" /></a>
        </>
    )
}

export default Logo;

const InstaLogo = styled.img`
    height: 29px;
    margin-top: 10px;
`;
