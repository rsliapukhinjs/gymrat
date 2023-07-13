import { useState } from "react";
import { FetchedProp } from "../types/types";
import Card from "../utils/Card";

const ExerciseInfo = ({ fetchedExercise }: FetchedProp) => {
  const [showDescription, setShowDescription] = useState(false);
  const [showVideo, setShowVideo] = useState(false);

  return (
    <Card>
      <h2 className="text-3xl">{fetchedExercise.exercise_name}</h2>

      <p className="text-xl">
        {fetchedExercise.Category} - {fetchedExercise.Difficulty} -{" "}
        {fetchedExercise.target.Primary}
      </p>

      {/* STEPS */}
      <div className="w-full flex flex-col gap-4">
        <div className="flex p-4 items-center justify-between border-b-2">
          <p className="uppercase">Steps</p>
          <button
            className="bg-teal-500 px-4 py-2 rounded-xl"
            onClick={() => setShowDescription(!showDescription)}
          >
            {showDescription ? "Hide" : "Show"}
          </button>
        </div>
        {showDescription ? (
          <ul className="list-decimal px-8 flex flex-col items-start gap-4">
            {fetchedExercise.steps?.map((s) => (
              <li>{s}</li>
            ))}
          </ul>
        ) : null}
      </div>

      {/* VIDEO */}
      <div className="w-full flex flex-col gap-4">
        <div className="flex p-4 items-center justify-between border-b-2">
          <p className="uppercase">Steps</p>
          <button
            className="bg-teal-500 px-4 py-2 rounded-xl"
            onClick={() => setShowVideo(!showVideo)}
          >
            {showVideo ? "Hide" : "Show"}
          </button>
        </div>
        {fetchedExercise.videoURL && showVideo ? (
          <video src={fetchedExercise.videoURL[0]} controls />
        ) : null}
      </div>
    </Card>
  );
};

export default ExerciseInfo;
