import styles from '../styles/Home.module.css'
import Form from './components/forms/forms'
import { ButtonCont, SelectionButton, Wrapper,BackgroundImage, IconCont } from './styles'
import AppText from './components/text/text'
import React, { useState } from 'react';
import BackIcon from './components/icons/backIcon'
import LeaderBoardIcon from './components/icons/leaderboardIcon'
import Leaderboard from './components/leaderboard/leaderboard'
import { GameContentCont, Wrapper2, Wrapper3, Wrapper4, Wrapper5} from './styles'
import styled from 'styled-components'
import Image from 'next/image'
import rock from '../public/rockHand.png'
import opprock from '../public/rightRock.png'
import paper from '../public/paperHand.png'
import opppaper from '../public/rightPaper.png'
import scissors from '../public/scissorsHand.png'
import oppscissors from '../public/rightScissor.png'
import opponent from '../public/opponent.gif'
import player from '../public/player.gif'


const Wrapper0 = styled(Wrapper)`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
`
const choices = [rock, paper, scissors]
const oppchoices = [opprock, opppaper, oppscissors] 
export default function Game(){

        const [playerChoice, setPlayerChoice] = useState(player);
        const [compChoice, setCompChoice] = useState(opponent);
        const [playerPoints, setPlayerPoints] = useState(0);
        const [compPoints, setCompPoints] = useState(0);
        const [gameResult, setGameResult] = useState('');

        const createCompChoice = () =>{
            const randomChoice = oppchoices[Math.floor(Math.random() * oppchoices.length)];
            setCompChoice(randomChoice);
          }

        const handleClick = (value) => {
            setPlayerChoice(value);
            createCompChoice();
        }
        const newGame = () =>{
          setCompPoints(0)
          setPlayerPoints(0)
          setPlayerChoice(player)
          setCompChoice(opponent);
        }

          const PlayGame = () =>{
            if ((compChoice === opppaper && playerChoice === rock) || (compChoice === oppscissors && playerChoice === paper) || (compChoice === opprock && playerChoice === scissors)){
               setGameResult( 'You lose this round.');
               setCompPoints(compPoints + 1)
             }else if((compChoice === oppscissors && playerChoice === rock) || (compChoice === opprock && playerChoice === paper) || (compChoice === opppaper && playerChoice === scissors)){
               setGameResult( 'You win this round.');
               setPlayerPoints(playerPoints + 1)
             }else if((compChoice === oppscissors && playerChoice === scissors) || (compChoice === opprock && playerChoice === rock) || (compChoice === opppaper && playerChoice === paper) ){
               setGameResult( 'This round is a draw.');
             }else{
              setGameResult('');
             }
       
             if(playerPoints === 5){
               setGameResult('Player wins the game!')
               newGame();
             }
             
             if(compPoints === 5){
               setGameResult('Computer wins the game.')
               newGame();
       
             }
            }

    return (
        <div>
            <IconCont>
                <BackIcon className="Icon"/>
                <LeaderBoardIcon className="Icon"/>
            </IconCont>
            <Wrapper0>
            <GameContentCont>
                <Wrapper2>
                    <AppText text={gameResult} style='speech'></AppText>
                   
                </Wrapper2>
                
                <Wrapper3>
                    <Wrapper5>
                        <Image src={playerChoice} width={150} height={100}></Image>
                        <AppText text='You' style='speech'/>
                        <AppText text={`Wins: ${playerPoints}`} style='speech'/>
                        
                    </Wrapper5>
                    <Wrapper5>
                        <Image src={opponent} width={150} height={100}></Image>
                        <AppText text='Opponent' style='speech'/>
                        <AppText text={`Wins: ${compPoints}`} style='speech'/>
                    </Wrapper5>
                </Wrapper3>
                <Wrapper4>
                    <SelectionButton onClick={() => handleClick(rock)}>Rock</SelectionButton>
                    <SelectionButton onClick={() => handleClick(paper)}>Paper</SelectionButton>
                    <SelectionButton onClick={() => handleClick(scissors)}>Scissors</SelectionButton>          
                </Wrapper4>
                <SelectionButton onClick={PlayGame} > Play </SelectionButton>
            </GameContentCont>
        </Wrapper0>
        </div>
    )
}