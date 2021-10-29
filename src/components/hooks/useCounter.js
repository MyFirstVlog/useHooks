import { useState, useEffect } from "react"

export const useCounter = (initialState = 10) => {
    const [state, setstate] = useState(initialState)

    const increment = (factor = 1) => {
        setstate(state + factor)
    }

    const decrement = (factor = 2) => {
        setstate( state - factor)
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
