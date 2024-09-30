import {
  createBrowserRouter,
  RouterProvider,
  
} from "react-router-dom";
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Home } from "./Home";
import { RecoverPassword } from './RecoverPassword';

const router = createBrowserRouter([
  {
  path: "/log-in",
  element: <App/>,
  },
  {
    path: "/home",
    element: <Home/>,
  },
  {
    path: "/recover-password",
    element: <RecoverPassword/>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
