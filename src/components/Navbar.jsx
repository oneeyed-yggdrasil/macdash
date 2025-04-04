import { Link } from "react-router-dom";

export default function Navbar() {
  const user = JSON.parse(localStorage.getItem("currentUser"));

  return (
    <nav className="bg-white border-b shadow-md p-4 flex justify-between items-center">
      <Link to="/" className="flex items-center gap-2">
        <img src="/macdash-logo.png" alt="MacDash" className="h-8" />
        <span className="text-xl font-bold">MacDash</span>
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
          <button
            onClick={() => {
              localStorage.removeItem("currentUser");
              window.location.href = "/login";
            }}
            className="text-red-600 hover:underline"
          >
            Logout
          </button>
        )}
      </div>
    </nav>
  );
}
