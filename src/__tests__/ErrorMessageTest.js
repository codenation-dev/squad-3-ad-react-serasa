import React from 'react';
import { mount, shallow } from 'enzyme';
import ErrorMessage from '../components/shared/ErrorMessage';


// describe what we are testing
describe('Error Message Component', () => {
 
 // make our assertion and what we expect to happen 
 test('should render with error message', () => {
    const wrapper = shallow(<ErrorMessage message="erro" />);
    
    expect(wrapper.find('span').text()).toEqual('erro');
    wrapper.setProps({ message: 'erro 1' });
    expect(wrapper.find('span').text()).toEqual('erro 1');
 });

 test('should render with error message 1', () => {
    const wrapper = mount(<ErrorMessage message="erro" />);
    
    expect(wrapper.props().message).toEqual('erro');
    wrapper.setProps({ message: 'erro 1' });
    expect(wrapper.props().message).toEqual('erro 1');
 });

})