import React from 'react';
import styled from 'styled-components';

const Container = () => {
    return(
        <InstaContainer>
            "Container"
        </InstaContainer>
    )
}

export default Container;

const InstaContainer = styled.div`
    width: 614px;
    margin-right: 28px;
    background-color: rgba(var(--b3f,250,250,250),1);
`;