import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Routes from "./routes/Routes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Routes />
    </QueryClientProvider>
  </React.StrictMode>
);
