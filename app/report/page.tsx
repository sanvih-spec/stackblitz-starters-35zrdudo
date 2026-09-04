import Nav from "../nav";

export default function Report() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <header className="bg-teal-600 text-white p-4 shadow-md">
        <div className="max-w-3xl mx-auto flex items-center gap-3">
          <a href="/sources" className="text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </a>
          <h1 className="text-2xl font-bold font-heading">Oasis</h1>
        </div>
      </header>

      <main className="flex-1 max-w-3xl mx-auto w-full px-4 py-6 pb-20">
        <h2 className="text-2xl font-bold font-heading text-gray-800 mb-6">
          Help Improve Oasis
        </h2>

        <div className="space-y-6">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl">&#x1F4A7;</span>
              <h3 className="text-lg font-semibold font-heading text-gray-800">
                Suggest a Water Source
              </h3>
            </div>
            <p className="text-sm text-gray-500 mb-4">
              Found a clean water source nearby? Let us know and we will verify it.
            </p>
            <form className="space-y-3">
              <input
                type="text"
                placeholder="Source name (e.g. RK Colony Borewell)"
                className="input input-bordered w-full"
              />
              <input
                type="text"
                placeholder="Location / address"
                className="input input-bordered w-full"
              />
              <select className="select select-bordered w-full">
                <option value="">Type of water</option>
                <option value="drinking">Drinking and Cooking</option>
                <option value="household">Household Use</option>
                <option value="both">Both</option>
              </select>
              <textarea
                placeholder="Any extra details (optional)"
                className="textarea textarea-bordered w-full h-16"
              />
              <button type="button" className="btn btn-primary w-full">
                Submit Suggestion
              </button>
            </form>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border-2 border-red-100">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl">&#x26A0;&#xFE0F;</span>
              <h3 className="text-lg font-semibold font-heading text-gray-800">
                Report Contaminated Source
              </h3>
            </div>
            <p className="text-sm text-gray-500 mb-4">
              Think a water source is contaminated? Report it and we will investigate right away.
            </p>
            <form className="space-y-3">
              <select className="select select-bordered w-full">
                <option value="">Select the water source</option>
                <option value="savita-borewell">Savita Borewell</option>
                <option value="gowda-colony-well">Gowda Colony Well</option>
                <option value="near-tax-bar">HDMC Water Point</option>
                <option value="other">Other (mention in notes)</option>
              </select>
              <textarea
                placeholder="Why do you think it is contaminated? (smell, colour, illness, etc.)"
                className="textarea textarea-bordered w-full h-20"
              />
              <button type="button" className="bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-6 rounded-xl w-full transition-colors">
                Report Contamination
              </button>
            </form>
          </div>
        </div>
      </main>

      <Nav active="report" />
    </div>
  );
}