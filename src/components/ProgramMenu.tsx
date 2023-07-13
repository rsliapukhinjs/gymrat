import { useContext } from "react";
import { ProgramContext } from "./Program";
import { useForm } from "react-hook-form";
import { Exercise } from "../types/types";

const ProgramMenu = () => {
  const { exercise, dispatch } = useContext(ProgramContext);

  const { register, handleSubmit } = useForm<Exercise>();
  const onSubmitForm = (formData: Exercise) => {
    console.log("Submitted", formData);
    dispatch({ type: "set", exercise: formData });
  };

  console.log(exercise);

  const fieldStyle = "flex flex-col mb-2";
  return (
    <aside className="flex flex-col items-center justify-start gap-8 p-16 bg-teal-100 bg-opacity-50">
      <h2>Choose your options</h2>
      <form
        className="w-full flex flex-col gap-4 text-slate-900"
        onSubmit={handleSubmit(onSubmitForm)}
      >
        <div className={fieldStyle}>
          <label htmlFor="categories">Categories</label>
          <select id="categories" {...register("categories")}>
            <option value=""></option>
            <option value="barbell">Barbell</option>
            <option value="dumbbells">Dumbbells</option>
          </select>
        </div>
        <div className={fieldStyle}>
          <label htmlFor="difficulties">Difficulties</label>
          <select id="difficulties" {...register("difficulties")}>
            <option value=""></option>
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
          </select>
        </div>
        <div className={fieldStyle}>
          <label htmlFor="muscles">Muscles</label>
          <select id="muscles" {...register("muscles")}>
            <option value=""></option>
            <option value="biceps">Biceps</option>
            <option value="forearms">Forearms</option>
          </select>
        </div>
        <button className="inline-block px-4 py-2 bg-teal-500 rounded-lg hover:bg-teal-700 text-white">
          Send
        </button>
      </form>
    </aside>
  );
};

export default ProgramMenu;
