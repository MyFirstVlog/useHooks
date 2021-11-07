import React from 'react';
import { shallow } from 'enzyme'
import { HookApp } from "../HookApp"

describe('tests para el hook app', () => {

    test('verificar snapshot  de hook app', () => {
        let wrapper = shallow(<HookApp />)

        expect(wrapper).toMatchSnapshot()
    })
    
})
