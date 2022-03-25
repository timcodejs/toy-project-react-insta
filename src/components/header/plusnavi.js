import React, { useCallback, useContext } from 'react';
import { NaviContext } from '../reducer/navicontext';
import styled from 'styled-components';

const PlusNavi = () => {
    const { navi, dispatch } = useContext(NaviContext);

    const onClickEvent = useCallback(() => {
        dispatch({ type: "PLUS" });
    }, [dispatch]);

    return(
        <>
            {navi === "PLUS" 
            ? <InstaButton><img src="images/insta_plus.png"  alt="plus" /></InstaButton>
            : <InstaButton onClick={onClickEvent}><img src="images/insta_plus_empty.png"  alt="plus" /></InstaButton>
            }
        </>
    )
}

export default PlusNavi;

const InstaButton = styled.button`
    margin: 2px;
    padding: 2px 6px 3px 6px;
    img {
        width: 30px;
        height: 30px;
    }
`;
