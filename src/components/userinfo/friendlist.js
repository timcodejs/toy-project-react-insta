import React from 'react';
import styled from 'styled-components';

const Friendlist = () => {
    const state = [1, 2, 3, 4, 5];

    return(
        <ProfileWrap>
        {state.map(() => (
            <Profile>
                <ProfileInner>
                    <button><img src="images/cont_icon5.png"  alt="profile" /></button>
                    <div>
                        <p><a href="/">UserName</a></p>
                        <p>UserComment</p>
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
    button > img {
        width: 30px;
        height: 30px;
        margin-right: 10px;
    }
    div > p:nth-child(1) {
        font-weight: 600;
    }
    div > p:nth-child(2) {
        color: gray;
    }
`;

const TextColorBlue = styled.p`
    color: rgba(var(--d69,0,149,246),1);
    font-size: 12px;
    cursor: pointer;
`;