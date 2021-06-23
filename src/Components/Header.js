import React, { Component } from "react";
import { Link } from "react-router-dom";
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
  border-bottom: solid 2px grey;
  background-color: #0d9e61;
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
  padding-left: 0;
  font-size: 14px;
  width: 150px;
  float: right;
`;

const LeftMenu = styled.div`
  width: 150px;
`;
const drawerWidth = "10%";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },

  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    background: "#0D9E61",
    color: "white",
    zIndex: 1000,
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
    <div className={classes.root}>
      <div>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
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
          {["거북목 위험성", "교정 운동법", "이용 가이드"].map(
            (text, index) => (
              <Link
                to={{ 0: "Danger", 1: "Exercise", 2: "Guide" }[index]}
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
    this.state = { login: true };
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
            <p
              style={{ paddingLeft: "80px", cursor: "pointer" }}
              onClick={this.setState({ login: false })}
            >
              로그아웃
            </p>
          </RightMenu>
        ) : (
          <RightMenu>
            <Link to="Login" style={{ textDecoration: "none" }}>
              <p style={{ color: "white" }}>로그인</p>
            </Link>
            <Link to="Signup" style={{ textDecoration: "none" }}>
              <p
                style={{
                  color: "white",
                  marginRight: "20px",
                  marginLeft: "30px",
                }}
              >
                회원가입
              </p>
            </Link>
          </RightMenu>
        )}
      </HeaderContainer>
    );
  }
}

export default Header;
