import {Link} from "react-router-dom";

const DUMMY_EVENTS = [
    {
        "id": "e1"
        , "title": "A dummy event 1"
    }
    , {
        "id": "e2"
        , "title": "A dummy event 2"
    }
    , {
        "id": "e3"
        , "title": "A dummy event 3"
    }
]

export default function EventsPage() {
    return (
        <>
            <h1>Welcome to the Events Page!</h1>
            <ul>
                {DUMMY_EVENTS.map(event => (
                    <li key={event.id}>
                        <Link to={event.id}>{event.title}</Link>
                    </li>
                ))}
            </ul>
        </>
    );
}