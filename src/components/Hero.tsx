import Button from "../utils/Button";

const Hero = () => {
  return (
    <main className="flex-1 flex flex-col items-start justify-center gap-4 p-32  xl:px-80">
      <div className="flex flex-col gap-2">
        <h2 className="text-7xl xl:text-8xl uppercase font-bold text-teal-500">
          Build
        </h2>
        <h2 className="text-7xl xl:text-8xl uppercase font-bold">yourself</h2>
      </div>
      <p className="text-lg xl:text-2xl tracking-wider">
        Choose program. Show them all
      </p>
      <Button text="Start Now" link="/program" />
    </main>
  );
};

export default Hero;
