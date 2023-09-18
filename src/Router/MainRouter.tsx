import {createBrowserRouter} from "react-router-dom"
import Layout from "../Block/Layout"
import HomeScreen from "../pages/HomeScreen"


export const MainRouter = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children: [{
            index: true,
            element: <HomeScreen/>
        }]
    }
])