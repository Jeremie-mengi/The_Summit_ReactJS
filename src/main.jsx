import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Lodge from './Pages/Lodge'
import Our from './Pages/Our'
import TheSumm from './Pages/TheSumm'
import Contact from './Pages/Contact'
import How from './Pages/How'
import Home from './Pages/Home'

const router = createBrowserRouter(
  [{
    path:"/",
    element:<Home/>
    },

  {
  path:"/Home",
  element:<How/>
  },
  {
    path:"/Lodge",
    element:<Lodge/>
    }
    ,
  {
    path:"/Our",
    element:<Our/>
    }
    ,
  {
    path:"/TheSumm",
    element:<TheSumm/>
    }
    ,
    {
      path:"/How",
      element:<How/>
      }
      ,
      {
        path:"/Contact",
        element: <Contact/>
        }
  ]
  )
  
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
