import { createBrowserRouter } from 'react-router-dom'
import MainLayout from '../Mainlayout/MainLayout';
import App from '../App';
import Home from '../Pages/Home/Home';


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
    //     {
    //       path:'/about',
    //       element:<About />
    //   },
    //   {
    //     path:'/company',
    //     element:<Company />
    //   },
    //   {
    //     path:'/mybids',
    //     element:<MyBids />
    //   },
    //   {
    //     path:'/addjobs',
    //     element:<Addjobs />
    //   },
    //   {
    //     path:'/login',
    //     element:<Login />
    //   },
    //   {
    //     path:'/regster',
    //     element:<Regester />
    //   },
      ]
    },
]);
export default router ;