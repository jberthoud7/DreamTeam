import React from 'react'
import Banner from '../components/Banner'
import { useNavigate } from 'react-router-dom';


function Account(){

    const user = sessionStorage.getItem('user')
    const navigate = useNavigate()

    const handleLogout = () => {
        sessionStorage.setItem('user', null)
        navigate('/')
    }


    return(
        <div>
            <Banner></Banner>
            { user } 
            
            <button onClick={handleLogout}>
                Logout
            </button>            
        </div>
    )
}

export default Account