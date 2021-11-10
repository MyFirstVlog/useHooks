import React from 'react';
import { shallow, mount } from "enzyme"
import { TodoApp } from "../../../components/08-useReducer/TodoApp"
import { infoTodos } from '../../fixtures/demoTodos';
import { act } from '@testing-library/react';

describe('Pruebas en <TodoApp/>', () => {
    const wrapper = shallow(<TodoApp/>)

    Storage.prototype.setItem = jest.fn(()=>{})

    test('debe de mostrarse correctamente ', () => {
        expect(wrapper).toMatchSnapshot()
    })

    test('debe de agregar un TODO ', () => {
        const wrapper = mount(<TodoApp/>) // cuando se neceita probar toda la app en contexto, nivel de renderizacion, shallow es mas general, aqui es mas especifico
        //como estamos haciendo un cambio debemos usar un act envolverlo

        act(()=> {
            wrapper.find('TodoAdd').prop('handleAddTodo')(infoTodos.initInput[0])
            wrapper.find('TodoAdd').prop('handleAddTodo')(infoTodos.initInput[1])
        })

        expect(wrapper.find('h1').text()).toBe('TodoApp (2)')
        expect(localStorage.setItem).toHaveBeenCalledTimes(2)
    })

    test('debe borrarse un todo ', () => {
        wrapper.find('TodoAdd').prop('handleAddTodo')(infoTodos.initInput[0])
        wrapper.find('TodoList').prop('handleDelete')(infoTodos.initInput[0].id)

        expect(wrapper.find('h1').text()).toBe('TodoApp (0)')
    })
    
    
    
})
