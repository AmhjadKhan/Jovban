import { createBrowserRouter } from 'react-router-dom'
import MainLayout from '../Mainlayout/MainLayout';
import App from '../App';
import Home from '../Pages/Home/Home';
import Addjobs from '../Pages/Addjobs/Addjobs';
import Mypost from '../Pages/Mypost/Mypost';
import Mybids from '../Pages/Bids/Mybids';
import Error from '../Pages/Error/Error';
import Login from '../Pages/Login/Login';
import Regester from '../Pages/Regester/Regester';


const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      errorElement:<Error />,
      children:[
        {
            path:'/',
            element:<Home />  
        },
        {
          path:'addjobs',
          element:<Addjobs />
        },
        {
          path:'mypost',
          element:<Mypost />
        },
        {
          path:'mybids',
          element:<Mybids />
        },
    //     {
    //        path:'/catagoryjobs/:name',
    //        element:<CategoryJobs />,
    //        loader: ({params}) => fetch(`http://localhost:5000/cetagory/${params.name}`)
    //     },
    //     {
    //       path:'/catagoryjob/:id',
    //       element:<Details />,
    //       loader: ({params}) => fetch(`http://localhost:5000/cetagorys/${params.id}`)
    //     },
    //     {
    //       path:'/mybids',
    //       element:<Privateroute><Mybids /></Privateroute>,
    //       // loader: ({params}) => fetch(`http://localhost:5000/cetagorys/${params.id}`)
    //     },
      {
        path:'/login',
        element:<Login />
      },
      {
        path:'/regster',
        element:<Regester />
      },
      ]
    },
]);
export default router ;