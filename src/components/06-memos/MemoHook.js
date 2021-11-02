import React, { useMemo, useState } from 'react'
import { procesoPesado } from '../../helpers/procesoPesado'
import { useCounter } from '../hooks/useCounter'
import '../02-useEffect/index.css'

export const MemoHook = () => {

    const {state, increment} = useCounter(4000)

    const [show, setshow] = useState(true)

    const memoProcesado = useMemo(() => procesoPesado(state), [state]) // memoriza la ejecucion y solo cuando state especificamente el lo hace tambien

    return (
        <div>
            <h1>MemoHook</h1>
            <h3>State: <small>{state}</small> </h3>
            <hr/>

            <p>{memoProcesado}</p>

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
