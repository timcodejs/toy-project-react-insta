import React, { useCallback, useContext } from 'react';
import { NaviContext } from '../reducer/navicontext';
import styled from 'styled-components';

const HomeNavi = () => {
    const { navi, dispatch } = useContext(NaviContext);

    const onClickEvent = useCallback(() => {
        dispatch({ type: "HOME" });
    }, [dispatch]);

    return(
        <>
            {navi === "HOME" 
            ? <InstaButton><img src="images/insta_home.png"  alt="home" /></InstaButton>
            : <InstaButton onClick={onClickEvent}><img src="images/insta_home_empty.png"  alt="home" /></InstaButton>
            }
        </>
    )
}

export default HomeNavi;

const InstaButton = styled.button`
    margin: 2px;
    padding: 2px 6px 3px 6px;
    img {
        width: 30px;
        height: 30px;
    }
`;
