import { useContext } from "react";
import { ProgramContext } from "./Program";
import { useForm } from "react-hook-form";
import { Exercise } from "../types/types";

const ProgramMenu = () => {
  const { dispatch, attributesData, isAttributesFetched } =
    useContext(ProgramContext);

  const { register, handleSubmit } = useForm<Exercise>();
  const onSubmitForm = (formData: Exercise) => {
    dispatch({ type: "set", exercise: formData });
  };

  const fieldStyle = "flex flex-col mb-2";

  if (!isAttributesFetched) {
    return (
      <aside className="flex flex-col items-center justify-start gap-8 p-16 bg-teal-100">
        <h2>Please wait...</h2>
      </aside>
    );
  }

  return (
    <aside className="flex flex-col items-center justify-start gap-8 p-16 bg-slate-500">
      <h2 className="text-2xl">Choose your options</h2>
      <form
        className="w-full lg:w-1/2 flex flex-col gap-4 text-slate-100"
        onSubmit={handleSubmit(onSubmitForm)}
      >
        <div className={fieldStyle}>
          <label htmlFor="categories">Categories</label>
          <select id="categories" {...register("categories")}>
            <option value=""></option>
            {attributesData.categories.map((c) => (
              <option value={c} key={c}>
                {c}
              </option>
            ))}
          </select>
        </div>
        <div className={fieldStyle}>
          <label htmlFor="difficulties">Difficulties</label>
          <select id="difficulties" {...register("difficulties")}>
            <option value=""></option>
            {attributesData.difficulties.map((d) => (
              <option value={d} key={d}>
                {d}
              </option>
            ))}
          </select>
        </div>
        <div className={fieldStyle}>
          <label htmlFor="muscles">Muscles</label>
          <select id="muscles" {...register("muscles")}>
            <option value=""></option>
            {attributesData.muscles.map((m) => (
              <option value={m} key={m}>
                {m}
              </option>
            ))}
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
