import React, { useState } from 'react'
import '../02-useEffect/index.css'
import {MultipleCustomHooks} from '../03-examples/MultipleCustomHooks'

export const RealExampleRef = () => {
    const [show, setshow] = useState(false)

    return (
        <div>
            <h1>RealExampleRef</h1>
            {show && <MultipleCustomHooks/>}

            <button 
                className='btn btn-secondary'
                onClick={()=> {
                    setshow(!show)
                }}
            >
                    Show/Hide
            </button>
        </div>
    )
}
