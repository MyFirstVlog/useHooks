import { mount } from 'enzyme';
import React from 'react';
import { Login } from '../../../components/09-useContext/Login';
import { UserContext } from '../../../components/09-useContext/UserContext';

describe('Pruebas en Login/>', () => {

    const User = {
        id:1234,
        name:'Alejandro Estrada',
        email:'alesmo30@gmail.com'
    }

    const user = {
        name: 'Alejandro',
        email: 'alesmo30@gmail.com'
    }
    const setuser = jest.fn()
    
    const wrapper = mount(
        <UserContext.Provider value={{setuser}} >
            <Login/>     
        </UserContext.Provider>
        )

    test('debe de mostrarse correctamente ', () => {
        expect(wrapper).toMatchSnapshot()
    })

    test('debe de ejecutarse el setUser con el arg esperado ', () => {
        wrapper.find('button').simulate('click')
        expect(setuser).toHaveBeenCalledWith(User)
    })
    
    

})
