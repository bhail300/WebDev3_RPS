import React from 'react';
import { IconCont, LeaderCont, Wrapper5, LeaderBodyTextCont } from './styles';
import BackIcon from './components/icons/backIcon';
import AppText from './components/text/text';

export default function LeaderBoard (){
    return (
        <div>
            <IconCont>
                <BackIcon className="Icon"/>
            </IconCont>
            <Wrapper5>
            <LeaderCont>
                <AppText text='Leaderboard' style='title'/>
                <LeaderBodyTextCont>
                    <AppText text='1. seanLam - 12248' style='body'/> 
                    <AppText text='2. chris - 300' style='body'/> 
                    <AppText text='3. cool_guy_DK - 289' style='body'/> 
                    <AppText text='4. light yagami - 288' style='body'/> 
                    <AppText text='5. that.dawg - 230' style='body'/>
                    <AppText text='6. jason - 10' style='body'/>   
                </LeaderBodyTextCont>
            </LeaderCont>
            </Wrapper5>           
        </div>
    )
}
