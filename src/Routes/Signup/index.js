import SignupContainer from "./SignupContainer";
import { connect } from "react-redux";
import { registerRequest } from "../../actions/authentication";
const mapStateToProps = (state) => {
  return {
    status: state.authentication.register.status,
    errorCode: state.authentication.register.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    registerRequest: (id, pw, birth, email, zip, address) => {
      return dispatch(registerRequest(id, pw, birth, email, zip, address));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(SignupContainer);
