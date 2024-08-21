import LoginForm from "../components/LoginForm"
import { useNavigate } from 'react-router-dom';

function Register(){

    const navigate = useNavigate();

    function callback(data){
        createUser(data)
    }


    async function createUser(data){

        const username = data.username

        const res = await fetch("http://localhost:5000/dreamTeam/getUser/" + username)
        const json = await res.json()

        // TODO: handle user already exists - take them to login

        navigate('/dashboard')
    }


    return(
        <LoginForm
            loginFormCallback={callback}
            button="Create Account"
        />
    )
}

export default Register