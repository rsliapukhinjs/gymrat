import { useParams } from "react-router-dom";
import { useContext } from "react";
import { ProgramContext } from "../App";

const Exercise = () => {
  const { exercisesData } = useContext(ProgramContext);

  console.log(exercisesData);

  return <div className="flex-1 bg-red-500">Test</div>;
};

export default Exercise;
