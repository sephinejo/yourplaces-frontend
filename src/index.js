import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './index.css';
import App from './App';
import ErrorPage from './error/page/ErrorPage';
import NewPlace from './places/pages/NewPlace';
import UserPlaces from './places/pages/UserPlaces';
import Users from './user/pages/Users';
import UpdatePlace from './places/pages/UpdatePlace';
import Auth from './user/pages/Auth';
import ProtectedRoute from './user/pages/ProtectedRoute';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { path: '/', element: <Users /> },
      { path: '/:userId/places', element: <UserPlaces /> },
      {
        path: 'places/new',
        element: (
          <ProtectedRoute>
            <NewPlace />
          </ProtectedRoute>
        ),
      },
      {
        path: 'places/:placeId',
        element: (
          <ProtectedRoute>
            <UpdatePlace />
          </ProtectedRoute>
        ),
      },
      {
        path: '/auth',
        element: <Auth />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
