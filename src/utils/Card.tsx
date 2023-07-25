import { ChildrenProps } from "../types/types";

const Card = ({ children }: ChildrenProps) => {
  return (
    <div className="w-full bg-slate-700 p-8 flex flex-col items-center justify-between gap-4 rounded-xl">
      {children}
    </div>
  );
};

export default Card;
