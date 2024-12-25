import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from './Button';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isToolsOpen, setIsToolsOpen] = useState(false);

  const tools = [
    { name: 'Ad Copy Generator', path: '/tools/ad-copy' },
    { name: 'Long-form Content', path: '/tools/long-form' },
    { name: 'Social Media Posts', path: '/tools/social-media' },
    { name: 'YouTube Content', path: '/tools/youtube' },
  ];

  return (
    <header className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-blue-600">ContentForge AI</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <div className="relative">
              <button
                onClick={() => setIsToolsOpen(!isToolsOpen)}
                className="flex items-center text-gray-700 hover:text-blue-600"
              >
                Tools
                <ChevronDown size={16} className="ml-1" />
              </button>
              
              {/* Tools Dropdown */}
              {isToolsOpen && (
                <div className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                  <div className="py-1" role="menu">
                    {tools.map((tool) => (
                      <Link
                        key={tool.path}
                        to={tool.path}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        onClick={() => setIsToolsOpen(false)}
                      >
                        {tool.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <Link to="/features" className="text-gray-700 hover:text-blue-600">Features</Link>
            <Link to="/pricing" className="text-gray-700 hover:text-blue-600">Pricing</Link>
            <Link to="/blog" className="text-gray-700 hover:text-blue-600">Blog</Link>
            <Link to="/contact" className="text-gray-700 hover:text-blue-600">Contact</Link>
            <Button variant="outline" size="sm">Sign In</Button>
            <Button size="sm">Start Free Trial</Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <div className="space-y-1">
                <p className="px-3 py-2 text-sm font-medium text-gray-900">Tools</p>
                {tools.map((tool) => (
                  <Link
                    key={tool.path}
                    to={tool.path}
                    className="block px-3 py-2 text-sm text-gray-700 hover:text-blue-600 pl-6"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {tool.name}
                  </Link>
                ))}
              </div>
              <Link to="/features" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Features</Link>
              <Link to="/pricing" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Pricing</Link>
              <Link to="/blog" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Blog</Link>
              <Link to="/contact" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Contact</Link>
              <div className="mt-4 space-y-2">
                <Button variant="outline" className="w-full">Sign In</Button>
                <Button className="w-full">Start Free Trial</Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}