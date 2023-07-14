import { useState } from "react";
import { Link } from "react-router-dom";
import { FetchedProp } from "../types/types";
import Card from "../utils/Card";

const ExerciseInfo = ({ fetchedExercise }: FetchedProp) => {
  return (
    <Card>
      <h2 className="text-3xl">{fetchedExercise.exercise_name}</h2>

      <p className="text-xl">
        {fetchedExercise.Category} - {fetchedExercise.Difficulty} -{" "}
        {fetchedExercise.target.Primary}
      </p>

      <button className="inline-block px-4 py-2 bg-teal-500 hover:bg-teal-700 rounded-lg">
        <Link to={`/exercise/${fetchedExercise.id}`}>Show More</Link>
      </button>
    </Card>
  );
};

export default ExerciseInfo;
