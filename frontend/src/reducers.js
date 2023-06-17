const initialState = {
    places: [],
    selectedPlace: null,
    selectedCoordinates: null,
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case "SET_PLACES":
        return {
          ...state,
          places: action.payload,
        };
      case "SET_SELECTED_PLACE":
        return {
          ...state,
          selectedPlace: action.payload,
        };
      case "SET_SELECTED_COORDINATES":
        return {
          ...state,
          selectedCoordinates: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default rootReducer;
  