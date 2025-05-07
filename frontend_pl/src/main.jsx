import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import Players from './Pages/Players';
import NotFoundPage from './Pages/NotFoundPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/players", element: <Players /> },
      { path: "*", element: <NotFoundPage /> }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);