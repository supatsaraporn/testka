import React, { useState } from "react";
import Layout from './layout';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { getDifferentiation } from '../functions/functions';

import { useNavigate } from "react-router-dom";
import { useStyles } from './mystyle';


function Page4() {
  const mystyle = useStyles();
  const navigate = useNavigate();
  const [h, seth] = useState();
  const [p, setp] = useState();

  const [result, setresult] = useState();

  const generate = () => {
    const data = {
      h: h,
      p: p

    };

    getDifferentiation(data).then((res) => {
      setresult(res)
    });
  }

  const back = () => {
    navigate("/");
  };
  return (

    <div>
      <Layout title={'บทที่ 4'} discription={'DIFFERENTIATION'} />

      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item xs={12} md={12} sx={12}>
            <Paper className={mystyle.paper}>

              <span>ตัวอย่างข้อมูล</span>
              <p>h = 0.64</p>
              <p>p = 2</p>

            </Paper>

            <Paper className={mystyle.paper}>

              <Grid item lg={12}>
                <Grid container spacing={4}>
                  <InputText label={'h'} value={h} set={(e) => seth(e.target.value)} />
                </Grid>
              </Grid>

              <Grid item lg={12}>
                <Grid container spacing={4}>
                  <InputText label={'p'} value={p} set={(e) => setp(e.target.value)} />
                </Grid>
              </Grid>

            </Paper>
            <Paper className={mystyle.paper}>
              <h4>ผลลัพธ์: {result}</h4>
              <div className={mystyle.root}>
                <Button variant="contained" color="primary" onClick={generate}>
                  คำนวน
              </Button>
                <Button variant="contained" color="secondary" onClick={back}>
                  กลับ
              </Button>
              </div>
            </Paper>
          </Grid>
        </Grid>

      </Container>

    </div>
  );


}

function InputText(props) {


  return (
    <Grid item md={12} sm={12}>
      <TextField
        id="outlined-password-input"
        label={props.label}
        type="text"
        autoComplete="current-password"
        variant="outlined"
        value={props.value}
        onChange={props.set}
      />
    </Grid>

  )

}
export default Page4;