import Header from "./Header";
import Hero from "./Hero";
import Footer from "./Footer";

const Starter = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[url('./assets/hero.jpg')] bg-cover bg-no-repeat bg-center text-slate-50">
      <Header />
      <Hero />
      <Footer />
    </div>
  );
};

export default Starter;
