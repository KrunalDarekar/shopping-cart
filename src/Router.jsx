import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Home from "./pages/Home"
import Shop from "./pages/Shop"
import ErrorPage from "./pages/ErrorPage"

const Router = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Home/>,
            errorElement: <ErrorPage />
        },
        {
            path: "/shop",
            element: <Shop/>,
        }
    ])

    return <RouterProvider router={router}/>
}

export default Router