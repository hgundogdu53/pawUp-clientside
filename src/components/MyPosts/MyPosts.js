import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import config from '../../config';
import TokenService from '../../services/token-service';
import './MyPosts.css';


class MyPosts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        }
    }

    componentDidMount() {
        const options = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `bearer ${TokenService.getAuthToken()}`
            }
        }
        fetch(`${config.API_ENDPOINT}/posts/myPosts`, options)
            .then(res => {
                if (res.ok) {
                    return res.json();
                }
                else {
                    throw new Error('Something went wrong');
                }
            })
            .then(data => {
                this.setState({ posts: data })
            })
            .catch(err => {
                alert(`Something went wrong ${err}`)
            })
    }

    render() {
        return (
            <>
                <main className='flex-container'>
                    <header role="banner">
                        <h1>My Posts</h1>
                    </header>
                    <section className='myPost-grid'>
                        {this.state.posts.map(post => {
                            return (
                                <section key={post.id} className='myPost-container'>
                                    <h4 className='dog_name'>{post.dog_name}</h4>
                                    <section className='container'>
                                        <p>Owner Email:  <a href={`mailto:${post.email}?subject=Interested in ${post.pet_name}!`} className='email'>{post.email}</a></p>
                                        <p>Birthdate: {moment(post.birthdate).format("MM-DD-YYYY")}</p>
                                        <p>Types-of-pet: {post.types_of_pet}</p>
                                        <p>Hobbies: {post.hobbies}</p>
                                    </section>
                                    <button className='deletePostBtn' onClick={() => (
                                        /* eslint-disable */
                                        this.props.handleDeletePost(post.id, this.handleDeletePost),
                                        this.setState({ posts: this.state.posts.filter(posts => posts.id !== post.id) })
                                        /* eslint-disable */
                                    )
                                    }>Delete</button>
                                    <Link to='/edit'><button className='update-btn' onClick={() => {
                                        this.props.setId(post.id)
                                    }}>Update</button></Link>
                                </section>
                            )
                        })}
                    </section>
                </main>
            </>
        )
    }
}


export default MyPosts;