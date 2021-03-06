import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ClearRoundedIcon from "@material-ui/icons/ClearRounded";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  position: fixed;
  align-items: center;
  left: 0;
  top: 0;
  width: 100%;
  height: 40px;
  box-shadow: 0px 3px 3px gray;
  background-color: #0d9e61;
  z-index: 1;
`;

const TitleText = styled.div`
  color: white;
  font-size: 30px;
  padding-left: 0;
  font-weight: bold;
`;
const RightMenu = styled.div`
  color: white;
  display: flex;
  font-size: 14px;
  width: 200px;
`;

const LeftMenu = styled.div`
  width: 200px;
`;

const drawerWidth = "20%";

const useStyles = makeStyles((theme) => ({
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
  },
  drawerPaper: {
    background: "#0D9E61",
    width: drawerWidth,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
}));

function GuidePresenter() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <div>
        <Toolbar>
          <IconButton
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon style={{ color: "white" }} />
          </IconButton>
        </Toolbar>
      </div>

      <Drawer
        className={classes.drawer}
        variant="persistent"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose} style={{ color: "white" }}>
            <ClearRoundedIcon />
          </IconButton>
        </div>
        <List>
          {["????????? ?????????", "?????? ?????????", "?????? ?????????"].map(
            (text, index) => (
              <Link
                to={{ 0: "Danger", 1: "Guide", 2: "Exercise" }[index]}
                style={{
                  textDecoration: "none",
                  color: "white",
                }}
              >
                <ListItem button key={text}>
                  <ListItemText primary={text} />
                </ListItem>
              </Link>
            )
          )}
        </List>
      </Drawer>
    </div>
  );
}
class Header extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = { login: false };
  }
  componentDidMount() {
    if (localStorage.getItem("token") == null) this.setState({ login: false });
    else {
      this.setState({ login: true });
    }
  }
  render() {
    return (
      <HeaderContainer>
        <LeftMenu>
          <GuidePresenter />
        </LeftMenu>
        <Link to="Home" style={{ textDecoration: "none" }}>
          <TitleText>TurtleNeck</TitleText>
        </Link>

        {this.state.login ? (
          <RightMenu>
            {/* {console.log(localStorage.getItem("token"))} */}
            <b
              style={{ marginLeft: "10%", cursor: "pointer", color: "white" }}
              onClick={() => {
                alert("???????????? ???????????????.");
                localStorage.removeItem("token");
                this.setState({ login: false });
                this.props.history.push("/Login");
              }}
            >
              ????????????
            </b>
            <Link
              to="Mypage"
              style={{ textDecoration: "none", marginLeft: "10%" }}
            >
              <b
                style={{
                  color: "white",
                }}
              >
                ???????????????
              </b>
            </Link>
          </RightMenu>
        ) : (
          <RightMenu>
            <Link
              to="Login"
              style={{ textDecoration: "none", marginLeft: "20%" }}
            >
              <b style={{ color: "white" }}>?????????</b>
            </Link>
            <Link
              to="Signup"
              style={{ textDecoration: "none", marginLeft: "10%" }}
            >
              <b
                style={{
                  color: "white",
                }}
              >
                ????????????
              </b>
            </Link>
          </RightMenu>
        )}
      </HeaderContainer>
    );
  }
}

export default withRouter(Header);
