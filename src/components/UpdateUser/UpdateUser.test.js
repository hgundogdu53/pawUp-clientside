import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import UpdateUser from './UpdateUser';

describe(`UpdateUser component`, () => {
    it('renders without crashing', () => {
        const wrapper = shallow(<UpdateUser />);
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});