import {renderHook, act} from '@testing-library/react-hooks'
import { useForm } from '../../components/hooks/useForm'

describe('tests del hook useForm', () => {
    
    const initialForm = {
        name:'Alejandro Estrada',
        email:'alesmo30@gmail.com'
    }

    test('debe regresar un formulario por defecto ', () => {
        const {result} = renderHook(()=> useForm(initialForm))

        const [values, handleInputChange, reset] = result.current

        expect(values).toEqual(initialForm)
        expect(typeof handleInputChange).toBe('function')
        expect(typeof reset).toBe('function')
        
    })

    test('debe de cmabiar el valor del formulario (cambiar name) ', () => {

        const {result} = renderHook(()=> useForm(initialForm))

        const [, handleInputChange, ] = result.current

        const target = {
            target:{
                name:'email',
                value:'alejito30@gmail.com'       
            }
        }

        act(()=> {
            handleInputChange(target)
        })
        const [values,,] = result.current
        expect(values).toEqual({...initialForm,email:'alejito30@gmail.com'})

        
    })

    test('debe de restablecer los valores a values iniciales ', () => {
        const {result} = renderHook(()=> useForm(initialForm))

        const [, handleInputChange, reset] = result.current

        const target = {
            target:{
                name:'email',
                value:'alejito30@gmail.com'       
            }
        }

        act(()=> {
            handleInputChange(target)
            reset()
        })
        const [values,,] = result.current
        expect(values).toEqual(initialForm)



    })
    

    
    
    
})
