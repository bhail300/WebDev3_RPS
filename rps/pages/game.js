import styles from '../styles/Home.module.css'
import {ButtonCont, SelectionButton} from './styles'
import Form from './components/forms/forms'
import { Wrapper } from './styles'
import { BackgroundImage } from './styles'
import AppText from './components/text/text'
import React, { useState } from 'react';
import { IconCont } from './styles'
import BackIcon from './components/icons/backIcon'
import LeaderBoardIcon from './components/icons/leaderboardIcon'
import Leaderboard from './components/leaderboard/leaderboard'
import { GameContentCont, Wrapper2, Wrapper3, Wrapper4, Wrapper5} from './styles'
import styled from 'styled-components'
import Image from 'next/image';

const Wrapper0 = styled(Wrapper)`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
`

export default function Game(){

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
                        <img src='/rockHand.png' width='25%'></img>
                        <AppText text='You' style='speech'/>
                    </Wrapper5>
                    <Wrapper5>
                        <img src='/opponent.gif' width='25%'></img>
                        <AppText text='Opponent' style='speech'/>
                    </Wrapper5>
                </Wrapper3>
                <Wrapper4>
                    <SelectionButton>Rock</SelectionButton>
                    <SelectionButton>Paper</SelectionButton>
                    <SelectionButton>Scissors</SelectionButton>
                </Wrapper4>
            </GameContentCont>
        </Wrapper0>
        </div>
    )
}