import React from 'react'
import ReactDOM from 'react-dom/client'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import MainLayout from './Components/MainLayout';
import Home from './Components/Home';
import ListedBook from './Components/ListedBook';
import PageRead from './Components/PageRead';
import BookDetail from './Components/BookDetail';
import Eror from './Components/Eror';
import Review from './Components/Review';
import COntact from './Components/COntact';



const router = createBrowserRouter([
  {
    path: "/",
    element:<MainLayout></MainLayout>,
    errorElement:<Eror></Eror>,
    children:[
      {
        path:'/',
        element:<Home></Home>,
      } 
      
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
