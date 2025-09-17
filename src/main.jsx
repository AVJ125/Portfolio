'use client';
import React, { Suspense, lazy ,StrictMode} from 'react';
import { createRoot } from 'react-dom/client'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import About from './assets/Endpoints/About.jsx'
// const About = lazy(() => import('./assets/Endpoints/About.jsx'));
import Experience from './assets/Endpoints/Experience.jsx'
// const Experience = lazy(() => import('./assets/Endpoints/Experience.jsx'));
import Projects from './assets/Endpoints/Projects.jsx'
// const Projects = lazy(() => import('./assets/Endpoints/Projects.jsx'));

import { Analytics } from "@vercel/analytics/react"
     
const VisualFX = lazy(() => import('./assets/components/VisualFX.jsx'));
import Rootlayout from './assets/Endpoints/Rootlayout.jsx'
import Navigations from './assets/Endpoints/navigation.jsx'

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
      <Suspense fallback={null}>
        <VisualFX />
      </Suspense>

    <Analytics/>
  </StrictMode>,
)
