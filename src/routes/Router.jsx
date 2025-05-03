import { createBrowserRouter } from "react-router";
import Home from "../layouts/Home";
import Hom from "../pages/Hom";
import CategoryNews from "../pages/CategoryNews";

const router= createBrowserRouter(
    [
      {
        path:'/',
        Component: Home,
        children:[
          {
            path: "",
            Component: Hom,
          },
          {
            path: "/category/:id",
            Component:CategoryNews ,
            loader: ()=> fetch("/news.json")
          }
        ]
      } ,
      {
        path:'/auth',
        element: <h1>Hello lets go Auth is real</h1>,
      },
      {
        path:'/news',
        element: <h1>hot news</h1>,
      },
      {
        path:'/*',
        element: <h1>Error</h1>,
      },
    ]
)
export default router;