import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import Players from './Pages/Players/Players';
import NotFoundPage from './Pages/NotFound/NotFoundPage';
import Home from './Pages/Home/Home'
import Teams from './Pages/Teams/Teams'
import Positions from './Pages/Positions/Positions'
import TeamPlayers from './Pages/TeamPlayers/TeamPlayers';
import PosPlayers from './Pages/PosPlayers/PosPlayers';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/home", element: <Home /> },
      { path: "/teams", element: <Teams /> },
      { path: "/positions", element: <Positions /> },
      { path: "/players", element: <Players /> },
      { path: "*", element: <NotFoundPage /> },
      {path: "/team/:team", element: <TeamPlayers />},
      {path: "/position/:position", element: <PosPlayers />}
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);