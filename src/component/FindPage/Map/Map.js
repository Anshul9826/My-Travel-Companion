import React from "react";
import GoogleMapReact from "google-map-react";
import "./Map.css";
import { Paper, Rating, Typography, useMediaQuery } from "@mui/material";
import LocationOnOutlinedIcon  from "@mui/icons-material/LocationOnOutlined";
import mapStyles from "../../../mapStyles";

function Map({ setCoordinates, setBounds, coordinates, places, setChildClicked }) {
  const isDesktop = useMediaQuery('(min-width:600px)');
  
  return (
    <div className="mapContainer">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyAoF3dXJPjzXyNJr63xz6EJ9TpNNFlz3Zk" }}
        defaultCenter={{ lat: 22.7196, lng: 75.8577 }}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={{ disableDefaultUI: true, zoomControl: true, styles: mapStyles }}
        onChange={(e) => {
          setCoordinates({ lat: e.center.lat, lng: e.center.lng });
          setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
        }}
        onChildClick={(child)=> setChildClicked(child)}
      >
        {places?.map((place, i) => (
          <div
            className="markerContainer"
            lat={Number(place.latitude)}
            lng={Number(place.longitude)}
            key={i}
          >
          {
            !isDesktop ? (
              <LocationOnOutlinedIcon color="primary" fontsize="large" />
            ):(
              <Paper elevation={3} className="paper">
                <Typography className="typography" variant="subtitle2" gutterBottom>
                  {place.name}
                </Typography>
                <img src={place.photo ? place.photo.images.large.url: "/restaurantImg.jpg"} alt={place.name} className="pointer" />
                <Rating size="small" value={Number(place.rating)} readOnly />
              </Paper>
            )
          }
          </div>
        ))}
      </GoogleMapReact>
    </div>
  );
}

export default Map;
