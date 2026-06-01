import {createBrowserRouter, RouterProvider} from "react-router-dom";
import HomePage from "./page/Home";
import EventsPage from "./page/Events";
import EventDetailPage from "./page/EventDetail";
import NewEventPage from "./page/NewEvent";
import EditEventPage from "./page/EditEvent";
import RootLayout from "./page/RootLayout";
// Challenge / Exercise

// 6. Output a list of dummy events to the EventsPage
//    Every list item should include a link to the respective EventDetailPage
// 7. Output the ID of the selected event on the EventDetailPage
// BONUS: Add another (nested) layout route that adds the <EventNavigation> component above all /events... page components


const router = createBrowserRouter([
    {
        path: "/"
        , element: <RootLayout/>
        , children: [
            {
                index: true
                , element: <HomePage/>
            }
            , {
                path: "events"
                , element: <EventsPage/>
            }
            , {
                path: "events/:eventId"
                , element: <EventDetailPage/>
            }
            , {
                path: "events/new"
                , element: <NewEventPage/>
            }
            , {
                path: "events/:eventId/edit"
                , element: <EditEventPage/>
            }
        ]
    }

]);

function App() {
    return <RouterProvider router={router}></RouterProvider>;
}

export default App;
