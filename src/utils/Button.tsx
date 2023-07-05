import { Link } from "react-router-dom";

type Props = {
  text: string;
  link: string;
  accent?: boolean;
};

const Button = ({ text, link, accent }: Props) => {
  return (
    <button
      className="inline-block py-2 px-4 bg-teal-500 rounded-lg hover:bg-teal-700"
      style={accent ? { backgroundColor: "white" } : {}}
    >
      <Link to={link}>{text}</Link>
    </button>
  );
};

export default Button;
