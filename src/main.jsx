import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import { router } from './Route/Route.jsx';

import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import AuthProbider from './Provider/AuthProbider.jsx';

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
 <div className=' mx-auto w-11/12'>
   <React.StrictMode>
     <QueryClientProvider client={queryClient}>
    <AuthProbider>
    <RouterProvider router={router} />
    </AuthProbider>
     </QueryClientProvider>
  </React.StrictMode>
 </div>
)
