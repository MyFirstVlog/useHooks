import React from 'react'
import '../styles.css'
import { TodoListItem } from './TodoListItem'
export const TodoList = ({todos=[], handleDelete = ()=>{} , handleToggle = ()=>{}}) => {
    return (
        <ul className='list-group list-group-flush'>
            {
                todos.map((each, index) =>(
                    <TodoListItem 
                                  key={each.id} 
                                  each={each} 
                                  index={index}
                                  handleDelete={handleDelete}
                                  handleToggle={handleToggle}
                    />
                ))
                
            }
        </ul>
    )
}
