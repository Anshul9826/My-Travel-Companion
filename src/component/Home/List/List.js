import { FormControl, Grid, InputLabel, MenuItem, Select } from "@material-ui/core";
import React, { useState } from "react";
import { Container } from "react-bootstrap";
import PlaceDetails from "../PlaceDetails/PlaceDetails";
import "./List.css";

const style= {
  margin:5,
  minWidth: 150, 
  backgroundColor:"rgb(57 254 57)"
}

function List() {
  const [type, setType] = useState("");
  const [rating, setRating] = useState("");

  const places =[
    { name : "Cool Place"},
    { name : "Best Beer"},
    { name : "Best Steak"},
    { name : "Cool Place"},
    { name : "Best Beer"},
    { name : "Best Steak"},
    { name : "Cool Place"},
    { name : "Best Beer"},
    { name : "Best Steak"},
  ]
  return (
    <Container className="p-5">
      <h4>Restauransts, Hotel and Attractions around you</h4>
      <FormControl variant="filled" style={style}>
        <InputLabel style={{color:"rgba(0,0,0,0.7)"}}>Type</InputLabel>
        <Select
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <MenuItem value="restaurants">Restaurants</MenuItem>
          <MenuItem value="hotels">Hotels</MenuItem>
          <MenuItem value="attractions">Attractions</MenuItem>
        </Select>
      </FormControl>
        <FormControl variant="filled" style={style}>
          <InputLabel style={{color:"rgba(0,0,0,0.7)"}}>Rating</InputLabel>
          <Select value={rating} onChange={(e) => setRating(e.target.value)}>
            <MenuItem value={0}>All</MenuItem>
            <MenuItem value={3}>Above 3.0</MenuItem>
            <MenuItem value={4}>Above 4.0</MenuItem>
            <MenuItem value={4.5}>Above 4.5</MenuItem>
          </Select>
        </FormControl>
        <Grid container spacing={3} className="list">
          {places?.map((place,i)=>(
            <Grid item key={i} xs={12}>
               <PlaceDetails place={place}/>
              </Grid>
          ))}
          </Grid>
    </Container>
  );
}

export default List;
