export default function Snake() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white px-6 md:px-16 py-12">
      
      {/* Title */}
      <h1 className="text-5xl md:text-6xl font-extrabold text-center bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-12 animate-pulse">
        🐍 Snake & ♟️ Chess Game
      </h1>

      {/* Description */}
      <p className="text-gray-300 text-lg md:text-xl text-center mb-12 max-w-4xl mx-auto leading-relaxed">
        A responsive web-based game collection featuring <span className="text-green-400 font-semibold">Snake</span> and <span className="text-blue-400 font-semibold">Chess</span>, built with vanilla HTML, CSS, and JavaScript. Fully optimized for desktop and Android devices.
      </p>

      {/* Features */}
      <section className="mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-purple-400 mb-8 text-center">🎯 Features</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-800/60 border border-gray-700 rounded-2xl p-6 hover:border-green-400 hover:scale-105 transition-transform duration-300 shadow-lg">
            <h3 className="text-xl md:text-2xl font-semibold text-green-400 mb-4">🐍 Snake Game</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Arrow key controls / touch controls for mobile</li>
              <li>Score tracking & game over detection</li>
              <li>Random food generation & collision detection</li>
              <li>Responsive canvas rendering</li>
            </ul>
          </div>
          <div className="bg-gray-800/60 border border-gray-700 rounded-2xl p-6 hover:border-blue-400 hover:scale-105 transition-transform duration-300 shadow-lg">
            <h3 className="text-xl md:text-2xl font-semibold text-blue-400 mb-4">♟️ Chess Game</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Full chess rules: castling, en passant, promotion</li>
              <li>AI with three difficulty levels</li>
              <li>Undo, reset, flip board options</li>
              <li>Touch-friendly interface for mobile devices</li>
            </ul>
          </div>
        </div>
      </section>

      {/* How to Play */}
      <section className="mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-purple-400 mb-6 text-center">🎮 How to Play</h2>
        <div className="bg-gray-800/40 border border-gray-700 rounded-2xl p-6 text-gray-300 shadow-md space-y-3">
          <p>Open <code className="bg-gray-700 px-2 py-1 rounded">index.html</code> → choose a game → play instantly on desktop or mobile.</p>
          <p className="font-semibold text-green-400">Snake Controls:</p>
          <p className="ml-4">Arrow keys or on-screen touch controls on mobile</p>
          <p className="font-semibold text-blue-400 mt-2">Chess Controls:</p>
          <p className="ml-4">Click/tap pieces, reset, undo, flip board, choose AI difficulty</p>
        </div>
      </section>

      {/* Project Structure */}
      <section className="mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-purple-400 mb-6 text-center">🏗️ Project Structure</h2>
        <pre className="bg-black border border-gray-700 rounded-2xl p-6 text-green-400 font-mono text-sm md:text-base overflow-x-auto shadow-md">
{`Snake-Chess-Game/
├── index.html
├── style.css
├── snake/       # Snake game files
└── chess/       # Chess game files`}
        </pre>
      </section>

      {/* Tech & Design */}
      <section className="mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-purple-400 mb-6 text-center">🛠️ Tech & Design</h2>
        <div className="bg-gray-800/50 border border-gray-700 rounded-2xl p-6 shadow-lg max-w-3xl mx-auto space-y-3">
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>HTML5 Canvas & JS logic for Snake game</li>
            <li>Complete Chess logic with AI (Minimax & Alpha-Beta)</li>
            <li>Responsive layouts & touch-friendly buttons</li>
            <li>Modern UI with hover animations and subtle shadows</li>
            <li>Mobile-first, fully optimized for Android phones</li>
          </ul>
        </div>
      </section>

      {/* Buttons aligned in one line */}
      <section className="text-center mb-16 flex flex-col md:flex-row justify-center gap-6">
        <a
          href="https://github.com/Harshprakash13/Snake-Chess-"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-3xl shadow-xl hover:scale-110 hover:shadow-purple-500/50 transform transition duration-300 ease-in-out"
        >
          🔗 View Source
        </a>
        <a
          href="https://harshprakash13.github.io/Snake-Chess-/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 text-white px-8 py-4 rounded-3xl shadow-xl hover:scale-110 hover:shadow-green-400/50 transform transition duration-300 ease-in-out"
        >
          🎮 Play Now
        </a>
      </section>

      <p className="text-center text-gray-400 text-lg mb-12">
        Built with ❤️ using <span className="text-purple-400 font-semibold">HTML, CSS & JavaScript</span>
      </p>
    </div>
  );
}
