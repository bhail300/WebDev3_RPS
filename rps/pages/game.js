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
import paper from '../public/paperHand.png'
import scissors from '../public/scissorsHand.png'
import opponent from '../public/opponent.gif'
import question from '../public/questionmark.png'

const Wrapper0 = styled(Wrapper)`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
`
const choices = [rock, paper, scissors]

export default function Game(){

        const [playerChoice, setPlayerChoice] = useState(question);
        const [compChoice, setCompChoice] = useState(opponent);

        const createCompChoice = () =>{
            const randomChoice = choices[Math.floor(Math.random() * choices.length)];
            setCompChoice(randomChoice);
          }
        
          const handleClick = (value) => {
            setPlayerChoice(value)
            createCompChoice()
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
                    <AppText text='header' style='title'></AppText>
                </Wrapper2>
                <Wrapper3>
                    <Wrapper5>
                        <Image src={playerChoice} width={150}></Image>
                        <AppText text='You' style='speech'/>
                    </Wrapper5>
                    <Wrapper5>
                        <Image src={opponent} width={150}></Image>
                        <AppText text='Opponent' style='speech'/>
                    </Wrapper5>
                </Wrapper3>
                <Wrapper4>
                    <SelectionButton onClick={() => handleClick(rock)}>Rock</SelectionButton>
                    <SelectionButton onClick={() => handleClick(paper)}>Paper</SelectionButton>
                    <SelectionButton onClick={() => handleClick(scissors)}>Scissors</SelectionButton>
                </Wrapper4>
            </GameContentCont>
        </Wrapper0>
        </div>
    )
}