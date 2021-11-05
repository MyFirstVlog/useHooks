import React from 'react'
import { useForm } from '../../hooks/useForm'

export const TodoAdd = ({ handleAddTodo}) => {

    //se pone description porque es el nombre del input
    const [{description},handleInputChange, reset] = useForm({
        description: ''
    })    

    const handleSubmit = (e) => {
        e.preventDefault()

        if(description.trim().length <= 1){
            return
        }

        const newTodo = {
            id : new Date().getTime(),
            desc : description,
            done: false
        }

        handleAddTodo(newTodo)
        reset()

    }

    return (
        <>
            <h4>Agregar TODO</h4>
            <hr/>

            <form className="d-grid gap-2" onSubmit={handleSubmit}>
                <input
                    type='text'
                    name='description'
                    placeholder = '¿qué debo hacer?'
                    autoComplete = 'off'
                    value={description}
                    onChange={handleInputChange}
                />
                
                <button
                    type='submit'
                    className='btn btn-primary mb-2 btn-block'                        >
                        Agregar
                </button>
            </form>
        </>
    )
}
