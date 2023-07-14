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

  console.log(exercisesData);

  return (
    <section className="p-8 grid grid-cols-1 lg:grid-cols-2 gap-8 bg-slate-300">
      {exercisesData.map((e) => (
        <ExerciseInfo fetchedExercise={e} key={e.id} />
      ))}
    </section>
  );
};

export default ProgramResults;
