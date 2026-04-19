import Places from './Places.jsx';
import {useEffect, useState} from "react";
import Error from "./Error.jsx";
import {sortPlacesByDistance} from "../loc.js";
import {fetchAvailablePlaces} from "../http.js";

export default function AvailablePlaces({onSelectPlace}) {
    const [isFetching, setIsFetching] = useState(false);
    const [availablePlaces, setAvailablePlaces] = useState([]);
    const [error, setError] = useState();

    useEffect(() => {
        async function fetchPlaces() {
            setIsFetching(true);
            try {
                const places = await fetchAvailablePlaces();
                navigator.geolocation.getCurrentPosition(position => {
                    const sortedPlaces = sortPlacesByDistance(places, position.coords.latitude, position.coords.longitude);
                    setAvailablePlaces(sortedPlaces);
                })
            } catch (error) {
                setError({message: error.message || "Could not fetch places, please try again later."});
            } finally {
                setIsFetching(false);
            }
        }

        fetchPlaces();

        // async way of fetching data
        // async function fetchPlaces() {
        //   const response = await fetch('http://localhost:3000/places');
        //   const resData = await response.json();
        //   setAvailablePlaces(resData.places);
        // }
        // fetchPlaces();

        // fetch data with Promise
        // setIsFetching(true);
        // fetch('http://localhost:3000/places')
        //     .then(res => {
        //         if (res.ok) return res.json();
        //         throw new Error('Failed to fetch place data.');
        //     })
        //     .then(data => {
        //         navigator.geolocation.getCurrentPosition(position => {
        //             const sortedPlaces = sortPlacesByDistance(data.places, position.coords.latitude, position.coords.longitude);
        //             setAvailablePlaces(sortedPlaces);
        //             setIsFetching(false);
        //         })
        //     })
        //     .catch(error => {
        //         setError({message: error.message || "Could not fetch places, please try again later."});
        //         setIsFetching(false);
        //     });
    }, []);

    if (error) {
        return <Error title={"An error occurred!"} message={error.message}/>
    }

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
