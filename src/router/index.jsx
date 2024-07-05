import { createBrowserRouter } from "react-router-dom";

import Home from "../pages/Home";
import DynamicPage from "../pages/products/[id]";
import Contact from "../pages/Contact";
import Location from "../pages/Location";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "products/:id",
        element: <DynamicPage />,
    },
    {
        path: "/contact",
        element: <Contact />,
    },
    {
        path: "/location",
        element: <Location />,
    }
    // {
    //     path: "service/:serviceId",
    //     element: <Services />,
    // },
    // {
    //     path: "/globalBuild",
    //     element: <GloBuild />,
    // },
    // {
    //     path: "/globalBag",
    //     element: <GloBag />,
    // },

    // {
    //     path: "*",
    //     element: <div>404 Not Found</div>,
    // },
]);

export default router;
