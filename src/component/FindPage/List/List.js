import {
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
} from "@material-ui/core";
import { CircularProgress } from "@mui/material";
import React, { createRef, useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import PlaceDetails from "../PlaceDetails/PlaceDetails";
import "./List.css";

const style = {
  margin: 5,
  minWidth: 150,
  backgroundColor: "rgb(181 252 255)"
};

function List({
  places,
  childClicked,
  isLoading,
  type,
  setType,
  rating,
  setRating,
}) {
  console.log({ childClicked });
  const [elRef, setElRef] = useState([]);

  useEffect(() => {
    setElRef((refs) => Array(places.length).fill().map((_, i) => refs[i] || createRef()));
  }, [places]);
  
  return (
    <Container>
      <h4>Restauransts, Hotel and Attractions around you</h4>
      {isLoading ? (
        <div className="loading">
          <CircularProgress size="5rem" />
        </div>
      ) : (
        <>
          <FormControl style={style}>
            <InputLabel style={{ color: "rgba(0,0,0,0.7)" }}>Type</InputLabel>
            <Select value={type} onChange={(e) => setType(e.target.value)}>
              <MenuItem value="restaurants">Restaurants</MenuItem>
              <MenuItem value="hotels">Hotels</MenuItem>
              <MenuItem value="attractions">Attractions</MenuItem>
            </Select>
          </FormControl>
          <FormControl style={style}>
            <InputLabel style={{ color: "rgba(0,0,0,0.7)" }}>Rating</InputLabel>
            <Select value={rating} onChange={(e) => setRating(e.target.value)}>
              <MenuItem value={0}>All</MenuItem>
              <MenuItem value={3}>Above 3.0</MenuItem>
              <MenuItem value={4}>Above 4.0</MenuItem>
              <MenuItem value={4.5}>Above 4.5</MenuItem>
            </Select>
          </FormControl>
          <Grid container spacing={3} className="list mt-1">
            {places?.map((place, i) => (
              <Grid item key={i} xs={12}>
                <PlaceDetails
                  place={place}
                  selected={Number(childClicked) === i}
                  refProp={elRef[i]}
                />
              </Grid>
            ))}
          </Grid>
        </>
      )}
    </Container>
  );
}

export default List;
