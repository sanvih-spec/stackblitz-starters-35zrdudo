import Nav from "../nav";

export default function Profile() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <header className="bg-teal-600 text-white p-4 shadow-md">
        <div className="max-w-3xl mx-auto flex items-center gap-3">
          <img src="/oasis-logo.svg" alt="Oasis Logo" className="w-8 h-8" />
          <h1 className="text-2xl font-bold font-heading">Oasis</h1>
        </div>
      </header>

      <main className="flex-1 max-w-3xl mx-auto w-full px-4 py-6 pb-20">
        <h2 className="text-2xl font-bold font-heading text-gray-800 mb-6">
          My Profile
        </h2>

        <div className="bg-white rounded-xl shadow-sm p-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
            <input type="text" placeholder="Your name" className="input input-bordered w-full" />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
            <input type="tel" placeholder="+91 98765 43210" className="input input-bordered w-full" />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Delivery Address</label>
            <textarea placeholder="Your delivery address" className="textarea textarea-bordered w-full h-20" />
          </div>

          <button type="button" className="btn btn-primary w-full">
            Save Changes
          </button>
        </div>

        <a href="/" className="block text-center text-red-500 font-medium mt-6 py-3">
          Log Out
        </a>
      </main>

      <Nav active="profile" />
    </div>
  );
}