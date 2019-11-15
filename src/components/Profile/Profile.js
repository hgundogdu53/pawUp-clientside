import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import config from '../../config';
import TokenService from '../../services/token-service';
import './Profile.css';


class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: []
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

        fetch(`${config.API_BASE_URL}/users/user`, options)
            .then(res => {
                if (res.ok) {
                    return res.json();
                }
                else {
                    throw new Error('Something went wrong');
                }
            })
            .then(data => {
                this.setState({ users: data })
            })
            .catch(err => {
                throw new Error(err)
            }
            )
    }

    render() {
        return (
            <main className='flex-container'>
                <header role="banner">
                    <h2>My Profile</h2>
                </header>
                <section key={this.state.users.id} className='profile-section'>
                    <h4 className='profile-title'>{this.state.users.first_name} {this.state.users.last_name}</h4>
                    <p>Email: {this.state.users.email}</p>
                    <button className='deletePostBtn' onClick={() => {
                        this.props.deleteUser(this.state.users.id, this.deleteUser)
                    }}>Delete</button>
                    <Link to='/editProfile'><button className='update-btn'>Update</button></Link>
                </section>
            </main>
        )
    }
}

export default Profile;