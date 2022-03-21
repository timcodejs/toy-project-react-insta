import React from 'react';
import Logo from './logo';
import Search from './search';
import Navi from './navi';
import styled from 'styled-components';

const Header = () => {
    return(
        <HeaderWrap>
            <HeaderInner>
                <Logo />
                <Search />
                <Navi />
            </HeaderInner>
        </HeaderWrap>
    )
}

export default Header;

const HeaderWrap = styled.div`
    position: fixed;
    z-index: 1;
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
