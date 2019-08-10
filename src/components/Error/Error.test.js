import React from 'react'
import { shallow, mount } from 'enzyme'

import errors from '../../utils/errors';

import Error from './index';

describe('Error Component', () => {
    it ('should render properly', () => {
        const wrapper = shallow(<Error />);
        expect(wrapper).toBeTruthy();
    });

    
    const code = '001';
    const type = 'HttpErrors';

    it('should render the right message when used type and code', () => {
        const wrapper = shallow(<Error type={type} code={code}/>);

        expect(wrapper.find('.content-error').text()).toBe(errors[type][code].description)
    });

    it('should call close function', () => {
        const closeMock = jest.fn();
        const wrapper = shallow(<Error type={type} code={code} close={closeMock}/>);

        wrapper.find('.close-error-button').simulate('click')
        expect(closeMock.mock.calls.length).toBe(1);
    })
})