import React from 'react';
import styled from 'styled-components';

const Friendlist = () => {
    const state = [1, 2, 3, 4, 5];

    return(
        <ProfileWrap>
        {state.map(() => (
            <Profile>
                <ProfileInner>
                    <button><InstaProfile src="images/insta_profile.png"  alt="profile" /></button>
                    <div>
                        <UserName><a href="/">UserName</a></UserName>
                        <UserComment>UserComment</UserComment>
                    </div>
                </ProfileInner>
                <TextColorBlue>팔로우</TextColorBlue>
            </Profile>
        ))}
        </ProfileWrap>
    )
}

export default Friendlist;

const ProfileWrap = styled.div`
    margin-bottom: 25px;
`;

const Profile = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 13px 0;
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
    width: 30px;
    height: 30px;
    margin-right: 10px;
`;

const TextColorBlue = styled.p`
    color: rgba(var(--d69,0,149,246),1);
    font-size: 12px;
    cursor: pointer;
`;