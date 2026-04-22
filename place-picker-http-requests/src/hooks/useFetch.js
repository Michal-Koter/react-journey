import {useEffect, useState} from "react";

export default function useFetch(fetchFn, initValue) {
    const [isFetching, setIsFetching] = useState();
    const [error, setError] = useState();
    const [fetchedData, setFetchedData] = useState(initValue);

    useEffect(() => {
        async function fetchData() {
            setIsFetching(true);
            try {
                const data = await fetchFn();
                setFetchedData(data);
            } catch (error) {
                setError({message: error.message || "Failed to fetch data."});
            } finally {
                setIsFetching(false);
            }

        }

        fetchData();
    }, [fetchFn]);

    return {isFetching, fetchedData, setFetchedData, error};
}