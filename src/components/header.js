import React from 'react';
import styled from 'styled-components';

const Header = () => {
    return(
        <HeaderWrap>
            <HeaderInner>
                <div>
                    <a href="/"><InstaLogo src="images/insta_logo.png"  alt="logo" /></a>
                </div>
                <MarginDiv>
                    <SearchInput type="text" placeholder="검색" />
                    <SearchIcon><svg aria-label="검색" class="_8-yf5 " color="#8e8e8e" fill="#8e8e8e" height="16" role="img" viewBox="0 0 24 24" width="16"><path d="M19 10.5A8.5 8.5 0 1110.5 2a8.5 8.5 0 018.5 8.5z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path><line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="16.511" x2="22" y1="16.511" y2="22"></line></svg></SearchIcon>
                </MarginDiv>
                <div>
                    <Button><InstaImg src="images/insta_home.png"  alt="home" /></Button>
                    <Button><InstaImg src="images/insta_send.png"  alt="send" /></Button>
                    <Button><InstaImg src="images/insta_plus.png"  alt="plus" /></Button>
                    <Button><InstaImg src="images/insta_find.png"  alt="find" /></Button>
                    <Button><InstaImg src="images/insta_heart.png"  alt="heart" /></Button>                    
                    <Button><InstaProfile src="images/insta_profile.png"  alt="profile" /></Button>
                </div>
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
`;

const HeaderInner = styled.div`
    width: 960px;
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const MarginDiv = styled.div`
    margin-left: 140px;
`;

const SearchInput = styled.input`
    width: 220px;
    height: 34px;
    border: 0;
    border-radius: 6px;
    font-size: 16px;
    padding-left: 40px;
    background: rgba(var(--bb2,239,239,239),1);
`;

const SearchIcon = styled.div`
    position: absolute;
    top: 23px;
    margin-left: 15px;
`;

const Button = styled.button`
    border: 0;
    background: none;
    cursor: pointer;
`;

const InstaLogo = styled.img`
    height: 29px;
    margin-top: 10px;
`;

const InstaImg = styled.img`
    width: 30px;
    height: 30px;
`;

const InstaProfile = styled.img`
    width: 25px;
    height: 25px;
`;