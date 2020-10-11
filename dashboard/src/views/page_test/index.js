import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import {Button} from '@material-ui/core';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 540,
  },
  image: {
    width: 136,
    height: 136,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
}));

const ajaxfun = ()=> {
    axios.get("http://localhost:6002/arr").then((ok)=>{
        console.log(ok);
    })
}


export default function ComplexGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src="/static/images/auth.jpeg" />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  Standard license
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Full resolution 1920x1080 • JPEG
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  ID: 1030114
                </Typography>
              </Grid>
              <Grid container spacing={5}>
                      <Grid item>
                         <Button onClick={ajaxfun}>
                           <Typography variant="body2" style={{ cursor: 'pointer' }}>
                               remove 
                           </Typography>
                         </Button >
                      </Grid>

                      <Grid item>
                         <Button >
                            <Typography variant="body2" style={{ cursor: 'pointer' }}>
                                Like 
                            </Typography>
                         </Button >
                      </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1">$ 19.00</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

