import React, { Component } from 'react';
import ValidationError from '../ValidationError';
import config from '../../config';
import './SignUpForm.css';

class SignUpForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            first_name: '',
            last_name: '',
            email: '',
            password: '',
            repeatPassword: '',
            firstNameValid: false,
            lastNameValid: false,
            emailValid: false,
            passwordValid: false,
            passwordMatch: false,
            formValid: false,
            validationMessages: {
                first_name: '',
                last_name: '',
                email: '',
                password: '',
                repeatPassword: ''
            }
        }
    }

    handleUserSubmit = e => {
        e.preventDefault();

        const user = {
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            email: this.state.email,
            password: this.state.password
        }

        fetch(`${config.API_BASE_URL}/users`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(user),
        })
            .then(res => {
                return res.json()
            })
            .then(user => {
                const form = document.getElementById('signup_form');
                form.reset();
                window.location.href = '/login'
            })
            .catch(error => {
                this.setState({ signupError: error })
            })
    }

    validateFirstName(fieldValue) {
        const fieldErrors = { ...this.state.validationMessages }
        let hasError = false;

        fieldValue = fieldValue.trim();
        if (fieldValue.length === 0) {
            fieldErrors.name = 'Name is required';
            hasError = true;
        } else {
            fieldErrors.name = '';
            hasError = false;
        }

        this.setState({
            validationMessages: fieldErrors,
            firstNameValid: !hasError
        }, this.formValid);
    }

    validateLastName(fieldValue) {
        const fieldErrors = { ...this.state.validationMessages }
        let hasError = false;

        fieldValue = fieldValue.trim();
        if (fieldValue.length === 0) {
            fieldErrors.name = 'Name is required';
            hasError = true;
        } else {
            fieldErrors.name = '';
            hasError = false;
        }

        this.setState({
            validationMessages: fieldErrors,
            lastNameValid: !hasError
        }, this.formValid);
    }

    validatePassword(fieldValue) {
        const fieldErrors = { ...this.state.validationMessages };
        let hasError = false;

        fieldValue = fieldValue.trim();
        if (fieldValue.length === 0) {
            fieldErrors.password = 'Password is required';
            hasError = true;
        } else {
            if (fieldValue.length < 8 || fieldValue.length > 72) {
                fieldErrors.password = 'Password must be between 8 and 72 characters long';
                hasError = true;
            } else {
                /* eslint-disable */
                if (!fieldValue.match(new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/))) {
                    /* eslint-disable */
                    fieldErrors.password = 'Password must contain at least one number and one letter and one special character';
                    hasError = true;
                } else {
                    fieldErrors.password = '';
                    hasError = false;
                }
            }
        }

        this.setState({
            validationMessages: fieldErrors,
            passwordValid: !hasError
        }, this.formValid);

    }

    validateEmail(fieldValue) {
        const fieldErrors = { ...this.state.validationMessages };
        let hasError = false;

        fieldValue = fieldValue.trim();
        if (fieldValue.length === 0) {
            fieldErrors.email = 'Email is required';
            hasError = true;
        } else {
            /* eslint-disable */
            if (!fieldValue.match(new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/))) {
                /* eslint-disable */
                fieldErrors.email = 'Invalid Email Address'
                hasError = true;
            } else {
                fieldErrors.email = '';
                hasError = false;
            }
        }

        this.setState({
            validationMessages: fieldErrors,
            emailValid: !hasError
        }, this.formValid)
    }

    matchPasswords(fieldValue) {
        const fieldErrors = { ...this.state.validationMessages };
        let hasError = false;

        const password = this.state.password;

        if (fieldValue !== password) {
            fieldErrors.repeatPassword = 'Passwords do not match';
            hasError = true;
        } else {
            fieldErrors.repeatPassword = '';
            hasError = false;
        }

        this.setState({
            validationMessages: fieldErrors,
            passwordMatch: !hasError
        }, this.formValid);

    }

    formValid() {
        this.setState({
            formValid: this.state.emailValid && this.state.passwordValid && this.state.passwordMatch
        })
    }

    updateFirstName(name) {
        this.setState({ first_name: name }, () => { this.validateFirstName(name) });
    }

    updateLastName(name) {
        this.setState({ last_name: name }, () => { this.validateLastName(name) })
    }

    updatePassword(password) {
        this.setState({ password }, () => { this.validatePassword(password) })
    }

    updateRepeatPassword(repeatPassword) {
        this.setState({ repeatPassword }, () => { this.matchPasswords(repeatPassword) })
    }

    updateEmail(email) {
        this.setState({ email }, () => { this.validateEmail(email) })
    }

    render() {
        return (
            <section className='flex-container'>
                <header>
                    <h3 className='signup-title'>Find Your PawUp Friend Today</h3>
                </header>
                <section className='form-container'>
                    <form className='signup_form' id='signup_form' onSubmit={(event) => this.handleUserSubmit(event)}>
                        <div>
                            <label htmlFor="first_name">First name:</label>
                            <input placeholder='First Name' type="text" name='first_name' id='first-name' onChange={e => this.updateFirstName(e.target.value)} required />
                            <ValidationError hasError={!this.state.firstNameValid} message={this.state.validationMessages.name} />
                        </div>
                        <div>
                            <label htmlFor="last_name">Last name:</label>
                            <input type="text" name='last_name' id='last-name' placeholder='Last Name' onChange={e => this.updateLastName(e.target.value)} required />
                            <ValidationError hasError={!this.state.lastNameValid} message={this.state.validationMessages.name} />
                        </div>
                        <div>
                            <label htmlFor="email">Email:</label>
                            <input type="email" name='email' id='email' onChange={e => this.updateEmail(e.target.value)} required />
                            <ValidationError hasError={!this.state.emailValid} message={this.state.validationMessages.email} />
                        </div>
                        <div>
                            <label htmlFor='password'>Password (8 characters minimum):</label>
                            <input type='password' name='password' id='password' minLength='8' onChange={e => this.updatePassword(e.target.value)} required />
                            <ValidationError hasError={!this.state.passwordValid} message={this.state.validationMessages.password} />
                        </div>
                        <div>
                            <label htmlFor='confirm'>Confirm Password:</label>
                            <input type='password' name='confirm' id='confirm' minLength='8' onChange={e => this.updateRepeatPassword(e.target.value)} required />
                            <ValidationError hasError={!this.state.passwordMatch} message={this.state.validationMessages.repeatPassword} />
                        </div>
                        <button className='sub-btn' type='submit' disabled={!this.state.formValid}>Sign Up</button>
                    </form>
                </section>
            </section>
        )
    }
}

export default SignUpForm;