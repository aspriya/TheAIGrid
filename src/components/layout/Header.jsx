'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useSession, signOut } from 'next-auth/react';
import Button from '../ui/Button';
import Avatar from '../ui/Avatar';
import PageContainer from './PageContainer';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { data: session, status } = useSession();

  const navigation = [
    { name: 'Projects', href: '/projects' },
    { name: 'About', href: '/about' }
  ];

  const handleSignOut = async () => {
    await signOut({ callbackUrl: '/' });
  };

  return (
    <header className="bg-white/98 backdrop-blur-xl shadow-xl border-b border-slate-200/60 sticky top-0 z-50 transition-all duration-300">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50/30 via-white to-purple-50/30"></div>
      <PageContainer>
        <div className="relative flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2 md:space-x-4 group">
              <div className="relative">
                <div className="h-10 w-10 md:h-14 md:w-14 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-600 rounded-xl md:rounded-2xl flex items-center justify-center shadow-lg md:shadow-xl group-hover:shadow-2xl transform group-hover:scale-105 transition-all duration-500 border border-white/20">
                  <span className="text-white font-bold text-lg md:text-2xl">T</span>
                </div>
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl md:rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur"></div>
              </div>
              <div className="flex flex-col">
                <span className="text-lg md:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-slate-900 via-blue-800 to-purple-800 bg-clip-text text-transparent tracking-tight">
                  TheAIGrid
                </span>
                <span className="text-[10px] md:text-xs text-slate-500 font-semibold -mt-1 tracking-wide uppercase">
                  AI Project Marketplace
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-12">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="relative text-slate-700 hover:text-blue-600 font-semibold text-lg transition-all duration-300 group py-3 px-2"
              >
                <span className="relative z-10">{item.name}</span>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 group-hover:w-full rounded-full"></span>
                <span className="absolute inset-0 bg-blue-50 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 -z-10"></span>
              </Link>
            ))}
          </nav>

          {/* Right side - Auth/User */}
          <div className="flex items-center space-x-2 md:space-x-6">
            {session ? (
              <div className="flex items-center space-x-2 md:space-x-5">
                <Link href="/projects/create">
                  <Button 
                    variant="ghost" 
                    size="sm"
                    className="hidden md:flex font-bold text-slate-700 hover:text-blue-600 hover:bg-blue-50 px-6 py-2.5 rounded-xl transition-all duration-300 border border-transparent hover:border-blue-200"
                  >
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                    Launch Project
                  </Button>
                </Link>
                <div className="relative">
                  <Link href="/profile">
                    <button className="flex items-center space-x-2 md:space-x-3 text-slate-700 hover:text-slate-900 bg-slate-50/80 hover:bg-slate-100 rounded-xl md:rounded-2xl px-2 md:px-4 py-1.5 md:py-2.5 transition-all duration-300 border border-slate-200/50 hover:border-slate-300 shadow-sm hover:shadow-md">
                      <Avatar
                        src={session.user?.image}
                        name={session.user?.name || 'User'}
                        size="sm"
                      />
                      <span className="hidden lg:block text-sm font-semibold max-w-28 truncate text-slate-700">{session.user?.name}</span>
                      <svg className="hidden lg:block w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                  </Link>
                </div>
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={handleSignOut}
                  className="text-slate-600 hover:text-red-600 hover:bg-red-50 px-2 md:px-4 py-1.5 md:py-2.5 rounded-lg md:rounded-xl transition-all duration-300 border border-transparent hover:border-red-200"
                >
                  <span className="hidden md:inline font-medium">Sign Out</span>
                  <span className="md:hidden">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                    </svg>
                  </span>
                </Button>
              </div>
            ) : (
              <div className="flex items-center space-x-2 md:space-x-4">
                <Link href="/auth">
                  <Button 
                    variant="ghost" 
                    size="sm"
                    className="font-bold text-slate-700 hover:text-blue-600 hover:bg-blue-50 px-3 md:px-6 py-1.5 md:py-2.5 rounded-lg md:rounded-xl transition-all duration-300 border border-transparent hover:border-blue-200"
                  >
                    <span className="hidden sm:inline">Sign In</span>
                    <span className="sm:hidden text-xs">Login</span>
                  </Button>
                </Link>
                <Link href="/auth">
                  <Button 
                    size="sm"
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold px-3 md:px-8 py-1.5 md:py-3 shadow-lg md:shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 text-xs md:text-sm rounded-lg md:rounded-xl border border-white/20"
                  >
                    <span className="hidden sm:inline">Get Started</span>
                    <span className="sm:hidden">Join</span>
                  </Button>
                </Link>
              </div>
            )}

            {/* Mobile menu button */}
            <button
              className="md:hidden p-1.5 rounded-lg bg-slate-50 hover:bg-slate-100 border border-slate-200 transition-all duration-300"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <svg
                className="h-5 w-5 text-slate-600"
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
          <div className="md:hidden py-6 border-t border-slate-200/60 bg-slate-50/50 backdrop-blur-sm">
            <div className="space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block text-slate-600 hover:text-blue-600 transition-colors duration-300 py-3 px-4 rounded-xl hover:bg-blue-50 font-semibold"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              {session && (
                <div className="space-y-3 pt-4 border-t border-slate-200">
                  <Link href="/projects/create">
                    <Button variant="ghost" size="sm" className="w-full justify-start font-semibold" onClick={() => setMobileMenuOpen(false)}>
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                      </svg>
                      Launch Project
                    </Button>
                  </Link>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="w-full justify-start text-red-600 hover:text-red-700 hover:bg-red-50 font-semibold"
                    onClick={() => {
                      handleSignOut();
                      setMobileMenuOpen(false);
                    }}
                  >
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                    </svg>
                    Sign Out
                  </Button>
                </div>
              )}
              {!session && (
                <div className="space-y-3 pt-4 border-t border-slate-200">
                  <Link href="/auth">
                    <Button variant="ghost" size="sm" className="w-full justify-start font-semibold" onClick={() => setMobileMenuOpen(false)}>
                      Sign In
                    </Button>
                  </Link>
                  <Link href="/auth">
                    <Button size="sm" className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 font-bold" onClick={() => setMobileMenuOpen(false)}>
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
