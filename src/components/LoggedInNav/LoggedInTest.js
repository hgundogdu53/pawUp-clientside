import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import LoggedInNav from './LoggedInNav';

describe(`LoggedInNav component`, () => {
    it('renders without crashing', () => {
        const wrapper = shallow(<LoggedInNav />);
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});