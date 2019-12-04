import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import UpdatePost from './UpdatePost';

describe(`UpdatePost component`, () => {
    it('renders without crashing', () => {
        const post = [
            {
                pet_name: 'muffin',
                email: 'hgundogdu53@gmail.com',
                type_of_pet: 'cat',
                birthdate: '2018-06-18',
                hobbies: 'Small dog that loves to run around. Will fit well in smaller homes as well as larger homes. Will need atleast an hour of exercise to keep out of trouble.',
                owner_id: 1
            },

        ]
        const wrapper = shallow(<UpdatePost posts={post} />);
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});