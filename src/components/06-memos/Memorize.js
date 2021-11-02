import React, { useState } from 'react'
import '../02-useEffect/index.css'
import { useCounter } from '../hooks/useCounter'
import { Small } from './Small'

export const Memorize = () => {

    const {state, increment} = useCounter(10)

    const [show, setshow] = useState(true)

    return (
        <div>
            <h1>State: <Small value={state}/> </h1>
            <hr/>

            <button 
                className='btn btn-primary'
                onClick = {increment}
            >
                   + 1 
            </button>

            <button
                className='btn btn-outline-primary ms-3'
                onClick={()=>{
                    setshow(!show)
                    }
                }
            >
                Show/Hide {JSON.stringify(show)}
            </button>
        </div>
    )
}
