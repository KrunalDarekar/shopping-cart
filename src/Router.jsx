import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Home from "./pages/Home"
import Shop from "./pages/Shop"
import ErrorPage from "./pages/ErrorPage"
import Layout from "./pages/Layout"
import Cart from "./pages/Cart"
import Product from "./pages/Product"

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
                },
                {
                    path: "/product",
                    element: <Product/>
                }
            ],
            errorElement: <ErrorPage />
        }
    ])

    return <RouterProvider router={router}/>
}

export default Router