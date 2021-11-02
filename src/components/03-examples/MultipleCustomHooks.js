import React from 'react'
import '../02-useEffect/index.css'
import { useCounter } from '../hooks/useCounter'
import { useFetch } from '../hooks/useFetch'
export const MultipleCustomHooks = () => {

    const {state, increment} = useCounter(1)
    const {loading, data} = useFetch(`https://www.breakingbadapi.com/api/quotes/${state}`)
    const {author, quote} = !!data && data[0] //si viene la data entonces coja data[0],. nueva sintaxis importante para estos usos del fetch
    return (
        <div>
            <h1> Breaking Bad Quotes</h1>
            <hr/>

            {
                loading 
                    ? 
                        (
                            <div className="alert alert-info text-center">
                                Loading
                            </div>
                        )
                    :   
                        (
                            <blockquote className="blockquote text-end">
                                <p className="mb-0">{quote}</p>
                                <footer className="blockquote-footer">
                                    {author}
                                </footer>
                            </blockquote>
                        )
            }

            <button 
                className='btn btn-primary'
                onClick = {increment}
            >
                Siguiente Quote
            </button>


        </div>
    )
}
