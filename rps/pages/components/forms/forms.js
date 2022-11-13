import styled from 'styled-components';
import { Wrapper } from '../../styles';
import { useState, useEffect } from "react"
import { useRouter } from 'next/router'



//Styles
const FormCont = styled.form`
display:flex;
flex-direction: column;
justify-content:center;
align-items:center;
align-content:center;
width: 25%;
margin: 1%;
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

export default function Form(
{
}){
    const router = useRouter()

    useEffect(()=>{
        localStorage.clear();
   
          });

    // if (typeof window !== 'undefined') {
    //         localStorage.setItem('currenrtUser', '');
    //     }

    
          
    const [newUser, setNewUser] = useState('');
    const [password, setPassword] = useState('');
    const [validPath, setValidPath] = useState("");
    const updateNewUser = (e)=>{
        setNewUser(e.target.value)
        
      }
    
    const updatePass = (e)=>{
        setPassword(e.target.value)
      }
      
      const HandleChange = () => {
        fetch(`http://localhost:3001/add-user?name=${newUser}&pass=${password}`)
            .then(async (res) => {
                const data = await res.json()
                if (typeof data !== 'undefined' && data.length > 0) {
                    localStorage.setItem('currentUser', data[0].id);
                    setValidPath("/game")
        
                   
                    
                }else{
                    localStorage.setItem('currentUser',"");
                    setValidPath("/")
                    alert("Invalid Login")
                    
                }
                
            })}

    const handlePage = (e)=>{
        e.preventDefault()
        router.push(validPath)
      }


    return (
        <Wrapper>
            <Wrapper>
                <FormCont onSubmit={handlePage} method="post">
                    <h3>Sign In/Register</h3>
                    <input
                        type="text"
                        value={newUser}
                        onChange={updateNewUser}
                        id="user"
                        name="user"
                        className='input'
                        placeholder="Username" />
                    <input
                        type="password"
                        value={password}
                        onChange={updatePass}
                        id="pass"
                        name="pass"
                        className='input'
                        placeholder="Password" />
                    <SubmitButton onClick={() => {
                        HandleChange()
                    }}
                        type="submit">Submit</SubmitButton>
                </FormCont>
            </Wrapper>
        </Wrapper>

    )
}