import React from 'react';
import styled from 'styled-components';

const UserProfile = () => {
    return(
        <Profile>
            <ProfileInner>
                <button><InstaProfile src="images/insta_profile.png"  alt="profile" /></button>
                <div>
                    <UserName><a href="/">UserName</a></UserName>
                    <UserComment>UserComment</UserComment>
                </div>
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

const UserName = styled.p`
    font-weight: 600;
`;

const UserComment = styled.p`
    color: gray;
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
