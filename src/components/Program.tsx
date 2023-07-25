import ProgramMenu from "./ProgramMenu";
import ProgramResults from "./ProgramResults";

const Program = () => {
  return (
    <div className="flex-1 bg-slate-900 bg-opacity-50 flex flex-col lg:grid lg:grid-cols-[1fr,2fr]">
      <ProgramMenu />
      <ProgramResults />
    </div>
  );
};

export default Program;
