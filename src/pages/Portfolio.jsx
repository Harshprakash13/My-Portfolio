export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white p-8 md:p-16">
      {/* Page Title */}
      <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-pink-400 via-purple-500 to-blue-500 bg-clip-text text-transparent text-center mb-12 animate-pulse">
         🦈My Portfolio Website
      </h1>

      {/* Introduction */}
      <div className="bg-gray-800/70 backdrop-blur-md border border-gray-700 rounded-2xl p-6 md:p-10 shadow-xl mb-12">
        <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
          A modern, responsive portfolio website built with <span className="text-pink-400 font-semibold">React 18</span> and <span className="text-purple-400 font-semibold">Vite</span>,
          showcasing projects, skills, and contact information with smooth animations and a mobile-first design approach.
        </p>
      </div>

      {/* Features Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-purple-400 mb-6">✨ Features</h2>
        <ul className="grid md:grid-cols-2 gap-4 text-gray-300">
          {[
            "Responsive layout for desktop, tablet, and mobile",
            "Dynamic project cards with detailed modal views",
            "Smooth animations enhancing user experience",
            "Optimized mobile header and navigation",
            "Easy-to-use contact form and info display",
            "Interactive project showcase with descriptions and links",
            "Clean skill visualization cards",
            "Handwritten Digit Recognition demo page"
          ].map((feature, i) => (
            <li
              key={i}
              className="bg-gray-800/50 p-4 rounded-xl border border-gray-700 hover:border-pink-500 hover:scale-105 transform transition-all duration-300 shadow-md"
            >
              {feature}
            </li>
          ))}
        </ul>
      </section>

      {/* Technologies */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-purple-400 mb-6">🛠️ Technologies Used</h2>
        <div className="grid md:grid-cols-2 gap-4 text-gray-300">
          {[
            "React 18",
            "Vite",
            "Tailwind CSS",
            "Custom SVG Icons",
            "CSS Animations & Transitions",
            "ESLint",
            "Static site deployment ready"
          ].map((tech, i) => (
            <div
              key={i}
              className="bg-gray-800/50 p-4 rounded-xl border border-gray-700 hover:border-blue-400 shadow-md transition-all duration-300"
            >
              {tech}
            </div>
          ))}
        </div>
      </section>

      {/* Installation & Setup */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-purple-400 mb-6">📦 Installation & Setup</h2>
        <ol className="list-decimal list-inside space-y-4 text-gray-300">
          <li>
            <span className="font-semibold text-pink-400">Clone the repository:</span>
            <pre className="bg-black text-green-400 p-4 rounded-lg mt-2 overflow-x-auto font-mono">
{`git clone https://github.com/your-username/portfolio-website.git
cd portfolio-website`}
            </pre>
          </li>
          <li>
            <span className="font-semibold text-pink-400">Install dependencies:</span>
            <pre className="bg-black text-green-400 p-4 rounded-lg mt-2 font-mono">npm install</pre>
          </li>
          <li>
            <span className="font-semibold text-pink-400">Start the development server:</span>
            <pre className="bg-black text-green-400 p-4 rounded-lg mt-2 font-mono">npm run dev</pre>
          </li>
          <li>
            <span className="font-semibold text-pink-400">Open in browser:</span> Navigate to <span className="text-purple-400">http://localhost:5173</span>
          </li>
        </ol>
      </section>

      {/* Project Structure */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-purple-400 mb-6">📂 Project Structure</h2>
        <div className="bg-black border border-gray-700 rounded-xl p-6 overflow-x-auto shadow-lg">
          <pre className="text-green-400 font-mono text-sm leading-relaxed">{`portfolio-website/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── pages/
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── package.json
├── vite.config.js
└── README.md`}</pre>
        </div>
      </section>

      {/* Contact / Contributing */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-purple-400 mb-6">🤝 Contributing & Contact</h2>
        <p className="text-gray-300 mb-4">
          Contributions are welcome! Fork the project, create your feature branch, commit your changes, push to the branch, and open a pull request.
        </p>
        <p className="text-gray-300">
          Questions or suggestions? Reach out via GitHub or email. Built with <span className="text-pink-400 font-semibold">❤️ React & Vite</span>.
        </p>
      </section>

      {/* Source Code */}
      <section className="text-center mb-12">
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-2xl shadow-lg hover:scale-105 transform transition-all duration-300"
        >
          Explore The Portfolio→
        </a>
      </section>
    </div>
  );
}
