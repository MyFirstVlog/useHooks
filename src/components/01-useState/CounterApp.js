import React, {useState} from 'react'
import './Counter.css'

export const CounterApp = () => {

    const [counter, setcounter] = useState({
        counter1: 10 ,
        counter2: 20,
        counter3 : 30,
        counter4 : 40,

    })
    
    // console.log(counter)

    const {counter1,counter2} = counter

    return (
        <>
            {/* {<h1>Counter {counter}</h1>} */}

            <h1>Counter 1 {counter1}</h1>
            <h1>Counter 2 {counter2}</h1>
            <hr/>

            <button 
                className="btn btn-primary"
                onClick = {() => {
                    setcounter({
                        ...counter,
                        counter1: counter1 + 1 
                    })
                }}
            > 
                    +1
            </button>
        </>
    )
}
