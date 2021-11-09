import { todoReducer } from "../../../components/08-useReducer/todoReducer"
import { infoTodos } from "../../fixtures/demoTodos"


describe('pruebas en todo reducer', () => {
    test('debe retornar el estado por defecto ', () => {
        const state = todoReducer(infoTodos.initInput,infoTodos.actionDef )

        expect(state).toEqual(infoTodos.initInput)
    })

    test('debe agregar un todo ', () => {
        todoReducer([{
            id:2,
            desc: 'Dormir',
            done: false
        }],infoTodos.actionAdd)

        const state= todoReducer(infoTodos.initInput,infoTodos.actionAdd)

        expect(state.length).toBe(3)
    })

    test('debe de borrar un TODO ', () => {
        const state = todoReducer(infoTodos.initInput,infoTodos.actionDel)

        expect(state.length).toBe(1)
        expect(state).toEqual([infoTodos.initInput[0]])
    })

    test('debe de hacer toggle del TODO', () => {
        const state = todoReducer(infoTodos.initInput,infoTodos.actionToggle)

        console.log((state))

        expect(state[1].done).toBe(true)
    })
    
    
    
    
})
