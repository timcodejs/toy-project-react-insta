import React, { useCallback, useState } from 'react';
import styled from 'styled-components';

const UserProfile = ({setzindexer}) => {
    const [opacity, setOpacity] = useState('none');

    const transformProfile = useCallback(() => {
        setOpacity('block');
        setzindexer({type: "PLUS"});
    }, [setzindexer]);
    
    const transformProfileCencle = useCallback(() => {
        setOpacity('none');
        setzindexer({type: "MINUS"});
    }, [setzindexer]);

    return(
        <>
            <Profile>
                <ProfileInner>
                    <button><InstaProfile src="images/insta_profile.png"  alt="profile" /></button>
                    <ProfileNmae>
                        <p><a href="/">UserName</a></p>
                        <p>UserComment</p>
                    </ProfileNmae>
                </ProfileInner>
                <TextColorBlue onClick={transformProfile}>전환</TextColorBlue>
            </Profile>
            <ProfilePopup style={{display: opacity}}>
                <div>
                    <ProfilePopupInner>
                        <div>
                            <div></div>
                            <div><h3>계정 전환</h3></div>
                            <div onClick={transformProfileCencle}><button><img src="images/trans_cencle.png" alt="trans cencle button" /></button></div>
                        </div>
                        <div>
                            <div>
                                <div>
                                    <button><InstaProfile src="images/insta_profile.png"  alt="profile" /></button>
                                    <span>UserName</span>
                                </div>
                                <div><img src="images/trans_choice.png" alt="trans choice button" /></div>
                            </div>
                        </div>
                        <div>
                            <button>기존 계정으로 로그인</button>
                        </div>
                    </ProfilePopupInner>
                </div>
            </ProfilePopup>
        </>
    )
}

export default UserProfile;

const Profile = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 10px;
`;

const ProfileInner = styled.div`
    display: flex;
    align-items: center;
`;

const  ProfileNmae = styled.div`
    p:nth-child(1) {
        font-weight: 600;
    }
    p:nth-child(2) {
        color: gray;
    }
`;

const InstaProfile = styled.img`
    width: 60px;
    height: 60px;
    margin-right: 10px;
`;

const TextColorBlue = styled.p`
    color: rgba(var(--d69,0,149,246),1);
    font-size: 12px;
    cursor: pointer;
`;

const ProfilePopup = styled.div`
    position: absolute;
    width: 100vw;
    height: 100vh;
    top: -110px;
    left: -50%;
    transform: translateX(-50%);
    background-color: rgba(0,0,0,.65);
    & > div {
        width: 100vw;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

const ProfilePopupInner = styled.div`
    position: relative;
    z-index: 6;
    width: 400px;
    background-color: rgba(var(--f23,255,255,255),1);
    border-radius: 12px;
    & > div:nth-child(1) {
        width: 400px;
        height: 42px;
        display: flex;
        border-bottom: 1px solid rgba(var(--b6a,219,219,219),1);
    }
    & > div:nth-child(1) div {
        flex: 1 1 0;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    & > div:nth-child(1) div:nth-child(2) {
        flex: 8 1 0;
    }
    & > div:nth-child(1) h3 {
        font-size: 16px;
        font-weight: 600;
    }
    & > div:nth-child(1) img {
        height: 15px;
        width: 15px;
    }
    & > div:nth-child(2) {
        max-height: 368px;
        min-height: 152px;
    }
    & > div:nth-child(2) > div {
        display: flex;
        justify-content: space-between;
        padding: 8px 16px;
    }
    & > div:nth-child(2) > div > div:nth-child(1) {
        display: flex;
        align-items: center;
        font-size: 14px;
        font-weight: 600;
        color: rgba(var(--i1d,38,38,38),1);
    }
    & > div:nth-child(2) > div > div:nth-child(2) {
        display: flex;
        align-items: center;
    }
    & > div:nth-child(2) > div > div:nth-child(2) img {
        height: 24px;
        width: 24px;
    }
    & > div:nth-child(3) {
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-top: 1px solid rgba(var(--b6a,219,219,219),1);
    }
    & > div:nth-child(3) button {
        color: rgba(var(--d69,0,149,246),1);
        font-size: 14px;
        font-weight: 600;
    }
`;