import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex flex-col min-h-screen text-slate-50">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </QueryClientProvider>
  );
};

export default App;
