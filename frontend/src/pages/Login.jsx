const Login = () => {
  const handleLogin = () => {
    window.location.href = "https://auth-system-4m1f.onrender.com/auth/google";
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 px-4">

      <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">

        {/* Header */}
        <div className="text-center">
          <h1 className="text-2xl font-semibold text-gray-800 dark:text-white">
            Sign in to your account
          </h1>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
            Access your dashboard, manage your profile, and continue where you left off.
          </p>
        </div>

        {/* Divider */}
        <div className="my-6 border-t border-gray-200 dark:border-gray-700"></div>

        {/* Google Button */}
        <button
          onClick={handleLogin}
          className="flex items-center justify-center gap-3 w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-700 dark:text-white font-medium px-4 py-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-600 transition"
        >
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt="Google"
            className="w-5 h-5"
          />
          Continue with Google
        </button>

        {/* Info Section */}
        <div className="mt-6 text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
          <p>
            We use Google Sign-In to provide a fast and secure authentication experience.
            Your personal data is not shared with third parties.
          </p>
        </div>

        {/* Footer */}
        <div className="mt-6 text-center text-xs text-gray-400">
          <p>
            By continuing, you agree to our Terms of Service and Privacy Policy.
          </p>
        </div>

      </div>

    </div>
  );
};

export default Login;
