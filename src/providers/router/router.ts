import { createBrowserRouter } from "react-router";
import AppLayout from "@/components/layout/AppLayout";
import { lazy } from "react";

/* Lazy loading pages */
const HomePage = lazy(() => import("@/pages/HomePage"));
const Impressum = lazy(() => import("@/pages/Impressum"));
const Kontakt = lazy(() => import("@/pages/Kontakt"));
const NotFound = lazy(() => import("@/pages/NotFound"));


export const router = createBrowserRouter([
  {
    path: "/",
    Component: AppLayout,
    children: [
      {
        path: "/",
        Component: HomePage,
      },
      {
        path: "/impressum",
        Component: Impressum,
      },
      {
        path: "/kontakt",
        Component: Kontakt,
      },
      {
        path: "*",
        Component: NotFound,
      },
    ],
  },
]);
