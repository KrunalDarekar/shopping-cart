import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Home from "./pages/Home"
import Shop from "./pages/Shop"
import ErrorPage from "./pages/ErrorPage"
import Layout from "./pages/Layout"

const Router = () => {
    const router = createBrowserRouter([
        { 
            element: <Layout/>,
            children: [
                {
                    path: "/",
                    element: <Home/>,
                },
                {
                    path: "/shop",
                    element: <Shop/>,
                }
            ],
            errorElement: <ErrorPage />
        }
    ])

    return <RouterProvider router={router}/>
}

export default Router