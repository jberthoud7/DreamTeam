import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import LoginForm from "../components/LoginForm"
import { useRef } from "react";


const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');

function Login(){

    const navigate = useNavigate()
    const loginFormRef = useRef(null)


    function callback(data){
        loginUser(data)
    }

    async function loginUser(data){
        const username = data.username
        const enteredPassword = data.password

        const res = await fetch("/dreamTeam/getUser/" + username)
        const user = await res.json()

        console.log('1')

        if(res.status === 400){
            console.log('user not found')
        }
        else if(res.status === 500){
            console.log('error getting user')
        }
        else{
            console.log('2')
            console.log(user)
            console.log(username)
            console.log(enteredPassword)
            console.log(user.password)

            const loginRes = await fetch('/dreamTeam/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    username: username,
                    hashedPassword: user.password,
                    enteredPassword: enteredPassword
                })
            })

            console.log('3')
    
            if(loginRes.status === 400){
                console.log('user dne')
            }
            else if(loginRes.status === 500){
                console.log('error logging in')
            }
            else if(loginRes.status === 401){
                console.log('wrong pswd')
            }
            else{
                sessionStorage.setItem('user', username)
                navigate('/dashboard')
            }
        }

        

        // const token = jwt.sign({username: user.username}, process.env.JWT_SECRET, { expiresIn: '1h'})
        


        //TODO - if user DNE, tell user
        //TODO - if pswd doesnt match, prompt retry
    }

    return(
        <>
            <LoginForm
                loginFormCallback={callback}
                button="Login"
                ref={loginFormRef}
            />
            <Link to='/'>Back</Link>
        </>
    )
}

export default Login