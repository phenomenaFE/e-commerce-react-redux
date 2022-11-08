
import { createBrowserRouter } from "react-router-dom";
import App from "../app/App";
import Cart from "../pages/Cart";
import Category from "../pages/Category";
import CategoryWithProduct from "../pages/CategoryWithProduct";
import Home from '../pages/Home'
import Order from "../pages/Order";
import Payement from "../pages/Payement";
import PlaceOrder from "../pages/Placeorder";
import Product from "../pages/Product";
import ProductDetail from "../pages/ProductDetail";
import Profile from "../pages/Profile";
import Shipping from "../pages/Shipping";

const route = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                index: true,
                element: <Home />

            },
            {
                path: '/category',
                element: <Category />
            },
            {
                path: 'category/:id',
                element: <CategoryWithProduct />
            },
            {
                path: '/product',
                element: <Product />
            },
            {
                path: '/product/:id',
                element: <ProductDetail />
            },
            {
                path: '/profile',
                element: <Profile />
            },
            {
                path: '/placeorder',
                element: <PlaceOrder />
            },
            {
                path: '/order',
                element: <Order />
            },
            {
                path: '/shipping',
                element: <Shipping />
            },
            {
                path: '/cart',
                element: <Cart />
            },
            {
                path: '/payement',
                element: <Payement />
            }

        ]

    }

])

export default route