import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import HamburgerNav from './HamburgerNav';

describe(`HamburgerNav component`, () => {
    it('renders without crashing', () => {
        const wrapper = shallow(<HamburgerNav />);
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});