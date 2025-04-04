import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser, registerUser } from "../utils/auth";

export default function AuthForm({ type }) {
  const isLogin = type === "login";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Please enter all fields");
      return;
    }

    if (isLogin) {
      const success = loginUser(email, password);
      if (success) navigate("/");
      else setError("Invalid credentials");
    } else {
      const success = registerUser(email, password);
      if (success) navigate("/login");
      else setError("User already exists");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-20 p-6 bg-white rounded-xl shadow">
    <img src="/macdash-logo.png" alt="MacDash" className="h-12 mx-auto mb-4" />
      <h2 className="text-2xl font-bold mb-4">{isLogin ? "Login" : "Register"}</h2>
      {error && <p className="text-red-500">{error}</p>}
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="email"
          placeholder="Email"
          className="p-2 border rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="p-2 border rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="bg-black text-white py-2 rounded hover:bg-gray-800">
          {isLogin ? "Login" : "Register"}
        </button>
      </form>
    </div>
  );
}
