import React from 'react';
import styled from 'styled-components';

const Search = () => {
    return(
        <MarginDiv>
            <div><svg aria-label="검색" class="_8-yf5 " color="#8e8e8e" fill="#8e8e8e" height="16" role="img" viewBox="0 0 24 24" width="16"><path d="M19 10.5A8.5 8.5 0 1110.5 2a8.5 8.5 0 018.5 8.5z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path><line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="16.511" x2="22" y1="16.511" y2="22"></line></svg></div>
            <input type="text" placeholder="검색" />
        </MarginDiv>
    )
}

export default Search;

const MarginDiv = styled.div`
    margin-left: 140px;
    input {
        width: 220px;
        height: 34px;
        border: 0;
        border-radius: 6px;
        font-size: 16px;
        padding-left: 40px;
        background: rgba(var(--bb2,239,239,239),1);
    }
    div {
        position: absolute;
        transform: translate( 100%, 45% );
    }
`;
