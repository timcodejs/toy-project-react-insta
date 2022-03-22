import React from 'react';
import Friendlist from './friendlist';
import styled from 'styled-components';

const Recommend = () => {
    return(
        <>
            <FlexDiv>
                <span>회원님을 위한 추천</span>
                <span>모두 보기</span>
            </FlexDiv>
            <Friendlist />
        </>
    )
}

export default Recommend;

const FlexDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 12px 0;
    span {
        font-weight: 600;
    }
    span:nth-child(1) {
        font-size: 14px;
        color: rgba(var(--f52,142,142,142),1);
    }
    span:nth-child(2) {
        font-size: 12px;
        color: rgba(var(--i1d,38,38,38),1);
        cursor: pointer;
    }
`;
