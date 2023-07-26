import Button from "../utils/Button";
import HeroBg from "../assets/hero.jpg";

const Hero = () => {
  return (
    <main
      className="flex-1 flex flex-col items-start justify-center gap-4 p-16 xl:px-80 bg-[url('./assets/hero.jpg')] bg-cover bg-no-repeat bg-center"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.9), rgba(20, 184, 166, 0.1)), url(${HeroBg})`,
      }}
    >
      <div className="flex flex-col gap-2">
        <h2 className="text-5xl xl:text-8xl uppercase font-bold text-teal-500">
          Build
        </h2>
        <h2 className="text-5xl xl:text-8xl uppercase font-bold">yourself</h2>
      </div>
      <p className="text-lg xl:text-2xl tracking-wider">
        Choose program. Show them all
      </p>
      <Button text="Start Now" link="/program" />
    </main>
  );
};

export default Hero;
