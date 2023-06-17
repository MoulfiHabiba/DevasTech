import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { CircularProgress, Grid, Typography } from "@material-ui/core";
import { setSelectedPlace } from "../../actions";
import { setPlaces } from "../../actions";


const List = () => {
  const dispatch = useDispatch();
  const selectedPlace = useSelector((state) => state.selectedPlace);
  const places = useSelector((state) => state.places);

  useEffect(() => {
    // Simulating an API call to fetch the places data
    const fetchPlaces = async () => {
      try {
        const response = await fetch("API_URL/places"); // Replace "API_URL" with your actual API endpoint
        const data = await response.json();
        // Assuming the API response has a 'results' property containing the places array
        dispatch(setPlaces(data.results));
      } catch (error) {
        console.error("Error fetching places:", error);
      }
    };

    fetchPlaces();
  }, [dispatch]);

  const handlePlaceClick = (place) => {
    dispatch(setSelectedPlace(place));
  };

  return (
    <div>
      {places.length ? (
        <Grid container spacing={3}>
          {places.map((place, index) => (
            <Grid item key={index} xs={12}>
              {/* Render the place image */}
              {selectedPlace && selectedPlace.id === place.id ? (
                <img
                  src={place.image}
                  alt={place.name}
                  style={{ width: "100%", height: "auto" }}
                />
              ) : null}
              {/* Render the place name */}
              <Typography
                variant="h6"
                onClick={() => handlePlaceClick(place)}
                style={{ cursor: "pointer" }}
              >
                {place.name}
              </Typography>
            </Grid>
          ))}
        </Grid>
      ) : (
        <CircularProgress />
      )}
    </div>
  );
};

export default List;
