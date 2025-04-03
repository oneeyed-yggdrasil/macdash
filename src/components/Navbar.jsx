import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const user = JSON.parse(localStorage.getItem("currentUser"));
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    navigate("/login");
  };

  return (
    <nav className="bg-white border-b shadow-md p-4 flex justify-between items-center">
      <Link to="/" className="text-2xl font-bold text-black">
        MacDash
      </Link>
      <div className="flex gap-4 items-center">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/cart" className="hover:underline">Cart</Link>

        {!user ? (
          <>
            <Link to="/login" className="hover:underline">Login</Link>
            <Link to="/register" className="hover:underline">Register</Link>
          </>
        ) : (
          <button onClick={handleLogout} className="text-red-600 hover:underline">
            Logout
          </button>
        )}
      </div>
    </nav>
  );
}
