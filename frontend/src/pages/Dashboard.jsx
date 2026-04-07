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

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 text-gray-600 dark:text-gray-300">
        Loading your dashboard...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 px-4 py-8">

      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 flex items-center justify-between">
          <div>
            <h1 className="text-xl font-semibold text-gray-800 dark:text-white">
              Welcome back, {user.name.split(" ")[0]}
            </h1>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Here’s a quick overview of your account.
            </p>
          </div>

          <button
            onClick={logout}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg text-sm transition"
          >
            Logout
          </button>
        </div>

        {/* Profile Card */}
        <div className="mt-6 bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 flex items-center gap-6">

          <img
            src={user.profilePic || "https://via.placeholder.com/100"}
            onError={(e) => e.target.src = "https://via.placeholder.com/100"}
            className="w-20 h-20 rounded-full border-2 border-gray-200 dark:border-gray-600"
          />

          <div>
            <h2 className="text-lg font-medium text-gray-800 dark:text-white">
              {user.name}
            </h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {user.email}
            </p>
            <p className="text-xs text-gray-400 mt-1">
              Account authenticated via Google
            </p>
          </div>

        </div>

        {/* Info Section */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-5">
            <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300">
              Account Status
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
              Your account is active and securely connected using Google OAuth.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-5">
            <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300">
              Security
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
              Authentication is handled via encrypted tokens and secure cookies.
            </p>
          </div>

        </div>

      </div>

    </div>
  );
};

export default Dashboard;
