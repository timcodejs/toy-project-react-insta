import React, { useCallback, useContext } from 'react';
import { NaviContext } from '../reducer/navicontext';
import styled from 'styled-components';

const FindNavi = () => {
    const { navi, dispatch } = useContext(NaviContext);

    const onClickEvent = useCallback(() => {
        dispatch({ type: "FIND" });
    }, [dispatch]);

    return(
        <>
            {navi === "FIND" 
            ? <InstaButton><img src="images/insta_find.png"  alt="find" /></InstaButton>
            : <InstaButton onClick={onClickEvent}><img src="images/insta_find_empty.png"  alt="find" /></InstaButton>
            }
        </>
    )
}

export default FindNavi;

const InstaButton = styled.button`
    margin: 2px;
    padding: 2px 6px 3px 6px;
    img {
        width: 30px;
        height: 30px;
    }
`;
