import {createBrowserRouter, RouterProvider} from "react-router-dom";
import HomePage from "./page/Home";
import EventsPage, {loader as eventLoader} from "./page/Events";
import EventDetailPage, {loader as eventDetailLoader, action as deleteEventAction} from "./page/EventDetail";
import NewEventPage from "./page/NewEvent";
import EditEventPage from "./page/EditEvent";
import RootLayout from "./page/RootLayout";
import EventsRootLayout from "./page/EventRoot";
import ErrorPage from "./page/Error";
import {action as manipulateEventAction} from "./components/EventForm"
import NewsletterPage, {action as newsletterAction} from "./page/Newsletter";

const router = createBrowserRouter([
    {
        path: "/"
        , element: <RootLayout/>
        , errorElement: <ErrorPage/>
        , children: [
            {
                index: true
                , element: <HomePage/>
            }
            , {
                path: "events"
                , element: <EventsRootLayout/>
                , children: [
                    {
                        index: true
                        , element: <EventsPage/>
                        , loader: eventLoader
                    }
                    , {
                        path: ":eventId"
                        , id: "event-detail"
                        , loader: eventDetailLoader
                        , children: [
                            {
                                index: true
                                , element: <EventDetailPage/>
                                , action: deleteEventAction
                            }
                            , {
                                path: "edit"
                                , element: <EditEventPage/>
                                , action: manipulateEventAction
                            }
                        ]
                    }
                    , {
                        path: "new"
                        , element: <NewEventPage/>
                        , action: manipulateEventAction
                    }
                ]
            }
            , {
                path: 'newsletter'
                , element: <NewsletterPage/>
                , action: newsletterAction,
            }
        ]
    }

]);

function App() {
    return <RouterProvider router={router}></RouterProvider>;
}

export default App;
