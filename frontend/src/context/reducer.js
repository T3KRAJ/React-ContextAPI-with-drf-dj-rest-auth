import {
  SIGNUP_SUCCESS,
  SIGNUP_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  AUTHENTICATED_FAIL,
  AUTHENTICATED_SUCCESS,
  USER_LOADED_SUCCESS,
  USER_LOADED_FAIL,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_FAIL,
  RESET_PASSWORD_CONFIRM_SUCCESS,
  RESET_PASSWORD_CONFIRM_FAIL,
} from './types';

export const initialState = {
  access: localStorage.getItem('access'),
  refresh: localStorage.getItem('refresh'),
  isAuthenticated: false,
  user: null,
  loading: false,
  errorMessage: null,
  msg: null,
};


export const AuthReducer = (state = initialState, action) => {

  switch(action.type) {
      case "START_LOADING":
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
        localStorage.setItem('access', action.payload.access);
        return {
          ...state,
          isAuthenticated: true,
          access: action.payload.access,
          refresh: action.payload.refresh
        }
      case USER_LOADED_SUCCESS:
        return {
          ...state,
          user: action.payload
        }
      case SIGNUP_SUCCESS:
        return {
          ...state,
          isAuthenticated: true,
        }
      case AUTHENTICATED_FAIL:
        return {
          ...state,
          isAuthenticated: false,
          errorMessage: action.errorMessage
        }
      case RESET_PASSWORD_SUCCESS:
        return {
          ...state,
          msg: action.msg
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
          errorMessage: action.errorMessage

        }
      default:
        return state
  }
}
