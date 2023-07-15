import { useContext } from "react";
import { ProgramContext } from "../App";
import ExerciseInfo from "./ExerciseInfo";

const ProgramResults = () => {
  const { exercisesData, isExercisesFetched } = useContext(ProgramContext);

  if (!isExercisesFetched) {
    return (
      <section className="flex flex-col items-center justify-start gap-8 p-16 bg-slate-300">
        <h2>Please wait...</h2>
      </section>
    );
  }

  if (exercisesData.length < 1) {
    return (
      <div className="p-16 flex items-center justify-center  bg-slate-300 text-slate-900">
        <h2 className="text-2xl">Sorry, no matching results. Try again</h2>
      </div>
    );
  }

  // Remove duplicates form API
  const uniqueExercisedData = [
    ...new Map(
      exercisesData.map((item) => [item["exercise_name"], item])
    ).values(),
  ];

  return (
    <section className="p-8 flex flex-col gap-8 bg-slate-300">
      {exercisesData.length < 900 ? (
        <div className="flex flex-col items-center gap-4">
          {uniqueExercisedData.map((e) => (
            <ExerciseInfo fetchedExercise={e} key={e.id} />
          ))}
        </div>
      ) : (
        <div className="p-8 flex items-center justify-center text-slate-900">
          <h2 className="text-2xl">Start your journey above </h2>
          <span className="material-symbols-outlined">arrow_upward</span>
        </div>
      )}
    </section>
  );
};

export default ProgramResults;
