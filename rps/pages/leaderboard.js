
import styled from 'styled-components';
import { Wrapper } from './styles';
import AppText from './components/text/text';
import { useRouter } from 'next/router'
import { IconCont } from './styles';
import BackIcon from './components/icons/backIcon';
import { useState, useEffect } from "react"

const PageWrapper = styled.div`
display:flex;
flex-direction: row;
justify-content: center;
align-items: center;
flex-direction: column;
`

const LeadWrapper = styled.div`
display:flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 5%;
border-radius: 7%;
background-color: #FFFDF4;
flex-direction: column;



export default function Leaderboard({})
{
    const router = useRouter()
    const [scores, setScores] = useState([])
    
    useEffect(()=>{
        // get current notes from backend
        fetch('http://localhost:3001/load-scores')
        .then(async(res)=> {
          const data = await res.json()
          setScores(data)
        });
        return () => {
          };
          }, []);
    

    console.log(scores)

    return (
        <>
        <IconCont>
            <BackIcon className="Icon" onNav={() => router.push('/')}/>
        </IconCont>
        <PageWrapper>
 
            <AppText text='Leaderboard'></AppText>

            <LeadWrapper>

            {scores?.map((s,i)=> 
            
            <AppText text={`${scores[i].id}. ${scores[i].name} — ${scores[i].wins}`} style="leaderboard"></AppText>
            )}
            </LeadWrapper>
        </PageWrapper>
        </>
    )
}

