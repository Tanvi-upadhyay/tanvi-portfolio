import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full flex justify-between p-4 bg-black text-white">
      <h1 className="text-2xl font-bold">TU</h1>
      <div className="flex gap-4">
        <Link to="/">About</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
