import Nav from "../nav";

const sources = [
  {
    id: "savita-borewell",
    name: "Savita Borewell",
    location: "Near Savita Bakery, Borewell Road",
    type: "Drinking and Cooking",
    status: "clean",
    distance: "400m",
  },
  {
    id: "gowda-colony-well",
    name: "Gowda Colony Well",
    location: "Inside Gowda Colony, near park",
    type: "Household Use",
    status: "clean",
    distance: "600m",
  },
  {
    id: "near-tax-bar",
    name: "HDMC Water Point",
    location: "Opposite the tax building, main road",
    type: "Household Use",
    status: "clean",
    distance: "800m",
  },
];

export default function Sources() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <header className="bg-teal-600 text-white p-4 shadow-md">
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/oasis-logo.svg" alt="Oasis Logo" className="w-8 h-8" />
            <h1 className="text-2xl font-bold font-heading">Oasis</h1>
          </div>
          <a href="/report" className="bg-white/20 hover:bg-white/30 text-white text-sm font-medium py-2 px-4 rounded-lg transition-colors">
            Report / Suggest
          </a>
        </div>
      </header>

      <main className="flex-1 max-w-3xl mx-auto w-full px-4 py-6 pb-20">
        <h2 className="text-2xl font-bold font-heading text-gray-800 mb-1">
          Clean Water Sources
        </h2>
        <p className="text-gray-500 mb-4">Around Borewell Road, Whitefield</p>

        <div className="flex gap-3 mb-6">
          <a href="/report" className="bg-white border-2 border-teal-600 text-teal-600 font-medium py-2 px-4 rounded-lg text-sm hover:bg-teal-50 transition-colors">
            Suggest a Source
          </a>
          <a href="/report" className="bg-white border-2 border-red-300 text-red-500 font-medium py-2 px-4 rounded-lg text-sm hover:bg-red-50 transition-colors">
            Report Contamination
          </a>
        </div>

        <div className="space-y-4">
          {sources.map((source) => (
            <div key={source.id} className="bg-white rounded-xl shadow-sm p-5">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-semibold font-heading text-gray-800">
                    {source.name}
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">{source.location}</p>
                  <p className="text-sm text-gray-500 mt-1">{source.type}</p>
                </div>
                <span className="inline-block px-3 py-1 text-sm font-medium text-white bg-emerald-500 rounded-full">
                  Clean
                </span>
              </div>
              <div className="flex items-center justify-between mt-4">
                <span className="text-sm text-gray-400">{source.distance}</span>
                <a href={`/sources/${source.id}`} className="bg-teal-600 hover:bg-teal-700 text-white text-sm font-semibold py-2 px-4 rounded-lg transition-colors">
                  View Details
                </a>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Nav active="sources" />
    </div>
  );
}
