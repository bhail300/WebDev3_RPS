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

function HandImage(props) {

    const playerSelection = props.playerSel;
    const cpuSelction = props.cpuSel;
    console.log(props);

    const paperImg = ('paperHand.png');
    const rockImg = ('rockHand.png');
    const scissorsImg = ('scissorsHand.png');

    var playerChoice = '';
    var cpuChoice = '';

    
        if(playerSelection === "rock"){
            playerChoice = rockImg;
          } else if(playerSelection === "paper"){
            playerChoice = paperImg;
          } else if(playerSelection === "scissors"){
            playerChoice = scissorsImg;
          } 

          if(cpuSelction === "rock"){
            cpuChoice = rockImg;
          } else if(cpuSelction === "paper"){
            cpuChoice = paperImg;
          } else if(cpuSelction === "scissors"){
            cpuChoice = scissorsImg;
          } 

          console.log(playerChoice);
          console.log(cpuChoice);

    return (
        <HandContainer>

            <P1HandImg src={playerChoice} alt="player hand gesture" />
            <P2HandImg src={cpuChoice} alt="cpu hand gesture" />

        </HandContainer>
    );

}

export default HandImage;
