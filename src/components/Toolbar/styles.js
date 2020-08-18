import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  appBar: {
    boxShadow: "none",
    // zIndex: theme.zIndex.drawer + 1,

  },
  menuIcon: {
    marginRight: theme.spacing(5),
  },
  logo: {
    height: 18,
  },
  grow: {
    flexGrow: 1,
  },
  icons: {
    marginRight: theme.spacing(1 / 2),
  },
}));

export default useStyles;
