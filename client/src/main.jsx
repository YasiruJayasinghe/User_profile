import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Home from "./assets/home.jsx";
import CreateUser from "./assets/createUser.jsx";
import UpdateUser from "./components/updateUser.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch('http://localhost:5000/users')
      },
      {
        path: "/create-user",
        element: <CreateUser />,
      },
      {
        path: "/update-user/:id",
        element: <UpdateUser/>,
        loader: ({params}) => fetch(`http://localhost:5000/users/${params.id}`)
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
