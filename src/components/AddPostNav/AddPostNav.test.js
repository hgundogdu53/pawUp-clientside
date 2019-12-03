import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import AddPostNav from './AddPostNav';

describe(`AddPostNav component`, () => {
    it('renders without crashing', () => {
        const wrapper = shallow(<AddPostNav />);
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});