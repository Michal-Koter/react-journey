import {createBrowserRouter, RouterProvider} from "react-router-dom";
import HomePage from "./page/Home";
import EventsPage, {loader as eventLoader} from "./page/Events";
import EventDetailPage, {loader as eventDetailLoader} from "./page/EventDetail";
import NewEventPage from "./page/NewEvent";
import EditEventPage from "./page/EditEvent";
import RootLayout from "./page/RootLayout";
import EventsRootLayout from "./page/EventRoot";
import ErrorPage from "./page/Error";

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
                            }
                            , {
                                path: "edit"
                                , element: <EditEventPage/>
                            }
                        ]
                    }
                    , {
                        path: "new"
                        , element: <NewEventPage/>
                    }

                ]
            }
        ]
    }

]);

function App() {
    return <RouterProvider router={router}></RouterProvider>;
}

export default App;
