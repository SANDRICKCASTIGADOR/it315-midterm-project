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
  createdAt: string;
}

export default function ProductSpecsPage() {
  const [searchName, setSearchName] = useState("");
  const [product, setProduct] = useState<HardwareSpec | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [debugInfo, setDebugInfo] = useState("");

  const WEBSITE_A_URL = "/api/external-fetch";

  async function searchProduct() {
    if (!searchName.trim()) {
      setError("Please enter a product name");
      return;
    }

    setLoading(true);
    setError("");
    setDebugInfo("Starting fetch...");

    try {
      console.log("Fetching from:", WEBSITE_A_URL);
      setDebugInfo("Sending request to external API...");

      const response = await fetch(WEBSITE_A_URL, {
        method: "GET",
        headers: { 
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        mode: 'cors' // Explicitly handle CORS
      });

      console.log("Response status:", response.status);
      console.log("Response ok:", response.ok);
      console.log("Response headers:", response.headers);

      setDebugInfo(`Response received: ${response.status} ${response.statusText}`);

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }

      const data = await response.json();
      console.log("Full API response:", data);
      console.log("Response type:", typeof data);
      console.log("Is array:", Array.isArray(data));
      
      if (data && typeof data === 'object') {
        console.log("Keys in response:", Object.keys(data));
      }

      setDebugInfo(`Data received. Type: ${typeof data}, IsArray: ${Array.isArray(data)}`);

      // Handle different possible response formats
      let items = [];
      
      if (Array.isArray(data)) {
        items = data;
        setDebugInfo(`Found array with ${data.length} items`);
      } else if (data.items && Array.isArray(data.items)) {
        items = data.items;
        setDebugInfo(`Found items array with ${data.items.length} items`);
      } else if (data.results && Array.isArray(data.results)) {
        items = data.results;
        setDebugInfo(`Found results array with ${data.results.length} items`);
      } else {
        console.log("Unexpected response format:", data);
        setDebugInfo(`Unexpected response format: ${JSON.stringify(data).substring(0, 100)}...`);
        throw new Error("Invalid response format - expected array of items");
      }

      console.log("Items to search through:", items);
      console.log("Number of items:", items.length);
      
      if (items.length === 0) {
        throw new Error("No data available in the external API");
      }

      // Debug: Show what fields are available in the first item
      if (items[0]) {
        console.log("First item structure:", Object.keys(items[0]));
        console.log("First item:", items[0]);
      }

      // Search for matching hardware
      const searchTerm = searchName.toLowerCase();
      const matchedHardware = items.find((item: any) => {
        const brandMatch = item.brandname?.toLowerCase().includes(searchTerm);
        const nameMatch = item.name?.toLowerCase().includes(searchTerm);
        const processorMatch = item.processor?.toLowerCase().includes(searchTerm);
        
        console.log(`Checking item ${item.id}:`, {
          brandname: item.brandname,
          name: item.name,
          processor: item.processor,
          brandMatch,
          nameMatch,
          processorMatch
        });
        
        return brandMatch || nameMatch || processorMatch;
      });

      console.log("Matched hardware:", matchedHardware);

      if (!matchedHardware) {
        const availableBrands = items
          .map((item: any) => item.brandname || item.name)
          .filter(Boolean)
          .join(", ");
        
        setDebugInfo(`No match found. Available items: ${availableBrands}`);
        throw new Error(`Product "${searchName}" not found. Available: ${availableBrands.substring(0, 100)}...`);
      }

      setProduct({
        id: matchedHardware.id,
        imageUrl: matchedHardware.imageUrl || null,
        brandname: matchedHardware.brandname || matchedHardware.name || null,
        processor: matchedHardware.processor || null,
        graphic: matchedHardware.graphic || null,
        display: matchedHardware.display || null,
        ram: matchedHardware.ram || null,
        storage: matchedHardware.storage || null,
        createdAt: matchedHardware.createdAt || new Date().toISOString(),
      });

      setDebugInfo("Product found and displayed successfully!");

    } catch (err) {
      console.error("Full error:", err);
      
      if (err instanceof TypeError && err.message.includes('fetch')) {
        setError("Network error - unable to reach external API. Check CORS settings.");
        setDebugInfo("Network/CORS error occurred");
      } else {
        const errorMessage = err instanceof Error ? err.message : "Unknown error occurred";
        setError(errorMessage);
        setDebugInfo(`Error: ${errorMessage}`);
      }
      
      setProduct(null);
    } finally {
      setLoading(false);
    }
  }

  const resetSearch = () => {
    setSearchName("");
    setProduct(null);
    setError("");
    setDebugInfo("");
  };

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
        <h1 className="text-4xl font-bold text-blue-700 mb-8">
          External Hardware API Search
        </h1>

        {/* Search Section */}
        <div className="bg-white rounded-2xl shadow-md mb-8 p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Search External Database
          </h2>

          <div className="space-y-4">
            <div>
              <label
                htmlFor="productName"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Brand/Product Name
              </label>
              <input
                id="productName"
                type="text"
                placeholder="Enter brand name, product name, or processor"
                value={searchName}
                onChange={(e) => setSearchName(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && searchProduct()}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                disabled={loading}
              />
            </div>

            <div className="flex gap-2">
              <button
                onClick={searchProduct}
                disabled={loading || !searchName.trim()}
                className="flex-1 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-medium py-2 px-4 rounded-md transition duration-200"
              >
                {loading ? "Searching External API..." : "Search Hardware"}
              </button>
              
              <button
                onClick={resetSearch}
                className="px-4 py-2 bg-gray-500 hover:bg-gray-600 text-white font-medium rounded-md transition duration-200"
              >
                Reset
              </button>
            </div>

            {error && (
              <div className="p-3 bg-red-100 border border-red-300 text-red-700 rounded-md">
                <strong>Error:</strong> {error}
              </div>
            )}

            {debugInfo && (
              <div className="p-3 bg-blue-50 border border-blue-200 text-blue-800 rounded-md text-sm">
                <strong>Debug:</strong> {debugInfo}
              </div>
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
                onError={(e) => {
                  console.log("Image failed to load:", product.imageUrl);
                  (e.target as HTMLImageElement).style.display = 'none';
                }}
              />
            )}

            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              {product.brandname || "Unknown Brand"}
            </h2>

            <div className="bg-gray-50 rounded-lg p-4 mb-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                Specifications
              </h3>
              {getSpecsList(product).length > 0 ? (
                <ul className="text-sm text-gray-600 space-y-2">
                  {getSpecsList(product).map((spec, index) => (
                    <li key={index} className="flex items-start">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>{spec}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-500 text-sm">No detailed specifications available</p>
              )}
            </div>

            <div className="text-xs text-gray-400 space-y-1">
              <p>Product ID: {product.id}</p>
              <p>Added: {new Date(product.createdAt).toLocaleDateString()}</p>
              <p>Source: External API</p>
            </div>
          </div>
        )}

        {/* API Info */}
        <div className="mt-6 p-4 bg-gray-100 rounded-lg text-sm text-gray-600">
          <p><strong>External API:</strong> {WEBSITE_A_URL}</p>
          <p><strong>Search Method:</strong> Fetch all data, then filter locally</p>
          <p><strong>CORS:</strong> Cross-origin requests enabled</p>
        </div>
      </div>
    </div>
  );
}