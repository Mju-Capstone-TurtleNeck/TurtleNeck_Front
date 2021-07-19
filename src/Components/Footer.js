import React, { Component } from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Paper from "@material-ui/core/Paper";
import TermsOfService from "../Components/TermsOfService";
import PrivacyPolicyDetail from "../Components/PrivacyPolicyDetail";

const BREAK_POINT_MOBILE = 768;
const BREAK_POINT_TABLET = 992;
const BREAK_POINT_PC = 1200;

const FooterContainer = styled.div`
  display: flex;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 40px;
  box-shadow: 0px -1px 3px gray;
  background-color: #0d9e61;
`;

const FooterText = styled.b`
  color: white;
  margin-top: 12px;
  margin-left: 1%;
  font-size: 13px;
`;

function PaperComponent(props) {
  return <Paper {...props} />;
}

const Term1Dialog = (props) => {
  return (
    <div>
      <Dialog
        open={props.open}
        onClose={props.setClose}
        PaperComponent={PaperComponent}
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle style={{ cursor: "move" }} id="draggable-dialog-title">
          이용약관
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            <TermsOfService />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={props.setClose} color="primary">
            확인
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

const Term2Dialog = (props) => {
  return (
    <div>
      <Dialog
        open={props.open}
        onClose={props.setClose}
        PaperComponent={PaperComponent}
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle style={{ cursor: "move" }} id="draggable-dialog-title">
          개인정보 수집 및 이용
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            <PrivacyPolicyDetail />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={props.setClose} color="primary">
            확인
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Term1Dialog: false,
      Term2Dialog: false,
    };
  }

  OpenTerm1Dialog = () => {
    this.setState({
      Term1Dialog: true,
    });
  };

  OpenTerm2Dialog = () => {
    this.setState({
      Term2Dialog: true,
    });
  };

  CloseDialog = () => {
    if (this.state.Term1Dialog) this.setState({ Term1Dialog: false });
    if (this.state.Term2Dialog) this.setState({ Term2Dialog: false });
  };

  render() {
    return (
      <>
        <Term1Dialog
          open={this.state.Term1Dialog}
          setClose={this.CloseDialog}
        />
        <Term2Dialog
          open={this.state.Term2Dialog}
          setClose={this.CloseDialog}
        />
        <FooterContainer>
          <FooterText
            onClick={this.OpenTerm1Dialog}
            style={{ cursor: "pointer", marginRight: "4px" }}
          >
            이용약관
          </FooterText>
          <FooterText
            onClick={this.OpenTerm2Dialog}
            style={{ cursor: "pointer", marginRight: "4px" }}
          >
            개인 정보 정책
          </FooterText>
        </FooterContainer>
      </>
    );
  }
}

export default Footer;
