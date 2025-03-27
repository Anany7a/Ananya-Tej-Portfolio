import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import './index.css'
import App from './App.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './components/Layout'
import LoadingTransition from "./components/ui/LoadingTransition";

// Lazy load performance pages
const NaughtyBoyPage = React.lazy(() => import('./components/performances/NaughtyBoyPage'));
const NukkadNatakPage = React.lazy(() => import('./components/performances/NukkadNatakPage'));
const SholayPage = React.lazy(() => import('./components/performances/SholayPage'));
const DramaClubPage = React.lazy(() => import('./components/performances/DramaClubPage'));
const VFXInternPage = React.lazy(() => import('./components/performances/VFXInternPage'));
const DestinyPage = React.lazy(() => import('./components/performances/DestinyPage'));
const DiscoverActingPage = React.lazy(() => import('./components/performances/DiscoverActingPage'));

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <App />
      },
      {
        path: "/naughty-boy",
        element: (
          <Suspense fallback={<LoadingTransition />}>
            <NaughtyBoyPage />
          </Suspense>
        )
      },
      {
        path: "/nukkad-natak",
        element: (
          <Suspense fallback={<LoadingTransition />}>
            <NukkadNatakPage />
          </Suspense>
        )
      },
      {
        path: "/sholay",
        element: (
          <Suspense fallback={<LoadingTransition />}>
            <SholayPage />
          </Suspense>
        )
      },
      {
        path: "/drama-club",
        element: (
          <Suspense fallback={<LoadingTransition />}>
            <DramaClubPage />
          </Suspense>
        )
      },
      {
        path: "/vfx-intern",
        element: (
          <Suspense fallback={<LoadingTransition />}>
            <VFXInternPage />
          </Suspense>
        )
      },
      {
        path: "/destiny",
        element: (
          <Suspense fallback={<LoadingTransition />}>
            <DestinyPage />
          </Suspense>
        )
      },
      {
        path: "/discover-acting",
        element: (
          <Suspense fallback={<LoadingTransition />}>
            <DiscoverActingPage />
          </Suspense>
        )
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
