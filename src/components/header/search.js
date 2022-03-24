import React, { useCallback, useState } from 'react';
import styled from 'styled-components';

const Search = () => {
    const [search, setSerch] = useState('none');

    const onSearchPopupOpen = useCallback(() => {
        setSerch('block');
    }, []);

    const onSearchPopupClose = useCallback(() => {
        setSerch('none');
    }, []);

    return(
        <MarginDiv>
            <div><svg aria-label="검색" className="_8-yf5 " color="#8e8e8e" fill="#8e8e8e" height="16" role="img" viewBox="0 0 24 24" width="16"><path d="M19 10.5A8.5 8.5 0 1110.5 2a8.5 8.5 0 018.5 8.5z" fill="none" stroke="currentColor"></path><line fill="none" stroke="currentColor" x1="16.511" x2="22" y1="16.511" y2="22"></line></svg></div> 
            <input type="text" placeholder="검색" onClick={onSearchPopupOpen} /> 
            <SearchWrap style={{display: search}} onClick={onSearchPopupClose}>
            <SearchPopup>
                <div></div>
                <div>
                    <div>최근 검색 항목<TextColorBlue>모두 지우기</TextColorBlue></div>
                    <ul>
                        <li>최근 검색 내역 없음.</li>
                    </ul>
                </div>
            </SearchPopup>
        </SearchWrap>
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
    input:focus {
        outline: none;
    }
    & > div:nth-child(1) {
        position: absolute;
        transform: translate( 100%, 45% );
    }
`;

const SearchWrap = styled.div`
    position: absolute;
    width: 100vw;
    height: 100vh;
    left: 0;
    top: 0;
`;

const SearchPopup = styled.div`
    position: absolute;
    top: 60px;
    left: 50%;
    transform: translateX(-55%);
    background-color: white;
    border-radius: 6px;
    box-shadow: 2px 2px 8px #d9d9d9;
    z-index: 3;
    & > div:nth-child(1) {
        position: absolute;
        background: rgba(var(--d87,255,255,255),1);
        border: 1px solid rgba(var(--f23,255,255,255),1);
        box-shadow: -4px -4px 5px rgba(var(--jb7,0,0,0),.0775);
        width: 13px;
        height: 13px;
        transform: rotate(45deg);
        top: -5px;
        right: 48%;
    }
    & > div:nth-child(2) {
        overflow-y: scroll;
        width: 375px;
        height: 350px;
        padding-top: 12px;
        ::-webkit-scrollbar { display: none; }
    }
    & > div:nth-child(2) > div {
        display: flex;
        justify-content: space-between;
        margin: 4px 16px 0px 16px;
        font-size: 16px;
        font-weight: 600;
        line-height: 24px;
        color: rgba(var(--i1d,38,38,38),1);
    }
    & > div:nth-child(2) > ul {
        height: 300px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;


const TextColorBlue = styled.span`
    display: none;
    color: rgba(var(--d69,0,149,246),1);
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
`;