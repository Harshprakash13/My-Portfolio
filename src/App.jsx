import { useState, useEffect } from 'react';
import ProjectCard from './components/ProjectCard';
import Contact from './components/Contact';
import MobileHeader from './components/MobileHeader';
import ProjectDetailModal from './components/ProjectDetailModal';
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

// ScrollToTop component to scroll to top on route change
function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
}
import HandwrittenDigit from "./pages/HandwrittenDigit";
import Portfolio from './pages/Portfolio';
import Snake from './pages/Snake';
import WeatherApp from './pages/WeatherApp';


function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      <ScrollToTop />
    <Routes>
      {/* ================= HOME PAGE ================= */}
      <Route
        path="/" element={

          <div className="dark">
            <div className="min-h-screen bg-gray-900 text-white">
              {/* Removed Custom Animated Cricket Ball Cursor */}

              {/* Mobile Header */}
              <MobileHeader />

              {/* Desktop Header */}
              <header className="bg-gray-900/30 backdrop-blur-lg shadow-xl sticky top-0 z-50 hidden md:block">
                <nav className="container mx-auto px-6 py-4 flex justify-between items-center">

                  {/* Logo + Name */}
                  <a href="/" className="flex items-center space-x-4">
                    {/* Neural Network HP Logo (slightly smaller) */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 128 128"
                      className="w-12 h-12 md:w-16 md:h-16"
                    >
                      <defs>
                        <linearGradient id="neuralGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#60a5fa" />
                          <stop offset="100%" stopColor="#06b6d4" />
                        </linearGradient>
                      </defs>

                      {/* Central HP node */}
                      <circle cx="64" cy="64" r="18" fill="url(#neuralGrad)" />
                      <text
                        x="64"
                        y="70"
                        textAnchor="middle"
                        fontSize="14"
                        fontWeight="bold"
                        fill="white"
                        style={{ fontFamily: "sans-serif" }}
                      >
                        HP
                      </text>

                      {/* Outer connected nodes */}
                      <circle cx="24" cy="24" r="4" fill="url(#neuralGrad)" />
                      <circle cx="104" cy="24" r="4" fill="url(#neuralGrad)" />
                      <circle cx="24" cy="104" r="4" fill="url(#neuralGrad)" />
                      <circle cx="104" cy="104" r="4" fill="url(#neuralGrad)" />
                      <circle cx="64" cy="10" r="4" fill="url(#neuralGrad)" />
                      <circle cx="64" cy="118" r="4" fill="url(#neuralGrad)" />

                      {/* Floating nodes */}
                      <circle cx="10" cy="50" r="1.5" fill="url(#neuralGrad)" opacity="0.7" />
                      <circle cx="118" cy="60" r="1.5" fill="url(#neuralGrad)" opacity="0.7" />
                      <circle cx="40" cy="10" r="1.5" fill="url(#neuralGrad)" opacity="0.7" />
                      <circle cx="90" cy="110" r="1.5" fill="url(#neuralGrad)" opacity="0.7" />
                      <circle cx="20" cy="80" r="1.5" fill="url(#neuralGrad)" opacity="0.7" />
                      <circle cx="108" cy="40" r="1.5" fill="url(#neuralGrad)" opacity="0.7" />

                      {/* Connection lines */}
                      <line x1="64" y1="64" x2="24" y2="24" stroke="url(#neuralGrad)" strokeWidth="1.8" />
                      <line x1="64" y1="64" x2="104" y2="24" stroke="url(#neuralGrad)" strokeWidth="1.8" />
                      <line x1="64" y1="64" x2="24" y2="104" stroke="url(#neuralGrad)" strokeWidth="1.8" />
                      <line x1="64" y1="64" x2="104" y2="104" stroke="url(#neuralGrad)" strokeWidth="1.8" />
                      <line x1="64" y1="64" x2="64" y2="10" stroke="url(#neuralGrad)" strokeWidth="1.8" />
                      <line x1="64" y1="64" x2="64" y2="118" stroke="url(#neuralGrad)" strokeWidth="1.8" />
                    </svg>

                    {/* Name + Tagline */}
                    <div>
                      <h1 className="text-2xl font-extrabold bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-300 bg-clip-text text-transparent drop-shadow-sm">
                        Harsh Prakash
                      </h1>
                      <p className="text-sm bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent font-medium tracking-wide">
                        Software Developer • MERN Stack • AI & ML
                      </p>
                    </div>
                  </a>

                  {/* Navigation Links */}
                  <div className="flex items-center space-x-8">
                    {["About", "Skills", "Projects", "Contact"].map((item, index) => (
                      <a
                        key={index}
                        href={`#${item.toLowerCase()}`}
                        className="relative text-gray-200 hover:text-white font-medium transition duration-300 group"
                      >
                        <span className="relative z-10">{item}</span>
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-700 via-rose-500 to-rose-700 group-hover:w-full transition-all duration-500"></span>
                      </a>
                    ))}
                  </div>
                </nav>
              </header>

              {/* Intro Section */}
              <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 min-h-screen flex items-center">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
                <div className="relative container mx-auto px-4 py-32 w-full">
                  <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Content */}
                    <div className="animate-fade-in">
                      <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent drop-shadow-lg">
                        Hi, I'm Harsh Prakash
                      </h2>
                      <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-12 leading-relaxed max-w-xl animate-fade-in-paragraph bg-gradient-to-r from-indigo-500 to-pink-600 bg-clip-text text-transparent">
                        A Software Developer passionate about crafting web apps with the MERN Stack and creating smart solutions powered by AI & Machine Learning.
                      </p>
                      <div className="flex flex-col sm:flex-row gap-6">
                        {/* Explore Button - Primary */}
                        <button
                          onClick={() => {
                            const projectsSection = document.getElementById('projects');
                            if (projectsSection) {
                              projectsSection.scrollIntoView({ behavior: 'smooth' });
                            }
                          }}
                          className="relative overflow-hidden px-10 py-5 rounded-xl text-xl font-bold text-white
                                    bg-gradient-to-r from-gray-900 via-black to-gray-900
                                    hover:from-gray-800 nohover:via-gray-900 hover:to-black
                                    transform hover:scale-110 transition-all duration-300
                                    shadow-lg shadow-black/50 hover:shadow-orange-500/30
                                    before:absolute before:top-0 before:left-0 before:w-0 before:h-full
                                    before:bg-gradient-to-r before:from-orange-500/10 before:to-pink-500/10
                                    before:transition-all before:duration-500 hover:before:w-full
                                    border border-gray-800 hover:border-orange-400/50" >
                          Explore My Work
                        </button>

                        {/* Contact Button - Secondary */}
                        <button
                          onClick={() => {
                            const contactSection = document.getElementById('contact');
                            if (contactSection) {
                              contactSection.scrollIntoView({ behavior: 'smooth' });
                            }
                          }}
                          className="relative overflow-hidden px-10 py-5 rounded-xl text-xl font-bold
                                    border-2 border-gray-700 text-gray-300
                                    hover:bg-gradient-to-r hover:from-gray-800 hover:to-gray-900 hover:text-white
                                    transition-all duration-300 transform hover:scale-105
                                    shadow-md shadow-black/30 hover:shadow-gray-600/40
                                    before:absolute before:bottom-0 before:left-0 before:w-0 before:h-1
                                    before:bg-gray-400 before:transition-all before:duration-300
                                    hover:before:w-full"
                        >
                          Contact Me
                        </button>
                      </div>

                    </div>

                    {/* 3D Developer Desk */}
                    <div className="relative flex justify-center lg:justify-end animate-fade-in" style={{ animationDelay: '0.5s' }}>
                      <div className="relative w-96 h-96 perspective-1000">
                        {/* Desk */}
                        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-80 h-4 bg-gradient-to-r from-amber-700 to-amber-800 rounded-lg shadow-2xl">
                          {/* Desk Legs */}
                          <div className="absolute -bottom-16 left-8 w-3 h-16 bg-gradient-to-b from-amber-600 to-amber-800 rounded"></div>
                          <div className="absolute -bottom-16 right-8 w-3 h-16 bg-gradient-to-b from-amber-600 to-amber-800 rounded"></div>
                          <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 w-3 h-16 bg-gradient-to-b from-amber-600 to-amber-800 rounded"></div>
                        </div>

                        {/* Computer Monitor */}
                        <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-32 h-24 bg-gradient-to-b from-gray-800 to-gray-900 rounded-lg border-2 border-gray-600 shadow-xl">
                          {/* Screen */}
                          <div className="absolute top-2 left-2 right-2 bottom-4 bg-gradient-to-br from-blue-900 to-blue-950 rounded border border-blue-400">
                            <div className="w-full h-full bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded flex items-center justify-center">
                              <div className="text-blue-300 text-xs font-mono">{'</>'}</div>
                            </div>
                          </div>
                          {/* Stand */}
                          <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-8 h-4 bg-gradient-to-b from-gray-700 to-gray-800 rounded-t"></div>
                        </div>

                        {/* Keyboard */}
                        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 -translate-y-2 w-40 h-6 bg-gradient-to-b from-gray-700 to-gray-800 rounded-lg shadow-lg">
                          <div className="flex justify-center items-center h-full space-x-1">
                            <div className="w-2 h-2 bg-gray-600 rounded"></div>
                            <div className="w-2 h-2 bg-gray-600 rounded"></div>
                            <div className="w-2 h-2 bg-gray-600 rounded"></div>
                            <div className="w-6 h-2 bg-gray-600 rounded"></div>
                            <div className="w-2 h-2 bg-gray-600 rounded"></div>
                            <div className="w-2 h-2 bg-gray-600 rounded"></div>
                          </div>
                        </div>

                        {/* Mouse */}
                        <div className="absolute bottom-6 right-20 w-6 h-8 bg-gradient-to-b from-gray-700 to-gray-800 rounded-lg shadow-lg transform rotate-12">
                          <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-red-400 rounded-full"></div>
                        </div>

                        {/* Coffee Mug */}
                        <div className="absolute top-20 right-16 w-8 h-10 bg-gradient-to-b from-blue-600 to-blue-800 rounded-b-lg shadow-lg">
                          <div className="absolute top-1 left-1 right-1 h-2 bg-blue-400 rounded-t"></div>
                          <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-3 h-1 bg-amber-600 rounded"></div>
                        </div>

                        {/* Code Book */}
                        <div className="absolute top-24 left-20 w-12 h-16 bg-gradient-to-b from-green-600 to-green-800 rounded shadow-lg transform -rotate-12">
                          <div className="absolute top-2 left-2 right-2 h-1 bg-green-300 rounded"></div>
                          <div className="absolute top-4 left-2 right-2 h-1 bg-green-300 rounded"></div>
                          <div className="absolute top-6 left-2 right-2 h-1 bg-green-300 rounded"></div>
                        </div>

                        {/* Floating Code Elements */}
                        <div className="absolute top-8 left-16 text-blue-400 text-lg animate-bounce" style={{ animationDelay: '1s' }}>
                          {'{ }'}
                        </div>
                        <div className="absolute top-12 right-12 text-purple-400 text-sm animate-bounce" style={{ animationDelay: '1.5s' }}>
                          {'</>'}
                        </div>
                        <div className="absolute bottom-20 left-12 text-green-400 text-base animate-bounce" style={{ animationDelay: '2s' }}>
                          {'()'}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-gray-800 to-transparent"></div>
              </section>

              {/* About Section */}
              <section id="about" className="bg-gradient-to-br from-gray-800 via-gray-900 to-black py-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-pink-600/10 via-purple-600/10 to-blue-600/10"></div>
                <div className="absolute top-0 left-0 w-full h-full">
                  <div className="absolute top-20 left-10 w-2 h-2 bg-pink-400 rounded-full animate-ping opacity-20"></div>
                  <div className="absolute top-40 right-20 w-1 h-1 bg-purple-400 rounded-full animate-ping opacity-30" style={{ animationDelay: '1s' }}></div>
                  <div className="absolute bottom-20 left-1/4 w-1.5 h-1.5 bg-blue-400 rounded-full animate-ping opacity-25" style={{ animationDelay: '2s' }}></div>
                </div>
                <div className="relative container mx-auto px-4">
                  <div className="text-center mb-16">
                    <h3 className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
                      About Me
                    </h3>
                    <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-purple-400 mx-auto rounded-full"></div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-16 items-center">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full blur-2xl opacity-20 animate-pulse"></div>
                      {/* Enhanced 3D Character Model */}
                      <div className="relative w-80 h-80 mx-auto border-4 border-gradient-to-r from-pink-400 to-purple-400 shadow-2xl perspective-1000 transform hover:scale-105 transition-transform duration-500">
                        <div className="relative w-full h-full transform-style-preserve-3d">
                          {/* Character Body */}
                          <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 w-24 h-32 bg-gradient-to-b from-pink-600 to-purple-800 rounded-t-lg shadow-xl">
                            {/* Shirt Details */}
                            <div className="absolute top-4 left-2 right-2 h-2 bg-pink-500 rounded"></div>
                            <div className="absolute top-8 left-2 right-2 h-2 bg-pink-500 rounded"></div>
                            {/* Arms */}
                            <div className="absolute -left-3 top-6 w-4 h-16 bg-gradient-to-b from-pink-500 to-purple-700 rounded-full transform -rotate-12"></div>
                            <div className="absolute -right-3 top-6 w-4 h-16 bg-gradient-to-b from-pink-500 to-purple-700 rounded-full transform rotate-12"></div>
                          </div>

                          {/* Character Head */}
                          <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-20 h-20 bg-gradient-to-b from-orange-300 to-orange-400 rounded-full shadow-lg border-2 border-orange-200">
                            {/* Eyes */}
                            <div className="absolute top-6 left-4 w-3 h-3 bg-white rounded-full">
                              <div className="absolute top-0.5 left-0.5 w-1.5 h-1.5 bg-purple-600 rounded-full"></div>
                            </div>
                            <div className="absolute top-6 right-4 w-3 h-3 bg-white rounded-full">
                              <div className="absolute top-0.5 left-0.5 w-1.5 h-1.5 bg-purple-600 rounded-full"></div>
                            </div>
                            {/* Nose */}
                            <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-1 h-2 bg-orange-500 rounded-full"></div>
                            {/* Mouth */}
                            <div className="absolute top-10 left-1/2 transform -translate-x-1/2 w-4 h-1 bg-red-400 rounded-full"></div>
                            {/* Hair */}
                            <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-16 h-8 bg-gradient-to-b from-black to-gray-800 rounded-t-full"></div>
                          </div>

                          {/* Laptop/Computer */}
                          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-28 h-6 bg-gradient-to-b from-gray-700 to-gray-900 rounded-lg shadow-lg">
                            {/* Screen */}
                            <div className="absolute top-1 left-1 right-1 bottom-1 bg-gradient-to-br from-purple-900 to-pink-950 rounded border border-purple-400">
                              <div className="w-full h-full flex items-center justify-center">
                                <div className="text-purple-300 text-xs font-mono animate-pulse">{'</>'}</div>
                              </div>
                            </div>
                          </div>

                          {/* Floating Code Elements */}
                          <div className="absolute top-4 left-8 text-pink-400 text-sm animate-bounce" style={{ animationDelay: '0.5s' }}>
                            {'{ }'}
                          </div>
                          <div className="absolute top-12 right-8 text-purple-400 text-xs animate-bounce" style={{ animationDelay: '1s' }}>
                            {'</>'}
                          </div>
                          <div className="absolute bottom-24 left-6 text-blue-400 text-sm animate-bounce" style={{ animationDelay: '1.5s' }}>
                            {'()'}
                          </div>

                          {/* Coffee Cup */}
                          <div className="absolute bottom-20 right-4 w-6 h-8 bg-gradient-to-b from-pink-600 to-purple-800 rounded-b-lg shadow-lg">
                            <div className="absolute top-0.5 left-0.5 right-0.5 h-1 bg-pink-400 rounded-t"></div>
                            <div className="absolute top-1.5 left-1/2 transform -translate-x-1/2 w-2 h-0.5 bg-amber-600 rounded"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-8">
                      <div className="space-y-4">
                        <p className="text-xl text-gray-300 leading-relaxed">
                          Hi! I'm <span className="text-pink-400 font-semibold">Harsh Prakash</span>, a passionate Web and App Developer who enjoys turning ideas into real, working applications. I specialize in building scalable and user-friendly apps using the MERN stack, and I have strong expertise in Python and Java for backend development.
                        </p>
                        <p className="text-lg text-gray-400 leading-relaxed">
                          Alongside development, I have a solid foundation in Data Structures and Algorithms (DSA), with a focus on Java for problem-solving and coding challenges. This allows me to write optimized, efficient code that balances performance with reliability — an essential skill for both building applications and tackling complex programming problems.
                        </p>
                        <p className="text-lg text-gray-400 leading-relaxed">
                          Outside of coding, I’m always exploring new technologies, sharpening my problem-solving skills, and working on creative solutions. My goal is simple — to grow as a developer and build applications that make a real impact.
                        </p>
                      </div>
                      <div className="grid grid-cols-2 gap-6">
                        <div className="bg-gradient-to-br from-gray-700 to-gray-800 p-6 rounded-xl text-center border border-gray-600 hover:border-pink-400 transition-all duration-300">
                          <div className="text-3xl font-bold text-pink-400 mb-2">4+</div>
                          <div className="text-sm text-gray-300">Years Coding Experience</div>
                        </div>
                        <div className="bg-gradient-to-br from-gray-700 to-gray-800 p-6 rounded-xl text-center border border-gray-600 hover:border-purple-400 transition-all duration-300">
                          <div className="text-3xl font-bold text-purple-400 mb-2">10+</div>
                          <div className="text-sm text-gray-300">Projects Completed</div>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-3">
                        {/* Frontend */}
                        <span className="bg-gradient-to-r from-pink-600 to-pink-700 px-4 py-2 rounded-full text-sm font-semibold hover:scale-105 transition-transform duration-300">HTML5</span>
                        <span className="bg-gradient-to-r from-purple-600 to-purple-700 px-4 py-2 rounded-full text-sm font-semibold hover:scale-105 transition-transform duration-300">CSS3</span>
                        <span className="bg-gradient-to-r from-blue-600 to-blue-700 px-4 py-2 rounded-full text-sm font-semibold hover:scale-105 transition-transform duration-300">JavaScript</span>
                        <span className="bg-gradient-to-r from-pink-600 to-pink-700 px-4 py-2 rounded-full text-sm font-semibold hover:scale-105 transition-transform duration-300">React</span>
                        <span className="bg-gradient-to-r from-green-600 to-green-700 px-4 py-2 rounded-full text-sm font-semibold hover:scale-105 transition-transform duration-300">Tailwind</span>
                        {/* Backend */}
                        <span className="bg-gradient-to-r from-indigo-600 to-indigo-700 px-4 py-2 rounded-full text-sm font-semibold hover:scale-105 transition-transform duration-300">Node.js</span>
                        <span className="bg-gradient-to-r from-indigo-600 to-indigo-700 px-4 py-2 rounded-full text-sm font-semibold hover:scale-105 transition-transform duration-300">Express.js</span>
                        {/* Database */}
                        <span className="bg-gradient-to-r from-cyan-600 to-cyan-700 px-4 py-2 rounded-full text-sm font-semibold hover:scale-105 transition-transform duration-300">MongoDB</span>
                        {/* Programming Languages */}
                        <span className="bg-gradient-to-r from-red-600 to-red-700 px-4 py-2 rounded-full text-sm font-semibold hover:scale-105 transition-transform duration-300">Java</span>
                        <span className="bg-gradient-to-r from-red-600 to-red-700 px-4 py-2 rounded-full text-sm font-semibold hover:scale-105 transition-transform duration-300">C/C++</span>
                        <span className="bg-gradient-to-r from-yellow-600 to-yellow-700 px-4 py-2 rounded-full text-sm font-semibold hover:scale-105 transition-transform duration-300">Python</span>
                        <span className="bg-gradient-to-r from-cyan-600 to-cyan-700 px-4 py-2 rounded-full text-sm font-semibold hover:scale-105 transition-transform duration-300">TypeScript</span>
                        {/* Others */}
                        <span className="bg-gradient-to-r from-blue-600 to-blue-700 px-4 py-2 rounded-full text-sm font-semibold hover:scale-105 transition-transform duration-300">Git</span>
                        <span className="bg-gradient-to-r from-green-600 to-green-700 px-4 py-2 rounded-full text-sm font-semibold hover:scale-105 transition-transform duration-300">DSA</span>
                        <span className="bg-gradient-to-r from-yellow-600 to-yellow-700 px-4 py-2 rounded-full text-sm font-semibold hover:scale-105 transition-transform duration-300">AI/ML</span>

                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Skills Section */}
              <section id="skills" className="py-12 bg-gradient-to-br from-gray-900 via-gray-800 to-black relative overflow-hidden">
                {/* Animated Background */}
                <div className="absolute inset-0 opacity-30">
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-600/10 via-purple-600/10 to-blue-600/10"></div>
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-transparent to-black/50"></div>
                </div>

                {/* Floating Elements */}
                <div className="absolute top-10 left-10 w-2 h-2 bg-pink-400 rounded-full animate-ping opacity-20" style={{ animationDelay: '0s' }}></div>
                <div className="absolute top-20 right-20 w-1.5 h-1.5 bg-purple-400 rounded-full animate-ping opacity-30" style={{ animationDelay: '1s' }}></div>
                <div className="absolute bottom-10 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-ping opacity-25" style={{ animationDelay: '2s' }}></div>
                <div className="absolute bottom-5 right-1/3 w-1 h-1 bg-cyan-400 rounded-full animate-ping opacity-35" style={{ animationDelay: '0.5s' }}></div>

                <div className="relative container mx-auto px-4">
                  <div className="text-center mb-12">
                    <h3 className="text-4xl font-extrabold mb-4 bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
                      My Skills & Expertise
                    </h3>
                    <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-purple-400 mx-auto rounded-full mb-6"></div>
                    <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
                      A comprehensive showcase of my technical abilities and proficiency levels across various domains
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {/* Programming Languages */}
                    <div className="group bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-lg p-4 rounded-xl border border-gray-700/50 hover:border-pink-400/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/20">
                      <div className="flex items-center mb-4">
                        <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-pink-600 rounded-lg flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300">
                          <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                          </svg>
                        </div>
                        <h4 className="text-xl font-bold text-pink-400">Programming Languages</h4>
                      </div>
                      <div className="space-y-2">
                        {['Python', 'C', 'C++', 'JAVA', 'Typescript'].map((skill, index) => (
                          <div key={skill} className="text-gray-300 text-sm hover:text-white transition-colors duration-300">
                            • {skill}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Frontend */}
                    <div className="group bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-lg p-4 rounded-xl border border-gray-700/50 hover:border-purple-400/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20">
                      <div className="flex items-center mb-4">
                        <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300">
                          <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                          </svg>
                        </div>
                        <h4 className="text-xl font-bold text-purple-400">Frontend</h4>
                      </div>
                      <div className="space-y-2">
                        {['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Next.js', 'Bootstrap', 'Tailwind CSS'].map((skill, index) => (
                          <div key={skill} className="text-gray-300 text-sm hover:text-white transition-colors duration-300">
                            • {skill}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Backend */}
                    <div className="group bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-lg p-4 rounded-xl border border-gray-700/50 hover:border-blue-400/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20">
                      <div className="flex items-center mb-4">
                        <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300">
                          <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                          </svg>
                        </div>
                        <h4 className="text-xl font-bold text-blue-400">Backend</h4>
                      </div>
                      <div className="space-y-2">
                        {['Node.js', 'Express.js', 'RESTful APIs'].map((skill, index) => (
                          <div key={skill} className="text-gray-300 text-sm hover:text-white transition-colors duration-300">
                            • {skill}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Databases */}
                    <div className="group bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-lg p-4 rounded-xl border border-gray-700/50 hover:border-green-400/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/20">
                      <div className="flex items-center mb-4">
                        <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300">
                          <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                          </svg>
                        </div>
                        <h4 className="text-xl font-bold text-green-400">Databases</h4>
                      </div>
                      <div className="space-y-2">
                        {['MongoDB', 'PostgreSQL', 'MySQL'].map((skill, index) => (
                          <div key={skill} className="text-gray-300 text-sm hover:text-white transition-colors duration-300">
                            • {skill}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* DevOps & Tools */}
                    <div className="group bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-lg p-4 rounded-xl border border-gray-700/50 hover:border-orange-400/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/20">
                      <div className="flex items-center mb-4">
                        <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300">
                          <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                          </svg>
                        </div>
                        <h4 className="text-xl font-bold text-orange-400">DevOps & Tools</h4>
                      </div>
                      <div className="space-y-2">
                        {['Git', 'GitHub', 'GitLab', 'Microsoft Azure', 'Google WordPress'].map((skill, index) => (
                          <div key={skill} className="text-gray-300 text-sm hover:text-white transition-colors duration-300">
                            • {skill}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* AI / Machine Learning */}
                    <div className="group bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-lg p-4 rounded-xl border border-gray-700/50 hover:border-cyan-400/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20 xl:col-span-2">
                      <div className="flex items-center mb-4">
                        <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-lg flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300">
                          🤖
                        </div>
                        <h4 className="text-xl font-bold text-cyan-400">🤖 AI / Machine Learning</h4>
                      </div>
                      <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-4">
                        <div>
                          <h5 className="text-sm font-semibold text-cyan-300 mb-2">Core Libraries</h5>
                          <div className="space-y-1">
                            {['TensorFlow', 'Keras', 'PyTorch', 'Scikit-learn'].map((skill, index) => (
                              <div key={skill} className="text-gray-300 text-xs hover:text-white transition-colors duration-300">
                                • {skill}
                              </div>
                            ))}
                          </div>
                        </div>
                        <div>
                          <h5 className="text-sm font-semibold text-cyan-300 mb-2">Data & Math</h5>
                          <div className="space-y-1">
                            {['NumPy', 'Pandas', 'Matplotlib', 'Seaborn'].map((skill, index) => (
                              <div key={skill} className="text-gray-300 text-xs hover:text-white transition-colors duration-300">
                                • {skill}
                              </div>
                            ))}
                          </div>
                        </div>
                        <div>
                          <h5 className="text-sm font-semibold text-cyan-300 mb-2">Computer Vision</h5>
                          <div className="space-y-1">
                            {['OpenCV'].map((skill, index) => (
                              <div key={skill} className="text-gray-300 text-xs hover:text-white transition-colors duration-300">
                                • {skill}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Projects Section */}
              <section id="projects" className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-green-600/10 to-blue-600/10"></div>
                <div className="relative container mx-auto px-4">
                  <h3 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">My Projects</h3>
                  <div className="flex gap-8 overflow-x-auto pb-4 scrollbar-hide animate-scroll hover:pause-scroll" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                    <ProjectCard
                      icon="✍🏻"
                      title="Handwritten Digit Recognition"
                      description="A Pygame-based digit recognition system using TensorFlow/Keras"
                      techStack={[
                        { name: 'Python', color: 'yellow' },
                        { name: 'TensorFlow', color: 'orange' },
                        { name: 'Pygame', color: 'green' },
                        { name: 'OpenCV', color: 'blue' }
                      ]}
                      link="/projects/handwritten-digit"
                      hoverColor="blue"
                    />
                    <ProjectCard
                      icon="🎮"
                      title="Sanke and Chess"
                      description="Play classic Snake & Chess online – built with HTML, CSS & JS."
                      techStack={[
                        { name: 'HTML', color: 'orange' },
                        { name: 'CSS', color: 'blue' },
                        { name: 'JavaScript', color: 'rose' }
                      ]}
                      link="/projects/snake"
                      hoverColor="cyan"
                    />
                    <ProjectCard
                      icon="⛅"
                      title="Weather App"
                      description="Get real-time weather with dynamic visuals and smart search."
                     techStack={[
                        { name: "HTML5", color: "orange" },
                        { name: "CSS3", color: "blue" },
                        { name: "JavaScript", color: "yellow" },
                        { name: "WeatherAPI", color: "green" }
                      ]}
                      link="/projects/WeatherApp"
                      hoverColor="blue"
                    />
                    <ProjectCard
                      icon="🎨"
                      title="Portfolio Website"
                      description="Responsive portfolio with modern animations and design"
                      techStack={[
                        { name: 'React', color: 'cyan' },
                        { name: 'Tailwind', color: 'orange' }
                      ]}
                      link="/projects/portfolio"
                      hoverColor="purple"
                    />
                    <ProjectCard
                      icon="📊"
                      title="Analytics Dashboard"
                      description="Data visualization and insights platform"
                      techStack={[
                        { name: 'D3.js', color: 'red' },
                        { name: 'React', color: 'yellow' }
                      ]}
                      link="#"
                      hoverColor="pink"
                    />
                    <ProjectCard
                      icon="🛒"
                      title="Shopping Cart"
                      description="E-commerce shopping cart with payment integration"
                      techStack={[
                        { name: 'React', color: 'green' },
                        { name: 'Stripe', color: 'indigo' }
                      ]}
                      link="#"
                      hoverColor="yellow"
                    />
                    <ProjectCard
                      icon="🎥"
                      title="Video Streaming"
                      description="High-quality video streaming platform"
                      techStack={[
                        { name: 'React', color: 'blue' },
                        { name: 'AWS', color: 'purple' }
                      ]}
                      link="#"
                      hoverColor="indigo"
                    />

                  </div>
                </div>
              </section>

              {/* Contact Section */}

              <Contact />

              {/* Footer */}
              <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-black py-20 relative overflow-hidden">
                {/* Animated Background */}
                <div className="absolute inset-0">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 via-purple-900/20 to-pink-900/20 animate-pulse"></div>
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-transparent to-black/80"></div>
                </div>

                {/* Floating Elements */}
                <div className="absolute top-10 left-10 w-2 h-2 bg-blue-400 rounded-full animate-bounce opacity-60" style={{ animationDelay: '0s' }}></div>
                <div className="absolute top-20 right-20 w-1 h-1 bg-purple-400 rounded-full animate-bounce opacity-40" style={{ animationDelay: '1s' }}></div>
                <div className="absolute bottom-20 left-1/4 w-1.5 h-1.5 bg-pink-400 rounded-full animate-bounce opacity-50" style={{ animationDelay: '2s' }}></div>
                <div className="absolute bottom-10 right-1/3 w-1 h-1 bg-cyan-400 rounded-full animate-bounce opacity-30" style={{ animationDelay: '0.5s' }}></div>

                <div className="relative container mx-auto px-4">
                  {/* Main Footer Content */}
                  <div className="grid md:grid-cols-4 gap-12 mb-16">
                    {/* Brand Section */}
                    <div className="text-left group">
                      <div className="mb-6">
                        <h4 className="text-3xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4 group-hover:scale-105 transition-transform duration-300">
                          Hey, thanks for stopping by!
                        </h4>
                        <div className="w-16 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mb-4"></div>
                      </div>
                      <p className="text-gray-300 leading-relaxed mb-6 group-hover:text-gray-200 transition-colors duration-300">
                        🚀 I’m on a journey to code the future — creating modern, impactful web solutions that matter.
                      </p>
                      <div className="flex items-center space-x-2 text-sm text-gray-400">
                        <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                        <span>Available for new projects</span>
                      </div>
                    </div>

                    {/* Quick Links */}
                    <div className="text-left">
                      <h5 className="text-xl font-bold mb-6 text-white flex items-center">
                        <svg className="w-5 h-5 mr-2 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                        </svg>
                        Quick Links
                      </h5>
                      <ul className="space-y-3">
                        <li>
                          <a href="#about" className="text-gray-400 hover:text-blue-400 transition-all duration-300 flex items-center group">
                            <span className="w-0 group-hover:w-4 h-0.5 bg-blue-400 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                            About
                          </a>
                        </li>
                        <li>
                          <a href="#projects" className="text-gray-400 hover:text-purple-400 transition-all duration-300 flex items-center group">
                            <span className="w-0 group-hover:w-4 h-0.5 bg-purple-400 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                            Projects
                          </a>
                        </li>
                        <li>
                          <a href="#skills" className="text-gray-400 hover:text-green-400 transition-all duration-300 flex items-center group">
                            <span className="w-0 group-hover:w-4 h-0.5 bg-green-400 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                            Skills
                          </a>
                        </li>
                        <li>
                          <a href="#contact" className="text-gray-400 hover:text-pink-400 transition-all duration-300 flex items-center group">
                            <span className="w-0 group-hover:w-4 h-0.5 bg-pink-400 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                            Contact
                          </a>
                        </li>
                      </ul>
                    </div>

                    {/* Skills Showcase */}
                    <div className="text-left">
                      <h5 className="text-xl font-bold mb-6 text-white flex items-center">
                        <svg className="w-5 h-5 mr-2 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                        </svg>
                        Tech Stack
                      </h5>
                      <div className="grid grid-cols-2 gap-2">
                        {[
                          'Python', 'JavaScript', 'React.js', 'Node.js',
                          'TypeScript', 'MongoDB', 'PostgreSQL', 'TensorFlow',
                          'PyTorch', 'OpenCV', 'Git', 'Docker'
                        ].map((skill, index) => (
                          <div
                            key={skill}
                            className="text-gray-300 text-sm hover:text-white transition-all duration-300 hover:scale-105 cursor-default bg-gray-800/30 px-2 py-1 rounded-md backdrop-blur-sm border border-gray-700/50 hover:border-gray-600/50"
                            style={{ animationDelay: `${index * 0.1}s` }}
                          >
                            {skill}
                          </div>
                        ))}
                      </div>
                      <div className="mt-4 text-xs text-gray-500">
                        + 20 more technologies
                      </div>
                    </div>

                    {/* Connect Section */}
                    <div className="text-left">
                      <h5 className="text-xl font-bold mb-6 text-white flex items-center">
                        <svg className="w-5 h-5 mr-2 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                        Let's Connect
                      </h5>
                      <div className="flex space-x-4 mb-6">
                        <a
                          href="https://www.linkedin.com/in/harshprakash-dev"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center hover:scale-110 hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 group"
                        >
                          <svg className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                          </svg>
                        </a>
                        <a
                          href="https://github.com/Harshprakash13"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-12 h-12 bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl flex items-center justify-center hover:scale-110 hover:shadow-lg hover:shadow-gray-500/25 transition-all duration-300 group"
                        >
                          <svg className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                          </svg>
                        </a>
                        <a
                          href="mailto:harshprakashrahul56@gmail.com"
                          className="w-12 h-12 bg-gradient-to-br from-green-600 to-green-700 rounded-xl flex items-center justify-center hover:scale-110 hover:shadow-lg hover:shadow-green-500/25 transition-all duration-300 group"
                        >
                          <svg className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        </a>
                      </div>
                      <p className="text-gray-400 text-sm mb-4">💬 Let's build something amazing together!</p>
                      <button
                        onClick={() => {
                          window.open('https://wa.me/919058565049?text=Hi, I\'d like to discuss a project with you.', '_blank');
                        }}
                        className="bg-gradient-to-r from-green-500 to-green-600  hover:from-green-600 hover:to-green-700 px-4 py-2 rounded-lg text-sm font-semibold
                                  transform hover:scale-105 transition-all duration-300 shadow-lg shadow-green-500/20 hover:shadow-green-600/30
                                  border border-green-400/30 hover:border-green-500/50">
                        💬 WhatsApp Me
                      </button>
                    </div>
                  </div>

                  {/* Bottom Section */}
                  <div className="border-t border-gray-700/50 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                      <div className="flex items-center space-x-4 mb-4 md:mb-0">
                        <p className="text-gray-400 text-sm">
                          © 2025 <span className="text-white font-semibold">My Portfolio</span>. Crafted with ❤️ and ☕
                        </p>
                        <div className="hidden md:flex items-center space-x-2">
                          <span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse"></span>
                          <span className="text-xs text-gray-500">Always Learning</span>
                        </div>
                      </div>
                      <div className="flex space-x-6">
                        <a href="#" className="text-gray-500 hover:text-blue-400 text-sm transition-colors duration-300 hover:scale-105">
                          🐳
                        </a>
                        <a href="#" className="text-gray-500 hover:text-purple-400 text-sm transition-colors duration-300 hover:scale-105">
                          🦈
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </footer>
            </div>
          </div>
        } />

      {/* Project Pages */}
      {/* ================= HANDWRITTEN DIGIT PAGE ================= */}
      <Route path="/projects/handwritten-digit" element={<HandwrittenDigit />} />
      <Route path="/projects/portfolio" element={<Portfolio />} />
      <Route path="/projects/snake" element={<Snake />} />
      <Route path="/projects/WeatherApp" element={<WeatherApp />} />
    </Routes>
    </>
  )
}

export default App

