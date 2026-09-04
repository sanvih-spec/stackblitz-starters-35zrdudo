export default async function RequestDelivery({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <header className="bg-teal-600 text-white p-4 shadow-md">
        <div className="max-w-3xl mx-auto flex items-center gap-3">
          <a href={`/sources/${id}`} className="text-white">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </a>
          <h1 className="text-2xl font-bold font-heading">Oasis</h1>
        </div>
      </header>

      <main className="flex-1 max-w-3xl mx-auto w-full px-4 py-6">
        <h2 className="text-2xl font-bold font-heading text-gray-800 mb-2">
          Request Delivery
        </h2>
        <p className="text-gray-500 mb-6">
          Fill in the details to get water delivered
        </p>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <form className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Amount (Liters)
              </label>
              <select className="select select-bordered w-full">
                <option value="">Select amount</option>
                <option value="5">5 Litres</option>
                <option value="10">10 Litres</option>
                <option value="20">20 Litres</option>
                <option value="50">50 Litres</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Delivery Time
              </label>
              <select className="select select-bordered w-full">
                <option value="">Select time</option>
                <option value="6am">6:00 AM</option>
                <option value="8am">8:00 AM</option>
                <option value="10am">10:00 AM</option>
                <option value="12pm">12:00 PM</option>
                <option value="2pm">2:00 PM</option>
                <option value="4pm">4:00 PM</option>
                <option value="5pm">5:00 PM</option>
                <option value="6pm">6:00 PM</option>
              </select>
            </div>

            <div className="flex items-center justify-between bg-gray-50 rounded-lg p-4">
              <div>
                <p className="font-medium text-gray-700">Daily Delivery</p>
                <p className="text-sm text-gray-500">
                  Get water delivered every day at this time
                </p>
              </div>
              <input type="checkbox" className="toggle toggle-primary" />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Any Notes?
              </label>
              <textarea
                placeholder="Special instructions (optional)"
                className="textarea textarea-bordered w-full h-16"
              />
            </div>

            <a
              href={`/sources/${id}/request/confirmed`}
              className="block w-full bg-teal-600 hover:bg-teal-700 text-white text-center font-semibold py-3 px-8 rounded-xl text-lg transition-colors"
            >
              Confirm Delivery
            </a>
          </form>
        </div>
      </main>
    </div>
  );
}
