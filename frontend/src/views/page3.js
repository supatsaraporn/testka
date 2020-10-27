import React, { useState } from "react";
import Layout from './layout';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';


import { getInterpolation } from "../functions/functions";
import { useNavigate } from "react-router-dom";
import { useStyles } from './mystyle';


function Page3() {
  const mystyle = useStyles();
  const navigate = useNavigate();
  const [x, setx] = useState();
  const [xi1, setxi1] = useState();
  const [xi2, setxi2] = useState();
  const [xi3, setxi3] = useState();
  const [xi4, setxi4] = useState();
  const [xi5, setxi5] = useState();
  const [xi6, setxi6] = useState();
  const [yi1, setyi1] = useState();
  const [yi2, setyi2] = useState();
  const [yi3, setyi3] = useState();
  const [yi4, setyi4] = useState();
  const [yi5, setyi5] = useState();
  const [yi6, setyi6] = useState();

  const [result, setresult] = useState();

  const generate = () => {
    const data = {
      x:x,
      xi:[xi1,xi2,xi3,xi4,xi5,xi6],
      yi:[yi1,yi2,yi3,yi4,yi5,yi6]
      
    };
    getInterpolation(data).then((res) => {
        setresult(`วินาทีที่ ${x} จะมีความเร็วประมาณ ${res}`)
    });
  };
  const back = () => {
    navigate("/");
  };
  return (

    <div>
      <Layout title={'บทที่ 3'} discription={'INTERPOLATION & CURVE-FITTING'} />

      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item xs={12} md={12} sx={12}>
            <Paper className={mystyle.paper}>

              <span>ตัวอย่างข้อมูล</span>
              <p>t = 5 </p>
              <p>x = [ 0, 8, 14, 20, 23, 30 ]</p>
              <p>y = [ 0, 50, 96, 110, 100, 86 ]</p>

            </Paper>

            <Paper className={mystyle.paper}>

            <Grid item md={12}>

                <Grid container spacing={4}>
                  <InputText label={'t'} value={x} set={(e) => setx(e.target.value)}/>
                </Grid>
              </Grid>

              <Grid item md={12}>

                <Grid container spacing={4}>
                  <InputText label={'xi'} value={xi1} set={(e) => setxi1(e.target.value)}/>
                  <InputText label={'xi'} value={xi2} set={(e) => setxi2(e.target.value)}/>
                  <InputText label={'xi'} value={xi3} set={(e) => setxi3(e.target.value)}/>
                  <InputText label={'xi'} value={xi4} set={(e) => setxi4(e.target.value)}/>
                  <InputText label={'xi'} value={xi5} set={(e) => setxi5(e.target.value)}/>
                  <InputText label={'xi'} value={xi6} set={(e) => setxi6(e.target.value)}/>
                </Grid>

              </Grid>
              <Grid item md={12}>

                <Grid container spacing={4}>
                  <InputText label={'yi'} value={yi1} set={(e) => setyi1(e.target.value)}/>
                  <InputText label={'yi'} value={yi2} set={(e) => setyi2(e.target.value)}/>
                  <InputText label={'yi'} value={yi3} set={(e) => setyi3(e.target.value)}/>
                  <InputText label={'yi'} value={yi4} set={(e) => setyi4(e.target.value)}/>
                  <InputText label={'yi'} value={yi5} set={(e) => setyi5(e.target.value)}/>
                  <InputText label={'yi'} value={yi6} set={(e) => setyi6(e.target.value)}/>
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
    <Grid item md={2} sm={12}>
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

export default Page3;