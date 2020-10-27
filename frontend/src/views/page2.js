import React, { useState } from "react";
import Layout from './layout';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { useStyles } from './mystyle';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import { useNavigate } from "react-router-dom";
import { getElimination } from '../functions/functions';

function Page2() {

  const mystyle = useStyles();
  const navigate = useNavigate();

  const [a00, seta00] = useState();
  const [a01, seta01] = useState();
  const [a02, seta02] = useState();
  const [a10, seta10] = useState();
  const [a11, seta11] = useState();
  const [a12, seta12] = useState();
  const [a20, seta20] = useState();
  const [a21, seta21] = useState();
  const [a22, seta22] = useState();

  const [b1, setb1] = useState();
  const [b2, setb2] = useState();
  const [b3, setb3] = useState();

  const [x0, setx0] = useState();
  const [x1, setx1] = useState();
  const [x2, setx2] = useState();


  const back = () => {
    navigate("/");
  };

  const generate = () => {
    const data = {
      A: [[a00, a01, a02], [a10, a11, a12], [a20, a21, a22]],
      b: [b1, b2, b3]

    };
    getElimination(data).then((res) => {
      setx0(res[0])
      setx1(res[1])
      setx2(res[2])
    });
  }

  return (
    <div>
      <Layout title={'บทที่ 2'} discription={'LINEAR ALGEBRAIC EQUATIONS'} />
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item xs={12} md={12} sx={12}>
            <Paper className={mystyle.paper}>
              <span>ตัวอย่างข้อมูล</span>
              <p>A: [ [ 6 -4 1 ] [ -4 6 -4 ] [ 1 -4 6 ] ]</p>
              <p>b: [-14 36 6 ]</p>
            </Paper>

            <Paper className={mystyle.paper}>
              <Grid container>

                <Grid item sm={9}>
                  <span>matrix : A</span>
                  <Grid container spacing={4}>
                    <InputText value={a00} set={(e) => seta00(e.target.value)} label={'a00'} />
                    <InputText value={a01} set={(e) => seta01(e.target.value)} label={'a01'}/>
                    <InputText value={a02} set={(e) => seta02(e.target.value)} label={'a02'}/>

                  </Grid>

                  <Grid container spacing={4}>
                    <InputText value={a10} set={(e) => seta10(e.target.value)} label={'a10'}/>
                    <InputText value={a11} set={(e) => seta11(e.target.value)} label={'a11'}/>
                    <InputText value={a12} set={(e) => seta12(e.target.value)} label={'a12'}/>

                  </Grid>

                  <Grid container spacing={4}>
                    <InputText value={a20} set={(e) => seta20(e.target.value)} label={'a20'}/>
                    <InputText value={a21} set={(e) => seta21(e.target.value)} label={'a21'}/>
                    <InputText value={a22} set={(e) => seta22(e.target.value)} label={'a22'}/>
                  </Grid>
                </Grid>

                <Grid item>
                  <span>matrix : B</span>
                  <Grid container spacing={4}>
                    <InputText value={b1} set={(e) => setb1(e.target.value)} label={'b1'} />
                  </Grid>
                  <Grid container spacing={4}>
                    <InputText value={b2} set={(e) => setb2(e.target.value)} label={'b2'}/>
                  </Grid>
                  <Grid container spacing={4}>
                    <InputText value={b3} set={(e) => setb3(e.target.value)} label={'b3'}/>
                  </Grid>
                </Grid>
              </Grid>

              <h4 style={{ marginBottom: "10px" }}>x0: {x0}</h4>
              <h4 style={{ marginBottom: "10px" }}>x1: {x1}</h4>
              <h4 style={{ marginBottom: "10px" }}>x2: {x2}</h4>

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
    <Grid item>
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



export default Page2;