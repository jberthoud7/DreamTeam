import classes from './componentsStyles/LoginForm.module.css'
import { useRef } from 'react';

function LoginForm(props){

    const usernameRef = useRef();
    const passwordRef = useRef();

    async function handleSubmit(event) {
        event.preventDefault();

        const enteredUsername = usernameRef.current.value;
        const enteredPassword = passwordRef.current.value;

        const userData = {
            username: enteredUsername,
            password: enteredPassword,
        };
        
        document.getElementById("username").value = "";
        document.getElementById("password").value = "";

        props.loginFormCallback(userData);
    }

    return(
        <div className={classes.centerContainer}>
            <div className={classes.container}>
                <h2 className={classes.header}>{props.header}</h2>
                <form className={classes.form} onSubmit={handleSubmit} id="loginForm">
                    <div>
                        <input type="text" required id="username" placeholder="Username" ref={usernameRef}/>
                    </div>
                    <div>
                        <input type="password" required id="password" placeholder="Password" ref={passwordRef} />
                    </div>
                    <button className={classes.button}>{props.button}</button>
                </form>
            </div>
        </div>
    )
}


export default LoginForm