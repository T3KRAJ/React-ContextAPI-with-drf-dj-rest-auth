import styles from './login.module.css';
import React, {useState} from 'react';
import { Redirect, Link } from 'react-router-dom';
import { loginUser, useAuthState, useAuthDispatch } from '../../context'
 
 
function Login() {
 
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
 
    const dispatch = useAuthDispatch()
    const { loading, errorMessage, isAuthenticated } = useAuthState();

 
 
    const handleLogin = (e) => {
        e.preventDefault();
        loginUser(dispatch, email, password);
    };

    if (isAuthenticated)
        return <Redirect to='/dashboard' />;

    return (
        <div className={styles.container}>
            <div className={{ width: 200 }}>
                <h1>Login Page</h1>
                {
                    errorMessage ? <p className={styles.error}>{errorMessage}</p> : null
                }
                <form onSubmit={handleLogin}>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" onChange={e => setEmail(e.target.value)} />
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" onChange={e => setPassword(e.target.value)}/>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                    <p className='mt-3'>
                        Don't have an account? <Link to='/signup'>Register</Link>
                    </p>
                    <p className='mt-3'>
                        <Link to='/forgotpass'>Forgot password?</Link>
                    </p>
                </form>
            </div>
        </div>
    )
}
 
export default Login