import { mount, shallow } from 'enzyme';
import React from 'react';
import { HomeScreen } from '../../../components/09-useContext/HomeScreen';
import { UserContext } from '../../../components/09-useContext/UserContext';


describe('Pruebas en <HomeScreen/>', () => {

    const user = {
        name: 'Alejandro',
        email: 'alesmo30@gmail.com'
    }

    const wrapper = mount(<UserContext.Provider value={{ //no sirve shallow porque solo renderiza el componente padre, para esto usamos mount
            user
        }}>
        <HomeScreen />
    </UserContext.Provider>)
    test('debe de mostar el componente correctamente ', () => {
        expect(wrapper).toMatchSnapshot()
    })
    
})
