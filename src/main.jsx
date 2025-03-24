import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
 import './index.css'
import HomePage from './routes/homePage/HomePage.jsx';
import DashboardPage from './routes/dashboardPage/DashboardPage.jsx';
import ChatPage from './routes/chatPage/ChatPage.jsx';
import RootLayout from './layout/rootLayout/rootLayout.jsx';
import DashboardLayout from './layout/dashboardLayout/DashboardLayout.jsx';
import SigninPage from './routes/signInPage/SigninPage.jsx';
import SignUpPage from './routes/signUpPage/SignupPage.jsx';



const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/sign-in",
        element: <SigninPage />,
      },
      {
        path: "/sign-up",
        element: <SignUpPage />,
      },
      {
        element: <DashboardLayout />,
        children: [
          {
            path: "/dashboard",
            element: <DashboardPage />,
          },
          {
            path: "/dashboard/chats/:id",
            element: <ChatPage />,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>   
    <RouterProvider router={router} />
  </React.StrictMode>
);
