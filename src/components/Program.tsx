import { createContext, useState } from "react";
import ProgramMenu from "./ProgramMenu";
import { Exercise } from "../types/types";

const ProgramContext = createContext<Exercise | null>(null);

const Program = () => {
  const [queryExercise, setQueryExercise] = useState<Exercise>({
    categories: "Barbell",
    difficulties: "Beginner",
    muscles: "Biceps",
  });

  return (
    <ProgramContext.Provider value={queryExercise}>
      <div className="flex-1 bg-slate-900 bg-opacity-50 grid  grid-cols-1 xl:grid-cols-[2fr_3fr]">
        <ProgramMenu />
      </div>
    </ProgramContext.Provider>
  );
};

export default Program;
