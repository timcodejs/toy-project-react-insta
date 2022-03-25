import React, { useCallback, useContext } from 'react';
import { NaviContext } from '../reducer/navicontext';
import styled from 'styled-components';

const SendNavi = () => {
    const { navi, dispatch } = useContext(NaviContext);

    const onClickEvent = useCallback(() => {
        dispatch({ type: "SEND" });
    }, [dispatch]);

    return(
        <>
            {navi === "SEND" 
            ? <InstaButton><img src="images/insta_send.png"  alt="send" /></InstaButton>
            : <InstaButton onClick={onClickEvent}><img src="images/insta_send_empty.png"  alt="send" /></InstaButton>
            }
            
        </>
    )
}

export default SendNavi;

const InstaButton = styled.button`
    margin: 2px;
    padding: 2px 6px 3px 6px;
    img {
        width: 30px;
        height: 30px;
    }
`;
