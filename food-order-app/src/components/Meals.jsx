import Meal from "./Meal.jsx";
import Error from "./Error.jsx";
import {useEffect, useState} from "react";

export default function Meals() {
    const [meals, setMeals] = useState([]);
    const [loading, setLoading] = useState();
    const [error, setError] = useState();

    useEffect(() => {
        async function fetchMeals() {
            setLoading(true);
            try {
                const data = await fetch("http://localhost:3000/meals");
                if (!data.ok) {
                    setError({
                        title: "Something went wrong",
                        message: "Failed to fetch meals, please try again later."
                    });
                    return;
                }
                const json = await data.json();
                setMeals(json);
            } catch (error) {
                setError({
                    title: "Something went wrong",
                    message: "Failed to fetch meals, please try again later."
                });
            } finally {
                setLoading(false);
            }
        }
        fetchMeals();
    }, []);

    if (error) {
        return <Error {...error} />;
    }

    return (
        <div id="meals">
            {loading && <p>Loading meals...</p>}
            {!loading && meals.length === 0 && <p>No meals to display.</p>}
            {!loading && meals.map(meal => <Meal key={meal.id} {...meal}/>)}
        </div>
    );
}