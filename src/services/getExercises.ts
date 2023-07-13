import { Exercise } from "../types/types";

const getExercises = async (exercise: Exercise) => {
  const url = `https://musclewiki.p.rapidapi.com/exercises?muscle=${exercise.muscles}&category=${exercise.categories}&difficulty=${exercise.difficulties}`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "dec5c21106msh74cc690ca45db0bp1408eajsnfa1b1547e3c3",
      "X-RapidAPI-Host": "musclewiki.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
};

export default getExercises;
