import styles from './login.module.css';
import React, {useState} from 'react';
import { Link, Redirect } from 'react-router-dom';
import { loginUser, useAuthState, useAuthDispatch } from '../../context'
 
 
function Login(props) {
 
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
 
    const dispatch = useAuthDispatch()
    const { loading, errorMessage, isAuthenticated } = useAuthState() //read the values of loading and errorMessage from context
 
 
    const handleLogin = async (e) => {
        console.log('submitted')
        e.preventDefault();
        console.log(isAuthenticated)

        loginUser(dispatch, {email, password});
    };

    if (isAuthenticated)
        return <Redirect to='/' />;

    return (
        <div className={styles.container}>
            <div className={{ width: 200 }}>
                <h1>Login Page</h1>
                {
                    errorMessage ? <p className={styles.error}>{errorMessage}</p> : null
                }
                <form onSubmit={handleLogin}>
                    <div className={styles.loginForm}>
                        <div className={styles.loginFormItem}>
                            <label htmlFor="email">Username</label>
                            <input type="text" id='email' value={email} onChange={(e) => setEmail(e.target.value)} disabled={loading}  autoComplete="on"/>
                        </div>
                        <div className={styles.loginFormItem}>
                            <label htmlFor="password">Password</label>
                            <input type="password" id='password' value={password} onChange={(e) => setPassword(e.target.value)} disabled={loading} autoComplete="on"/>
                        </div>
                    </div>
                    <button onClick={handleLogin} disabled={loading}>login</button>
                </form>
            </div>
        </div>
    )
}
 
export default Login