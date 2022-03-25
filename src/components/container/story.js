import React, { useCallback, useState } from 'react';
import styled from 'styled-components';

const Story = () => {
    const state = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
    const [opacity, setOpacity] = useState('none');

    const storyLeftBtn = useCallback((e) => {
        let parent = e.target.parentNode.parentNode;
        parent.scrollTo({ top: 0, left: -320, behavior: 'smooth' });
    }, []);

    const storyrightBtn = useCallback((e) => {
        let parent = e.target.parentNode.parentNode;
        parent.scrollTo({ top: 0, left: 320, behavior: 'smooth' });
    }, []);

    const onScrollEvent = useCallback((e) => {
        if(e.target.scrollLeft === 0) {
            setOpacity('none');
        } else if(e.target.scrollLeft > 0) {
            setOpacity('block');
        }
    }, []);

    return(
        <StoryDiv  onScroll={onScrollEvent}>
            <StoryButton style={{display: opacity}} onClick={storyLeftBtn}><img src="/images/arrow_left.png" alt="left button" /></StoryButton>    
            <StoryList>
                {state.map((item) => (
                    <li key={item}>
                        <p><StoryItemImg src="/images/cont_icon4.png" alt="" /></p>
                        <p><TextSpan>UserName</TextSpan></p>
                    </li>
                ))}
            </StoryList>
            <StoryButton onClick={storyrightBtn}><img src="/images/arrow_right.png" alt="right button" /></StoryButton>
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
    ::-webkit-scrollbar { display: none; }
`;

const StoryButton = styled.div`
    position: absolute;
    cursor: pointer;
    &:nth-of-type(1) {
        transform: translate(-30%, 30%);
    }
    &:nth-of-type(2) {
        transform: translate(1250%, -130%);
    }
    img {
        width: 45px;
        height: 45px;
    } 
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
