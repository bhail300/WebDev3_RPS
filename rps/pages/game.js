import { SelectionButton, Wrapper, IconCont } from './styles'
import AppText from './components/text/text'
import React, { useState, useEffect } from 'react';
import BackIcon from './components/icons/backIcon'
import LeaderBoardIcon from './components/icons/leaderboardIcon'
import { GameContentCont, Wrapper3, Wrapper4, Wrapper5} from './styles'
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
import SpeechBubble from '../pages/components/speech-bubble/speech-bubble'
import { useRouter } from 'next/router'


const Wrapper0 = styled(Wrapper)`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
`

export default function Game(){

        const choices = [rock, paper, scissors]
        const oppchoices = [opprock, opppaper, oppscissors] 

        const [playerChoice, setPlayerChoice] = useState(player);
        const [compChoice, setCompChoice] = useState(opponent);
        const [playerPoints, setPlayerPoints] = useState(0);
        const [compPoints, setCompPoints] = useState(0);
        const [gameResult, setGameResult] = useState('Choose Rock, Paper or Scissors and then click Play');
        const [bubbletext, setBubbleText] = useState('Choose Rock, Paper or Scissors and then click Play');
        const [timer, setTimer] = useState(3);
        const [runTimer, setRunTimer] = useState(false);

        const changeBubbleText = (value) => {
          setBubbleText(value);
        }
      
        const generateCompChoice = () =>{
          const randomNumber = oppchoices[Math.floor(Math.random() * oppchoices.length)];
          setCompChoice(randomNumber);
        }

        const handleClick = (value) => {
            setPlayerChoice(value)
        }

        useEffect(() =>{
          if(runTimer && timer > 0){
            setTimeout(() => {
              setTimer(timer - 1)
            }, 1000)
          } else if (runTimer && timer < 1){
            setRunTimer(false)
            setTimer(3);
            play();
          }
        }, [runTimer, timer])

        const newGame = () =>{
          setCompPoints(0)
          setPlayerPoints(0)
          setPlayerChoice(player)
          setCompChoice(opponent);
        
          setTimeout(() => {
            setGameResult('Choose Rock, Paper or Scissors and then click Play')
          }, 1000);
          
        }

        const start = () => {
          setGameResult('')
          setRunTimer(true);
          generateCompChoice();
        }

        const play = () =>{
          if (compChoice == opppaper && playerChoice == rock){
            setGameResult( 'You lose this round.')
            changeBubbleText(gameResult)
            setCompPoints(compPoints + 1);
          }else if (compChoice == oppscissors && playerChoice == paper){
            setGameResult( 'You lose this round.')
            changeBubbleText(gameResult)
            setCompPoints(compPoints + 1 );
          }else if (compChoice == opprock && playerChoice == scissors){
            setGameResult( 'You lose this round.')
            changeBubbleText(gameResult)
            setCompPoints(compPoints + 1 );
          }else if (compChoice == oppscissors && playerChoice == rock){
            setGameResult( 'You win this round.')
            changeBubbleText(gameResult)
            setPlayerPoints(playerPoints + 1 );
          }else if (compChoice == opprock && playerChoice == paper){
            setGameResult( 'You win this round.')
            changeBubbleText(gameResult)
            setPlayerPoints(playerPoints + 1 );
          }else if (compChoice == opppaper && playerChoice == scissors){
            setGameResult( 'You win this round.')
            changeBubbleText(gameResult)
            setPlayerPoints(playerPoints + 1 );
          }else if (compChoice == opppaper && playerChoice == paper){
            setGameResult( 'This round is a draw.')
            changeBubbleText(gameResult)
          }else if (compChoice == opprock && playerChoice == rock){
            setGameResult( 'This round is a draw.')
            changeBubbleText(gameResult)
          }else if (compChoice == oppscissors && playerChoice == scissors){
            setGameResult( 'This round is a draw.')
            changeBubbleText(gameResult)
          }
        }

        if(playerPoints === 5){
          setTimeout(() => {
            setGameResult('Player wins the game!')
            newGame();
          }, 1500)
        }
        
        if(compPoints === 5){
          setTimeout(() => {
            setGameResult('Computer wins the game!')
            newGame();
          }, 1500)
        }

    const router = useRouter()
    return (
        <div>
            <IconCont>
                <BackIcon className="Icon" onNav={() => router.push('/')}/>
                <LeaderBoardIcon className="Icon" onNav={() => router.push('/leaderboard')}/>
            </IconCont>
            <Wrapper0>
            <GameContentCont>
                  { runTimer == true && <SpeechBubble text='loading...'/>}
                  { runTimer == false && <SpeechBubble text={gameResult}/>}
                <Wrapper3>
                    <Wrapper5>
                      <Image src={playerChoice} width={150} height={100}/>
                        <AppText text='You' style='speech'/>
                        <AppText text={`Wins: ${playerPoints}`} style='speech'/>      
                    </Wrapper5>
                    <Wrapper5>
                        { runTimer ==true && <Image src={opponent} width={150} height={100}/>}
                        { runTimer == false && <Image src={compChoice} width={150} height={100}/>}
                        <AppText text='Opponent' style='speech'/>
                        <AppText text={`Wins: ${compPoints}`} style='speech'/>
                    </Wrapper5>
                </Wrapper3>
                <Wrapper4>
                    <SelectionButton onClick={() => handleClick(rock)}>Rock</SelectionButton>
                    <SelectionButton onClick={() => handleClick(paper)}>Paper</SelectionButton>
                    <SelectionButton onClick={() => handleClick(scissors)}>Scissors</SelectionButton>          
                </Wrapper4>
                <SelectionButton onClick={start} > Play </SelectionButton>
            </GameContentCont>
        </Wrapper0>
        </div>
    )
}