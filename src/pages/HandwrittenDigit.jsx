export default function HandwrittenDigit() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white p-10">
      {/* Title */}
      <h1 className="text-5xl font-extrabold bg-gradient-to-r from-pink-400 via-purple-500 to-blue-500 bg-clip-text text-transparent mb-10 text-center animate-pulse">
        ✍️ Handwritten Digit Recognition
      </h1>

      {/* Intro */}
      <div className="bg-gray-800/60 backdrop-blur-md border border-gray-700 rounded-xl p-6 shadow-lg mb-10">
        <p className="text-lg text-gray-300 leading-relaxed">
          A <span className="text-pink-400 font-semibold">Pygame-based</span> application for recognizing handwritten digits using a pre-trained 
          <span className="text-orange-400 font-semibold"> Convolutional Neural Network (CNN)</span> model.
        </p>
        <p className="text-gray-400 mt-4">
          The project Handwritten Digit Recognition focuses on developing a machine learning model that can automatically identify digits from 0 to 9 based on images of handwritten numbers. For this purpose, the well-known MNIST dataset is used, which consists of 70,000 labeled grayscale images of digits, each with a resolution of 28×28 pixels. This project highlights the power of artificial intelligence in computer vision and demonstrates how machines can learn to interpret human handwriting.
        </p>
      </div>

      {/* Features */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-purple-400 mb-4">🚀 Features</h2>
        <ul className="grid md:grid-cols-2 gap-3 text-gray-300">
          <li className="bg-gray-800/50 p-3 rounded-lg border border-gray-700 hover:border-purple-400 transition">Real-time digit drawing interface</li>
          <li className="bg-gray-800/50 p-3 rounded-lg border border-gray-700 hover:border-purple-400 transition">MNIST digit recognition using deep learning</li>
          <li className="bg-gray-800/50 p-3 rounded-lg border border-gray-700 hover:border-purple-400 transition">Visual feedback of predictions</li>
          <li className="bg-gray-800/50 p-3 rounded-lg border border-gray-700 hover:border-purple-400 transition">Debug window showing model input</li>
          <li className="bg-gray-800/50 p-3 rounded-lg border border-gray-700 hover:border-purple-400 transition">Top 3 prediction probabilities</li>
          <li className="bg-gray-800/50 p-3 rounded-lg border border-gray-700 hover:border-purple-400 transition">Board clearing functionality</li>
        </ul>
        <p className="text-gray-400 mt-4">
          Each of these features was designed to enhance both usability and learning. The drawing interface ensures the user can 
          naturally write digits, while the prediction and debug windows help visualize how the model interprets input. The top-3 
          predictions give a clear view of uncertainty handling, which is crucial in real-world AI systems.
        </p>
      </section>

      {/* Requirements */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-purple-400 mb-4">⚙️ Requirements</h2>
        <div className="bg-black border border-gray-700 rounded-lg p-4 text-green-400 font-mono text-sm">
          Python 3.7+  
          Pygame  
          TensorFlow/Keras  
          OpenCV  
          NumPy  
        </div>
        <p className="text-gray-400 mt-4">
          The system relies on Python and key machine learning and computer vision libraries. TensorFlow/Keras provide the deep 
          learning backbone, while OpenCV and Pygame ensure smooth image preprocessing and a responsive UI. These lightweight 
          dependencies make it portable across most modern systems.
        </p>
      </section>

      {/* Installation */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-purple-400 mb-4">📦 Installation</h2>
        <div className="bg-black border border-gray-700 rounded-lg p-4 text-green-400 font-mono text-sm">
          pip install pygame tensorflow opencv-python numpy
        </div>
        <p className="text-gray-400 mt-4">
          Installation is straightforward. After cloning the repository, a single pip command installs all required dependencies. 
          This makes the project beginner-friendly and easy to set up even for those who are just starting out in deep learning 
          and computer vision.
        </p>
      </section>

      {/* Usage */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-purple-400 mb-4">🖥️ Usage</h2>
        <div className="bg-black border border-gray-700 rounded-lg p-4 text-green-400 font-mono text-sm">
          python ui/Handwritten_digit_uii.py
        </div>
        <p className="text-gray-300 mt-2">
          Draw a digit (0–9) → release mouse → see prediction.  
          Press <code className="bg-gray-800 px-1 rounded">n</code> to clear, <code className="bg-gray-800 px-1 rounded">ESC</code> to exit.
        </p>
        <p className="text-gray-400 mt-4">
          The workflow is kept as simple as possible. Users can draw numbers on the canvas and instantly see results, creating 
          an engaging, hands-on experience with AI. The interface was inspired by educational tools to make the process fun 
          while still being technically robust.
        </p>
      </section>

      {/* How it works */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-purple-400 mb-4">🧩 How it Works</h2>
        <ol className="list-decimal list-inside text-gray-300 space-y-2">
          <li>Color Inversion → MNIST format</li>
          <li>Thresholding → cleans image</li>
          <li>Aspect Ratio Preservation</li>
          <li>Resize → 28×28 pixels</li>
          <li>Normalization → [0–1]</li>
        </ol>
        <p className="text-gray-400 mt-4">
          The preprocessing pipeline ensures that the user’s drawn digit matches the MNIST dataset format as closely as possible. 
          Without these steps, even the best-trained models would misinterpret inputs. This approach also demonstrates why image 
          preprocessing is as critical as the model itself in AI workflows.
        </p>
      </section>

      {/* File Structure */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-purple-400 mb-4">📂 File Structure</h2>
        <div className="bg-black border border-gray-700 rounded-lg p-4 overflow-x-auto">
          <pre className="font-mono text-sm text-green-400 leading-relaxed">
{`mnist_digit_recognition/
├── ui/
│   └── Handwritten_digit_uii.py
├── model_training/
│   ├── model_training_script.ipynb
│   └── model.keras
├── assets/
│   ├── fonts/
│   └── Images/
└── README.md`}
          </pre>
        </div>
        <p className="text-gray-400 mt-4">
          The project is organized for clarity: UI scripts are separated from training notebooks, and assets like fonts and 
          images are stored in dedicated folders. This modular approach makes the project easy to navigate, extend, and maintain.
        </p>
      </section>

      {/* Model Performance */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-purple-400 mb-4">📊 Model Performance</h2>
        <p className="text-gray-300">
          The model provides:  
          ✅ Primary prediction with confidence  
          ✅ Top 3 predictions for better insight  
          ✅ Debug visualization of the input image  
        </p>
        <p className="text-gray-400 mt-4">
          Trained on the MNIST dataset, the CNN achieves accuracy above 98%. While digits like 1 and 7 or 3 and 8 may sometimes 
          confuse the model, the top-3 prediction feature helps mitigate errors. Performance can be further improved with 
          additional training data and data augmentation techniques.
        </p>
      </section>

      {/* Source Code */}
      <section className="text-center">
        <h2 className="text-2xl font-bold text-purple-400 mb-4">🔗 Source Code</h2>
        <a
          href="https://github.com/Harshprakash13/Mnist-Handwriteen-digit_recognition"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-lg shadow-lg hover:scale-105 transform transition"
        >
          View on GitHub →
        </a>
        <p className="text-gray-400 mt-4">
          The complete codebase, including training scripts, model files, and UI implementation, is available on GitHub. 
          Developers can fork the repo to experiment, retrain the model, or improve the user interface further.
        </p>
      </section>
    </div>
  );
}
