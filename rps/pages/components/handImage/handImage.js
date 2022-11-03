import React from 'react';
import styled from 'styled-components';

const HandContainer = styled.div`

`
const HandImg = styled.img`

`

export default function HandImage() {
    return (
        <HandContainer>

            <HandImg src={'paperHand.png'} alt="hand gesture" />

        </HandContainer>
    );
}