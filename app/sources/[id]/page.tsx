const sources: Record<string, { name: string; location: string; type: string; status: string; distance: string; details: string }> = {
  "savita-borewell": {
    name: "Savita Borewell",
    location: "Near Savita Bakery, Borewell Road",
    type: "Drinking & Cooking",
    status: "clean",
    distance: "400m",
    details: "This borewell has been tested and confirmed safe for drinking and cooking. Water is available from 6 AM to 6 PM daily.",
  },
  "gowda-colony-well": {
    name: "Gowda Colony Well",
    location: "Inside Gowda Colony, near park",
    type: "Household Use",
    status: "clean",
    distance: "600m",
    details: "Fresh groundwater source, tested monthly. Best for household use like cleaning and bathing.",
  },
  "near-tax-bar": {
    name: "HDMC Water Point",
    location: "Opposite the tax building, main road",
    type: "Household Use",
    status: "clean",
    distance: "800m",
    details: "Municipal water supply point. Available 24/7. Suitable for all household purposes.",
  },
};

export default async function SourceDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const source = sources[id];

  if (!source) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold text-gray-800">Source not found</h2>
        <a href="/sources" className="mt-4 text-teal-600 font-semibold hover:underline">
          Back to Sources
        </a>
      </div>
    );
  }

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

      <main className="flex-1 max-w-3xl mx-auto w-full px-4 py-6">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-start justify-between mb-4">
            <h2 className="text-2xl font-bold font-heading text-gray-800">
              {source.name}
            </h2>
            <span className="inline-block px-3 py-1 text-sm font-medium text-white bg-emerald-500 rounded-full">
              Clean
            </span>
          </div>

          <p className="text-gray-500 mb-2">{source.location}</p>
          <p className="text-sm text-gray-400 mb-4">{source.distance} away</p>

          <div className="bg-gray-50 rounded-lg p-4 mb-6">
            <p className="text-sm font-medium text-gray-700 mb-1">Type</p>
            <p className="text-gray-600">{source.type}</p>
          </div>

          <div className="bg-gray-50 rounded-lg p-4 mb-6">
            <p className="text-sm font-medium text-gray-700 mb-1">About This Source</p>
            <p className="text-gray-600">{source.details}</p>
          </div>

          <a
            href={`/sources/${id}/request`}
            className="block w-full bg-teal-600 hover:bg-teal-700 text-white text-center font-semibold py-3 px-8 rounded-xl text-lg transition-colors"
          >
            Request Delivery
          </a>
        </div>
      </main>
    </div>
  );
}