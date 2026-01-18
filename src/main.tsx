import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import AppProviders from "./providers/index.tsx";
import validateEnv from "./lib/env.ts";

// Validate environment variables before rendering
validateEnv();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AppProviders />
  </StrictMode>
);
