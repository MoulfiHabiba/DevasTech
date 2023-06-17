import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { setSelectedPlace, setSelectedCoordinates } from '../../actions';

const Map = () => {
  const dispatch = useDispatch();
  const selectedPlace = useSelector((state) => state.selectedPlace);

  const mapStyles = {
    height: '100vh',
    width: '100%',
  };

  const defaultCenter = {
    lat: 35.6895,
    lng: 139.6917,
  };

  const latitude = selectedPlace ? selectedPlace.latitude : defaultCenter.lat;
  const longitude = selectedPlace ? selectedPlace.longitude : defaultCenter.lng;

  const encodedLatitude = encodeURIComponent(latitude);
  const encodedLongitude = encodeURIComponent(longitude);

  const url = `https://maps.google.com/maps?q=${encodedLatitude},${encodedLongitude}&hl=es&z=14&output=embed`;

  useEffect(() => {
    const handlePlaceClick = (place) => {
      dispatch(setSelectedPlace(place));
      dispatch(setSelectedCoordinates({ lat: place.latitude, lng: place.longitude }));
    };

    // Additional code for fetching places or handling map markers if needed

  }, [dispatch]);

  return (
    <div>
      <div className="col-span-1">
        <div style={{ backgroundColor: 'rgba(240, 240, 250, 0.1)' }} className="py-15 property-details-google-map">
          <iframe
            id="map"
            src={url}
            width="100%"
            height="580px"
            allowFullScreen
            aria-hidden="false"
            tabIndex={0}
          ></iframe>
        </div>
      </div>
      <div className="col-span-1">
        {selectedPlace && (
          <div>
            <h2>{selectedPlace.name}</h2>
            <p>{selectedPlace.description}</p>
            <p>Address: {selectedPlace.address}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Map;
