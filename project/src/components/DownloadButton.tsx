import React from 'react';
import { Download } from 'lucide-react';

interface DownloadButtonProps {
  onClick: () => void;
  disabled?: boolean;
}

const DownloadButton: React.FC<DownloadButtonProps> = ({ onClick, disabled }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        group relative overflow-hidden
        bg-gradient-to-r from-indigo-600 to-purple-600
        hover:from-indigo-700 hover:to-purple-700
        disabled:from-gray-400 disabled:to-gray-500
        text-white font-semibold
        px-6 py-3 rounded-xl
        shadow-lg hover:shadow-xl
        transition-all duration-300 ease-out
        hover:scale-105 active:scale-95
        disabled:hover:scale-100
        flex items-center gap-2
        border border-white/20
        backdrop-blur-sm
        ${disabled ? 'cursor-not-allowed opacity-60' : 'cursor-pointer'}
      `}
    >
      {/* Animated background shine */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-out" />
      
      {/* Icon */}
      <Download 
        size={18} 
        className="group-hover:scale-110 transition-transform duration-300" 
      />
      
      {/* Text */}
      <span>Download PNG</span>
    </button>
  );
};

export default DownloadButton;