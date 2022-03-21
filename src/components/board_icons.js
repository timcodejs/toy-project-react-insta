import React from 'react';
import styled from 'styled-components';

const Boardicons = () => {
    return(
        <IconListWrap>
            <IconListInner>
                <IconList><ContentImg src="/images/insta_heart.png" alt="heart icon" /></IconList>
                <IconList><ContentImg src="/images/insta_comment.png" alt="comment icon" /></IconList>
                <IconList><ContentImg src="/images/insta_send.png" alt="send icon" /></IconList>
            </IconListInner>
            <IconList><ContentImg src="/images/insta_save.png" alt="save icon" /></IconList>
        </IconListWrap>
    )
}

export default Boardicons;

const IconListWrap = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 6px 8px;
`;

const IconListInner = styled.ul`
    display: flex;
`;

const IconList = styled.li`
    padding: 8px 4px;
`;

const ContentImg = styled.img`
    width: 30px;
    height: 30px;
`;
