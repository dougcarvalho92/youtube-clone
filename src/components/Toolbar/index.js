import {
  AppBar,
  Button,
  IconButton,
  Switch,
  Toolbar,
  useTheme,
} from "@material-ui/core";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Apps from "@material-ui/icons/Apps";
import MenuIcon from "@material-ui/icons/Menu";
import MoreVert from "@material-ui/icons/MoreVert";
import VideoCall from "@material-ui/icons/VideoCall";
import React from "react";
import LogoDark from "../../assets/icons/dark.svg";
import LogoLight from "../../assets/icons/light.svg";
import useStyles from "./styles";

function ToolbarTop({ darkMode, setDarkMode, handleChange }) {
  const classes = useStyles();
  const theme = useTheme();
  const toggleDrawer = () => {
    handleChange();
  };
  return (
    <AppBar color="inherit" className={classes.appBar}>
      <Toolbar>
        <IconButton
          edge="start"
          className={classes.menuIcon}
          aria-label="menu"
          onClick={() => toggleDrawer()}
        >
          <MenuIcon />
        </IconButton>
        <img
          src={theme.palette.type === "dark" ? LogoDark : LogoLight}
          alt="logo"
          className={classes.logo}
        />

        <div className={classes.grow} />
        <Switch
          value={darkMode}
          onChange={() => setDarkMode(!darkMode)}
          className={classes.icons}
        />
        <IconButton className={classes.icons}>
          <VideoCall />
        </IconButton>
        <IconButton className={classes.icons}>
          <Apps />
        </IconButton>
        <IconButton className={classes.icons}>
          <MoreVert />
        </IconButton>
        <Button
          startIcon={<AccountCircle />}
          variant="outlined"
          color="secondary"
        >
          Fazer Login
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default ToolbarTop;
