import {useLoaderData, Await} from "react-router-dom";
import {Suspense} from "react";
import EventsList from "../components/EventsList";

export default function EventsPage() {
    const data = useLoaderData();
    const events = data.events;

    // NOTE: if fetch date from different endpoints,
    // we must specify for eath data component separate Suspense and Await wrapper
    // to display independently those data
    return (
        <Suspense fallback={<p style={{textAlign: 'center'}}>Loading...</p>}>
            <Await resolve={events}>
                {(events) => <EventsList events={events}/>}
            </Await>
        </Suspense>
    );
}

async function loadEvents() {
    const response = await fetch('http://localhost:8080/events');

    if (!response.ok) {
        return Response.json({message: 'Could not fetch events.'}, {status: 500});
    } else {
        const data = await response.json();
        return data.events;
    }
}

export function loader() {
    return {
        events: loadEvents()
    };
}