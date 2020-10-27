import React, { useState } from "react";
import Layout from './layout';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';


import { getB2s } from '../functions/functions';
import { useNavigate } from "react-router-dom";
import { useStyles } from './mystyle';


function Page1() {
  const mystyle = useStyles();
  const navigate = useNavigate();
  const [bit2string, setBit2string] = useState();
  const [result, setResult] = useState("");


  const generate = () => {
    getB2s(bit2string).then((res) => {
      setResult(res);
    });
  };

  const back = () => {
    navigate("/");
  };
  return (

    <div>
      <Layout title={'บทที่ 1'} discription={'BASIC COMPUTING'} />
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item xs={12} md={12} sx={12}>
            <Paper className={mystyle.paper}>

              <span>ตัวอย่างข้อมูล</span>
              <p>011110000000010100000000</p>


            </Paper>

            <Paper className={mystyle.paper}>
              <TextField
                id="outlined-password-input"
                label="B2s"
                type="text"
                autoComplete="current-password"
                variant="outlined"
                value={bit2string}
                onChange={(e) => setBit2string(e.target.value)}
              />
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

export default Page1;