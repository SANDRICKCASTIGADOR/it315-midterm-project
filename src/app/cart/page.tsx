export default function CartPage() {
  const cartItems = [
    { 
      id: 1, 
      name: "Asus TUF A15", 
      price: 55000, 
      quantity: 1, 
      image: "https://dlcdnwebimgs.asus.com/gain/8b25250f-bf55-425f-93bd-b5d8e2744b3e/", 
      specs: "Processor: AMD Ryzen 7 (7435HS) | Graphic: NVIDIA GeForce RTX 3050 | Display: 15.6'' FHD 144Hz | RAM: 8GB DDR5 (upgrade up to 32GB) | Storage: 512GB SSD (NVMe M.2, up to 1TB)"
    },
  ];

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-blue-700 mb-10">🛒 Your Cart</h1>

        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex flex-col md:flex-row items-center justify-between bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition"
          >
            <div className="flex items-center space-x-6">
              <img
                src={item.image}
                alt={item.name}
                className="w-32 h-32 object-cover rounded-lg border"
              />
              <div>
                <h2 className="text-2xl font-semibold text-gray-800">{item.name}</h2>
                <p className="text-blue-700 font-medium mt-2">₱{item.price.toLocaleString()}</p>
                <p className="text-gray-600 text-sm mt-2">{item.specs}</p>
                <p className="mt-2 text-gray-700">Quantity: {item.quantity}</p>
              </div>
            </div>
            <button className="mt-4 md:mt-0 bg-red-500 text-white px-5 py-2 rounded-lg hover:bg-red-600 transition">
              Remove
            </button>
          </div>
        ))}

        <div className="mt-12 bg-white p-6 rounded-2xl shadow-lg">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold">Total:</h2>
            <p className="text-2xl font-semibold text-blue-700">₱{total.toLocaleString()}</p>
          </div>
          <button className="w-full mt-6 bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 py-3 rounded-lg font-medium hover:opacity-90 transition">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
}
