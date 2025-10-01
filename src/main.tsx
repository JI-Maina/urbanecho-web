import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import RouteProvider from "./providers/route-provider";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouteProvider />
  </StrictMode>
);
