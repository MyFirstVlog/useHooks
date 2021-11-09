import React from 'react';
import { shallow } from "enzyme"
import { TodoAdd } from '../../../components/08-useReducer/components/TodoAdd';

describe('pruebas en <TodoAA/>', () => {
    
    const handleAddTodo = jest.fn()
    const wrapper = shallow(<TodoAdd
                                handleAddTodo= {handleAddTodo}
                            />)

    test('debe mostrarse correctamente ', () => {
        expect(wrapper).toMatchSnapshot()
    })

    test('no deria llmar handleAddTodo ', () => {
        const formSubmit = wrapper.find('form').prop('onSubmit')

        formSubmit({preventDefault(){}})

        expect(handleAddTodo).toHaveBeenCalledTimes(0)
    })

    test('debe de llamar la funcion handleAddTodo ', () => {
        //con un argumento
        const value = 'nihao mundo'
        wrapper.find('input').simulate('change',{
            target:{
                value,
                name:'description'
            }
        })
        
        const formSubmit = wrapper.find('form').prop('onSubmit')

        formSubmit({preventDefault(){}})

        expect(handleAddTodo).toHaveBeenCalledTimes(1)
        expect(handleAddTodo).toHaveBeenCalledWith( expect.any(Object))
        expect( handleAddTodo).toHaveBeenCalledWith({
            id:expect.any(Number),
            desc: value,
            done:false
        })

        expect(wrapper.find('input').prop('value')).toBe('')  // se miran los efectos mas que la implmentacion
    })
    
    
    


})
