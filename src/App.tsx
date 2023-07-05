import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[url('./assets/hero.jpg')] bg-cover bg-no-repeat bg-center text-slate-50">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;
