import { ChildrenProps } from "../types/types";

const Card = ({ children }: ChildrenProps) => {
  return (
    <div className="bg-slate-900 p-8 flex flex-col items-center gap-4">
      {children}
    </div>
  );
};

export default Card;
