import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { signup, useAuthDispatch } from '../context';
import { useAuthState } from '../context'

const Signup = ( ) => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        phone: '',
        first_name: '',
        lastname: '',
        password: '',
        re_password: '',
    });

    const dispatch = useAuthDispatch()
    const { loading, errorMessage, isAuthenticated } = useAuthState()


    const { username, email, phone, first_name, last_name, password, re_password } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();

        if (password === re_password) {
            signup(dispatch, username, email, phone, first_name, last_name, password, re_password );
        }
    };

    if (isAuthenticated)
        return <Redirect to='/login' />;
    
    return (
        <div className='container mt-5'>
            <h1>Sign Up</h1>
            <p>Create your Account</p>
            <form onSubmit={e => onSubmit(e)}>
                <div className='form-group'>
                    <input 
                        className='form-control'
                        type='text'
                        placeholder='Username*'
                        name='username'
                        value={username || ''}
                        onChange={e => onChange(e)}
                        required 
                    />
                </div>
                <div className='form-group'>
                    <input 
                        className='form-control'
                        type='email'
                        placeholder='Email*'
                        name='email'
                        value={email || ''}
                        onChange={e => onChange(e)}
                        required 
                    />
                </div>
                <div className='form-group'>
                    <input
                        className='form-control'
                        type='phone'
                        placeholder='phone*'
                        name='phone'
                        value={phone || ''}
                        onChange={e => onChange(e)}
                        minLength='10'
                        required
                    />
                </div>
                <div className='form-group'>
                    <input
                        className='form-control'
                        type='first_name'
                        placeholder='first_name*'
                        name='first_name'
                        value={first_name || ''}
                        onChange={e => onChange(e)}
                        required
                    />
                </div>
                <div className='form-group'>
                    <input
                        className='form-control'
                        type='last_name'
                        placeholder='last_name*'
                        name='last_name'
                        value={last_name || ''}
                        onChange={e => onChange(e)}
                        required
                    />
                </div>
                <div className='form-group'>
                    <input
                        className='form-control'
                        type='password'
                        placeholder='Password*'
                        name='password'
                        value={password || ''}
                        onChange={e => onChange(e)}
                        minLength='8'
                        required
                    />
                </div>
                <div className='form-group'>
                    <input
                        className='form-control'
                        type='password'
                        placeholder='Confirm Password*'
                        name='re_password'
                        value={re_password || ''}
                        onChange={e => onChange(e)}
                        minLength='8'
                        required
                    />
                </div>
                { errorMessage ? 
                    <p className='mt-3'>
                        {errorMessage}
                    </p>
                    :
                    <p></p>
                }
                
                <button className='btn btn-primary' type='submit'>Register</button>
            </form>
            <p className='mt-3'>
                Already have an account? <Link to='/login'>Sign In</Link>
            </p>
        </div>
    );

};

export default Signup;