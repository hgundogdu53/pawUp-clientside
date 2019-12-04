import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import LoginForm from './LoginForm';

describe(`LoginForm component`, () => {
    it('renders without crashing', () => {
        const wrapper = shallow(<LoginForm />);
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});