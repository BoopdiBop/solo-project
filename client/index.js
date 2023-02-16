import React from "react";
import ReactDOM from "react-dom/client";
import App from './components/App.js';
 
// webpack will see these and bundle it together
import styles from './scss/style.scss';

// Trying out React Router
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Error from './components/Error.js';

const router = createBrowserRouter([
    {
        // '/' is the root layout, other routes will be nested inside
        path: "/",
        element: <App />,
        errorElement: <Error />
    }
]);  

// createRoot is the new kid on the block (used to be renderElement or something)
ReactDOM.createRoot(document.getElementById('root')).render(
    // strict mode warns you if anything is outdated
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
) 