import axios from "axios";
import {
  AUTH_REGISTER,
  AUTH_REGISTER_SUCCESS,
  AUTH_REGISTER_FAILURE,
  AUTH_LOGIN,
  AUTH_LOGIN_SUCCESS,
  AUTH_LOGIN_FAILURE,
  AUTH_IMAGE,
  AUTH_IMAGE_SUCCESS,
  AUTH_IMAGE_FAILURE,
} from "./ActionTypes";
//thunk

const serverURL = process.env.REACT_APP_API_URL;

export function registerRequest(id, password, birth, email, zip, address) {
  return (dispatch) => {
    // Inform Register API is starting
    dispatch(register());
    return axios
      .post(serverURL + "api/users/register", {
        id: id,
        password: password,
        dateOfBirth: birth,
        email: email,
        // zip,
        address: address,
      })
      .then((response) => {
        if (response.status === 200) {
          // SUCCEED
          console.log(response.data);
          dispatch(registerSuccess(id));
        } else {
          // FAILED
          dispatch(registerFailure());
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
}
export function loginRequest(id, password) {
  return (dispatch) => {
    // Inform Login API is starting
    dispatch(login());

    // API REQUEST

    return (
      axios
        // .post("http://localhost:5000/api/users/login", { id, password })
        .post(serverURL + "api/users/login", { id, password })
        .then((response) => {
          if (response.status === 200) {
            // SUCCEED
            localStorage.setItem("token", response.data.token);
            dispatch(loginSuccess(id));
          } else {
            // FAILED
            console.log("fail");
            dispatch(loginFailure());
          }
        })
        .catch((err) => {
          console.log(err);
        })
    );
  };
}

export function imageRequest(id) {
  return (dispatch) => {
    // Inform Login API is starting
    dispatch(image());
    // API REQUEST
    let token = localStorage.getItem("token");
    return (
      (axios.defaults.headers.common["token"] = token),
      axios
        // .post("http://localhost:5000/api/users/login", { id, password })
        .post(serverURL + "api/users/get-image", { id })
        .then((response) => {
          if (response.status === 200) {
            // SUCCEED
            const resData = response.data.imageURL;
            dispatch(imageSuccess(resData));
          } else {
            // FAILED
            console.log("fail");
            dispatch(imageFailure());
          }
        })
        .catch((err) => {
          console.log(err);
        })
    );
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

export function image() {
  return {
    type: AUTH_IMAGE,
  };
}

export function imageSuccess(resData) {
  return {
    type: AUTH_IMAGE_SUCCESS,
    resData,
  };
}

export function imageFailure() {
  return {
    type: AUTH_IMAGE_FAILURE,
  };
}
