
import React from 'react';
import ApiContext from '../../ApiContext.js';
import moment from 'moment';
import './Spotlight.css';

function Spotlight() {
    return (
        <ApiContext.Consumer>
            {context => (
                <section className='main-spotlight-section'>
                    <header>
                        <h3 className='spotlight-title'>PawUp Spotlight</h3>
                    </header>
                    <section className='spotlight-card'>
                        <h4>{context.posts[0].pet_name}</h4>
                        <section className='container'>
                            <p>Owners Email: <a href={`mailto:${context.posts[0].email}?subject=Interested in ${context.posts[0].pet_name}!`} className='email'>{context.posts[0].email}</a></p>
                            <p>Birthdate: {moment(context.posts[0].birthdate).format("MM-DD-YYYY")}</p>
                            <p>Type of Pet: {context.posts[0].types_of_pet}</p>
                            <p>Hobbies: {context.posts[0].hobbies}</p>
                        </section>
                    </section>
                </section>
            )}
        </ApiContext.Consumer>
    )
}

export default Spotlight;