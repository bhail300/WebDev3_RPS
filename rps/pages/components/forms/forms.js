import styled from 'styled-components';
import { Wrapper } from '../../styles';


const FormCont = styled.form`
display:flex;
flex-direction: column;
justify-content:center;
align-items:center;
align-content:center;
width: 25%;
`

const SubmitButton = styled.button`
width: 30%;
padding: 1%;
font-family: 'Baloo 2', cursive;
font-weight: 700;
font-size:20px;
background-color:#FFFDF4;
border:2px solid #363630;
box-shadow: 4px 4px #363630;
border-radius: 10px;
color: #363630;
margin: 5%;
`

export default function Form(){
    return (
        <Wrapper>
            <FormCont action="/send-data-here" method="post">
                <input type="text" id="user" name="user" className='input' placeholder="Enter Username"/>
                <input type="text" id="pass" name="pass" className='input' placeholder="Enter Password" />
                <SubmitButton type="submit">Submit</SubmitButton>
            </FormCont>
        </Wrapper>
    )
}