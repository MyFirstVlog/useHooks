import React, { useContext } from 'react'
import { UserContext } from './UserContext'

export const Login = () => {

    const {setuser} = useContext(UserContext)

    const User = {
        id:1234,
        name:'Alejandro Estrada',
        email:'alesmo30@gmail.com'
    }

    return (
        <div>
            <h1>Login Screen</h1>

            <button 
                className='btn btn-primary'
                onClick = {()=> setuser(User)}
            >
                Login
            </button>
        </div>
    )
}

