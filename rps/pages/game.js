import styles from '../styles/Home.module.css'
import Form from './components/forms/forms'
import { ButtonCont, SelectionButton, Wrapper,BackgroundImage, IconCont } from './styles'
import AppText from './components/text/text'
import React, { useState, useEffect } from 'react';
import BackIcon from './components/icons/backIcon'
import LeaderBoardIcon from './components/icons/leaderboardIcon'
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
import SpeechBubble from '../pages/components/speech-bubble/speech-bubble'
import { useRouter } from 'next/router'


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
        const [bubbletext, setBubbleText] = useState('Choose Rock, Paper or Scissors and then click Play');

        const [timer, setTimer] = useState(3);
        const [runTimer, setRunTimer] = useState(false);

        useEffect(() =>{
          if(runTimer && timer > 0){
            setTimeout(() => {
              setTimer(timer - 1)
            }, 1000)
          } else if (runTimer && timer < 1){
            setRunTimer(false)
            setTimer(3);
            //once timer hits 0 play function is called
            PlayGame();
          }
        }, [runTimer, timer])

        const start = () =>{
          setRunTimer(true);
          createCompChoice();
        };

        const changeBubbleText = (value) => {
            setBubbleText(value);
        }
        
        const createCompChoice = () =>{
            const randomChoice = oppchoices[Math.floor(Math.random() * oppchoices.length)];
            setCompChoice(randomChoice);
          }

        const handleClick = (value) => {
            setPlayerChoice(value)
            
        }

        const newGame = () =>{
          setCompPoints(0)
          setPlayerPoints(0)
          setPlayerChoice(player)
          setCompChoice(opponent);
        
          setTimeout(() => {
            setBubbleText('Choose Rock, Paper or Scissors and then click Play')
          }, 1000);
        }
        
          const PlayGame = () =>{
            createCompChoice();
            if ((compChoice == opppaper && playerChoice == rock) || (compChoice == oppscissors && playerChoice == paper) || (compChoice == opprock && playerChoice == scissors)){
               setGameResult( 'You lose this round.')
               changeBubbleText(gameResult)
               setCompPoints(compPoints + 1);
             }else if((compChoice == oppscissors && playerChoice == rock) || (compChoice == opprock && playerChoice == paper) || (compChoice == opppaper && playerChoice == scissors)){
               setGameResult( 'You win this round.')
               changeBubbleText(gameResult)
               setPlayerPoints(playerPoints + 1);
             }else{
               setGameResult('This round is a draw.')
               changeBubbleText(gameResult);
             }
       

            }

            if(playerPoints === 5){
              setGameResult('Player wins the game!')
              newGame();
            }
            
            if(compPoints === 5){
              setGameResult('Computer wins the game.')
              newGame();
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
                  <SpeechBubble text={bubbletext}/>      
               
                <Wrapper3>
                    <Wrapper5>
                        <Image src={playerChoice} width={150} height={100}></Image>
                        <AppText text='You' style='speech'/>
                        <AppText text={`Wins: ${playerPoints}`} style='speech'/>
                        
                    </Wrapper5>
                      <Wrapper5>
                    <div className={styles.midCol}>
                        {/*timer is only visible when running*/}
                        { runTimer && <p className='timer'>{timer}</p>}                     
                        </div>
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