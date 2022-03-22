import React from 'react';
import styled from 'styled-components';

const UserProfile = () => {
    return(
        <Profile>
            <ProfileInner>
                <button><InstaProfile src="images/insta_profile.png"  alt="profile" /></button>
                <ProfileNmae>
                    <p><a href="/">UserName</a></p>
                    <p>UserComment</p>
                </ProfileNmae>
            </ProfileInner>
            <TextColorBlue>전환</TextColorBlue>
        </Profile>
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
