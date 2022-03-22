import React from 'react';
import Boardicons from './board_icons';
import styled from 'styled-components';

const Boardcontent = () => {
    return(
        <>
            <div><ContentImg src="/images/content.jpeg" alt="" /></div>
            <Boardicons />
        </>
    )
}

export default Boardcontent;

const ContentImg = styled.img`
    width: 100%;;
`;
