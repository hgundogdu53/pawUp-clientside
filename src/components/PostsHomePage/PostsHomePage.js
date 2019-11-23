import React from 'react';
import moment from 'moment';
import './PostsHomePage.css';

function PostsHomePage(props) {
    return (
        <main>
            <div role="banner">
                <h1 className='main-title-post'>PawUp Community Pets</h1>
            </div>
            <section className='post-main'>
                {props.posts.map(post => {
                    return (
                        <section key={post.id} className='card' >
                            <h4 className='pet_name'>{post.pet_name}</h4>
                            <section className='container'>
                                <p>Owner Email: <a href={`mailto:${post.email}?subject=Interested in ${post.pet_name}!`} className='email'>{post.email}</a></p>
                                <p>Birthdate: {moment(post.birthdate).format("MM-DD-YYYY")}</p>
                                <p>Location: {post.location}</p>
                                <p>Type of Pet: {post.type_of_pet}</p>
                                <p>Hobbies: {post.hobbies}</p>
                            </section>
                        </section>
                    )
                })}
            </section>
        </main>
    )
}

export default PostsHomePage;