import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './router/router.jsx'
import '@smastrom/react-rating/style.css'
import { HelmetProvider } from 'react-helmet-async';
import AuthProvider from './Components/Context/AuthProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <HelmetProvider>
    <React.StrictMode>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </React.StrictMode>,
  </HelmetProvider>
)
