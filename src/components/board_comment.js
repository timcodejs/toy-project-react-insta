import React from 'react';
import Writecomment from './write_comment';
import styled from 'styled-components';

const Boardcomment = () => {
    return(
        <>
            <CommentWrap>
                <LikeCount>좋아요 1,000개</LikeCount>
                <Comment><UserName>UserName</UserName> <CommentSection>안녕하세요.</CommentSection></Comment>
                <CommentCount>댓글 100개 모두 보기</CommentCount>
                <TimeCount>20분 전</TimeCount>
            </CommentWrap>
            <Writecomment />
        </>
    )
}

export default Boardcomment;

const CommentWrap = styled.div`
    padding: 0 16px;
`;

const LikeCount = styled.div`
    font-size: 14px;
    font-weight: 600;
    color: rgba(var(--i1d,38,38,38),1);
    margin-bottom: 4px;
`;

const CommentCount = styled.div`
    font-size: 14px;
    font-weight: 400;
    color: rgba(var(--f52,142,142,142),1);
    margin-bottom: 4px;
`;
const TimeCount = styled.div`
    font-size: 10px;
    font-weight: 400;
    color: rgba(var(--f52,142,142,142),1);
    margin-bottom: 16px;
`;

const Comment = styled.div`
    margin-bottom: 4px;
`;

const UserName = styled.span`
    font-size: 14px;
    font-weight: 600;
`;

const CommentSection = styled.span`
    font-size: 14px;
    font-weight: 400;
`;