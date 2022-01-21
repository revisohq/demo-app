import CssBaseline from "@mui/material/CssBaseline";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex"
  }
}));

const LayoutProvider = ({ children }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      {children}
    </div>
  );
};

export default LayoutProvider;
