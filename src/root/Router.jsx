import { createBrowserRouter } from "react-router";
import Mainlayout from "../components/Layout/Mainlayout";
import Home from "../components/Main Components/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout/>,
    children:[
        {
            index: true,
            element: <Home/>
        }
    ]
  },
]);