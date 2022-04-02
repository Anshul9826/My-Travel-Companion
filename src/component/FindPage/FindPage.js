import React from "react";
import "./FindPage.css";
import Map from "./Map/Map";
import List from "./List/List";
import { CssBaseline, Grid } from "@material-ui/core";
import { getPlacesData } from "../../api";
import { useEffect, useState } from "react";
import { Autocomplete } from "@react-google-maps/api";
import SearchBar from "./SearchBar";

function FindPage() {
  const [places, setPlaces] = useState([]);
  const [bounds, setBounds] = useState({});
  const [childClicked, setChildClicked] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [type, setType] = useState("restaurants");
  const [rating, setRating] = useState("");
  const [filteredPlaces, setFilteredPlaces] = useState([]);
  const [coordinates, setCoordinates] = useState({});
  const [autocomplete, setAutocomplete] = useState(null);

  const onLoad = (autoC) => setAutocomplete(autoC);

  const onPlaceChanged = () => {
    const lat = autocomplete.getPlace().gometry.location.lat();
    const lng = autocomplete.getPlace().gometry.location.lng();

    setCoordinates({ lat, lng });
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoordinates({ lat: latitude, lng: longitude });
      }
    );
  }, []);

  useEffect(() => {
    const filteredPlaces = places.filter((place) => place.rating > rating);

    setFilteredPlaces(filteredPlaces);
  }, [rating]);

  useEffect(() => {
    if (bounds.sw && bounds.ne) {
      setIsLoading(true);
      getPlacesData(type, bounds.sw, bounds.ne).then((data) => {
        console.log(data);
        setPlaces(data?.filter((place) => place.name && place.num_reviews > 0));
        setFilteredPlaces([]);
        setIsLoading(false);
      });
    }
  }, [type, bounds]);
  return (
    <div className="d-flex flex-column heroSection findContainer" style={{height:"auto"}}>
      <CssBaseline />
      <Autocomplete
        onLoad={onLoad}
        onPlaceChanged={onPlaceChanged}
        className="mx-5 mt-3"
      >
        <SearchBar />
      </Autocomplete>
      <Grid container spacing={3} style={{ width: "100%" }} className="p-4">
        <Grid item xs={12} md={4}>
          <List
            places={filteredPlaces.length ? filteredPlaces : places}
            childClicked={childClicked}
            isLoading={isLoading}
            type={type}
            setType={setType}
            rating={rating}
            setRating={setRating}
          />
        </Grid>
        <Grid item xs={12} md={8}>
          <Map
            setCoordinates={setCoordinates}
            setBounds={setBounds}
            coordinates={coordinates}
            places={filteredPlaces.length ? filteredPlaces : places}
            setChildClicked={setChildClicked}
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default FindPage;
