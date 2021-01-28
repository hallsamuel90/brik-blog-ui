import React from "react"
import { Link } from "gatsby"
import AppBar from "@material-ui/core/AppBar"
import { makeStyles } from '@material-ui/core/styles';

const Nav = ({title}) => {
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    home: {
      paddingLeft: theme.spacing(2),
      color: theme.palette.secondary.main
    }
  }));

  const classes = useStyles();
  return(
    <div className={classes.root}>
      <AppBar position="static">
        <h1 className={classes.home}>
          <Link to="/">{title}</Link>
        </h1>
      </AppBar>
    </div>
  )
}

export default Nav;