import { useState } from 'react';

const MobileHeader = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-gray-800/95 backdrop-blur-md shadow-2xl border-b border-gray-700/50 sticky top-0 z-50 md:hidden">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">H</span>
            </div>
            <div>
              <h1 className="text-lg font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Harsh Prakash
              </h1>
              <p className="text-xs bg-gradient-to-r from-violet-600 via-blue-700 to-cyan-700 bg-clip-text text-transparent">
                Developer
              </p>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-lg bg-gradient-to-r from-gray-700/50 to-gray-800/50
                       hover:from-orange-600/20 hover:to-pink-600/20
                       border border-gray-600/30 hover:border-orange-400/50
                       transition-all duration-300 transform hover:scale-105
                       shadow-md shadow-gray-900/20 hover:shadow-orange-500/20"
          >
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="mt-4 pb-4 border-t border-gray-700/50 pt-4">
            <div className="flex flex-col space-y-4">
              <a
                href="#about"
                className="text-gray-300 hover:text-blue-400 transition-all duration-300 py-2 px-4 rounded-lg hover:bg-gray-700/30"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </a>
              <a
                href="#skills"
                className="text-gray-300 hover:text-purple-400 transition-all duration-300 py-2 px-4 rounded-lg hover:bg-gray-700/30"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Skills
              </a>
              <a
                href="#projects"
                className="text-gray-300 hover:text-green-400 transition-all duration-300 py-2 px-4 rounded-lg hover:bg-gray-700/30"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Projects
              </a>
              <a
                href="#contact"
                className="text-gray-300 hover:text-pink-400 transition-all duration-300 py-2 px-4 rounded-lg hover:bg-gray-700/30"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default MobileHeader;
