import PhoneIcon  from '@material-ui/icons/Phone';
import LocationOnIcon  from '@material-ui/icons/LocationOn';
import { Box, Button, Card, CardActions, CardContent, CardMedia, Chip, Rating, Typography } from '@mui/material';
import React from 'react'
import "./PlaceDetails.css";


function PlaceDetails({place, selected, refProp}) {
  if(selected) refProp?.current?.scrollIntoView({behavior:"smooth", block:"start"})
  return (
    <Card elevation={6}>
      <CardMedia
        style={{height: 350}}
        image={place.photo ? place.photo.images.large.url: "/assets/restaurantImg.jpg"}
        title={place.name}
      />
      <CardContent>
        <Typography gutterBottom variant='h5'>{place.name}</Typography>
        <Box display="flex" justifyContent="space-between">
        <Rating value={Number(place.rating)} readOnly />
          <Typography gutterBottom variant='subtitle1'>out of {place.num_reviews}</Typography>
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Typography variant='subtitle1'>Price</Typography>
          <Typography gutterBottom variant='subtitle1'>{place.price_level}</Typography>
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Typography variant='subtitle1'>Ranking</Typography>
          <Typography gutterBottom variant='subtitle1'>{place.ranking}</Typography>
        </Box>
        {place?.awards?.map((award, i)=>(
          <Box my={1} key={i} display="flex" justifyContent="space-between" alignItems="center">
            <img src={award.images.small} alt={award.display_name} />
            <Typography variant='subtitle2' color="textSecondary" >{award.display_name}</Typography>
          </Box>
        ))}
        {place?.cuisine?.map(({name, key})=>(
          <Chip key={key} size="small" label={name} className="my-1 me-1" />
        ))}
        {place?.address && (
          <Typography gutterBottom variant='subtitle2' color="textSecondary" className='d-flex align-items-center justify-content-between mt-2'>
            <LocationOnIcon /> {place.address}
          </Typography>
        )}
        {place?.phone && (
          <Typography gutterBottom variant='subtitle2' color="textSecondary" className='d-flex align-items-center justify-content-between'>
            <PhoneIcon /> {place.phone}
          </Typography>
        )}
        <CardActions>
          <Button size='small' color='primary' onClick={()=> window.open(place.web_url, "_blank")}>
            Trip Advisor
          </Button>
          <Button size='small' color='primary' onClick={()=> window.open(place.website, "_blank")}>
            Website
          </Button>
        </CardActions>
      </CardContent> 
    </Card>
  )
}

export default PlaceDetails