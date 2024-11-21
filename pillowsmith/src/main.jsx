import * as React from "react";
import * as ReactDom from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";

import Root from "./routes/root.jsx";
import { loader as rootLoader,
              action as rootAction
         } from "./utils-root.jsx";
import ErrorPage from "./error-page";

import Questions from "./pages/Questions";
import BestPillowcases from "./pages/BestPillowcases.jsx";
import MostPopular from "./pages/MostPopular";
import Blog from "./pages/Blog";
import Home from "./pages/Home";
import Thin from "./pages/thin.jsx";
import Cooling from "./pages/Cooling.jsx";
import MemoryFoam from "./pages/MemoryFoam.jsx";
import ShreddedFoam from "./pages/ShreddedFoam.jsx";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      loader: rootLoader,
      action: rootAction,
      errorElement: <ErrorPage />,
      children: [
        {
          children: [
            { index: true, element: <Home /> },
            {
                path: "/pages/most-popular",
                element: <MostPopular />,
            },
            {
                path: "/pages/questions",
                element: <Questions />,
            },
            {
                path: "/pages/blog",
                element: <Blog />,
            },
            {
                path: "/pages/thin",
                element: <Thin />,
            },
            {
                path: "/pages/cooling",
                element: <Cooling />,
            },
            {
                path: "/pages/memory-foam",
                element: <MemoryFoam />,
            },
            {
                path: "/pages/shredded-memory-foam",
                element: <ShreddedFoam />,
            },
            {
                path: "/pages/best-pillowcases",
                element: <BestPillowcases />,
            },
          ],
        },
      ],
    },
  ],
  {
    basename: '/',
  },

);


ReactDom.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
