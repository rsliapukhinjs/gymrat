import { useReducer, createContext } from "react";
import { useQuery } from "@tanstack/react-query";

import { Exercise, Action, Context, initialExercise } from "../types/types";

import getExercises from "../services/getExercises";

import ProgramMenu from "./ProgramMenu";
import ProgramResults from "./ProgramResults";
import getAttributes from "../services/getAttributes";

// CONTEXT
export const ProgramContext = createContext<Context>({
  exercise: {
    categories: "",
    difficulties: "",
    muscles: "",
  },
  dispatch: () => {
    return;
  },
  attributesData: {
    categories: [""],
    difficulties: [""],
    muscles: [""],
  },
  isAttributesFetched: false,
  exercisesData: [
    {
      Category: "",
      Difficulty: "",
      target: {
        Primary: [""],
      },
    },
  ],
  isExercisesFetched: false,
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
  const { isFetched: isAttributesFetched, data: attributesData } = useQuery(
    ["attributes"],
    getAttributes
  );
  const { isFetched: isExercisesFetched, data: exercisesData } = useQuery(
    ["exercises", exercise],
    () => getExercises(exercise),
    { staleTime: 0 }
  );

  return (
    <ProgramContext.Provider
      value={{
        exercise,
        dispatch,
        attributesData,
        isAttributesFetched,
        exercisesData,
        isExercisesFetched,
      }}
    >
      <div className="flex-1 bg-slate-900 bg-opacity-50 flex flex-col">
        <ProgramMenu />
        <ProgramResults />
      </div>
    </ProgramContext.Provider>
  );
};

export default Program;
