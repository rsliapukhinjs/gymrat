import { FetchedProp } from "../types/types";
import Card from "../utils/Card";
import Button from "../utils/Button";

const ExerciseInfo = ({ fetchedExercise }: FetchedProp) => {
  if (fetchedExercise.videoURL === undefined) {
    return;
  }

  return (
    <Card>
      <h3 className="text-xl">{fetchedExercise.Difficulty}</h3>
      <h2 className="text-3xl">{fetchedExercise.exercise_name}</h2>
      <Button
        text="Show More"
        link={`/exercise/${fetchedExercise.id}`}
      ></Button>
    </Card>
  );
};

export default ExerciseInfo;
