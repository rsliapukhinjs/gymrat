import { useParams } from "react-router-dom";
import { useContext } from "react";
import { ProgramContext } from "../App";
import Button from "../utils/Button";

const Exercise = () => {
  const { exercisesData } = useContext(ProgramContext);
  const params = useParams();

  const currentExercise = exercisesData.find((e) => e.id === Number(params.id));

  if (currentExercise?.videoURL === undefined) {
    return (
      <div className="flex-1 p-8 flex flex-col items-center gap-8 border-t-2 border-b-2 bg-slate-900">
        <h2>Sorry, no content available...</h2>
      </div>
    );
  }

  return (
    <div className="flex-1 p-8 flex flex-col items-center gap-8  bg-slate-700">
      <h2 className="text-3xl uppercase">{currentExercise?.exercise_name}</h2>
      <div className="flex flex-col gap-4">
        <ul className="p-8 flex flex-col items-start justify-center gap-8 bg-teal-700">
          {currentExercise.steps?.map((s) => (
            <li className="flex items-center gap-4" key={s}>
              <span className="material-symbols-outlined">check_box</span>
              <span className="text-2xl">{s}</span>
            </li>
          ))}
        </ul>
        <div className="w-full">
          <video src={currentExercise.videoURL[0]} controls></video>
        </div>
      </div>
      <Button text="Go Back" link="/program" />
    </div>
  );
};

export default Exercise;
