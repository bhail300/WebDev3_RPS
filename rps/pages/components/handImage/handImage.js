import React from 'react';
import styled from 'styled-components';

const HandContainer = styled.div`
    
`
const P1HandImg = styled.img`
height: 50%;
width: 50%;
`
const P2HandImg = styled.img`
height: 50%;
width: 50%;
transform: scaleX(-1);
`

export default function HandImage() {
    return (
        <HandContainer>

            <P1HandImg src={'paperHand.png'} alt="hand gesture" />
            <P2HandImg src={'rockHand.png'} alt="hand gesture" />

        </HandContainer>
    );
}