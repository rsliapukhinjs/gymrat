import { FetchedProp } from "../types/types";
import Card from "../utils/Card";

const ExerciseInfo = ({ fetchedExercise }: FetchedProp) => {
  console.log(fetchedExercise);

  return (
    <Card>
      <h2 className="text-red-500">{fetchedExercise.Category}</h2>
    </Card>
  );
};

export default ExerciseInfo;
