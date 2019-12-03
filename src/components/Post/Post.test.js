import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Post from './Post';

describe(`Post component`, () => {
    it('renders without crashing', () => {
        const wrapper = shallow(<Post />);
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});