import React from 'react';
import styled from 'styled-components';

const Story = () => {
    const state = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
    return(
        <StoryDiv>
            <StoryList>
                {state.map(() => (
                    <li>
                        <p><StoryItemImg src="/images/cont_icon4.png" alt="" /></p>
                        <p><TextSpan>UserName</TextSpan></p>
                    </li>
                ))}
            </StoryList>
        </StoryDiv>
    )
}

export default Story;

const StoryDiv = styled.div`
    overflow-x: scroll;
    border: 1px solid rgba(var(--b6a,219,219,219),1);
    background: rgba(var(--d87,255,255,255),1);
    border-radius: 3px;
    padding: 15px 10px;
`;

const StoryList = styled.ul`
    display: flex;
    text-align: center;
`;

const StoryItemImg = styled.img`
    width: 60px;
    height: 60px;
    margin: 0 10px;
`;

const TextSpan = styled.span`
    font-size: 12px;
`;
