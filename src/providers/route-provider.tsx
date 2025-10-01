import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "../router";
import ThemeProvider from "./theme-provider";

export default function RouteProvider() {
  const router = createBrowserRouter(routes);
  return (
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}
