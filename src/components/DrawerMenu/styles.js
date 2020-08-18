import { makeStyles } from "@material-ui/core";
const drawerWidth = 240;

const useStyles = makeStyles(({ open, ...theme }) => ({
  drawerToolbar: {
    position: "fixed",
    backgroundColor: "#fff",
    zIndex: theme.zIndex.drawer + 1,
    borderBottom: "1px solid #eee",
    width: drawerWidth,
  },
  menuIcon: {
    marginRight: theme.spacing(1 / 2),
  },
  logo: {
    height: 18,
  },
  grow: {
    flexGrow: 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    borderRight: "none",
    overflow: "hidden",

    "&:hover": {
      overflowY: "scroll",
    },
    "&::-webkit-scrollbar": {
      width: 8,
      height: 2,
    },
    // "&::-webkit-scrollbar-button": {
    //   background: "#ccc",
    // },
    // "&::-webkit-scrollbar-track-piece": {
    //   background: "#888",
    // },
    "&::-webkit-scrollbar-thumb": {
      background: "#eee",
    },
  },
  drawerContainer: {},
  listItem: {
    paddingTop: 4,
    paddingBottom: 4,
  },
  listItemText: {
    fontSize: 14,
  },
  subheader: {
    textTransform: "uppercase",
  },
}));

export default useStyles;
