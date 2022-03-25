import React, { useCallback, useContext, useState } from 'react';
import { NaviContext } from '../reducer/navicontext';
import styled from 'styled-components';

const HeartNavi = () => {
    const { navi, dispatch } = useContext(NaviContext);
    const [opacity, setOpacity] = useState('none');

    const onClickEvent = useCallback(() => {
        setOpacity('block');
        dispatch({ type: "HEART" });
    }, [dispatch]);

    const onHeartClose =useCallback(() => {
        setOpacity('none');
        dispatch({ type: "HOME" });
    }, [dispatch]);

    return(
        <>
            {navi === "HEART" 
            ? <InstaButton><img src="images/insta_heart.png"  alt="heart" /></InstaButton>
            : <InstaButton onClick={onClickEvent}><img src="images/insta_heart_empty.png"  alt="heart" /></InstaButton>
            }
            <PopupWrap style={{display: opacity}} onClick={onHeartClose}>
                <PopupProfile>
                    <div></div>
                    <div>
                        <div>
                            <h3>이번 달</h3>
                            <ul>
                                <li>This Month</li>
                                <li>This Month</li>
                                <li>This Month</li>
                            </ul>
                        </div>
                        <div>
                            <h3>이전 활동</h3>
                            <ul>
                                <li>Prev Active</li>
                                <li>Prev Active</li>
                                <li>Prev Active</li>
                            </ul>
                        </div>
                    </div>
                </PopupProfile>
            </PopupWrap>
        </>
    )
}

export default HeartNavi;

const InstaButton = styled.button`
    margin: 2px;
    padding: 2px 6px 3px 6px;
    img {
        width: 30px;
        height: 30px;
    }
`;

const PopupWrap = styled.div`
    position: absolute;
    width: 100vw;
    height: 100vh;
    left: 0;
    top: 0;
`;

const PopupProfile = styled.div`
    position: absolute;
    top: 50px;
    left: 50%;
    transform: translate(-5.5%, 2%);
    background: rgba(var(--d87,255,255,255),1);
    border-radius: 6px;
    box-shadow: 2px 2px 8px #d9d9d9;
    font-size: 14px;
    & > div:nth-child(1) {
        position: absolute;
        background: rgba(var(--d87,255,255,255),1);
        border: 1px solid rgba(var(--f23,255,255,255),1);
        box-shadow: -4px -4px 5px rgba(var(--jb7,0,0,0),.0775);
        width: 13px;
        height: 13px;
        transform: rotate(45deg);
        top: -5px;
        right: 60px;
    }
    & > div:nth-child(2) {
        max-height: 362px;
        min-height: 100px;
        overflow-y: auto;
        width: 500px;
    }
    & > div:nth-child(2) > div:nth-child(1) {
        border-bottom: 1px solid #d9d9d9;
    }
    h3 {
        color: rgba(var(--i1d,38,38,38),1);
        font-weight: 600;
        font-size: 14px;
        line-height: 18px;
        padding: 4px;
        margin: 8px 0 0 8px;
    }
    ul li {
        padding: 12px 16px;
        width: 453px;
        height: 54px;
    }
`;