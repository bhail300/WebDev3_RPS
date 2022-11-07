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
import Leaderboard from './leaderboard'
import axios from "axios"
import { UserWrapper } from './styles'
import { useRouter } from 'next/router'



// export async func  tion getServerSideProps() {
//   // Fetch data from external API
//   const res = await fetch(`http://localhost:3001/load-scores`)
//   const data = await res.json()

//   // Pass data to the page via props
//   return { props: { data } }
// }

export default function Home({data})  {
  const router = useRouter()
  return (
    <div>

    
      <IconCont>
     
      <LeaderBoardIcon className="Icon" onNav={() => router.push('/leaderboard')}/>
      </IconCont>
      
      <UserWrapper>
        <AppText text='ROCK PAPER SCISSORS'></AppText>
        <Form></Form>
      </UserWrapper>
      
  

      

    
       
     
    </div>
  )
}
