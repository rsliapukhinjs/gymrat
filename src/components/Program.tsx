import { useReducer, createContext } from "react";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";

import {
  Exercise,
  Action,
  Context,
  initialExercise,
  initialAction,
} from "../types/types";

import getExercises from "../services/getExercises";

import ProgramMenu from "./ProgramMenu";
import ProgramResults from "./ProgramResults";

// CONTEXT
export const ProgramContext = createContext<Context>({
  exercise: initialExercise,
  dispatch: (initialAction) => {
    return;
  },
});

const Program = () => {
  // REDUCER
  const reducer = (state: Exercise, action: Action): Exercise => {
    switch (action.type) {
      case "set":
        return action.exercise;
      default:
        return state;
    }
  };
  const [exercise, dispatch] = useReducer(reducer, initialExercise);

  // REACT QUERY
  const query = useQuery(["exercises"], () => getExercises(exercise));

  console.log(query);

  return (
    <ProgramContext.Provider value={{ exercise, dispatch }}>
      <div className="flex-1 bg-slate-900 bg-opacity-50 grid  grid-cols-1 xl:grid-cols-[2fr_3fr]">
        <ProgramMenu />
        <ProgramResults />
      </div>
    </ProgramContext.Provider>
  );
};

export default Program;
