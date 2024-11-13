import * as React from "react";
import * as ReactDom from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";

import Root, { loader as rootLoader,
              action as rootAction
         } from "./routes/root.jsx"
import ErrorPage from "./error-page";

import Index from "./routes/index";

import Questions from "./pages/Questions";
import BestPillowcases from "./pages/BestPillowcases";
import MostPopular from "./pages/MostPopular";
import Blog from "./pages/Blog";
import Home from "./pages/Home";
import Thin from "./pages/Thin.jsx";
import Cooling from "./pages/Cooling.jsx";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      loader: rootLoader,
      action: rootAction,
      errorElement: <ErrorPage />,
      children: [
        {
          errorElement: <ErrorPage />,
          children: [
            { index: true, element: <Index /> },
            {
                path: "pages/most-popular",
                element: <MostPopular />,
            },
            {
                path: "pages/questions",
                element: <Questions />,
            },
            {
                path: "pages/best-pillowcases",
                element: <BestPillowcases />,
            },
            {
                path: "pages/blog",
                element: <Blog />,
            },
            {
                path: "pages/thin",
                element: <Thin />,
            },
            {
                path: "pages/cooling",
                element: <Cooling />,
            },
            {
                path: "/",
                element: <Home />,
            },
          ],
        },
      ],
    },
  ]);

ReactDom.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
