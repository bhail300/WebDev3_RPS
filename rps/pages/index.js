import styles from '../styles/Home.module.css'
import {ButtonCont, SelectionButton} from './styles'
import Form from './components/forms/forms'
import { Wrapper } from './styles'
import { BackgroundImage } from './styles'
import AppText from './components/text/text'
import React, { useState } from 'react';

export default function Home()  {
  var [player, setPlayer] = useState("none");
  var [cpu, setCpu] = useState("none");
  var [streak, setStreak] = useState(0);
  
  const cpuChoice = () =>{
    var choices = ["rock", 'paper', 'scissors']
    var numchoice = Math.floor(Math.random() * 3)
    return(choices[numchoice])
  }

  const handleChoice = (choice) =>{
    setPlayer(choice)
    setCpu(cpuChoice())
    var score = 0

    if(player === "rock" && cpu === "scissors"){
      setStreak(streak += 1)
    } else if(player === "scissors" && cpu === "paper"){
      setStreak(streak += 1)
    } else if(player === "paper" && cpu === "rock"){
      setStreak(streak += 1)
    } else if(player === "rock" && cpu === "paper"){
      setStreak(0)
    } else if(player === "paper" && cpu === "scissors"){
      setStreak(0)
    } else if(player === "scissors" && cpu === "rock"){
      setStreak(0)
    }
  }
  
  return (
    <div>
      <Form></Form>
      <ButtonCont>
      <SelectionButton>Rock</SelectionButton>
      <SelectionButton>Paper</SelectionButton>
      <SelectionButton>Scissors</SelectionButton>
      </ButtonCont>

      <AppText></AppText>
       
       <div>Win Streak: {streak}</div>
       <div>The Player Chose: {player}</div>
       <div>The Cpu Chose: {cpu}</div>
       <button onClick={()=>handleChoice("rock")}>Rock</button>
       <button onClick={()=>handleChoice("paper")}>Paper</button>
       <button onClick={()=>handleChoice("scissors")}>Scissors</button>

    </div>
  )
}
