import { createBrowserRouter } from "react-router";
import Mainlayout from "../components/Layout/Mainlayout";
import Home from "../components/Main Components/Home";
import Skills from "../pages/Skills";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout/>,
    children:[
        {
            index: true,
            element: <Home/>
        },
        {
          path:'skills',
          element: <Skills/>
        }
    ]
  },
]);