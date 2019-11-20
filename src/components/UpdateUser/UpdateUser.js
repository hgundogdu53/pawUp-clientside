import React, { Component } from 'react';
import TokenService from '../../services/token-service';
import config from '../../config';
import './UpdateUser.css';


class UpdateUser extends Component {
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

        fetch(`${config.API_ENDPOINT}/users/user`, options)
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

    updateUser = e => {
        e.preventDefault();

        const inputVal = {
            first_name: e.target.first_name.value,
            last_name: e.target.last_name.value,
            email: e.target.email.value,
        }

        fetch(`${config.API_ENDPOINT}/users/user`, {
            method: 'PATCH',
            body: JSON.stringify(inputVal),
            headers: {
                "Content-Type": "application/json",
                "Authorization": `bearer ${TokenService.getAuthToken()}`
            }
        })
            .then(res => {
                if (res.ok) {
                    TokenService.clearAuthToken();
                    window.location.href = '/login'
                } else {
                    return res.json().then(error => {
                        throw error;
                    });
                }
            })
    }

    render() {
        if (this.state.users) {
            return (
                <main className='flex-container'>
                    <header>
                        <h1 className='update-user-title'>Update User</h1>
                    </header>
                    <section className='update-user-section'>
                        <form id="update-user-form" className='update-user-form' onSubmit={this.updateUser}>
                            <div className="form-section">
                                <label htmlFor="first_name">First Name</label>
                                <input type="text" name="first_name" id="first_name" defaultValue={this.state.users.first_name} required />
                            </div>
                            <div className="form-section">
                                <label htmlFor="last_name">Last Name</label>
                                <input type="text" name="last_name" id="last_name" defaultValue={this.state.users.last_name} required />
                            </div>
                            <div className="form-section">
                                <label htmlFor="email">Email</label>
                                <input type="email" name="email" id="email" defaultValue={this.state.users.email} required />
                            </div>
                            <button type="submit" className='sub-btn'>Submit</button>
                            <button type="reset" className='res-btn'>Reset</button>
                        </form>
                    </section>
                </main>
            )
        } else {
            return (
                <main>
                    <h1>User Does Not Exist!</h1>
                    <h2>Try Again</h2>
                </main>
            )
        }
    }
}

export default UpdateUser;