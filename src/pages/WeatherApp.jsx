export default function WeatherApp() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white p-10">

      {/* Title */}
      <h1 className="text-5xl font-extrabold bg-gradient-to-r from-green-400 via-teal-500 to-blue-500 bg-clip-text text-transparent mb-10 text-center animate-pulse">
        🌧️ AeroPlus - Weather App
      </h1>

      {/* Intro */}
      <div className="bg-gray-800/60 backdrop-blur-md border border-gray-700 rounded-xl p-6 shadow-lg mb-10">
        <p className="text-lg text-gray-300 leading-relaxed">
          A <span className="text-green-400 font-semibold">responsive weather application</span> that provides 
          real-time weather updates for cities worldwide. Built with <span className="text-teal-400 font-semibold">HTML, CSS, and JavaScript</span>, 
          featuring dynamic background videos based on weather conditions and a clean, modern interface.
        </p>
      </div>

      {/* Features */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-green-400 mb-4">🦈Features</h2>
        <ul className="grid md:grid-cols-2 gap-3 text-gray-300">
          <li className="bg-gray-800/50 p-3 rounded-lg border border-gray-700 hover:border-green-400 transition">Real-time weather data: temperature, wind speed, humidity</li>
          <li className="bg-gray-800/50 p-3 rounded-lg border border-gray-700 hover:border-green-400 transition">Dynamic backgrounds change with weather</li>
          <li className="bg-gray-800/50 p-3 rounded-lg border border-gray-700 hover:border-green-400 transition">Responsive design: desktop, tablet, mobile</li>
          <li className="bg-gray-800/50 p-3 rounded-lg border border-gray-700 hover:border-green-400 transition">Dual search options</li>
          <li className="bg-gray-800/50 p-3 rounded-lg border border-gray-700 hover:border-green-400 transition">Light/Dark theme toggle</li>
          <li className="bg-gray-800/50 p-3 rounded-lg border border-gray-700 hover:border-green-400 transition">Weather condition icons</li>
        </ul>
      </section>

      {/* Technologies */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-green-400 mb-4">🏗️ Technologies Used</h2>
        <div className="flex flex-wrap gap-2">
          <span className="bg-orange-600 text-gray-100 px-3 py-1 rounded-full text-sm font-medium">HTML5</span>
          <span className="bg-blue-600 text-gray-100 px-3 py-1 rounded-full text-sm font-medium">CSS3</span>
          <span className="bg-yellow-500 text-gray-900 px-3 py-1 rounded-full text-sm font-medium">JavaScript</span>
          <span className="bg-green-600 text-gray-100 px-3 py-1 rounded-full text-sm font-medium">WeatherAPI</span>
        </div>
      </section>

      {/* How it Works */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-green-400 mb-4">🛠️ How It Works</h2>
        <ol className="list-decimal list-inside text-gray-300 space-y-2">
          <li>Search for a city using either top nav or card-based search</li>
          <li>Fetch real-time weather data from WeatherAPI</li>
          <li>Update UI dynamically: background video & weather icon change</li>
          <li>Responsive layout adapts to desktop, tablet, and mobile</li>
        </ol>
      </section>

      {/* Project Structure */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-green-400 mb-4">📂 Project Structure</h2>
        <div className="bg-black border border-gray-700 rounded-lg p-4 overflow-x-auto">
          <pre className="font-mono text-sm text-green-400 leading-relaxed">
{`weather-app/
├── index.html
├── style.css
├── script.js
├── fevicon/
│   └── storm.png
├── Img/
│   └── logo.png
└── Video/
    ├── Cloud.mp4
    ├── Fogg.mp4
    ├── Rain.mp4
    ├── snow.mp4
    └── Sunny.mp4`}
          </pre>
        </div>
      </section>

      {/* Buttons */}
      <section className="flex flex-wrap gap-4 justify-center mb-10">
        <a
          href="https://aeroplus-weather.netlify.app"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-grey-500 hover:bg-rose-600 text-white-900 font-semibold rounded-lg shadow-lg transition transform hover:scale-105"
        >
          🌐 Live App
        </a>
        <a
          href="https://github.com/Harshprakash13/Aero-plus---Weather-"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-grey-500 hover:bg-rose-600 text-white-900 font-semibold rounded-lg shadow-lg transition transform hover:scale-105"
        >
          💻 GitHub
        </a>
      </section>

      {/* Browser Support */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-green-400 mb-4">🌐 Browser Support</h2>
        <p className="text-gray-300">
          Modern browsers (Chrome, Firefox, Safari, Edge). Requires JavaScript and supports modern CSS features like Flexbox and Grid.
        </p>
      </section>

      {/* Future Enhancements */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-green-400 mb-4">🔮 Future Enhancements</h2>
        <ul className="list-disc list-inside text-gray-300 space-y-1">
          <li>5-day weather forecast</li>
          <li>Location detection using geolocation API</li>
          <li>Additional metrics: UV index, visibility, etc.</li>
          <li>Favorite cities feature</li>
          <li>Weather alerts and notifications</li>
        </ul>
      </section>

    </div>
  );
}
