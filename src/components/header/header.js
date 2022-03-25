import React from 'react';
import Search from './search';
import Navi from './navi';
import styled from 'styled-components';

const Header = () => {
    return(
        <HeaderWrap>
            <HeaderInner>
                <div><a href="/"><InstaLogo src="images/insta_logo.png"  alt="logo" /></a></div>
                <Search />
                <Navi />
            </HeaderInner>
        </HeaderWrap>
    )
}

export default Header;

const HeaderWrap = styled.div`
    position: fixed;
    z-index: 31;
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid rgba(var(--b6a,219,219,219),1);
    background-color: white;
`;

const HeaderInner = styled.div`
    width: 960px;
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const InstaLogo = styled.img`
    height: 29px;
    margin-top: 10px;
`;