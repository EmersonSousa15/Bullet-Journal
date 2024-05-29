import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Welcome from "../pages/Welcome/Welcome";
import Timeline from "../pages/Timeline/Timeline";

const router = createBrowserRouter([
    {
        element: <App/>,
        children: [{
                path: '/',
                element: <Welcome/>
            },
            {
                path: '/timeline',
                element: <Timeline/>
            }
        ]
    }
])

export default router