import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import './App.css';
import Dashboard from "./Components/Dashboard";
import Login from "./Components/Login";




function App() {
  let router = createBrowserRouter([
    {
      path: '/',
      element: <Login />
    },

    {
      path: '/dashboard',
      element: <Dashboard  />
    }
  ])
  return (<RouterProvider router={router} />
  );
}

export default App;
