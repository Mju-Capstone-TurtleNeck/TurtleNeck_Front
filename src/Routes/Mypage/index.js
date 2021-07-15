import MypageContainer from "./MypageContainer";
import { connect } from "react-redux";
import { imageRequest } from "../../actions/authentication";

const mapStateToProps = (state) => {
  return {
    status: state.authentication.image.status,
    data: state.authentication.image.payload,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    imageRequest: (id) => {
      return dispatch(imageRequest(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MypageContainer);
