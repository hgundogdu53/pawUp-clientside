import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Profile from './Profile';

describe(`Profile component`, () => {
    it('renders without crashing', () => {
        const wrapper = shallow(<Profile />);
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});