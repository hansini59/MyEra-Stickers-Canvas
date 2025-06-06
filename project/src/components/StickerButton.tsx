import React from 'react';

interface StickerButtonProps {
  emoji: string;
  label: string;
  onClick: () => void;
  className?: string;
}

const StickerButton: React.FC<StickerButtonProps> = ({
  emoji,
  label,
  onClick,
  className = '',
}) => {
  return (
    <button
      onClick={onClick}
      className={`
        group relative overflow-hidden
        bg-white/80 backdrop-blur-sm
        border-2 border-white/30
        rounded-2xl p-4
        shadow-lg hover:shadow-xl
        transition-all duration-300 ease-out
        hover:scale-105 hover:bg-white/90
        hover:border-indigo-200/50
        active:scale-95
        flex flex-col items-center gap-2
        min-w-[80px]
        ${className}
      `}
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-100/20 to-purple-100/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      {/* Emoji */}
      <span className="text-3xl group-hover:scale-110 transition-transform duration-300">
        {emoji}
      </span>
      
      {/* Label */}
      <span className="text-xs font-medium text-gray-700 group-hover:text-indigo-700 transition-colors duration-300">
        {label}
      </span>
      
      {/* Ripple effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-400/0 via-indigo-400/20 to-indigo-400/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-out" />
    </button>
  );
};

export default StickerButton;