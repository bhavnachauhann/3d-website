'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navigationLinks = [
  { href: '/works', label: 'Works' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About' },
  { href: '/blog', label: 'Blog' },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-[#f0f0f0]">
     {/* Status Bar */}



      {/* Main Navigation */}
      <header className="flex justify-center px-4 py-6">
        <div className="w-full max-w-7xl">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <img src="/logo.webp" alt="TAW - The Agency Way" className="h-12 w-auto" />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center justify-center flex-1">
              <div className="flex items-center space-x-8">
                {navigationLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-navbar-text hover:text-foreground transition-colors font-medium"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </nav>

            {/* Contact Button */}
            <div className="flex items-center space-x-4">
              <button
                className="hidden md:block bg-[#565656] text-white hover:bg-[#565656]/90 px-6 py-2 rounded-full font-medium"
              >
                Contact
              </button>
              
              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden text-navbar-text"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="md:hidden mt-4 pb-4 border-t border-border">
              <div className="pt-4 space-y-2">
                {navigationLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="block py-2 text-navbar-text hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
                <button
  className="mt-4 bg-[#565656] text-white hover:bg-[#565656]/90 px-6 py-2 rounded-full w-full"
>
  Contact
</button>
              </div>
            </nav>
          )}
        </div>
      </header>
    </div>
  );
};

export default Navbar;