import React from 'react';
import styled from 'styled-components';
import { Wrapper } from '../../styles';
// import paperH from '../../../images/paperHand.png';

const HandContainer = styled.div`

`
const HandImg = styled.img`

`

export default function HandImage() {
    return (
        <div>
            <HandImg src={'https://cdn.discordapp.com/attachments/1031694947902038100/1037384145237717002/paperHand.png'} alt="hand gesture"/>
        </div>
    );
}