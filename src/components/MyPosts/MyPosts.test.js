import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import MyPosts from './MyPosts';

describe(`MyPosts component`, () => {
    it('renders without crashing', () => {
        const wrapper = shallow(<MyPosts />);
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});