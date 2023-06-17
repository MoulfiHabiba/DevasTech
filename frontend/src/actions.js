// actions.js

// Action types
export const SET_PLACES = "SET_PLACES";
export const SET_SELECTED_PLACE = "SET_SELECTED_PLACE";

// Action creators


export const setPlaces = (places) => {
    return {
      type: 'SET_PLACES',
      payload: places,
    };
  };
  

export const setSelectedPlace = (place) => ({
  type: SET_SELECTED_PLACE,
  payload: place,
});

export const setSelectedCoordinates = (coordinates) => ({
    type: "SET_SELECTED_COORDINATES",
    payload: coordinates,
  });

// actions.js


  
  