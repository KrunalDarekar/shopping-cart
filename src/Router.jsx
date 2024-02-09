import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Home from "./pages/Home"
import Shop from "./pages/Shop"
import ErrorPage from "./pages/ErrorPage"
import Layout from "./pages/Layout"
import Cart from "./pages/Cart"

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
                },
                {
                    path: "/cart",
                    element: <Cart/>,
                }
            ],
            errorElement: <ErrorPage />
        }
    ])

    return <RouterProvider router={router}/>
}

export default Router