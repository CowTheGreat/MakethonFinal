import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./routes/RootLayout.jsx";
import "./index.css";

import Manuscripts from "./routes/Manuscripts.jsx";
import Sculptures from "./routes/Sculptures.jsx";
import Research from "./routes/Research.jsx";
import Suggestions from "./routes/Suggestions.jsx";
import LandingPage from "./routes/LandingPage.jsx";
import ThreeSixtyTour from "./routes/ThreeSixtyTour.jsx";
import AR from "./components/AR.jsx";
import ThreeSixty from "./components/ThreeSixty.jsx";

// import reportWebVitals from "./reportWebVitals.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <LandingPage /> },
      { path: "/manuscripts", element: <Manuscripts /> },
      { path: "/sculptures", element: <Sculptures /> },
      { path: "/threesixty", element: <ThreeSixtyTour /> },
      { path: "/research", element: <Research /> },
      { path: "/suggestions", element: <Suggestions /> },
      { path: "/ar", element: <AR /> },
      {
        path: "/tour1",
        element: (
          <ThreeSixty ariframe="https://kuula.co/share/collection/7ccKk?logo=1&info=1&fs=1&vr=0&sd=1&initload=0&autop=5&thumbs=1" />
        ),
      },
      {
        path: "/tour2",
        element: (
          <ThreeSixty ariframe="https://kuula.co/share/collection/7ccJX?logo=1&info=1&fs=1&vr=0&sd=1&initload=0&autop=5&thumbs=1" />
        ),
      },
      {
        path: "/tour3",
        element: (
          <ThreeSixty ariframe="https://kuula.co/share/collection/7ccXH?logo=1&info=1&fs=1&vr=0&sd=1&initload=0&autop=5&thumbs=1" />
        ),
      },
      {
        path: "/tour4",
        element: (
          <ThreeSixty ariframe="https://kuula.co/share/collection/7cccv?logo=1&info=1&fs=1&vr=0&sd=1&initload=0&autop=5&thumbs=1" />
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
