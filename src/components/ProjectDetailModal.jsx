import React from 'react';

const ProjectDetailModal = ({ isOpen, onClose, project }) => {
  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 backdrop-blur-sm">
      <div className="bg-gray-900 text-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto p-8 relative shadow-lg">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white text-2xl font-bold"
          aria-label="Close modal"
        >
          &times;
        </button>
        <h2 className="text-3xl font-bold mb-4">{project.title}</h2>
        <p className="mb-6 whitespace-pre-line text-gray-300">{project.description}</p>
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">Features</h3>
          <ul className="list-disc list-inside text-gray-300 mb-4">
            {project.features.map((feature, idx) => (
              <li key={idx}>{feature}</li>
            ))}
          </ul>
          <h3 className="text-xl font-semibold mb-2">Requirements</h3>
          <ul className="list-disc list-inside text-gray-300 mb-4">
            {project.requirements.map((req, idx) => (
              <li key={idx}>{req}</li>
            ))}
          </ul>
          <h3 className="text-xl font-semibold mb-2">Installation</h3>
          <pre className="bg-gray-800 p-4 rounded text-sm overflow-x-auto mb-4">{project.installation}</pre>
          <h3 className="text-xl font-semibold mb-2">Usage</h3>
          <pre className="bg-gray-800 p-4 rounded text-sm overflow-x-auto mb-4">{project.usage}</pre>
          <h3 className="text-xl font-semibold mb-2">How it Works</h3>
          <p className="mb-4 text-gray-300">{project.howItWorks}</p>
          <h3 className="text-xl font-semibold mb-2">Troubleshooting</h3>
          <p className="mb-4 text-gray-300">{project.troubleshooting}</p>
          <h3 className="text-xl font-semibold mb-2">File Structure</h3>
          <pre className="bg-gray-800 p-4 rounded text-sm overflow-x-auto mb-4 whitespace-pre-wrap">{project.fileStructure}</pre>
          <h3 className="text-xl font-semibold mb-2">Controls</h3>
          <ul className="list-disc list-inside text-gray-300 mb-4">
            {project.controls.map((control, idx) => (
              <li key={idx}>{control}</li>
            ))}
          </ul>
          <h3 className="text-xl font-semibold mb-2">Model Performance</h3>
          <ul className="list-disc list-inside text-gray-300 mb-4">
            {project.modelPerformance.map((perf, idx) => (
              <li key={idx}>{perf}</li>
            ))}
          </ul>
          <p className="text-gray-400 text-sm">
            Source code:{' '}
            <a
              href={project.sourceCodeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 underline hover:text-blue-600"
            >
              source code
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailModal;
