import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <SignedOut>
          <div className="flex flex-col md:flex-row items-center justify-between gap-12 py-16">
            <div className="md:w-1/2">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Welcome to <span className="bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text">TechHub.pro</span>
              </h1>
              <p className="text-xl text-gray-700 mb-8 max-w-2xl">
                Your complete tech destination for PCs, laptops, components, and accessories. From gaming rigs to business laptops - lahat nandito!
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <SignInButton>
                  <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-3 rounded-lg font-medium hover:opacity-90 shadow-lg transform hover:-translate-y-0.5 transition-transform">
                    View Products
                  </button>
                </SignInButton>
                <Link href="/products">
                  <button className="bg-white text-gray-800 border border-gray-300 px-8 py-3 rounded-lg font-medium hover:bg-gray-50 shadow-sm">
                    Browse Catalog
                  </button>
                </Link>
              </div>
            </div>
            
            <div className="md:w-1/2 flex justify-center">
              <div className="relative">
                <div className="bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl w-80 h-80 flex items-center justify-center shadow-xl">
                  <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 w-64 h-64 flex flex-col items-center justify-center">
                    <div className="bg-white rounded-full p-3 mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <h3 className="text-white text-xl font-semibold mb-2">Tech Hub</h3>
                    <p className="text-white/80 text-center text-sm">PC & Laptop Store</p>
                  </div>
                </div>
                
                <div className="absolute -top-6 -right-6 bg-green-400 rounded-full w-24 h-24 flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-xs">Best Deals</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Product Categories Section */}
          <div className="py-16">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">Everything Tech in One Place</h2>
            <p className="text-center text-gray-600 mb-12">From gaming rigs to business laptops - your complete tech hub</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Desktop PCs */}
              <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow group">
                <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Desktop PCs</h3>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Gaming Rigs</li>
                  <li>• Office Computers</li>
                  <li>• Workstations</li>
                  <li>• Custom Builds</li>
                </ul>
              </div>
              
              {/* Laptops */}
              <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow group">
                <div className="bg-indigo-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:bg-indigo-200 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Laptops</h3>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Gaming Laptops</li>
                  <li>• Ultrabooks</li>
                  <li>• Business Laptops</li>
                  <li>• Budget Options</li>
                </ul>
              </div>
              
              {/* Components */}
              <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow group">
                <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:bg-purple-200 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Components</h3>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Processors (CPU)</li>
                  <li>• Graphics Cards (GPU)</li>
                  <li>• Memory (RAM)</li>
                  <li>• Storage (SSD/HDD)</li>
                </ul>
              </div>
              
              {/* Accessories */}
              <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow group">
                <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-200 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2M7 4h10M7 4l-2 14h14L17 4M9 9v6m6-6v6M12 1v2" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Accessories</h3>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Gaming Gear</li>
                  <li>• Keyboards & Mice</li>
                  <li>• Monitors</li>
                  <li>• Office Setup</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Why Choose TechHub.pro */}
          <div className="py-16 bg-white/50 rounded-2xl">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Why Choose TechHub.pro?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow text-center">
                <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Quality Guaranteed</h3>
                <p className="text-gray-600">All products are authentic with full warranty coverage and technical support.</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow text-center">
                <div className="bg-indigo-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Best Prices</h3>
                <p className="text-gray-600">Competitive pricing with regular deals and discounts on top brands.</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow text-center">
                <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Expert Support</h3>
                <p className="text-gray-600">Technical consultation and after-sales support from our expert team.</p>
              </div>
            </div>
          </div>
          <p className="text-black text-center">
            &copy; {new Date().getFullYear()} TechHub.pro. Your Complete Tech Hub - PC at Laptop, Lahat Nandito!
          </p>
        </SignedOut>
        
        <SignedIn>
          <div className="flex flex-col items-center justify-center min-h-[70vh] py-12">
            <div className="max-w-2xl text-center">
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4l1-12z" />
                </svg>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Welcome to your <span className="bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text">TechHub.pro</span>
              </h1>
              
              <p className="text-xl text-gray-700 mb-10 max-w-2xl mx-auto">
                Ready ka na to explore! Browse our complete collection of PCs, laptops, components, and accessories. Discover your dream setup today.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/products/desktop-pcs">
                  <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-3 rounded-lg font-medium hover:opacity-90 shadow-lg">
                    View Desktop PCs
                  </button>
                </Link>
                <Link href="/products/laptops">
                  <button className="bg-white text-gray-800 border border-gray-300 px-8 py-3 rounded-lg font-medium hover:bg-gray-50 shadow-sm">
                    View Laptops
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </SignedIn>
      </main>
    </div>
  );
}