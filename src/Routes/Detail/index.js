import DetailContainer from "./DetailContainer";
import { connect } from "react-redux";
import { uploadRequest } from "../../actions/authentication";

const mapStateToProps = (state) => {
  return {
    status: state.authentication.upload.status,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    uploadRequest: (formData) => {
      return dispatch(uploadRequest(formData));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(DetailContainer);
