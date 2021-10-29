import React, { useEffect, useState } from 'react'
import './index.css'
import { Message } from './Message'
export const SimpleForm = () => {

    const [formState, setformState] = useState({
        name: '',
        email: ''
    })

    const {name, email} = formState

    //return de los effects son utilizados de limpieza cuando se desmonta el componente
    
    useEffect(()=> {
        // console.log('hey')
    }, [])

    useEffect(()=> {
        // console.log('hey')
    }, [formState])
    
    useEffect(()=> {
        // console.log('email cambia bobo')
    }, [email])
    const handleInputChange = ({target}) => {
        setformState({
            ...formState,
            [target.name] :target.value
        })
    }

    return (
        <>
            <h1>useEffect</h1>
            <hr/>

            <div className="form-group">
                <label>Nombre</label>
                <input
                    type='text'
                    name='name'
                    placeholder='Escribe aqui my brother!!!'
                    className='form-control'
                    autoComplete = 'off'
                    value = {name}
                    onChange = {handleInputChange}
                >
                </input>

                <label>Email</label>
                <input
                    type='text'
                    name='email'
                    placeholder='user@gmail.com'
                    className='form-control'
                    autoComplete = 'off'
                    value = {email}
                    onChange = {handleInputChange}
                >
                </input>
            </div>

            {name === '123' && <Message />}

        </>
    )
}
