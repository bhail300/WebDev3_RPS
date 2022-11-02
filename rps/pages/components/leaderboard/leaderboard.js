import styled from 'styled-components';
import { Wrapper } from '../../styles';
import AppText from '../text/text';

const LeadWrapper = styled.div`
display:flex;
flex-direction: row;
`

export default function Leaderboard({
    rank="1",
    name="dummy",
    score=0,
}){
    
    return (
        <LeadWrapper>
            <AppText text={`${rank}. ${name} — ${score}`} style="leaderboard"></AppText>
        </LeadWrapper>
    )
}