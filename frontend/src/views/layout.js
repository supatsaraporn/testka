import React from "react";
import "../App.css";
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  media: {
    height: 110,
  },
}));

function Layout(props) {
  const classes = useStyles();

  return (
    <React.Fragment>
    <CssBaseline />
    <Container maxWidth="lg">
    <div className={classes.root}>
      <Grid container spacing={8}>
        <Grid item xs={12}>
          
          <Cards title={props.title} discription={props.discription}/>
    
        </Grid>
      </Grid>
    </div>
    </Container>
    </React.Fragment>
  );
}

function Cards(props) {

    const classes = useStyles();
  
    return (
      <div>
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={require('../assets/cal.jpg')}
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {props.title}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {props.discription}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
    )
  }

export default Layout;