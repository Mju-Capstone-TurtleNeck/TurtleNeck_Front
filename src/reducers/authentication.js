import * as types from "../actions/ActionTypes";

const initialState = {
  login: {
    status: "INIT",
  },
  register: {
    status: "INIT",
    error: -1,
  },
  image: {
    status: "INIT",
    payload: [],
  },
  status: {
    valid: false,
    isLoggedIn: false,
    currentUser: "",
  },
};

export default function authentication(state = initialState, action) {
  switch (action.type) {
    case types.AUTH_REGISTER:
      return {
        ...state,
        register: {
          status: "WAITING",
          error: -1,
        },
      };
    case types.AUTH_REGISTER_SUCCESS:
      return {
        ...state,
        register: {
          ...state.register,
          status: "SUCCESS",
        },
      };
    case types.AUTH_REGISTER_FAILURE:
      return {
        ...state,
        register: {
          status: "FAILURE",
          error: action.error,
        },
      };
    case types.AUTH_LOGIN:
      return {
        ...state,
        login: {
          status: "WAITING",
          //추가??
        },
      };
    case types.AUTH_LOGIN_SUCCESS:
      return {
        ...state,
        login: {
          status: "SUCCESS",
        },
        status: {
          ...state.status,
          isLoggedIn: true,
          currentUser: action.id,
        },
      };
    case types.AUTH_LOGIN_FAILURE:
      return {
        ...state,
        login: {
          status: "FAILURE",
        },
      };
    case types.AUTH_IMAGE:
      return {
        ...state,
        image: {
          status: "WAITING",
        },
      };
    case types.AUTH_IMAGE_SUCCESS:
      return {
        ...state,
        image: {
          status: "SUCCESS",
          payload: action.resData,
        },
        status: {
          ...state.status,
        },
      };
    case types.AUTH_IMAGE_FAILURE:
      return {
        ...state,
        image: {
          status: "FAILURE",
        },
      };
    default:
      return state;
  }
}
