import React, { useLayoutEffect, useRef, useState } from 'react'
import './layout.css'
import { useCounter } from '../hooks/useCounter'
import { useFetch } from '../hooks/useFetch'
export const Layout = () => {

    const {state, increment} = useCounter(1)
    const {data} = useFetch(`https://www.breakingbadapi.com/api/quotes/${state}`)
    const {quote} = !!data && data[0] //si viene la data entonces coja data[0],. nueva sintaxis importante para estos usos del fetch
    const pTag = useRef()

    const [tamano, setTamano] = useState({})
    useLayoutEffect(() => {
        console.log(pTag.current.getBoundingClientRect())
        setTamano(pTag.current.getBoundingClientRect())
    }, [quote])
    return (
        <div>
            <h1>Layout Effects</h1>
            <hr/>
           
             <blockquote className="blockquote text-end">
                   <p 
                    className="mb-0"
                    ref={pTag}
                    >
                        {quote}
                    </p>
             </blockquote>
                  
            <button 
                className='btn btn-primary'
                onClick = {increment}
            >
                Siguiente Quote
            </button>

            <pre>
                {JSON.stringify(tamano, null, 3)}
            </pre>


        </div>
    )
}
