import React from 'react';
import styled from 'styled-components';

const Boardicons = () => {
    return(
        <IconListWrap>
            <IconListInner>
                <li><img src="/images/insta_heart.png" alt="heart icon" /></li>
                <li><img src="/images/insta_comment.png" alt="comment icon" /></li>
                <li><img src="/images/insta_send.png" alt="send icon" /></li>
            </IconListInner>
            <div><img src="/images/insta_save.png" alt="save icon" /></div>
        </IconListWrap>
    )
}

export default Boardicons;

const IconListWrap = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 6px 8px;
    div {
        padding: 8px 4px;
    }
    div > img {
        width: 30px;
        height: 30px;
    }
`;

const IconListInner = styled.ul`
    display: flex;
    li {
        padding: 8px 4px;
    }
    li > img {
        width: 30px;
        height: 30px;
    }
`;
