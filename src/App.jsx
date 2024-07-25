import { useState } from 'react'
import Home from './Pages/Home/Home';
import AboutUs from './Pages/About/AboutUs';
import Academics from './Pages/Academics/Academics';
import Admissions from './Pages/Admission/Admission';
import Contact from './Pages/Contact/Contact';
import Gallery from './Pages/Gallery/Gallery';
import Faculty from './Pages/Faculty/Faculty';
import Students from './Pages/Students/Students';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/aboutUs",
      element: <AboutUs />
    },
    {
      path: "/academics",
      element: <Academics />
    },
    {
      path: "/admission",
      element: <Admissions />
    },
    {
      path: "/contact",
      element: <Contact />
    },
    {
      path: "/faculty",
      element: <Faculty />
    },
    {
      path: "/gallery",
      element: <Gallery />
    },
    {
      path: "/students",
      element: <Students />
    },
  ])




  return (
    <div className='appDiv'>
     <RouterProvider router={router} />
    </div>
  )
}

export default App
