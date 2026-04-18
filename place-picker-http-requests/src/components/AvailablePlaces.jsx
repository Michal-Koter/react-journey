import Places from './Places.jsx';
import {useEffect, useState} from "react";

export default function AvailablePlaces({ onSelectPlace }) {
  const [isFetching, setIsFetching] = useState(false);
  const [availablePlaces, setAvailablePlaces] = useState([]);

  useEffect(() => {
    // async way of fetching data
    // async function fetchPlaces() {
    //   const response = await fetch('http://localhost:3000/places');
    //   const resData = await response.json();
    //   setAvailablePlaces(resData.places);
    // }
    // fetchPlaces();

    // fetch data with Promise
    setIsFetching(true);
    fetch('http://localhost:3000/places')
        .then(res => res.json())
        .then(data => {
          setAvailablePlaces(data.places);
          setIsFetching(false);
        });
  }, [])

  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      isLoading={isFetching}
      loadingText="Fetching place data..."
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
