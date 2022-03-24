import React, { useState } from 'react';
import styled from 'styled-components';

const Navi = () => {
    const [profile, setProfile] = useState(false);
    const [opacity, setOpacity] = useState('none');

    const onUserProfileOpen = () => {
        setProfile(true);
        setOpacity('block');
    }
    const onUserProfileClose = () => {
        setProfile(false);
        setOpacity('none');
    }

    return(
        <div>
            {profile === false
            ? 
            <div>
                <InstaButton><img src="images/insta_home.png"  alt="home" /></InstaButton>
                <InstaButton><img src="images/insta_send.png"  alt="send" /></InstaButton>
                <InstaButton><img src="images/insta_plus.png"  alt="plus" /></InstaButton>
                <InstaButton><img src="images/insta_find.png"  alt="find" /></InstaButton>
                <InstaButton><img src="images/insta_heart.png"  alt="heart" /></InstaButton>
                <InstaProfile onClick={onUserProfileOpen}><img src="images/insta_profile.png"  alt="profile" /></InstaProfile> 
            </div>
            : 
            <div>
                <InstaButton><img src="images/insta_home_empty.png"  alt="home" /></InstaButton>
                <InstaButton><img src="images/insta_send.png"  alt="send" /></InstaButton>
                <InstaButton><img src="images/insta_plus.png"  alt="plus" /></InstaButton>
                <InstaButton><img src="images/insta_find.png"  alt="find" /></InstaButton>
                <InstaButton><img src="images/insta_heart.png"  alt="heart" /></InstaButton>    
                <InstaProfile2><img src="images/insta_profile.png"  alt="profile" /></InstaProfile2>
            </div>
            }
            <PopupWrap style={{display: opacity}} onClick={onUserProfileClose}>
                <PopupProfile>
                    <div></div>
                    <ul>
                        <li><a href="/"><img src="images/profile_icon1.png" alt="" /><span>프로필</span></a></li>
                        <li><a href="/"><img src="images/profile_icon2.png" alt="" /><span>저장됨</span></a></li>
                        <li><a href="/"><img src="images/profile_icon3.png" alt="" /><span>설정</span></a></li>
                        <li><a href="/"><img src="images/profile_icon4.png" alt="" /><span>계정 전환</span></a></li>
                        <li><a href="/"><span>로그아웃</span></a></li>
                    </ul>
                </PopupProfile>
            </PopupWrap>
        </div>
    )
}

export default Navi;

const InstaButton = styled.button`
    margin: 2px;
    padding: 2px 6px 3px 6px;
    img {
        width: 30px;
        height: 30px;
    }
`;

const InstaProfile = styled.button`
    margin: 2px;
    padding: 2px 6px 3px 6px;
    img {
        width: 28px;
        height: 28px;
    }
`;

const InstaProfile2 = styled.button`
    position: relative;
    top: 3px;
    left: 1px;
    padding: 2px 6px 7px 4px;
    img {
        width: 28px;
        height: 28px;
        padding: 2px;
        border: 1px solid #000;
        border-radius: 50%;
    }
`;

const PopupWrap = styled.div`
    position: absolute;
    width: 100vw;
    height: 100vh;
    left: 0;
    top: 0;
`;

const PopupProfile = styled.div`
    position: absolute;
    top: 54px;
    left: 50%;
    transform: translate(115%, 2%);
    background-color: white;
    border-radius: 6px;
    box-shadow: 2px 2px 8px #d9d9d9;
    font-size: 14px;
    z-index: 3;
    div {
        position: absolute;
        background: rgba(var(--d87,255,255,255),1);
        border: 1px solid rgba(var(--f23,255,255,255),1);
        box-shadow: -4px -4px 5px rgba(var(--jb7,0,0,0),.0775);
        width: 13px;
        height: 13px;
        transform: rotate(45deg);
        top: -5px;
        right: 37px;
    }
    li {
        width: 198px;
        height: 21px;
        padding: 8px 16px;
        cursor: pointer;
    }
    li:hover {
        background-color: rgba(var(--jb7,0,0,0),.0175);
    }
    li:last-child {
        border-top: 1px solid #d9d9d9;
    }
    a {
        display: flex;
    }
    img {
        width: 15px;
        height: 15px;
        margin-right: 12px;
    }
`;