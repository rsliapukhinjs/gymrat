import { useParams } from "react-router-dom";
import { useContext } from "react";
import { ProgramContext } from "../App";

const Exercise = () => {
  const { exercisesData } = useContext(ProgramContext);
  const params = useParams();

  const currentExercise = exercisesData.find((e) => e.id === Number(params.id));

  return <div className="flex-1 bg-red-500">TODO</div>;
};

export default Exercise;
