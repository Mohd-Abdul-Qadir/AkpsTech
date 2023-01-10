import React from 'react'
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import img4 from "../imeges/img4.jpg";
import img5 from "../imeges/img5.jpg";
import img6 from "../imeges/img6.jpg";
import img7 from "../imeges/img7.jpg";
import img8 from "../imeges/img8.jpeg";
import Footer from'./FooterRent/Footer';
import './Rent.css';
import { ImportContacts } from '@mui/icons-material';
const Rent = () => {
  return (
    <>
    
  <div style={{backgroungImage:{img8}}}>

    <nav className="navbar " >
         <a className="navbar-brand" style={{fontWeight:'bold'}}>Rent Your Dream House</a>
    <form class="form-inline">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit" style={{backgroundColor:"#1976d2",color:"white"}}>Search</button>
    </form>
  </nav>

<div  className='card1'>
  <Card sx={{ maxWidth: 1000 }}>
      <CardActionArea>
        <div style={{display:"flex",flexDirection:"row"}}>
        <div>
        <CardMedia
          component="img"
          height="300"
          image={img4}
          alt="green iguana"
          style={{width:"300px"}}/>

          </div>

          <div>
            <div>


        <CardContent>
          <Typography gutterBottom variant="h4" component="div">
            BHK Aparment
          </Typography>
          <Typography variant="h6" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
          <Typography variant="h6" color="text.secondary">
             Address-Ashok Nagar
          </Typography>
          <Typography variant="h5" >
              ₹15L-25L 
          </Typography>
        </CardContent>
          </div>
      <div>
      <CardActions>
      <Button variant="contained" style={{ left: "569px"}}>Contact</Button>
      </CardActions>
      </div>
    </div>  
   </div>
      </CardActionArea>
    </Card>
    </div>

<div className='card2'>
    <Card sx={{ maxWidth: 1000 }}>
      <CardActionArea>
        <div style={{display:"flex",flexDirection:"row"}}>
        <div>
        <CardMedia
          component="img"
          height="300"
          image={img5}
          alt="green iguana"
          style={{width:"300px"}}/>
          </div>
          <div>
       <div>


        <CardContent>
          <Typography gutterBottom variant="h4" component="div">
            BHK Aparment
          </Typography>
          <Typography variant="h6" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
          <Typography variant="h6" color="text.secondary">
             Address-Ashok Nagar
          </Typography>
          <Typography variant="h5" >
              ₹15L-25L 
          </Typography>
        </CardContent>
          </div>
      <div>
      <CardActions>
      <Button variant="contained" style={{ left: "569px"}}>Contact</Button>
      </CardActions>
      </div>
    </div>  
   </div>
      </CardActionArea>
    </Card>
    </div>

<div className='card3'>
    <Card sx={{ maxWidth: 1000 }}>
      <CardActionArea>
        <div style={{display:"flex",flexDirection:"row"}}>
        <div>
        <CardMedia
          component="img"
          height="300"
          image={img7}
          alt="green iguana"
          style={{width:"300px"}}/>
          </div>
          <div>
       <div>


        <CardContent>
          <Typography gutterBottom variant="h4" component="div">
            BHK Aparment
          </Typography>
          <Typography variant="h6" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
          <Typography variant="h6" color="text.secondary">
             Address-Ashok Nagar
          </Typography>
          <Typography variant="h5">
              ₹15L-25L 
          </Typography>
        </CardContent>
          </div>
      <div>
      <CardActions>
      <Button variant="contained" style={{ left: "569px"}}>Contact</Button>
      </CardActions>
      </div>
    </div>  
   </div>
      </CardActionArea>
    </Card>

    </div>

<div className='card4'>
    <Card sx={{ maxWidth: 1000 }}>
      <CardActionArea>
        <div style={{display:"flex",flexDirection:"row"}}>
        <div>
        <CardMedia
          component="img"
          height="300"
          image={img6}
          alt="green iguana"
          style={{width:"300px"}} />
          </div>
          <div>
       <div>


        <CardContent>
          <Typography gutterBottom variant="h4" component="div">
            BHK Aparment
          </Typography>
          <Typography variant="h6" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
          <Typography variant="h6" color="text.secondary">
             Address-Ashok Nagar
          </Typography>
          <Typography variant="h5">
              ₹15L-25L 
          </Typography>
        </CardContent>
          </div>
      <div>
      <CardActions>
      <Button variant="contained" style={{ left: "569px"}}>Contact</Button>
      </CardActions>
      </div>
    </div>  
   </div>
      </CardActionArea>
    </Card>

    </div>

    
<Footer/>
          </div>
    </>

  )
}

export default Rent

