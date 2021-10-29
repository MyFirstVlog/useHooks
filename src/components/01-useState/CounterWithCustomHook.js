//Las imports que yo no hice
import React from 'react'
//Las imports que hice
import { useCounter } from '../hooks/useCounter'
// Archivos .css
import './Counter.css'

export const CounterWithCustomHook = () => {

    const {state, increment, decrement, reset} = useCounter(100)

    /**
     * Abajo pongo los clicks en funcion porque voy a enviarlos valores como args, si no estaria enviando el evento click como s evento
     */
    return (
        <>
            <h1>Counter With Hook {state}</h1>
            <hr/>

            <button onClick = {() => increment(2)}className="btn">+ 1</button>
            <button onClick = {reset}className="btn">reset</button>
            <button onClick = {() => decrement(2)}className="btn">- 1</button>

        </>
    )
}
