const Header = () => {
  return (
    <header className="p-8 lg:px-24 flex justify-between items-center">
      <h1 className="text-2xl uppercase font-bold tracking-wider">
        <a href="#">GymRat</a>
      </h1>
      <nav className="flex gap-8">
        <span>
          <a href="#">Program</a>
        </span>
        <span>
          <a href="#">About</a>
        </span>
      </nav>
    </header>
  );
};

export default Header;
