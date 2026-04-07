import { useEffect, useState } from "react";
import api from "../api/api";

const Dashboard = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    api.get("/auth/me")
      .then(res => setUser(res.data))
      .catch(() => window.location.href = "/");
  }, []);

  const logout = async () => {
    await api.post("/auth/logout");
    window.location.href = "/";
  };

  if (!user) return <p>Loading...</p>;

  return (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800">
    <div className="bg-white/10 backdrop-blur-lg shadow-xl rounded-2xl p-8 w-[350px] text-center text-white">

      <img
        src={user.profilePic || "https://via.placeholder.com/100"}
        onError={(e) => e.target.src = "https://via.placeholder.com/100"}
        className="w-24 h-24 rounded-full mx-auto border-4 border-white shadow-md"
      />

      <h1 className="text-2xl font-semibold mt-4">{user.name}</h1>
      <p className="text-gray-300 text-sm">{user.email}</p>

      <div className="mt-6">
        <button
          onClick={logout}
          className="w-full bg-red-500 hover:bg-red-600 transition-all duration-300 px-4 py-2 rounded-lg font-medium"
        >
          Logout
        </button>
      </div>

    </div>
  </div>
);
};

export default Dashboard;