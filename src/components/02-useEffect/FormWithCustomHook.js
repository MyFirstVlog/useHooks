import React, {useEffect, useState } from 'react'
import { useForm } from '../hooks/useForm'
import './index.css'
export const FormWithCustomHook = () => {

    const [formValues, handleInputChange] = useForm({
        name: '',
        email: '',
        password: ''
    })

    const {name, email, password} = formValues

    //return de los effects son utilizados de limpieza cuando se desmonta el componente
    
    useEffect(() => {
        console.log('email cambio')
    }, [email])

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formValues)
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1>FormWithCustomHook</h1>
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

                    <label>Email</label>
                    <input
                        type='password'
                        name='password'
                        placeholder='*******'
                        className='form-control'
                        value = {password}
                        onChange = {handleInputChange}
                    >
                    </input>


                <button type='submit' className='btn btn-primary'> 
                        guardar
                </button>
                </div>



        </form>
    )
}
