import { useState, useEffect } from "react"

export const useCounter = (initialState = 10) => {
    const [state, setstate] = useState(initialState)

    const increment = () => {
        setstate(state + 1)
    }

    const decrement = () => {
        setstate( state - 1)
    }

    const reset = () => {
        setstate(initialState)
    }


    //Aqui mando la referencia a las funciones y variables en este caso el estado
    return {
        state,
        increment, 
        decrement,
        reset
    }
}
