import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Mainlayout/MainLayout";
import App from "../App";
import Home from "../Pages/Home/Home";
import Addjobs from "../Pages/Addjobs/Addjobs";
import Mypost from "../Pages/Mypost/Mypost";
import Mybids from "../Pages/Bids/Mybids";
import Error from "../Pages/Error/Error";
import Login from "../Pages/Login/Login";
import Regester from "../Pages/Regester/Regester";
import Details from "../Components/Details/Details";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path:'details/:id',
        element:<Details />,
        loader: ({params}) => fetch(`http://localhost:5000/jobs/${params.id}`)
      },
      {
        path: "addjobs",
        element: <Addjobs />,
      },
      {
        path: "mypost",
        element: <Mypost />,
      },
      {
        path: "mybids",
        element: <Mybids />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/regster",
        element: <Regester />,
      },
    ],
  },
]);
export default router;
