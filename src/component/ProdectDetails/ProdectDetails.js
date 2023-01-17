import React from "react";
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';

import img8 from "../imeges/img8.jpeg";
import img5 from "../imeges/img5.jpg";
import img4 from "../imeges/img4.jpg";

import img3 from "../imeges/img3.jpg";


import "./ProdectDetails.css";

const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  });

const ProdectDetails = () => {
  
  return (
    <>
      <div>
      <Paper
      sx={{
        p: 10,
        margin: 'auto',
        maxWidth: 1000,
        flexGrow: 1,
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
      }}
    >
      <Grid container spacing={2}>
        <Grid item>
          <ButtonBase sx={{ width: 128, height: 128 }}>
            <Img alt="complex" src={img8} />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" component="div">
                Standard license
              </Typography>
              <Typography variant="body2" gutterBottom>
                Full resolution 1920x1080 • JPEG
              </Typography>
              <Typography variant="body2" color="text.secondary">
                ID: 1030114
              </Typography>
            </Grid>
            <Grid item>
              <Typography sx={{ cursor: 'pointer' }} variant="body2">
                Remove
              </Typography>
            </Grid>
          </Grid>
          <Grid item>
            <Typography variant="subtitle1" component="div">
              $19.00
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
      </div>
      <div className="ovw">
        <h1>Overview</h1>
        <table className="tb" style={{ fontSize: "25px" }}>
          <tr className="tr">
            <th>project Name</th>
            <td>
              <div>Ignou road</div>
            </td>
          </tr>
          <tr className="tr">
            <th>Security</th>
            <td>5,500</td>
          </tr>
          <tr className="tr">
            <th>Brokerage</th>
            <td>2,500</td>
          </tr>
          <tr className="tr">
            <th>Build up area</th>
            <td>Semi Furnished</td>
          </tr>
          <tr className="tr">
            <th>Furnishing</th>
            <td>5,500</td>
          </tr>
          <tr className="tr">
            <th>Bathrooms</th>
            <td>1</td>
          </tr>
          <tr className="tr">
            <th>Balcony</th>
            <td>2</td>
          </tr>
          <tr className="tr">
            <th>Available from</th>
            <td>Available now</td>
          </tr>
          <tr className="tr">
            <th>Floor number</th>
            <td>5</td>
          </tr>
          <tr className="tr">
            <th>Parking</th>
            <td>1 Covered and 1 Open Parking</td>
          </tr>
          <tr className="tr">
            <th>Age of property</th>
            <td>2 years</td>
          </tr>
        </table>
        <div className="">
          {/* <h3>Aboud this property</h3> */}
          {/* <span>
            A very Beautiful newly Build-up 1 roomset semi furnished flat on
            Rent near to Saket .Really well-maintained and amazing Interiors
            Very Beautiful Made Very good location Reserved car parking A
            beautiful gallery and ventilation No landlord disturbing No water or
            electricity problem 24x7 availabile sharing auto's Cab's and
            personal Auto's from Main Road
            <br></br>
            <b>Project Highlights</b>
            <br></br>
            The project also offers 1 BHK units. Residents can access numerous
            facilities, including Gym, Garden. This Apartment provides power
            backup facility for the residents. The project also enjoys a
            strategic location with easy access to healthcare centres such as
            Max Super Speciality Hospital, Saket (Max Saket), Max Super
            Speciality Hospital, and Madhukar Rainbow Children's Hospital &
            BirthRight By Rainbow Hospitals. There are schools like Koncept
            Institute Of Computer Education, The Mother's International School,
            and Laxman Public School nearby, which provides convenience for
            families with kidsCollapse
          </span> */}
        </div>
      </div>
    </>
  );
};

export default ProdectDetails;
