import { createBrowserRouter } from "react-router";
import Mainlayout from "../components/Layout/Mainlayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout/>,
  },
]);