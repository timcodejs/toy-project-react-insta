import React from 'react';
import styled from 'styled-components';

const Navi = () => {
    return(
        <div>
            <InstaButton><InstaImg src="images/insta_home.png"  alt="home" /></InstaButton>
            <InstaButton><InstaImg src="images/insta_send.png"  alt="send" /></InstaButton>
            <InstaButton><InstaImg src="images/insta_plus.png"  alt="plus" /></InstaButton>
            <InstaButton><InstaImg src="images/insta_find.png"  alt="find" /></InstaButton>
            <InstaButton><InstaImg src="images/insta_heart.png"  alt="heart" /></InstaButton>                    
            <InstaButton><InstaProfile src="images/insta_profile.png"  alt="profile" /></InstaButton>
        </div>
    )
}

export default Navi;

const InstaButton = styled.button`
    margin: 2px;
    padding: 2px 6px 3px 6px;
`;

const InstaImg = styled.img`
    width: 30px;
    height: 30px;
`;

const InstaProfile = styled.img`
    width: 25px;
    height: 25px;
`;