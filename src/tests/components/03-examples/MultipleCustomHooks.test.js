import React from 'react';
import { shallow } from "enzyme"
import { MultipleCustomHooks } from '../../../components/03-examples/MultipleCustomHooks';
import { useFetch } from '../../../components/hooks/useFetch';
import { useCounter } from '../../../components/hooks/useCounter';
jest.mock('../../../components/hooks/useFetch') 
jest.mock('../../../components/hooks/useCounter') 

//Implementacion con el mock, solo me interesan los resultados, cunado vaya a utilizar el useFertch, va hacer
//una implementacion que me voy a inventar yo del useFetch, evita las llamadas al useFetch

describe('Pruebas en <MultipleCustomHooks/>', () => {

    beforeEach( () =>  {
 
        useCounter.mockReturnValue({
            state: 10,
            increment: () => {}
        });
 
    });
    
    test('debe mostrarse correctamente ', () => {

        useFetch.mockReturnValue({
            data : null,
            loading : true,
            error : null
        })

        const wrapper = shallow(<MultipleCustomHooks />)
        expect(wrapper).toMatchSnapshot(wrapper)
    })

    test('debe de mostrar la informacion', () => {
        useFetch.mockReturnValue({
            data : [{
                author : 'Alejandro',
                quote : 'Salut Monde'
            }],
            loading : false,
            error : null
        })

        const wrapper = shallow(<MultipleCustomHooks />)

        //vamos a buscar .clases, que no deberian de existir
        expect(wrapper.find('.alert').exists()).toBe(false)
        expect(wrapper.find('.mb-0').text().trim()).toBe('Salut Monde')
        expect(wrapper.find('footer').text().trim()).toBe('Alejandro')

        console.log(wrapper.html())
    })
    
    
})
