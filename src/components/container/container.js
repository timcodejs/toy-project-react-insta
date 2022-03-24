import React from 'react';
import Story from './story';
import Board from './board';
import styled from 'styled-components';

const Container = () => {
    const state = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    return(
        <InstaContainer>
            <Story />
            {state.map((item) => (
                <Board key={item} />
            ))}
        </InstaContainer>
    )
}

export default Container;

const InstaContainer = styled.div`
    width: 614px;
    margin-right: 28px;
    background-color: rgba(var(--b3f,250,250,250),1);
`;