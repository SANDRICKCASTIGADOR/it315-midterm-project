export default function OrdersPage() {
  const orders = [
    { id: 101, date: "2025-09-01", total: "₱50,000", status: "Shipped" },
    { id: 102, date: "2025-09-05", total: "₱50,000", status: "Processing" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-5xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-blue-700 mb-8">📦 My Orders</h1>

        <div className="space-y-6">
          {orders.map((order) => (
            <div 
              key={order.id} 
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition flex justify-between items-center"
            >
              <div>
                <h2 className="text-xl font-semibold text-gray-800">
                  Order #{order.id}
                </h2>
                <p className="text-gray-600 mt-1">🗓 Date: {order.date}</p>
                <p className="text-gray-600">💰 Total: {order.total}</p>
              </div>

              <span 
                className={`px-5 py-2 rounded-lg text-sm font-medium ${
                  order.status === "Shipped" 
                    ? "bg-green-100 text-green-700 border border-green-300" 
                    : "bg-yellow-100 text-yellow-700 border border-yellow-300"
                }`}
              >
                {order.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
