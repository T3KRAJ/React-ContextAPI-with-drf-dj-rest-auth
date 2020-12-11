import React, { useState } from 'react'
import { resetPassword } from '../context/actions'
import { useAuthDispatch, useAuthState } from '../context/context'

function ResetPass() {
    const [email, setEmail] = useState('')
    const dispatch = useAuthDispatch()
    const {loading, msg, errorMessage} = useAuthState()
    const handleSubmit = (e) => {
        e.preventDefault()
        resetPassword(dispatch, email)
    } 
    return (
        <div className="container mt-4">
            <div className="card">
                <div className="card card-body p-4">
                    <h3 className="card-title mt-3 mb-4">Reset your password</h3>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group mb-4">
                            <label htmlFor="exampleInputEmail1">Enter your email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e) => setEmail(e.target.value)}/>
                            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        {errorMessage || msg ? <div className="mb-3"><div className="lead">{errorMessage || msg}</div> 
                        <a href="" type="submit" onClick={handleSubmit}> Didn't get an email? Resend</a> </div>: <p></p>}
                        <button type="submit" className="btn btn-primary mb-4" onClick={handleSubmit}>Submit</button>
                    </form>
                </div>
            </div>
            
        </div>
    )
}

export default ResetPass
