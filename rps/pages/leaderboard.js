import styled from 'styled-components';
import { Wrapper } from './styles';
import AppText from './components/text/text';
import { useRouter } from 'next/router'
import { IconCont } from './styles';
import BackIcon from './components/icons/backIcon';

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
`

export default function Leaderboard({
    rank="1",
    name="dummy",
    score=0,
}){
    const router = useRouter()
    return (
        <>
        <IconCont>
            <BackIcon className="Icon" onNav={() => router.push('/')}/>
        </IconCont>
        <PageWrapper>
 
            <AppText text='Leaderboard'></AppText>
            <LeadWrapper>
                <AppText text={`${1}. ${"Seth"} — ${30}`} style="leaderboard"></AppText>
                <AppText text={`${2}. ${"Desmand"} — ${14}`} style="leaderboard"></AppText>
                <AppText text={`${3}. ${"Jason"} — ${6}`} style="leaderboard"></AppText>
            </LeadWrapper>
        </PageWrapper>
        </>
    )
}