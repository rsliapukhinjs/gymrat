import { useContext } from "react";
import { ProgramContext } from "./Program";
import ExerciseInfo from "./ExerciseInfo";

const ProgramResults = () => {
  const { exercisesData, isExercisesFetched } = useContext(ProgramContext);

  if (!isExercisesFetched) {
    return (
      <aside className="flex flex-col items-center justify-start gap-8 p-16 bg-teal-100 bg-opacity-50">
        <h2>Please wait...</h2>
      </aside>
    );
  }

  console.log(exercisesData);

  return (
    <section className="p-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
      {exercisesData.map((e) => (
        <ExerciseInfo fetchedExercise={e} key={e.id} />
      ))}
    </section>
  );
};

export default ProgramResults;
