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
import Page, {
    loader as pageLoader,
    action as pageAction,
} from "./routes/page";

import EditPage, {
    action as editAction,
} from "./routes/edit";

import { action as destroyAction } from "./routes/destroy";

import Index from "./routes/index";

import OurRecommendations from "./pages/OurRecommendations";
import BestPillowcases from "./pages/BestPillowcases";
import MostPopular from "./pages/MostPopular";
import Blog from "./pages/Blog";

// import App from './App.jsx'

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
                path: "pages/our-recommendations",
                element: <OurRecommendations />,
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
                path: "pages/:pageId",
                element: <Page />,
                loader: pageLoader,
                action: pageAction,
            },
            {
                path: "pages/:pageId/edit",
                element: <EditPage />,
                loader: pageLoader,
                action: editAction,
            },
            {
                path: "pages/:pageId/destroy",
                action: destroyAction,
                errorElement: <div>Oops! There was an error.</div>,
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
