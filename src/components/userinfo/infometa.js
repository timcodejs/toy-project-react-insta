import React from 'react';
import styled from 'styled-components';

const Infometa = () => {
    return(
        <div>
            <nav>
                <InfoList>
                    <li><span>소개</span></li>
                    <li><span>도움말</span></li>
                    <li><span>홍보 센터</span></li>
                    <li><span>API</span></li>
                    <li><span>채용 정보</span></li>
                    <li><span>개인정보처리방침</span></li>
                    <li><span>약관</span></li>
                    <li><span>위치</span></li>
                    <li><span>인기 계정</span></li>
                    <li><span>해시태그</span></li>
                    <li><span>언어</span></li>
                </InfoList>
            </nav>
            <ClearDiv><span>© 2022 INSTAGRAM FROM META</span></ClearDiv>
        </div>
    )
}

export default Infometa;


const InfoList = styled.ul`
    li {
        float: left;
    }
    li:not(:last-child):after {
        content: "·";
        color: rgba(var(--edc,199,199,199),1);
        padding: 0 4px;
    }
    span {
        font-size: 12px;
        font-weight: 400;
        color: rgba(var(--edc,199,199,199),1);
    }
`;

const ClearDiv = styled.div`
    clear: both;
    padding-top: 16px;
    span {
        font-size: 12px;
        font-weight: 400;
        color: rgba(var(--edc,199,199,199),1);
    }
`