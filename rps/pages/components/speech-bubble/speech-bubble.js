import React from 'react';
import styled from 'styled-components';

const Bubble = styled.div`
width: 70%;
max-width: 400px;
border: 5px solid black;
background-color: #fff;
padding: 50px 0px;
margin: 10px auto;
border-radius: 50%;
text-align: center;
font-size: 25px;
font-family: modak;
position: relative;
`

const SpeechBubble = ({
    text,
    style="title"
}) => {
    return(
        <Bubble size={style} className='sb9'>{text}</Bubble>
    )
}

export default SpeechBubble; 