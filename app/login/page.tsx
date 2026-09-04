export default function Login() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-teal-600 text-white p-4 shadow-md">
        <div className="max-w-3xl mx-auto flex items-center gap-3">
          <img src="/oasis-logo.svg" alt="Oasis Logo" className="w-8 h-8" />
          <h1 className="text-2xl font-bold font-heading">Oasis</h1>
        </div>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center px-6 py-12">
        <div className="w-full max-w-md">
          <h2 className="text-3xl font-bold font-heading text-gray-800 mb-2 text-center">
            Welcome Back
          </h2>
          <p className="text-gray-500 text-center mb-8">
            Log in with your phone number and password
          </p>

          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
              <input type="tel" placeholder="+91 98765 43210" className="input input-bordered w-full" />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <input type="password" placeholder="Your password" className="input input-bordered w-full" />
            </div>

            <a href="/sources" className="btn btn-primary w-full text-lg">
              Log In
            </a>
          </form>

          <p className="text-center text-gray-400 mt-6">
            Do not have an account?{" "}
            <a href="/signup" className="text-teal-600 font-semibold hover:underline">
              Sign Up
            </a>
          </p>
        </div>
      </main>
    </div>
  );
}
