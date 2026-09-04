import Nav from "../nav";

const orders = [
  {
    id: 1,
    source: "Savita Borewell",
    amount: "20 Litres",
    time: "5:00 PM",
    daily: true,
    status: "confirmed",
    date: "Today",
  },
  {
    id: 2,
    source: "Gowda Colony Well",
    amount: "10 Litres",
    time: "8:00 AM",
    daily: false,
    status: "delivered",
    date: "Yesterday",
  },
];

export default function Orders() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <header className="bg-teal-600 text-white p-4 shadow-md">
        <div className="max-w-3xl mx-auto flex items-center gap-3">
          <img src="/oasis-logo.svg" alt="Oasis Logo" className="w-8 h-8" />
          <h1 className="text-2xl font-bold font-heading">Oasis</h1>
        </div>
      </header>

      <main className="flex-1 max-w-3xl mx-auto w-full px-4 py-6 pb-20">
        <h2 className="text-2xl font-bold font-heading text-gray-800 mb-1">
          My Orders
        </h2>
        <p className="text-gray-500 mb-6">Track your water deliveries</p>

        {orders.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg mb-4">No orders yet</p>
            <a href="/sources" className="bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 px-6 rounded-xl transition-colors">
              Browse Water Sources
            </a>
          </div>
        ) : (
          <div className="space-y-4">
            {orders.map((order) => (
              <div key={order.id} className="bg-white rounded-xl shadow-sm p-5">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-lg font-semibold font-heading text-gray-800">
                      {order.source}
                    </h3>
                    <p className="text-sm text-gray-500">{order.amount} - {order.time}</p>
                    {order.daily && (
                      <span className="inline-block mt-1 px-2 py-0.5 text-xs font-medium text-teal-600 bg-teal-50 rounded-full">
                        Daily Delivery
                      </span>
                    )}
                  </div>
                  <span
                    className={`inline-block px-3 py-1 text-sm font-medium rounded-full ${
                      order.status === "confirmed"
                        ? "text-blue-700 bg-blue-100"
                        : order.status === "delivered"
                        ? "text-emerald-700 bg-emerald-100"
                        : "text-amber-700 bg-amber-100"
                    }`}
                  >
                    {order.status === "confirmed"
                      ? "Confirmed"
                      : order.status === "delivered"
                      ? "Delivered"
                      : "Pending"}
                  </span>
                </div>
                <p className="text-xs text-gray-400">{order.date}</p>
              </div>
            ))}
          </div>
        )}
      </main>

      <Nav active="orders" />
    </div>
  );
}
