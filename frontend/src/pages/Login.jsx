const Login = () => {
  const handleLogin = () => {
    window.location.href = "http://localhost:5000/auth/google";
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">

      <div className="bg-white/10 backdrop-blur-lg p-10 rounded-2xl shadow-2xl w-[360px] text-center text-white">

        <h1 className="text-3xl font-bold mb-2">Welcome</h1>
        <p className="text-gray-300 text-sm mb-6">
          Sign in to continue
        </p>

        <button
          onClick={handleLogin}
          className="flex items-center justify-center gap-3 w-full bg-white text-gray-800 font-medium px-4 py-3 rounded-lg shadow-md hover:shadow-lg hover:scale-[1.02] transition-all duration-300"
        >
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt="google"
            className="w-5 h-5"
          />
          Sign in with Google
        </button>

        <p className="text-xs text-gray-400 mt-6">
          Secure authentication using Google OAuth
        </p>

      </div>

    </div>
  );
};

export default Login;
