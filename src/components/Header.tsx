import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="p-8 lg:px-24 flex justify-between items-center uppercase">
      <h1 className="text-2xl font-bold tracking-wider hover:text-teal-500">
        <Link to="/">GymRat</Link>
      </h1>
      <nav className="flex gap-8 ">
        <span className="hover:text-teal-500">
          <Link to="/program">Program</Link>
        </span>
        <span className="hover:text-teal-500">
          <Link to="/about">About</Link>
        </span>
      </nav>
    </header>
  );
};

export default Header;
