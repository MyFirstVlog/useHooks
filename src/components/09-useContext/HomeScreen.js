import React, { useContext } from 'react'
import { UserContext } from './UserContext'

export const HomeScreen = () => {

    const {user, setuser} = useContext(UserContext)

    console.log(user)

    return (
        <div>
            <h1>Home Screen</h1>

            <pre>
                {JSON.stringify(user,null,3)}
            </pre>

        </div>
        
    )
}
