import { router } from "./router";
import { RouterProvider } from "react-router";
import { NuqsAdapter } from "nuqs/adapters/react-router/v7";

const AppRouterProvider = () => {
  return (
    <NuqsAdapter>
      <RouterProvider router={router} />
    </NuqsAdapter>
  );
};

export default AppRouterProvider;
