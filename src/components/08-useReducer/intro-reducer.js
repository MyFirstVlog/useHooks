
const initialState = [{
    id : 1,
    todo :'Comprar Pan',
    done : false
}]

//regreso algo

//las actiones son las que van a modficar el state, siempre devuelvo state por defecto
const todoReducer = (state = initialState, action )=> {

    if(action?.type==='Create'){  
            return [...state, action.payload]
    }
    
    return state
    
}
let todos = todoReducer()

const newTodo = {
    id:2,
    todo:'Comprar Leche',
    donde: false
}

const action = {
    type:'Create',
    payload: newTodo
}

todos = todoReducer(todos, action)

// todos.push() //no se deberia usar asi, porque estamos mutando el estado



console.log(todos)