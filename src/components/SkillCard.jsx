import { clsx } from 'clsx';

const colorMap = {
  pink: {
    bg: 'bg-gradient-to-br from-pink-500 to-pink-600',
    border: 'hover:border-pink-400/60',
    shadow: 'hover:shadow-pink-500/20'
  },
  purple: {
    bg: 'bg-gradient-to-br from-purple-500 to-purple-600',
    border: 'hover:border-purple-400/60',
    shadow: 'hover:shadow-purple-500/20'
  },
  blue: {
    bg: 'bg-gradient-to-br from-blue-500 to-blue-600',
    border: 'hover:border-blue-400/60',
    shadow: 'hover:shadow-blue-500/20'
  },
  green: {
    bg: 'bg-gradient-to-br from-green-500 to-green-600',
    border: 'hover:border-green-400/60',
    shadow: 'hover:shadow-green-500/20'
  },
  orange: {
    bg: 'bg-gradient-to-br from-orange-500 to-orange-600',
    border: 'hover:border-orange-400/60',
    shadow: 'hover:shadow-orange-500/20'
  },
  cyan: {
    bg: 'bg-gradient-to-br from-cyan-500 to-cyan-600',
    border: 'hover:border-cyan-400/60',
    shadow: 'hover:shadow-cyan-500/20'
  }
};

const SkillCard = ({ name, logo, color = 'blue', level }) => {
  const { bg, border, shadow } = colorMap[color] || colorMap.blue;
  
  return (
    <div 
      className={clsx(
        "group/skill relative overflow-hidden p-4 bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm rounded-2xl border border-gray-700/50",
        border,
        "transition-all duration-500 hover:scale-110 hover:shadow-2xl",
        shadow,
        "hover:-translate-y-2"
      )}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-gray-500/10 via-transparent to-gray-500/10 opacity-0 group-hover/skill:opacity-100 transition-opacity duration-500"></div>
      <div className="relative z-10 flex flex-col items-center space-y-3">
        <div className={clsx(
          "w-16 h-16 rounded-2xl flex items-center justify-center",
          bg,
          "group-hover/skill:scale-110 group-hover/skill:rotate-3 transition-all duration-300 shadow-lg",
          `shadow-${color}-500/30`
        )}>
          {logo ? (
            <img src={logo} alt={name} className="w-10 h-10" />
          ) : (
            <span className="text-white font-bold text-xl">{name.charAt(0)}</span>
          )}
        </div>
        <div className="text-center">
          <span className="text-gray-300 font-bold text-sm group-hover/skill:text-white transition-colors duration-300 block">{name}</span>
          {level && (
            <div className="mt-2 w-full bg-gray-700/50 rounded-full h-1.5 overflow-hidden">
              <div
                className={clsx("h-full rounded-full transition-all duration-1000 ease-out", bg)}
                style={{ width: `${level}%` }}
              ></div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SkillCard;