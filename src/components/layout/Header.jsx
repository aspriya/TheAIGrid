'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useAuth } from '@/contexts/AuthContext';
import Button from '../ui/Button';
import Avatar from '../ui/Avatar';
import PageContainer from './PageContainer';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { user, logout } = useAuth();

  const navigation = [
    { name: 'Projects', href: '/projects' },
    { name: 'Browse', href: '/browse' },
    { name: 'Search', href: '/search' },
    { name: 'About', href: '/about' }
  ];

  return (
    <header className="bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100 sticky top-0 z-50">
      <PageContainer>
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="h-12 w-12 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transform group-hover:scale-105 transition-all duration-300">
                <span className="text-white font-bold text-xl">T</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent">
                  TheAIGrid
                </span>
                <span className="text-xs text-gray-500 font-medium -mt-1">AI Project Marketplace</span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-10">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-blue-600 font-medium text-lg transition-all duration-200 relative group py-2"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          {/* Right side - Auth/User */}
          <div className="flex items-center space-x-2 md:space-x-4">
            {user ? (
              <div className="flex items-center space-x-2 md:space-x-4">
                <Link href="/projects/create">
                  <Button 
                    variant="ghost" 
                    size="sm"
                    className="hidden md:flex font-semibold text-gray-700 hover:text-blue-600 hover:bg-blue-50 px-4 md:px-6"
                  >
                    Post Project
                  </Button>
                </Link>
                <div className="relative">
                  <Link href="/profile">
                    <button className="flex items-center space-x-2 text-gray-700 hover:text-gray-900 bg-gray-50 hover:bg-gray-100 rounded-full px-3 py-2 transition-all duration-200">
                      <Avatar
                        name={user.name}
                        size="sm"
                      />
                      <span className="hidden lg:block text-sm font-medium max-w-24 truncate">{user.name}</span>
                    </button>
                  </Link>
                </div>
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={logout}
                  className="text-gray-600 hover:text-red-600 px-2 md:px-4"
                >
                  <span className="hidden md:inline">Sign Out</span>
                  <span className="md:hidden">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                    </svg>
                  </span>
                </Button>
              </div>
            ) : (
              <div className="flex items-center space-x-2 md:space-x-4">
                <Link href="/login">
                  <Button 
                    variant="ghost" 
                    size="sm"
                    className="font-semibold text-gray-700 hover:text-blue-600 hover:bg-blue-50 px-3 md:px-6"
                  >
                    <span className="hidden sm:inline">Sign In</span>
                    <span className="sm:hidden text-xs">Login</span>
                  </Button>
                </Link>
                <Link href="/register">
                  <Button 
                    size="sm"
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-4 md:px-8 py-2 md:py-3 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 text-xs md:text-sm"
                  >
                    <span className="hidden sm:inline">Get Started</span>
                    <span className="sm:hidden">Join</span>
                  </Button>
                </Link>
              </div>
            )}

            {/* Mobile menu button */}
            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {mobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="space-y-3">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block text-gray-600 hover:text-gray-900 transition-colors duration-200 py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              {user && (
                <div className="space-y-2 pt-3 border-t border-gray-200">
                  <Link href="/post-project">
                    <Button variant="ghost" size="sm" className="w-full" onClick={() => setMobileMenuOpen(false)}>
                      Post Project
                    </Button>
                  </Link>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="w-full text-red-600 hover:text-red-700"
                    onClick={() => {
                      logout();
                      setMobileMenuOpen(false);
                    }}
                  >
                    Sign Out
                  </Button>
                </div>
              )}
              {!user && (
                <div className="space-y-2 pt-3 border-t border-gray-200">
                  <Link href="/login">
                    <Button variant="ghost" size="sm" className="w-full" onClick={() => setMobileMenuOpen(false)}>
                      Sign In
                    </Button>
                  </Link>
                  <Link href="/register">
                    <Button size="sm" className="w-full" onClick={() => setMobileMenuOpen(false)}>
                      Get Started
                    </Button>
                  </Link>
                </div>
              )}
            </div>
          </div>
        )}
      </PageContainer>
    </header>
  );
};

export default Header;
