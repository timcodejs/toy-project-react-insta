import React from 'react';
import Header from './header';
import Container from './container';
import Userinfo from './userinfo';
import styled from 'styled-components';

const Main = () => {
    return(
        <Wrap>
            <Header />
            <Cont>
                <Container />
                <Userinfo />
            </Cont>
        </Wrap>
    )
}

export default Main;

const Wrap = styled.div`
    background-color: rgba(var(--b3f,250,250,250),1);
`
const Cont = styled.div`
    width: 960px;
    margin: 0 auto;
    padding-top: 90px;
    display: flex;
    justify-content: space-between;
`;