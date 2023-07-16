import { useParams } from "react-router-dom";
import { useContext, useState } from "react";
import { ProgramContext } from "../App";
import Button from "../utils/Button";

const Exercise = () => {
  const { exercisesData } = useContext(ProgramContext);
  const params = useParams();

  const [isShowing, setIsShowing] = useState(false);

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
      <h2 className="text-3xl">{currentExercise?.exercise_name}</h2>
      <div className="flex flex-col gap-4 items-center">
        <div className="w-full lg:w-3/4 grid grid-cols-1 lg:grid-cols-2 border-2">
          <div className="p-8 flex flex-col gap-8 uppercase font-bold text-3xl lg:text-5xl items-center justify-center">
            <h3>{currentExercise.Category}</h3>
            <h3>{currentExercise.target.Primary}</h3>
          </div>
          <ul className="w-full p-8 flex flex-col items-start justify-center gap-8 bg-teal-700 text">
            {currentExercise.steps?.map((s) => (
              <li className="flex items-center gap-4" key={s}>
                <span className="material-symbols-outlined">check_box</span>
                <span className="text-lg lg:text-2xl">{s}</span>
              </li>
            ))}
          </ul>
        </div>
        {isShowing ? (
          <div className="w-full lg:w-3/4">
            <video src={currentExercise.videoURL[0]} controls></video>
          </div>
        ) : null}
        <div className="w-3/4 flex items-center justify-between">
          <Button text="Get Back" link="/program" />
          <button
            className="inline-block px-4 py-2 bg-slate-100 text-slate-900 hover:bg-slate-300 rounded-lg"
            onClick={() => setIsShowing(!isShowing)}
          >
            {isShowing ? "Hide Video" : "Show Video"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Exercise;
