import React from 'react'
import { useAuthDispatch, logout, useAuthState } from '../../context'
import styles from './dashboard.module.css'
 
function Dashboard(props) {
    const dispatch = useAuthDispatch() // read dispatch method from context
    const userDetails = useAuthState() //read user details from context
 
 
    const handleLogout = () => {
        logout(dispatch) //call the logout action
        
        props.history.push('/login') //navigate to logout page on logout
    }
    return (
        <div style={{ padding: 10 }}>
            <div style={styles.dashboardPage} >
                <h1>
                    Dashboard
                </h1>
                <button className={styles.logoutBtn} onClick={handleLogout}>Logout</button>
            </div>
            <p>Welcome {userDetails.user.email}</p>
        </div>
    )
}
 
export default Dashboard