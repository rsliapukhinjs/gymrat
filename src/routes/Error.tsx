import Button from "../utils/Button";

const Error = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-teal-500 w-64 h-64 rounded-full flex flex-col gap-4 items-center justify-center">
        Error
        <Button text="Go Back" />
      </div>
    </div>
  );
};

export default Error;
