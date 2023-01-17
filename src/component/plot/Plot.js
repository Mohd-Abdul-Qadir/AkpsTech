import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import img4 from "../imeges/img4.jpg";
import img5 from "../imeges/img5.jpg";
import img6 from "../imeges/img6.jpg";
import img7 from "../imeges/img7.jpg";
import Footer from "./FooterPlot/Footer";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { ImportContacts } from "@mui/icons-material";
import "./Plot.css";

const Plot = () => {
  const [location, setLocation] = useState("");

  const handleChange = (e) => {
    setLocation(e.target.value);
  };

  return (
    <>
      <nav className="navbar " style={{ height: 100 }}>
        <a
          className="navbar-brand"
          style={{ fontWeight: "bold", color: "white" }}
        >
          Plots Your Dream House
        </a>
        <form
          class="form-inline"
          style={{
            backgroundColor: "white",
            padding: "7px",
            borderRadius: "26px",
            border: "1px solid black",
          }}
        >
          <FormControl variant="standard" sx={{ m: 0.5, minWidth: 120 }}>
            <Select
              value={location}
              onChange={handleChange}
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
            >
              <MenuItem value="">
                <em>Location</em>
              </MenuItem>
              <MenuItem value={10}>Delhi</MenuItem>
              <MenuItem value={20}>Mumbai</MenuItem>
              <MenuItem value={30}>Noida</MenuItem>
            </Select>
          </FormControl>
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search for locality"
            aria-label="Search"
            style={{ border: "none", marginBottom: "-10px" }}
          />
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
            style={{
              backgroundColor: "rgb(6, 41, 102)",
              color: "white",
              borderRadius: "26px",
            }}
          >
            Search
          </button>
        </form>
      </nav>

      <div className="card1">
        <Card sx={{ maxWidth: 1000 }}>
          <CardActionArea>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <div>
                <CardMedia
                  component="img"
                  height="300"
                  image={img4}
                  alt="green iguana"
                  style={{ width: "300px" }}
                />
              </div>
              <div>
                <div>
                  <CardContent>
                    <Typography gutterBottom variant="h4" component="div">
                      BHK Aparment
                    </Typography>
                    <Typography variant="h6" color="text.secondary">
                      Lizards are a widespread group of squamate reptiles, with
                      over 6,000 species, ranging across all continents except
                      Antarctica
                    </Typography>
                    <Typography variant="h6" color="text.secondary">
                      Address-Ashok Nagar
                    </Typography>
                    <Typography variant="h5">₹15L-25L</Typography>
                  </CardContent>
                </div>
                <div>
                  <CardActions>
                    <Button variant="contained" style={{ left: "569px", backgroundColor: "rgb(6, 41, 102)" }}>
                      Contact
                    </Button>
                  </CardActions>
                </div>
              </div>
            </div>
          </CardActionArea>
        </Card>
      </div>

      <div className="card2">
        <Card sx={{ maxWidth: 1000 }}>
          <CardActionArea>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <div>
                <CardMedia
                  component="img"
                  height="300"
                  image={img5}
                  alt="green iguana"
                  style={{ width: "300px" }}
                />
              </div>
              <div>
                <div>
                  <CardContent>
                    <Typography gutterBottom variant="h4" component="div">
                      BHK Aparment
                    </Typography>
                    <Typography variant="h6" color="text.secondary">
                      Lizards are a widespread group of squamate reptiles, with
                      over 6,000 species, ranging across all continents except
                      Antarctica
                    </Typography>
                    <Typography variant="h6" color="text.secondary">
                      Address-Ashok Nagar
                    </Typography>
                    <Typography variant="h5">₹15L-25L</Typography>
                  </CardContent>
                </div>
                <div>
                  <CardActions>
                    <Button variant="contained" style={{ left: "569px",backgroundColor: "rgb(6, 41, 102)" }}>
                      Contact
                    </Button>
                  </CardActions>
                </div>
              </div>
            </div>
          </CardActionArea>
        </Card>
      </div>

      <div className="card3">
        <Card sx={{ maxWidth: 1000 }}>
          <CardActionArea>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <div>
                <CardMedia
                  component="img"
                  height="300"
                  image={img7}
                  alt="green iguana"
                  style={{ width: "300px" }}
                />
              </div>
              <div>
                <div>
                  <CardContent>
                    <Typography gutterBottom variant="h4" component="div">
                      BHK Aparment
                    </Typography>
                    <Typography variant="h6" color="text.secondary">
                      Lizards are a widespread group of squamate reptiles, with
                      over 6,000 species, ranging across all continents except
                      Antarctica
                    </Typography>
                    <Typography variant="h6" color="text.secondary">
                      Address-Ashok Nagar
                    </Typography>
                    <Typography variant="h5">₹15L-25L</Typography>
                  </CardContent>
                </div>
                <div>
                  <CardActions>
                    <Button variant="contained" style={{ left: "569px",backgroundColor: "rgb(6, 41, 102)" }}>
                      Contact
                    </Button>
                  </CardActions>
                </div>
              </div>
            </div>
          </CardActionArea>
        </Card>
      </div>

      <div className="card4">
        <Card sx={{ maxWidth: 1000 }}>
          <CardActionArea>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <div>
                <CardMedia
                  component="img"
                  height="300"
                  image={img6}
                  alt="green iguana"
                  style={{ width: "300px" }}
                />
              </div>
              <div>
                <div>
                  <CardContent>
                    <Typography gutterBottom variant="h4" component="div">
                      BHK Aparment
                    </Typography>
                    <Typography variant="h6" color="text.secondary">
                      Lizards are a widespread group of squamate reptiles, with
                      over 6,000 species, ranging across all continents except
                      Antarctica
                    </Typography>
                    <Typography variant="h6" color="text.secondary">
                      Address-Ashok Nagar
                    </Typography>
                    <Typography variant="h5">₹15L-25L</Typography>
                  </CardContent>
                </div>
                <div>
                  <CardActions>
                    <Button variant="contained" style={{ left: "569px" ,backgroundColor: "rgb(6, 41, 102)"}}>
                      Contact
                    </Button>
                  </CardActions>
                </div>
              </div>
            </div>
          </CardActionArea>
        </Card>
      </div>

      <Footer />
    </>
  );
};
export default Plot;
