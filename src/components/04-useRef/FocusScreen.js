import React, { useRef } from 'react'
import '../02-useEffect/index.css'

export const FocusScreen = () => {

    const inputRef = useRef() //
    // console.log(ref)

    const handleClick = () => {
        //document.querySelector('input').select()   //Selecciona el input,
        inputRef.current.select()
        console.log(inputRef)
    }


    return (
        <div>
                <h1>Focus Screen</h1>
                <hr/>

                <input
                    ref = {inputRef}
                    className="form-control"
                    placeholder="Su Nombre"
                />

                <button 
                    className='btn btn-outline-primary'
                    onClick={handleClick}
                >
                    Focus
                </button>
                
                


        </div>
    )
}
