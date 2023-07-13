import { useReducer, createContext } from "react";
import ProgramMenu from "./ProgramMenu";
import { Exercise, Action, Context } from "../types/types";

// Reducer
const reducer = (state: Exercise, action: Action): Exercise => {
  switch (action.type) {
    case "set":
      return action.exercise;
    default:
      return state;
  }
};

const initialExercise = {
  categories: "barbell",
  difficulties: "beginner",
  muscles: "biceps",
};

const initialAction = {
  type: "set",
  exercise: {
    categories: "barbell",
    difficulties: "beginner",
    muscles: "biceps",
  },
};

// Context
export const ProgramContext = createContext<Context>({
  exercise: initialExercise,
  dispatch: (initialAction) => {
    return;
  },
});

const Program = () => {
  const [exercise, dispatch] = useReducer(reducer, initialExercise);

  return (
    <ProgramContext.Provider value={{ exercise, dispatch }}>
      <div className="flex-1 bg-slate-900 bg-opacity-50 grid  grid-cols-1 xl:grid-cols-[2fr_3fr]">
        <ProgramMenu />
      </div>
    </ProgramContext.Provider>
  );
};

export default Program;
