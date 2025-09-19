import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Link from "next/link";

export default function TopNav() {
    return (
        <nav className="sticky top-0 z-50 w-full bg-white border-b border-gray-200 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-2">
                        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-2 rounded-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                        </div>
                        <span className="text-xl font-bold text-gray-900">TechHub.pro</span>
                    </Link>

                    {/* Navigation Links and Auth Controls */}
                    <div className="flex items-center space-x-6">
                        <SignedOut>
                            {/* Navigation Links */}
                            <div className="hidden md:flex items-center space-x-6">
                                <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                                    Home
                                </Link>
                                <Link href="/about" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                                    About
                                </Link>
                                <Link href="/contact" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                                    Contact
                                </Link>
                            </div>
                            
                            {/* Sign In Button */}
                            <SignInButton>
                                <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 rounded-lg font-medium hover:opacity-90 transition-copacity shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-transform text-sm">
                                    Sign In
                                </button>
                            </SignInButton>
                        </SignedOut>

                        <SignedIn>
                            {/* Navigation Links for Signed In Users */}
                            <div className="hidden md:flex items-center space-x-6">
                                <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                                    Home
                                </Link>
                                <Link href="/products" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                                    Products
                                </Link>
                                <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                                    Cart
                                </Link>
                                <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                                    Orders
                                </Link>
                                <UserButton/>
                            </div>
                        </SignedIn>

                        {/* Mobile Menu Button */}
                        <div className="md:hidden">
                            <button className="text-gray-700 hover:text-blue-600 p-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}