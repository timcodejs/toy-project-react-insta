import React, { useContext } from 'react';
import UserProfile from './userprofile';
import Recommend from './recommend';
import Infometa from './infometa';
import { ZindexerContext } from '../reducer/zindexercontext';
import styled from 'styled-components';


const Userinfo = () => {
    const { zindexer, dispatch } = useContext(ZindexerContext);

    return(
        <InstaUserInfo style={{zIndex: zindexer}}>
            <UserProfile setzindexer={dispatch} />
            <Recommend />
            <Infometa />
        </InstaUserInfo>
    )
}

export default Userinfo;

const InstaUserInfo = styled.div`
    position: fixed;
    left: 50%;
    transform: translateX( 50% );
    width: 310px;
    margin-top: 20px;
    background-color: rgba(var(--b3f,250,250,250),1);
`;