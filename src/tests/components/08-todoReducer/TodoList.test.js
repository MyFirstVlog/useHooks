import { shallow } from 'enzyme';
import React from 'react';
import { TodoList } from '../../../components/08-useReducer/components/TodoList';
import { infoTodos } from '../../fixtures/demoTodos';


describe('pruebas en todolist', () => {

    const handleDelete = jest.fn()
    const handleToggle = jest.fn()

    const wrapper = shallow(
        <TodoList
            todos={infoTodos.initInput}
            handleDelete={handleDelete}
            handleToggle={handleToggle} 
        />
    )
    test('debe mostarse correctamente ', () => {

        expect(wrapper).toMatchSnapshot()

    })

    test('debe de tener dos <TodoListItem/> ', () => {

        expect(wrapper.find('TodoListItem').length).toBe(infoTodos.initInput.length)
        expect(wrapper.find('TodoListItem').at(0).prop('handleToggle')).toEqual(expect.any(Function))
    })
    
    
})
