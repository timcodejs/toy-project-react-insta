import React from 'react';
import styled from 'styled-components';

const Boardprofile = () => {
    return(
        <ProfileWrap>
            <FlexBox>
                <div><a href="/"><img src="images/insta_profile.png"  alt="profile" /></a></div>
                <div><a href="/">UserName</a></div>
            </FlexBox>
            <div><button><img src="images/insta_morebtn.png"  alt="morebtn" /></button></div>
        </ProfileWrap>
    )
}

export default Boardprofile;

const ProfileWrap = styled.div`
    width: 96%;
    height: 35px;
    padding: 14px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    div:nth-child(2) > button > img {
        width: 15px;
        height: 15px;
        margin-top: 5px;
        margin-right: 10px;
    }
`;

const FlexBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    div:nth-child(1) > a > img {
        width: 35px;
        height: 35px;
        margin-right: 15px;
    }
    div:nth-child(2) {
        font-size: 14px;
        font-weight: 600;
    }
    a {
        display: flex;
        align-items: center;
    }
    button {
        display: flex;
        align-items: center;
    }
`;
