import {renderHook, act} from '@testing-library/react-hooks'
import { useCounter } from '../../components/hooks/useCounter'


describe('Pruebas en useCounter', () => {
    
    test('debe retornar los valores por defectos', () => {
        
        const {result} = renderHook( () => useCounter())

        const {state, increment, decrement, reset} = result.current

        expect(state).toBe(10)
        expect(typeof increment).toBe('function')
        expect(typeof decrement).toBe('function')
        expect(typeof reset).toBe('function')

    })

    test('debe tener el counter en 100', () => {
        
        const {result} = renderHook( () => useCounter(100))

        expect(result.current.state).toBe(100)
    })

    test('debe incrementar el counter en 1', () => {
        const {result} = renderHook( () => useCounter(100))
        const {increment} = result.current

        act(()=>{
            increment()
        })

        const {state} = result.current
        expect(state).toBe(101)
    })
    
    test('debe decrementar el valor inicial', () => {
        const {result} = renderHook( () => useCounter(100))
        const {decrement} = result.current

        act(()=>{
            decrement()
        })

        const {state} = result.current
        expect(state).toBe(99)
    })

    test('debe resetear al valor inicial', () => {
        const {result} = renderHook( () => useCounter(100))
        const {increment,reset} = result.current

        act(()=>{
            increment()
            // increment() //solo se ejecuta una vez
            reset()
        })

        const {state} = result.current
        expect(state).toBe(100)
    })


    
    
    


})
