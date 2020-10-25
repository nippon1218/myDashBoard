import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 840,
  },
}));


const Temperature = () => {
    const classes = useStyles();
    return (
      <Paper className={classes.paper}>
      <form className={classes.root} noValidate autoComplete="off">
          <TextField id="standard-basic" label="F" />
          <TextField id="filled-basic" label="C" variant="filled" />
          <TextField id="outlined-basic" label="Outlined" variant="outlined" />
          <Input defaultValue="Hello world" inputProps={{ 'aria-label': 'description' }} />
          <Input placeholder="Placeholder" inputProps={{ 'aria-label': 'description' }} />
      </form>
      </Paper> 
    );
}

export default Temperature;
