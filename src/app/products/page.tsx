export default function ProductsPage() {
  const products = [
    { 
      id: 1, 
      name: "Asus TUF A15", 
      price: "₱50,000", 
      specs: [
        "Processor: AMD Ryzen 7 (7435HS)",
        "Graphics: NVIDIA GeForce RTX 3050",
        "Display: 15.6\" (1920x1080) IPS FHD, 144Hz",
        "RAM: 8GB DDR5 (upgrade up to 32GB, dual channel support)",
        "Storage: 512GB SSD (NVMe M.2, slot support up to 1TB)"
      ], 
      image: "https://dlcdnwebimgs.asus.com/gain/8b25250f-bf55-425f-93bd-b5d8e2744b3e/" 
    },
    { 
      id: 2, 
      name: "Lenovo LOQ 15", 
      price: "₱45,000", 
      specs: [
        "Processor: Intel Core i5 (12450HX)",
        "Graphics: NVIDIA GeForce RTX 3050",
        "Display: 15.6\" FHD 144Hz, 100% sRGB, G-Sync",
        "RAM: 12GB DDR5 (upgrade hingga 32gb, dual channel support)",
        "Storage: 512GB SSD (Slot 2x M.2 NVMe)"
      ], 
      image: "https://p4-ofp.static.pub//fes/cms/2024/05/20/bck35fhess1td0jtxhbqx1a2s9ofzk318843.png" 
    },
    { 
      id: 3, 
      name: "ACER NITRO V15", 
      price: "₱40,000", 
      specs: [
        "Processor: AMD Ryzen 5 (6600H)",
        "Graphics: NVIDIA GeForce RTX 3050",
        "Display: 15.6\" FHD (1920x1080) IPS, 165Hz",
        "RAM: 8GB DDR5 (upgrade up to 32gb, dual channel support)",
        "Storage: 512GB SSD (NVMe M.2, slot support up to 1TB)"
      ], 
      image: "https://ecommerce.datablitz.com.ph/cdn/shop/files/Layer56_1024x.jpg?v=1719543166" 
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-blue-700 mb-8">Products</h1>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div 
              key={product.id} 
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-6"
            >
              <img 
                src={product.image} 
                alt={product.name} 
                className="rounded-lg mb-4 w-full h-48 object-contain"
              />
              {/* Product Name */}
              <h2 className="text-2xl font-bold text-gray-800 mb-2">{product.name}</h2>
              
              {/* Price */}
              <p className="text-lg text-blue-600 font-semibold">{product.price}</p>

              {/* Specs Section */}
              <ul className="mt-3 text-sm text-gray-500 list-disc list-inside space-y-1">
                {product.specs?.map((spec, index) => (
                  <li key={index}>{spec}</li>
                ))}
              </ul>

              <button className="mt-4 w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-2 rounded-lg font-medium hover:opacity-90 transition">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
