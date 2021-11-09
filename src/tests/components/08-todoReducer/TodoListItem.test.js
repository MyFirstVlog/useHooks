import { shallow } from "enzyme"
import { TodoListItem } from "../../../components/08-useReducer/components/TodoListItem"
import { infoTodos } from "../../fixtures/demoTodos"

describe('Pruebas en todoListItem', () => {

    const handleDelete = jest.fn()
    const handleToggle = jest.fn()

    const wrapper = shallow(
        <TodoListItem
            each={infoTodos.initInput[0]}
            index={1}
            handleDelete={handleDelete}
            handleToggle={handleToggle}
        />
    )
    
    test('debe mostarse correctamente ', () => {
        expect(wrapper).toMatchSnapshot()
    })
    
    test('debe de llamar la funcion handleDelete ', () => {
        wrapper.find('button').simulate('click')
        expect(handleDelete).toHaveBeenCalledWith(1) //veerifica que args se uso
    })
    
    test('debe de llamar la funcion handleToggle ', () => {
        wrapper.find('p').simulate('click')
        expect(handleToggle).toHaveBeenCalledWith(1) //veerifica que args se uso
    })

    test('debe de mostar el texto correctamente ', () => {
        const texto = wrapper.find('p').text()
        expect(texto).toBe('2.Comer')
    })
    test('debe tener la clase complete si todo estan en true ', () => {
        
        const todo = infoTodos.initInput[0]
        todo.done=true

        const wrapper = shallow(
            <TodoListItem
                each={infoTodos.initInput[0]}
            />
        )

        expect(wrapper.find('p').hasClass('complete')).toBe(true)
    })
    
})
