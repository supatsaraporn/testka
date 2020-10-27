import React from "react";
import { useNavigate } from "react-router-dom";

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
  email: {
    textAlign: 'end',
  }
}));


export default function Main() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <div className={classes.root}>
          <Grid container spacing={5}>
            <Grid item xs={12}>
              <Banner title={'Computational Mathematics'} discription={'1144311'} nextpage={"commath-pj"} />
            </Grid>
            <Grid item xs={12} md={6}>
              <Cards title={'บทที่ 1'} discription={'BASIC COMPUTING'} nextpage={"commath-pj/page1"} />
            </Grid>
            <Grid item xs={12} md={6}>
              <Cards title={'บทที่ 2'} discription={'LINEAR ALGEBRAIC EQUATIONS'} nextpage={"commath-pj/page2"} />
            </Grid>
            <Grid item xs={12} md={6}>
              <Cards title={'บทที่ 3'} discription={'INTERPOLATION & CURVE-FITTING'} nextpage={"commath-pj/page3"} />
            </Grid>
            <Grid item xs={12} md={6}>
              <Cards title={'บทที่ 4'} discription={'DIFFERENTIATION'} nextpage={"commath-pj/page4"} />
            </Grid>
            <Grid item xs={12} md={6}>
              <Cards title={'บทที่ 5'} discription={'INTEGRATION'} nextpage={"commath-pj/page5"} />
            </Grid>
            <Grid item xs={12} md={6}>
              <Cards title={'บทที่ 6'} discription={'ROOT-FINDING'} nextpage={"commath-pj/page6"} />
            </Grid>
          </Grid>
        </div>
      </Container>
    </React.Fragment>
  );
}

function Cards(props) {
  const navigate = useNavigate();

  const nextPage = (page) => {
    navigate("/" + page);
  }

  const classes = useStyles();

  return (
    <div onClick={() => { nextPage(props.nextpage) }}>
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


function Banner(props) {
  const navigate = useNavigate();
  const nextPage = (page) => {
    navigate("/" + page);
  }
  const classes = useStyles();
  return (
    <div onClick={() => { nextPage(props.nextpage) }}>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={require('../assets/bg.jpg')}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {props.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {props.discription}
              <div className={classes.email}>
                thanakorn.ka.61@ubu.ac.th
              </div>
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  )
}




