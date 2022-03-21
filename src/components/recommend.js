import React from 'react';
import Friendlist from './friendlist';
import styled from 'styled-components';

const Recommend = () => {
    return(
        <>
            <FlexDiv>
                <TextSpan>회원님을 위한 추천</TextSpan>
                <TextSpan2>모두 보기</TextSpan2>
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
`

const TextSpan = styled.span`
    font-size: 14px;
    font-weight: 600;
    color: rgba(var(--f52,142,142,142),1);
`;

const TextSpan2 = styled.span`
    font-size: 12px;
    font-weight: 600;
    color: rgba(var(--i1d,38,38,38),1);
    cursor: pointer;
`;

