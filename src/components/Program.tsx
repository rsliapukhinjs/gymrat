import { useReducer, createContext } from "react";
import { useQuery } from "@tanstack/react-query";

import { Exercise, Action, Context, initialExercise } from "../types/types";

import getExercises from "../services/getExercises";

import ProgramMenu from "./ProgramMenu";
import ProgramResults from "./ProgramResults";
import getAttributes from "../services/getAttributes";

// CONTEXT
export const ProgramContext = createContext<Context>({
  exercise: initialExercise,
  dispatch: () => {
    return;
  },
  attributesData: {
    categories: [initialExercise.categories],
    difficulties: [initialExercise.difficulties],
    muscles: [initialExercise.muscles],
  },
  isAttributesFetched: false,
  exercisesData: [
    {
      Category: initialExercise.categories,
      Difficulty: initialExercise.difficulties,
      target: {
        Primary: [initialExercise.muscles],
      },
    },
  ],
  isExercisesFetched: false,
  refetchQuery: () => {
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
  const { isFetched: isAttributesFetched, data: attributesData } = useQuery(
    ["attributes"],
    getAttributes
  );
  const {
    isFetched: isExercisesFetched,
    data: exercisesData,
    refetch: refetchQuery,
  } = useQuery(["exercises", exercise], () => getExercises(exercise));

  return (
    <ProgramContext.Provider
      value={{
        exercise,
        dispatch,
        attributesData,
        isAttributesFetched,
        exercisesData,
        isExercisesFetched,
        refetchQuery,
      }}
    >
      <div className="flex-1 bg-slate-900 bg-opacity-50 grid grid-cols-1 xl:grid-cols-[2fr_3fr]">
        <ProgramMenu />
        <ProgramResults />
      </div>
    </ProgramContext.Provider>
  );
};

export default Program;
