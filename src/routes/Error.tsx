import Button from "../utils/Button";

const Error = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900">
      <div className="bg-teal-500 w-64 h-64 rounded-full flex flex-col gap-4 items-center justify-center">
        <p className="text-xl uppercase">Wrong way!</p>
        <Button text="Go Back" link="/" accent />
      </div>
    </div>
  );
};

export default Error;
