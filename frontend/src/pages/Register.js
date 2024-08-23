import LoginForm from "../components/LoginForm"
import { Link, useNavigate } from 'react-router-dom';
import { useRef } from "react";

const bcrypt = require('bcryptjs');

function Register(){

    const navigate = useNavigate()

    function callback(data){
        createUser(data)
    }

    const loginFormRef = useRef(null)

    const clearLoginForm = () =>{
        if(loginFormRef.current){
            loginFormRef.current.clearLoginForm()
        }
    }


    async function createUser(data){
        try{
            const username = data.username
            const password = data.password
            const hashedPassword = await bcrypt.hash(password, 10)
    
            const res = await fetch('/dreamTeam/getUser/' + username)
            const json = await res.json()
            console.log(json)

            if(res.status === 200){
                console.log(' user already exists')
                //TODO: alert user
                clearLoginForm()
            }
            else{
                const registerRes = await fetch('/dreamTeam/register', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        username: username,
                        password: hashedPassword
                    })
                })
    
                console.log(registerRes.json())
    
                if(registerRes.status === 200){
                    sessionStorage.setItem('user', username)
                    navigate('/dashboard')
                }
                else{
                    console.log(' error registering')
                }
            }
            
            


        } catch (error){
            console.error('Error fetching data:', error);
        }
        
        
    }


    return(
        <>
            <LoginForm
                loginFormCallback={callback}
                button="Create Account"
                ref={loginFormRef}
            />
            <Link to='/'>Back</Link>
        </>
        
    )
}

export default Register