import {createBrowserRouter} from "react-router-dom";
import RouterLayout from "./RouterLayout";
import App from "../App";
import {appChildren} from "./appChildren";


export const router = createBrowserRouter([
    {
        path:"/",
        element:<RouterLayout/>,
        children:[
            {
                path:"/",
                element:<App/>,
                children:appChildren,
            },
            {
                path:"/dashboard",
                element:<h1>Dashboard</h1>
            }
        ]
    }
])



