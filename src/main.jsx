import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import About from './assets/Endpoints/About.jsx'
import Experience from './assets/Endpoints/Experience.jsx'
import Projects from './assets/Endpoints/Projects.jsx'
import { Analytics } from "@vercel/analytics/react"

import Rootlayout from './assets/Endpoints/Rootlayout.jsx'
import Navigations from './assets/Endpoints/navigation.jsx'
import Orb from './assets/components/Orb.jsx';
import SplashCursor from './assets/components/Splashcursor.jsx'
const router=createBrowserRouter(
  
    [
      {path:"/",element:<About/>},
      {path:"/about",element:<About />},
      {path:"/experience",element:<Experience />},
      {path:"/projects",element:<Projects />},
      
    ]
)


createRoot(document.getElementById('root')).render(
  <StrictMode>

    <RouterProvider router={router}  />

    
    <SplashCursor/>

    <Analytics/>
  </StrictMode>,
)
