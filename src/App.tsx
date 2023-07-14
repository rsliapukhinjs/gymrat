import { useReducer, createContext } from "react";
import { useQuery } from "@tanstack/react-query";

import { Exercise, Action, Context, initialExercise } from "./types/types";

import getExercises from "./services/getExercises";
import getAttributes from "./services/getAttributes";

import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";

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

const App = () => {
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
      <div className="flex flex-col min-h-screen text-slate-50">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </ProgramContext.Provider>
  );
};

export default App;
