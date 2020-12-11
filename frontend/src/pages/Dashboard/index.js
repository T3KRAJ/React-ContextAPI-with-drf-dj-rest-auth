import React from 'react'
import { useAuthDispatch, useAuthState, logout } from '../../context'
import { Link, Redirect } from 'react-router-dom';
 
function Dashboard(props) {
    const dispatch = useAuthDispatch() // read dispatch method from context
    const { loading, errorMessage, isAuthenticated } = useAuthState()
 
    const handleLogout = () => {
        logout(dispatch) //call the logout action
        props.history.push('/login') //navigate to logout page on logout
    }
    if (!isAuthenticated)
        return <Redirect to='/login' />;
    return (
        <div style={{ padding: 10 }}>
            <div >
                <h1>
                    Dashboard
                </h1>
                <button onClick={handleLogout}>Logout</button>
            </div>
        </div>
    )
}
 
export default Dashboard