export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-teal-600 text-white p-4 shadow-md">
        <div className="max-w-3xl mx-auto flex items-center gap-3">
          <img src="/oasis-logo.svg" alt="Oasis Logo" className="w-8 h-8" />
          <h1 className="text-2xl font-bold font-heading">Oasis</h1>
        </div>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center px-6 py-12 text-center">
        <div className="mb-6">
          <img src="/oasis-logo.svg" alt="Oasis Logo" className="w-24 h-24" />
        </div>

        <h2 className="text-3xl font-bold font-heading text-gray-800 mb-3">
          Find Clean Water<br />
          <span className="text-teal-600">Near You</span>
        </h2>

        <p className="text-gray-500 max-w-md mb-8">
          Find clean, safe water sources near Borewell Road, Whitefield
          and get it delivered to your home.
        </p>

        <a href="/signup" className="bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 px-8 rounded-xl text-lg transition-colors">
          Get Started
        </a>
      </main>

      <footer className="bg-gray-50 border-t border-gray-200 p-4 text-center text-sm text-gray-400">
        Oasis — Clean water, right where you need it.
      </footer>
    </div>
  );
}