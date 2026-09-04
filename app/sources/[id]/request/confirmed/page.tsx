export default async function Confirmed({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <header className="bg-teal-600 text-white p-4 shadow-md">
        <div className="max-w-3xl mx-auto flex items-center gap-3">
          <img src="/oasis-logo.svg" alt="Oasis Logo" className="w-8 h-8" />
          <h1 className="text-2xl font-bold font-heading">Oasis</h1>
        </div>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center px-6 py-12 text-center">
        <div className="mb-6">
          <svg className="w-20 h-20 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>

        <h2 className="text-3xl font-bold font-heading text-gray-800 mb-2">
          Delivery Confirmed!
        </h2>
        <p className="text-gray-500 max-w-md mb-2">
          Your water delivery has been scheduled. You will receive it at your registered address.
        </p>
        <p className="text-sm text-gray-400 mb-8">
          You can track your order in My Orders
        </p>

        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href="/sources"
            className="bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 px-6 rounded-xl transition-colors"
          >
            Back to Sources
          </a>
          <a
            href="/orders"
            className="bg-white border-2 border-teal-600 text-teal-600 font-semibold py-3 px-6 rounded-xl hover:bg-teal-50 transition-colors"
          >
            View My Orders
          </a>
        </div>
      </main>
    </div>
  );
}
