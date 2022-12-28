import logo from "./logo.svg";
import "./App.css";
import User from "./components/User";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Form from "./components/Form";
import UserDetails from "./components/UserDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <User></User>,
  },
  {
    path: "/form",
    element: <Form></Form>,
  },
  {
    path: "/details/:id",
    element: <UserDetails></UserDetails>,
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
