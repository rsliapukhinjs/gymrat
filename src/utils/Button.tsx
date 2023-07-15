import { Link } from "react-router-dom";

type Props = {
  text: string;
  link: string;
  accent?: boolean;
};

const Button = ({ text, link, accent }: Props) => {
  return (
    <button
      className={`inline-block py-2 px-4  rounded-lg  ${
        accent
          ? "bg-slate-100 hover:bg-slate-300"
          : "bg-teal-500 hover:bg-teal-700"
      }`}
    >
      <Link to={link}>{text}</Link>
    </button>
  );
};

export default Button;
