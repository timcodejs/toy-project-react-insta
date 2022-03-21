import React from 'react';
import Boardprofile from './board_profile';
import Boardcontent from './board_content';
import Boardcomment from './board_comment';
import styled from 'styled-components';

const Board = () => {
    return(
        <StoryDiv>
            <Boardprofile />
            <Boardcontent />
            <Boardcomment />
        </StoryDiv>
    )
}

export default Board;

const StoryDiv = styled.div`
    width: 614px;
    border: 1px solid rgba(var(--b6a,219,219,219),1);
    background: rgba(var(--d87,255,255,255),1);
    border-radius: 3px;
    box-sizing: border-box;
    margin: 24px 0;
`;
