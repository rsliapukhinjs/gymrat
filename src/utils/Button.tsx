type Props = {
  text: string;
};

const Button = ({ text }: Props) => {
  return (
    <button className="inline-block py-2 px-4 bg-teal-500 rounded-lg hover:bg-teal-700">
      {text}
    </button>
  );
};

export default Button;
