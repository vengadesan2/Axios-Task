import React from 'react'
import AppRoutes from './utils/AppRoutes'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
export const APP_URL= "https://659e2be747ae28b0bd3547b5.mockapi.io/blog/data"
function App() {
  const router = createBrowserRouter(AppRoutes)
  return<>
   
     <RouterProvider router={router}/>
  </>
}

export default App