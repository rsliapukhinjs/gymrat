import { ChildrenProps } from "../types/types";

const Card = ({ children }: ChildrenProps) => {
  return (
    <div className="w-full lg:w-3/4 bg-slate-700 p-8 flex items-center justify-between gap-4 rounded-xl">
      {children}
    </div>
  );
};

export default Card;
