import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { createTheme, MantineProvider } from '@mantine/core';
const theme = createTheme({
  /** Put your mantine theme override here */
});
const queryClient = new QueryClient()
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <MantineProvider theme={theme}>  
        <QueryClientProvider client={queryClient}>
          <App/>
          <ToastContainer autoClose={2000}/>
        </QueryClientProvider>
      </MantineProvider>
  </React.StrictMode>
)
// All the External Contexts will reside here 