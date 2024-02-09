import React from 'react'
import AppRoutes from './utils/AppRoutes'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
export const APP_URL= "http://localhost:8000"
function App() {
  const router = createBrowserRouter(AppRoutes)
  return<>
   
     <RouterProvider router={router}/>
  </>
}

export default App