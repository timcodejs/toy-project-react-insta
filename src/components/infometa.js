import React from 'react';
import styled from 'styled-components';

const Infometa = () => {
    return(
        <>
            <div>
                <nav>
                    <ul>
                        <InfoList><TextSpan>소개</TextSpan></InfoList>
                        <InfoList><TextSpan>도움말</TextSpan></InfoList>
                        <InfoList><TextSpan>홍보 센터</TextSpan></InfoList>
                        <InfoList><TextSpan>API</TextSpan></InfoList>
                        <InfoList><TextSpan>채용 정보</TextSpan></InfoList>
                        <InfoList><TextSpan>개인정보처리방침</TextSpan></InfoList>
                        <InfoList><TextSpan>약관</TextSpan></InfoList>
                        <InfoList><TextSpan>위치</TextSpan></InfoList>
                        <InfoList><TextSpan>인기 계정</TextSpan></InfoList>
                        <InfoList><TextSpan>해시태그</TextSpan></InfoList>
                        <InfoList><TextSpan>언어</TextSpan></InfoList>
                    </ul>
                </nav>
            </div>
            <ClearDiv><TextSpan>© 2022 INSTAGRAM FROM META</TextSpan></ClearDiv>
        </>
    )
}

export default Infometa;

const InfoList = styled.li`
    float: left;
    &:not(:last-child):after {
        content: "·";
        color: rgba(var(--edc,199,199,199),1);
        padding: 0 4px;
    }
`;

const TextSpan = styled.span`
    font-size: 12px;
    font-weight: 400;
    color: rgba(var(--edc,199,199,199),1);
`;

const ClearDiv = styled.div`
    clear: both;
    padding-top: 16px;
`