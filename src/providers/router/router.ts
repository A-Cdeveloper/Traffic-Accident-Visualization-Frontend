import { createBrowserRouter } from "react-router";
import HomePage from "../../pages/HomePage";
import Impressum from "../../pages/Impressum";
import Kontakt from "../../pages/Kontakt";
import NotFound from "../../pages/NotFound";
import AppLayout from "@/components/layout/AppLayout";

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
