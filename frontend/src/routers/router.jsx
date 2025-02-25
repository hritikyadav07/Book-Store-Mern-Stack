import {createBrowserRouter} from "react-router-dom";
import App from "../App";  
import Home from "../pages/home/Home.jsx"
import Login from "../components/Login.jsx";
import Register from "../components/Register.jsx";

const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children: [
        {
            path: "/",
            element: <Home/>,
        },
        {
            path : "/orders",
            element: <div>Orders</div>,
        },
        {
            path: "/about",
            element : <h1>About</h1>,
        },
        {
          path: "/login",
          element: <Login/>
        },
        {
          path: "/register",
          element : <Register/>
        }
      ]
    },
  ]);



  export default router;
