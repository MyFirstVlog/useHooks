import React, { useCallback, useState } from 'react'
import { ShowIncrement } from './ShowIncrement'
import '../02-useEffect/index.css'

export const CallbackHook = () => {

    const [counter, setcounter] = useState(10)

    // const increment = () => {
    //     setcounter(counter + 1)
    // }
    /// memoriza el body de la funcion y no la erenderiza hasta que el valor no se modifique
    //version memorizada
    const increment = useCallback(
        (num) => {
            setcounter(c => c + num)
        },
        [setcounter]
    )

    //usos , cuando ocupamos mandar una funcion a un componente hijo

    return (
        <div>
            <h1>useCallBack Hook: {counter}</h1>
            <hr/>

            <ShowIncrement increment={increment}/>
           
        </div>
    )
}
