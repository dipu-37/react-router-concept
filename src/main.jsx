import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Contuct from './components/Contuct.jsx';


import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Users from './components/Users.jsx';
import UserDetails from './components/UserDetails.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    
    children: [
    
      {
        path: "/user",
        loader: ()=>fetch('https://jsonplaceholder.typicode.com/users'),
        element: <Users></Users>,
      },
      {
        path: '/user/:userId',
        loader: ({params})=>fetch(`https://jsonplaceholder.typicode.com/users/${params.userid}`),
        element: <UserDetails></UserDetails>,
      },
     
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/contuct",
        element: <Contuct></Contuct> ,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
