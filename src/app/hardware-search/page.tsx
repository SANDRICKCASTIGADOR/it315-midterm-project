"use client";

import { useState } from "react";

interface HardwareSpec {
  id: string;
  imageUrl: string | null;
  brandname: string | null;
  processor: string | null;
  graphic: string | null;
  display: string | null;
  ram: string | null;
  storage: string | null;
  createdAt: Date;
}

export default function ProductSpecsPage() {
  const [searchName, setSearchName] = useState("");
  const [product, setProduct] = useState<HardwareSpec | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Replace with your Website A domain
  const WEBSITE_A_URL = "http://localhost:3000"; // or "https://your-website-a-domain.com"

  async function searchProduct() {
    if (!searchName.trim()) {
      setError("Please enter a product name");
      return;
    }

    setLoading(true);
    setError("");
    
    try {
      const response = await fetch(`${WEBSITE_A_URL}/api/hardware/search`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ brandname: searchName }),
      });

      if (!response.ok) {
        throw new Error('Product not found');
      }

      const data = await response.json();
      setProduct(data);
    } catch (err) {
      setError('Product not found or server error');
      setProduct(null);
    } finally {
      setLoading(false);
    }
  }

  const getSpecsList = (product: HardwareSpec) => {
    const specs = [];
    if (product.processor) specs.push(`Processor: ${product.processor}`);
    if (product.graphic) specs.push(`Graphics: ${product.graphic}`);
    if (product.display) specs.push(`Display: ${product.display}`);
    if (product.ram) specs.push(`RAM: ${product.ram}`);
    if (product.storage) specs.push(`Storage: ${product.storage}`);
    return specs;
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-blue-700 mb-8">Hardware Specs Finder</h1>

        {/* Search Section */}
        <div className="bg-white rounded-2xl shadow-md mb-8 p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Search Hardware</h2>
          
          <div className="space-y-4">
            <div>
              <label htmlFor="productName" className="block text-sm font-medium text-gray-700 mb-2">
                Brand/Product Name
              </label>
              <input
                id="productName"
                type="text"
                placeholder="Enter brand name (e.g., HP Victus 15)"
                value={searchName}
                onChange={(e) => setSearchName(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && searchProduct()}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            
            <button
              onClick={searchProduct}
              disabled={loading}
              className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-medium py-2 px-4 rounded-md transition duration-200"
            >
              {loading ? 'Searching...' : 'Search Hardware'}
            </button>
            
            {error && (
              <p className="text-red-500 text-sm">{error}</p>
            )}
          </div>
        </div>

        {/* Product Display */}
        {product && (
          <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-6">
            {product.imageUrl && (
              <img 
                src={product.imageUrl} 
                alt={product.brandname || "Hardware"} 
                className="rounded-lg mb-4 w-full h-48 object-contain"
              />
            )}
            
            {/* Product Name */}
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              {product.brandname || "Unknown Brand"}
            </h2>
            
            {/* Specs Section */}
            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Specifications</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                {getSpecsList(product).map((spec, index) => (
                  <li key={index} className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>{spec}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Creation Date */}
            <p className="text-xs text-gray-400 mt-4">
              Added: {new Date(product.createdAt).toLocaleDateString()}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}