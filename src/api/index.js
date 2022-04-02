import axios from "axios";

export const getPlacesData = async (type, sw, ne) => {
  try {
    const {data: {data}} = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {
      method: "GET",
      params: {
        bl_latitude: sw.lat,
        bl_longitude: sw.lng,
        tr_longitude: ne.lng,
        tr_latitude: ne.lat,
      },
      headers: {
        "x-rapidapi-host": "travel-advisor.p.rapidapi.com",
        "x-rapidapi-key": "a57e5c6adamsh6b1cac7f2126daap11d1bajsnf641b7d694c7",
      },
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};
