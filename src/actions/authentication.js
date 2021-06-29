import axios from "axios";
import {
  AUTH_REGISTER,
  AUTH_REGISTER_SUCCESS,
  AUTH_REGISTER_FAILURE,
  AUTH_LOGIN,
  AUTH_LOGIN_SUCCESS,
  AUTH_LOGIN_FAILURE,
} from "./ActionTypes";
//thunk
export function registerRequest(id, password, birth, email, zip, address) {
  return (dispatch) => {
    // Inform Register API is starting
    dispatch(register());
    return axios
      .post("/api/users/register", {
        id: id,
        password: password,
        dateOfBirth: birth,
        email: email,
        // zip,
        address: address,
      })
      .then((response) => {
        if (response.data.success) {
          console.log("success");
          // SUCCEED
          dispatch(registerSuccess(id));
        } else {
          // FAILED
          dispatch(registerFailure());
        }
      });
  };
}
export function loginRequest(id, password) {
  return (dispatch) => {
    // Inform Login API is starting
    dispatch(login());

    // API REQUEST

    return axios.post("/api/users/login", { id, password }).then((response) => {
      if (response.data.loginSuccess) {
        // SUCCEED
        dispatch(loginSuccess(id));
      } else {
        // FAILED
        dispatch(loginFailure());
      }
    });
  };
}
export function register() {
  return {
    type: AUTH_REGISTER,
  };
}

export function registerSuccess() {
  return {
    type: AUTH_REGISTER_SUCCESS,
  };
}

export function registerFailure(error) {
  return {
    type: AUTH_REGISTER_FAILURE,
    error,
  };
}

export function login() {
  return {
    type: AUTH_LOGIN,
  };
}

export function loginSuccess(id) {
  return {
    type: AUTH_LOGIN_SUCCESS,
    id,
  };
}

export function loginFailure() {
  return {
    type: AUTH_LOGIN_FAILURE,
  };
}
