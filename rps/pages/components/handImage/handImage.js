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

 function HandImage() {

    const paper = ('paperHand.png');
    const rock = ('rockHand.png');
    const scissors = ('scissorsHand.png');

    return (
        <HandContainer>
            
            <P1HandImg src={paper} alt="hand gesture" />
            <P2HandImg src={scissors} alt="hand gesture" />

        </HandContainer>
    );
    
}


export default HandImage;