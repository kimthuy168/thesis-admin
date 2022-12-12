import { AppBar } from "react-admin";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles } from "@material-ui/core/styles";
// @ts-ignore
import logo from "../assets/logogogo.png";

const useStyles = makeStyles({
  title: {
    flex: 1,
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden",
    marginLeft: -10,
  },
  spacer: {
    flex: 1,
  },
  logo: {
    maxWidth: "40px",
    marginLeft: -35,
  },
});

// @ts-ignore
const CustomAppBar = (props) => {
  const classes = useStyles();
  return (
    <AppBar {...props} color="secondary">
      <Toolbar>
        <img src={logo} alt="logo" className={classes.logo} />
      </Toolbar>
      <Typography variant="h6" color="inherit" className={classes.title}>
        GOGO | Admin
      </Typography>
      <Typography
        variant="h6"
        color="inherit"
        className={classes.title}
        id="react-admin-title"
      />
    </AppBar>
  );
};

export default CustomAppBar;
