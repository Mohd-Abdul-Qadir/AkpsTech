import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';

export default function PaymentForm() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Flat Buy/Sell Details
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6} style= {{ marginTop: '7.5px'}}>
          <TextField
            required
            id="cardName"
            label="Project Name/House Name"
            fullWidth
            autoComplete="cc-name"
            variant="standard"
          />
        </Grid>

        <Grid item xs={12} md={6}>
        <InputLabel id="demo-simple-select-label">Flat Buy/Sell*</InputLabel>
        <Select
          
            required
            id="cvv"
            label="Flat Buy/Sell"
            fullWidth
            autoComplete="cc-csc"
            variant="standard"
          >
              <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Buy</MenuItem>
          <MenuItem value={20}>Rent</MenuItem>
        </Select>
        </Grid>


        
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="expDate"
            label="Build Up area"
            fullWidth
            autoComplete="cc-exp"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cvv"
            label="Bathroom Available"
            helperText="How Many Bathroom Available"
            fullWidth
            autoComplete="cc-csc"
            variant="standard"
          />
        </Grid>

        <Grid item xs={12} md={6} style= {{ marginTop: '7.5px'}}>
          <TextField
            required
            id="cardNumber"
            label="Security fee"
            fullWidth
            autoComplete="cc-number"
            variant="standard"
          />
        </Grid>

        <Grid item xs={12} md={6}>
        <InputLabel id="demo-simple-select-label">Furnishing*</InputLabel>
        <Select
          
            required
            id="cvv"
            label="Furnishing"
            fullWidth
            autoComplete="cc-csc"
            variant="standard"
          >
              <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Semi Furnished</MenuItem>
          <MenuItem value={20}>Full Furnished</MenuItem>
          <MenuItem value={30}>Not Furnished</MenuItem>
        </Select>
        </Grid>

        <Grid item xs={12} md={6}>
        <InputLabel id="demo-simple-select-label">Balcony*</InputLabel>
        <Select
          
            required
            id="cvv"
            label="Balcony"
            fullWidth
            autoComplete="cc-csc"
            variant="standard"
          >
              <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={40}>0</MenuItem>
          <MenuItem value={10}>1</MenuItem>
          <MenuItem value={20}>2</MenuItem>
          <MenuItem value={30}>3</MenuItem>
          <MenuItem value={30}>4</MenuItem>
        </Select>
        </Grid>

        <Grid item xs={12} md={6}>
        <InputLabel id="demo-simple-select-label">Lease Type*</InputLabel>
        <Select
          
            required
            id="cvv"
            label="Lease Type"
            fullWidth
            autoComplete="cc-csc"
            variant="standard"
          >
              <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Family</MenuItem>
          <MenuItem value={20}>Bachelor</MenuItem>
          <MenuItem value={30}>Company/Business</MenuItem>
        </Select>
        </Grid>


        <Grid item xs={12} md={6}>
        <InputLabel id="demo-simple-select-label">Parking*</InputLabel>
        <Select
          
            required
            id="cvv"
            label="Parking"
            fullWidth
            autoComplete="cc-csc"
            variant="standard"
          >
              <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Only for bike</MenuItem>
          <MenuItem value={20}>Only for Car</MenuItem>
          <MenuItem value={30}>Both Available</MenuItem>
        </Select>
        </Grid>

        <Grid item xs={12} md={6}>
        <InputLabel id="demo-simple-select-label">Main enterance facing*</InputLabel>
        <Select
          
            required
            id="cvv"
            label="Parking"
            fullWidth
            autoComplete="cc-csc"
            variant="standard"
          >
              <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>East</MenuItem>
          <MenuItem value={20}>West</MenuItem>
          <MenuItem value={30}>North</MenuItem>
          <MenuItem value={40}>South</MenuItem>
        </Select>
        </Grid>

        



        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveCard" value="yes" />}
            label="Remember details for next time"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}