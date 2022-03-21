import React from 'react';
import styled from 'styled-components';

const Boardprofile = () => {
    return(
        <ProfileWrap>
            <FlexBox>
                <FlexBox><a href="/"><InstaProfile src="images/insta_profile.png"  alt="profile" /></a></FlexBox>
                <UserName><a href="/">UserName</a></UserName>
            </FlexBox>
            <FlexBox><button><InstaMoreBtn src="images/insta_morebtn.png"  alt="morebtn" /></button></FlexBox>
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
`;

const FlexBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const InstaProfile = styled.img`
    width: 35px;
    height: 35px;
    margin-right: 15px;
`;

const UserName = styled.div`
    font-size: 14px;
    font-weight: 600;
`;

const InstaMoreBtn = styled.img`
    width: 15px;
    height: 15px;
    margin-right: 10px;
`;
