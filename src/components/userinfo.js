import React from 'react';
import UserProfile from './userprofile';
import Recommend from './recommend';
import Infometa from './infometa';
import styled from 'styled-components';


const Userinfo = () => {
    return(
        <InstaUserInfo>
            <UserProfile />
            <Recommend />
            <Infometa />
        </InstaUserInfo>
    )
}

export default Userinfo;

const InstaUserInfo = styled.div`
    width: 310px;
    margin-top: 20px;
    background-color: rgba(var(--b3f,250,250,250),1);
`;