import axios from 'axios';

import {
    SIGNUP_SUCCESS,
    SIGNUP_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    ACTIVATION_SUCCESS,
    ACTIVATION_FAIL,
    RESET_PASSWORD_SUCCESS,
    RESET_PASSWORD_FAIL,
    RESET_PASSWORD_CONFIRM_SUCCESS,
    RESET_PASSWORD_CONFIRM_FAIL,
    LOGOUT,
    USER_LOADED_SUCCESS,
    USER_LOADED_FAIL,
    AUTHENTICATED_FAIL,
    AUTHENTICATED_SUCCESS
} from './types';

const baseURL = "http://127.0.0.1:8000"

export const checkAuthenticated = (dispatch) => {
    if (typeof window == 'undefined') {
        dispatch({
            type: AUTHENTICATED_FAIL
        });
    }
    if (localStorage.getItem('access')) {
        const config = {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        };
    
        const body = JSON.stringify({ token: localStorage.getItem('access') });
    
        try {
            const res = axios.post(`${baseURL}/auth/jwt/verify/`, body, config);
    
            if (res.data.code !== 'token_not_valid') {
                dispatch({
                    type: AUTHENTICATED_SUCCESS
                });
            } else {
                dispatch({
                    type: AUTHENTICATED_FAIL
                });
            }
        } catch (err) {
            dispatch({
                type: AUTHENTICATED_FAIL,
                errorMessage: err
            });
        }
    } else {
        dispatch({
            type: AUTHENTICATED_FAIL,
            // errorMessage: err
        });
    }
};

export const load_user = (dispatch) => {
    if (localStorage.getItem('access')) {
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `JWT ${localStorage.getItem('access')}`,
                'Accept': 'application/json'
            }
        };

        try {
            const res = axios.get(`${baseURL}/auth/users/me/`, config);

            dispatch({
                type: USER_LOADED_SUCCESS,
                payload: res.data
            });
        } catch (err) {
            dispatch({
                type: USER_LOADED_FAIL,
                errorMessage: err
            });
        }
    } else {
        dispatch({
            type: USER_LOADED_FAIL,
            // errorMessage: err
        });
    }
}

export const loginUser = async(dispatch, email, password) => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    const body = JSON.stringify({ email, password });

    try {
        const res = await axios.post(`${baseURL}/auth/jwt/create/`, body, config)
        console.log(res.data)
        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data
        });

        dispatch(load_user());
    } catch (err) {
        dispatch({
            type: LOGIN_FAIL,
            errorMessage: err
        });
    }
};


export const signup = async(dispatch, username, email, phone, first_name, last_name, password, re_password ) => {
    dispatch({
        type: 'START_LOADING'
    });
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    const body = JSON.stringify({ username, email, phone, first_name, last_name, password, re_password }); 

    try {
        const res = await axios.post(`${baseURL}/auth/users/`, body, config);

        dispatch({
            type: SIGNUP_SUCCESS,
            payload: res.data
        });
    } catch (err) {
        console.log(err)
        dispatch({
            type: SIGNUP_FAIL,
            errorMessage: err
        });
    }
};

export const verify = (uid, token) => async dispatch => {
    dispatch({
        type: 'START_LOADING'
    });
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    const body = JSON.stringify({ uid, token }); 

    try {
        const res = await axios.post(`${baseURL}/auth/users/activation/`, body, config);

        dispatch({
            type: ACTIVATION_SUCCESS,
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: ACTIVATION_FAIL,
            errorMessage: err
        });
    }
};

export const resetPassword = async(dispatch, email) => {
    dispatch({
        type: 'START_LOADING'
    });
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    const body = JSON.stringify({ email }); 

    try {
        await axios.post(`${baseURL}/auth/users/reset_password/`, body, config);
        dispatch({
            type: RESET_PASSWORD_SUCCESS,
            msg: "Email has been sent! Check your email for further direction."
        });
    } catch (err) {
        dispatch({
            type: RESET_PASSWORD_FAIL,
            errorMessage: err
        });
    }
};

export const reset_password_confirm = (uid, token, new_password, re_new_password) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    const body = JSON.stringify({ uid, token, new_password, re_new_password }); 

    try {
        const res = await axios.post(`${baseURL}/auth/users/reset_password_confirm/`, body, config);

        dispatch({
            type: RESET_PASSWORD_CONFIRM_SUCCESS,
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: RESET_PASSWORD_CONFIRM_FAIL,
            errorMessage: err
        });
    }
};

export const logout = async(dispatch) => {
    dispatch({
        type: 'START_LOADING'
    });
    dispatch({ type: LOGOUT });
};