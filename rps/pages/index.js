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
import axios from "axios"



// export async function getServerSideProps() {
//   // Fetch data from external API
//   const res = await fetch(`http://localhost:3001/load-scores`)
//   const data = await res.json()

//   // Pass data to the page via props
//   return { props: { data } }
// }

export default function Home({data})  {

  var [player, setPlayer] = useState("none");
  var [cpu, setCpu] = useState("none");
  var [streak, setStreak] = useState(0);
  
  const cpuChoice = () =>{
    var choices = ["rock", 'paper', 'scissors']
    var numchoice = Math.floor(Math.random() * 3)
    return(choices[numchoice])
  }

  const GetServerData = async ()=>{
    const result = await axios.get("data.json")
    console.log(result)
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

console.log(data)
  
  return (
    <div>

      <button onClick={()=>GetServerData()}>Log Backend</button>

      <IconCont>
      <BackIcon className="Icon"/>
      <LeaderBoardIcon className="Icon"/>
      </IconCont>

      <Form></Form>
      <ButtonCont>
      <SelectionButton>Rock</SelectionButton>
      <SelectionButton>Paper</SelectionButton>
      <SelectionButton>Scissors</SelectionButton>
      </ButtonCont>

      <AppText></AppText>

      <Leaderboard></Leaderboard>
       
       <div>Win Streak: {streak}</div>
       <div>The Player Chose: {player}</div>
       <div>The Cpu Chose: {cpu}</div>
       <button onClick={()=>handleChoice("rock")}>Rock</button>
       <button onClick={()=>handleChoice("paper")}>Paper</button>
       <button onClick={()=>handleChoice("scissors")}>Scissors</button>

    </div>
  )
}
