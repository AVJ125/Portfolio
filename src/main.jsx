import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import About from './assets/Endpoints/About.jsx'
import Experience from './assets/Endpoints/Experience.jsx'
import Projects from './assets/Endpoints/Projects.jsx'
import Test from './assets/Endpoints/Test.jsx'
const router=createBrowserRouter(
  [
    {path:"/about",element:<About />},
    {path:"/experience",element:<Experience />},
    {path:"/projects",element:<Projects />},
    {path:"/",element:<About />},
    {path:"/testing",element:<Test />}


  ]
)


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}  />
  </StrictMode>,
)
