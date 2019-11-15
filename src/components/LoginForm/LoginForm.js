
import React from 'react';
import './LoginForm.css';

function LoginForm(props) {
    return (
        <section className='flex-container'>
            <h2 className='login-title'>Log In</h2>
            <form className='login_form' onSubmit={props.loginUser}>
                <section className='login_form-container'>
                    <div>
                        <label htmlFor='login_email'>Email:</label>
                        <input type='email' name='login_email' id='login_email' />
                    </div>
                    <div>
                        <label htmlFor='login_password'>Password:</label>
                        <input type='password' name='password' id='login_password' />
                    </div>
                    <button type='submit' className='sub-btn'>Log in</button>
                    {props.error ? <h4>Incorrect Email or Password</h4> : <></>}
                </section>
            </form>
            <section>
                <h3>PawUp Demo Credentials</h3>
                <p>Email: abc@xyz.com</p>
                <p>Password: password</p>
            </section>
        </section>
    )
}

export default LoginForm;