import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from 'styled-components'

import theme from './styles/theme.js'
import GlobalStyles from './styles/global.js'

import { AuthProvider } from './hooks/auth.jsx'
import { OrdersProvider } from './hooks/orders.jsx'

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Routes } from './routes'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <AuthProvider>
        <OrdersProvider>
          <Routes />
        </OrdersProvider>
      </AuthProvider>

      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick={false}
        pauseOnHover
        theme="dark"
        draggable
      />
    </ThemeProvider>
  </StrictMode>,
)
