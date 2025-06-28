import { createBrowserRouter } from "react-router";
import Mainlayout from "../components/Layout/Mainlayout";
import Home from "../components/Main Components/Home";
import Skills from "../pages/Skills";
import Projects from "../pages/Projects";

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
        },
        {
          path: 'projects',
          element: <Projects/>
        }
    ]
  },
]);