import {
  SIGNUP_SUCCESS,
  SIGNUP_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  AUTHENTICATED_FAIL,
  AUTHENTICATED_SUCCESS,
  USER_LOADED_SUCCESS,
  USER_LOADED_FAIL
} from './types';

export const initialState = {
  access: localStorage.getItem('access'),
  refresh: localStorage.getItem('refresh'),
  isAuthenticated: false,
  user: null,
  loading: false,
  errorMessage: null
};


export const AuthReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch(type) {
      case "REQUEST_LOGIN":
        return {
          ...initialState,
          loading: true
        };
      case AUTHENTICATED_SUCCESS:
        return {
            ...state,
            isAuthenticated: true
        }
      case LOGIN_SUCCESS:
        localStorage.setItem('access', payload.access);
        return {
          ...state,
          isAuthenticated: true,
          access: payload.access,
          refresh: payload.refresh
        }
      case USER_LOADED_SUCCESS:
        return {
          ...state,
          user: payload
        }
      case SIGNUP_SUCCESS:
        return {
          ...state,
          isAuthenticated: false
        }
      case AUTHENTICATED_FAIL:
        return {
          ...state,
          isAuthenticated: false,
          errorMessage: action.error
        }
      case USER_LOADED_FAIL:
        return {
          ...state,
          user: null
        }
      case SIGNUP_FAIL:
      case LOGIN_FAIL:
      case LOGOUT:
        localStorage.removeItem('access');
        localStorage.removeItem('refresh');
        return {
          ...state,
          access: null,
          refresh: null,
          isAuthenticated: false,
          user: null,
          errorMessage: action.error

        }
      default:
        return state
  }
}
