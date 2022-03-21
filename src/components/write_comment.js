import React from 'react';
import styled from 'styled-components';

const Writecomment = () => {
    return(
        <WriteWrap>
            <ContentInner>
                <ContentImg src="/images/insta_smile.png" alt="smile icon" />
                <input type="text" placeholder='댓글 달기...' />
            </ContentInner>
            <div><SendBtn>게시</SendBtn></div>
        </WriteWrap>
    )
}

export default Writecomment;

const WriteWrap = styled.div`
    height: 40px;
    padding: 6px 16px;
    border-top: 1px solid rgba(var(--ce3,239,239,239),1);
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const ContentImg = styled.img`
    width: 30px;
    height: 30px;
    padding: 8px 16px 8px 0;
`;

const ContentInner = styled.div`
    display: flex;
    align-items: center;
    input {
        border: 0;
        font-size: inherit;
    }
`;

const SendBtn = styled.button`
font-size: 14px;
    color: rgba(var(--d69,0,149,246),1);
`;
