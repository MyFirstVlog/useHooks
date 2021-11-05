import React from 'react'

export const TodoListItem = ({each, index,handleDelete = ()=>{} , handleToggle = ()=>{}}) => {
    return (
        <li
            key={each.id}
            className='list-group-item'
        >
            <p className={`${each.done && 'complete'}`}
                onClick = {() => handleToggle(each.id)}
            >
                    {index + 1}.{each.desc}
            </p>
            <button 
                className='btn btn-danger'
                onClick={()=> handleDelete(each.id)}
            >
                    Borrar
            </button>
        </li> 
    )
}
