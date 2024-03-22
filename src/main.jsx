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
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
