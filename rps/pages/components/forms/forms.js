import styled from 'styled-components';
import { Wrapper } from '../../styles';
import { useEffect } from "react";



//Styles
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

export default function Form() {
    const HandleChange = () => {
        fetch('http://localhost:3001/add-user')
            .then(async (res) => {
                const data = await res.json()
                console.log(data)

            })
        console.log("Button clicked")
    }

    return (
        <Wrapper>
            <FormCont action="/game" method="post">
                <input
                    type="text"
                    id="user"
                    name="user"
                    className='input'
                    placeholder="Enter Username" />
                <input
                    type="text"
                    id="pass"
                    name="pass"
                    className='input'
                    placeholder="Enter Password" />
                <SubmitButton type="submit">Submit</SubmitButton>
            </FormCont>
            <Wrapper>
                <FormCont>
                    <h3>New Player?</h3>
                    <input
                        type="text"
                        id="user"
                        name="user"
                        className='input'
                        placeholder="Enter New Username" />
                    <SubmitButton onClick={() => {
                        HandleChange()
                    }}
                        type="submit">Submit</SubmitButton>
                </FormCont>
            </Wrapper>
        </Wrapper>

    )
}