import React, { useEffect } from 'react'
import { useReducer } from 'react'
import { useForm } from '../hooks/useForm'
import './styles.css'
import { todoReducer } from './todoReducer'

const initialState = [{
    id : new Date().getTime(),
    desc : 'Aprender React',
    done: false
}]

export const TodoApp = () => {

    //si es unbdefined entonces puedo usar || para dar la otra opcion, este o el otro
    const init = () => {
        return JSON.parse(localStorage.getItem('todos')) || []
        
        // [{
        //     id : new Date().getTime(),
        //     desc : 'Aprender React',
        //     done: false
        // }]
    }


    const [todos, dispatch] = useReducer(todoReducer, [], init)

    //se pone description porque es el nombre del input
    const [{description},handleInputChange, reset] = useForm({
        description: ''
    })

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos) )
    }, [todos])

    const handleSubmit = (e) =>{
        e.preventDefault()

        if(description.trim().length <= 1){
            return
        }

        const newTodo = {
            id : new Date().getTime(),
            desc : description,
            done: false
        }

        const action = {
            type:'add',
            payload: newTodo
        }

        dispatch(action)
        reset()
    }

    //dispatch, disparar acciones al reducer 

    return (
        <div>
            <h1>TodoApp ({todos.length})</h1>
            <hr/>

            <div className='row'>
                <div className='col-7'>
                    <ol className='list-group list-group-flush'>
                            {
                                todos.map((each, index) =>(
                                    <li
                                        key={each.id}
                                        className='list-group-item'
                                    >
                                        <p className='text-center'>
                                                {index + 1}.{each.desc}
                                        </p>

                                        <button className='btn btn-danger'>
                                                Borrar
                                        </button>
                                    </li> 
                                ))
                                
                            }
                    </ol>
                </div>
                    
                <div className='col-5'>
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
                            className='btn btn-primary mb-2 btn-block'
                        >
                                Agregar
                        </button>
                    </form>
                </div>

            </div>

        </div>
    )
}
