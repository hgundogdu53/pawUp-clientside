import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import PostsHomePage from './PostsHomePage';

describe(`PostsHomePage component`, () => {
    it.skip('renders without crashing', () => {
        const post = [
            {
                pet_name: 'muffin',
                type_of_pet: 'cat',
                birthdate: '2018-06-18',
                hobbies: 'Small dog that loves to run around. Will fit well in smaller homes as well as larger homes. Will need atleast an hour of exercise to keep out of trouble.',
                owner_id: 1
            },
            {
                pet_name: 'muffin2',
                type_of_pet: 'cat2',
                birthdate: '2019-06-18',
                hobbies: 'funny dog that loves to run around. Will fit well in smaller homes as well as larger homes. Will need atleast an hour of exercise to keep out of trouble.',
                owner_id: 2
            },

        ]
        const wrapper = shallow(<PostsHomePage posts={post.id} />);
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});