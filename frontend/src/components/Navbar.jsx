import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-coffee text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">Car Rental System</Link>
        <div className="space-x-4">
          <Link to="/dashboard" className="hover:text-gray-300">Dashboard</Link>
          <Link to="/login" className="hover:text-gray-300">Login</Link>
          <Link to="/register" className="hover:text-gray-300">Register</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;