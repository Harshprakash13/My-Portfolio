import React from 'react';
import clsx from 'clsx';
import { Link } from 'react-router-dom';

const borderColorMap = {
  yellow: 'hover:border-yellow-400',
  orange: 'hover:border-orange-400',
  red: 'hover:border-red-400',
  pink: 'hover:border-pink-400',
  purple: 'hover:border-purple-400',
  blue: 'hover:border-blue-400',
  green: 'hover:border-green-400',
  teal: 'hover:border-teal-400',
  cyan: 'hover:border-cyan-400',
  amber: 'hover:border-amber-400',
};

const textColorMap = {
  yellow: 'text-yellow-400',
  orange: 'text-orange-400',
  red: 'text-red-400',
  pink: 'text-pink-400',
  purple: 'text-purple-400',
  blue: 'text-blue-400',
  green: 'text-green-400',
  teal: 'text-teal-400',
  cyan: 'text-cyan-400',
  amber: 'text-amber-400',
};

const hoverTextColorMap = {
  yellow: 'hover:text-yellow-300',
  orange: 'hover:text-orange-300',
  red: 'hover:text-red-300',
  pink: 'hover:text-pink-300',
  purple: 'hover:text-purple-300',
  blue: 'hover:text-blue-300',
  green: 'hover:text-green-300',
  teal: 'hover:text-teal-300',
  cyan: 'hover:text-cyan-300',
  amber: 'hover:text-amber-300',
};

const bgColorMap = {
  yellow: 'bg-yellow-400',
  orange: 'bg-orange-400',
  red: 'bg-red-400',
  pink: 'bg-pink-400',
  purple: 'bg-purple-400',
  blue: 'bg-blue-400',
  green: 'bg-green-400',
  teal: 'bg-teal-400',
  cyan: 'bg-cyan-400',
  amber: 'bg-amber-400',
};

const ProjectCard = ({ icon, title, description, techStack, link, hoverColor }) => {
  const borderColorClass = borderColorMap[hoverColor] || 'hover:border-gray-400';
  const textColorClass = textColorMap[hoverColor] || 'text-gray-400';
  const hoverTextColorClass = hoverTextColorMap[hoverColor] || 'hover:text-gray-300';

  // 🔥 Smart link element: Link for internal, <a> for external
  const isInternalLink = link && link.startsWith('/');

  const LinkElement = isInternalLink ? Link : 'a';
  const linkProps = isInternalLink
    ? { to: link }
    : { href: link, target: "_blank", rel: "noopener noreferrer" };

  return (
    <div
      className={clsx(
        "bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 flex-shrink-0 w-80 relative overflow-hidden group",
        borderColorClass
      )}
    >
      {/* Thumbnail area */}
      <div className="w-full h-48 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg mb-4 flex items-center justify-center relative shadow-inner">
        <span className="text-5xl">{icon}</span>
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-lg">
          <span className="text-white text-lg font-semibold">View Details</span>
        </div>
      </div>

      {/* Title */}
      <h4 className="text-2xl font-extrabold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-600">
        {title}
      </h4>

      {/* Description */}
      <p className="text-gray-300 mb-4 flex-grow">{description}</p>

      {/* Tech stack tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        {techStack.map((tech, index) => {
          const techBgClass = bgColorMap[tech.color] || 'bg-gray-600';
          return (
            <span key={index} className={clsx(techBgClass, "px-3 py-1 rounded-full text-xs font-semibold")}>
              {tech.name}
            </span>
          );
        })}
      </div>

      {/* View Project Button */}
      {link && (
        <LinkElement
          {...linkProps}
          className={clsx(textColorClass, hoverTextColorClass, "font-semibold self-start")}
        >
          View Project →
        </LinkElement>
      )}
    </div>
  );
};

export default ProjectCard;

