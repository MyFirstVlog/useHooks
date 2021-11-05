import React, { useEffect } from 'react'
import { useReducer } from 'react'
import { useForm } from '../hooks/useForm'
import { TodoAdd } from './components/TodoAdd'
import { TodoList } from './components/TodoList'
import { todoReducer } from './todoReducer'
import './styles.css'

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

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos) )
    }, [todos])


    //dispatch, disparar acciones al reducer 

    const handleDelete = (todoId)=> {
        
        const todoDelete = {
            id :todoId,
        }

        const action = {
            type:'delete',
            payload: todoDelete
        }

        dispatch(action)

    }

    const handleToggle = (todoId) => {
            dispatch({
                type:'toggle',
                payload : todoId 
            })
    }

    const handleAddTodo = (newTodo) => {
        dispatch({
            type:'add',
            payload: newTodo
        })
    }

    return (
        <div>
            <h1>TodoApp ({todos.length})</h1>
            <hr/>

            <div className='row'>
                <div className='col-7'>
                    <TodoList todos={todos} handleToggle= {handleToggle} handleDelete = {handleDelete}/>
                </div>
                    
                <div className='col-5'>
                    <TodoAdd
                        handleAddTodo={handleAddTodo}
                    />
                </div>

            </div>

        </div>
    )
}
