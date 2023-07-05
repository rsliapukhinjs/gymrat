import Button from "../utils/Button";

const Hero = () => {
  return (
    <main className="flex-1 flex">
      <div className="w-1/2 mx-24 lg:p-24 my-auto flex flex-col items-start gap-4 lg:ml-32 xl:ml-48">
        <h2 className="font-bold text-6xl lg:text-7xl xl:text-8xl uppercase">
          Build yourself today
        </h2>
        <p className="text-lg tracking-wider">Choose program. Show them all</p>
        <Button text="Start Now" link="/program" />
      </div>
    </main>
  );
};

export default Hero;
