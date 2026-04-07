const Login = () => {
  const handleLogin = () => {
    window.location.href = "https://auth-system-4m1f.onrender.com/auth/google";
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">

      {/* Header Section */}
      <div className="max-w-6xl mx-auto px-6 pt-16 pb-10">

        <h1 className="text-4xl font-bold text-gray-800 dark:text-white">
          Secure Authentication Platform
        </h1>

        <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl">
          This system provides a streamlined and secure way to authenticate users using Google OAuth.
          It eliminates the need for password management while ensuring reliable identity verification
          and session handling across the application.
        </p>

        <div className="mt-6 text-sm text-gray-500 dark:text-gray-400">
          <p>• OAuth 2.0 based authentication</p>
          <p>• Secure session handling with HTTP-only cookies</p>
          <p>• Persistent user data with MongoDB</p>
        </div>

      </div>

      {/* Login Section */}
      <div className="flex justify-center px-6 pb-16">

        <div className="w-full max-w-sm">

          <button
            onClick={handleLogin}
            className="flex items-center justify-center gap-3 w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-700 dark:text-white font-medium px-4 py-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition"
          >
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="Google"
              className="w-5 h-5"
            />
            Continue with Google
          </button>

          <p className="mt-4 text-xs text-gray-500 dark:text-gray-400 text-center">
            Authentication is handled securely via Google. No passwords are stored in this system.
          </p>

        </div>

      </div>

    </div>
  );
};

export default Login;
