import React from 'react';
import { Palette, Info } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="text-center mb-8">
      <div className="flex items-center justify-center gap-3 mb-4">
        <div className="p-3 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl shadow-lg">
          <Palette className="w-8 h-8 text-white" />
        </div>
        <h1 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
          MyEra Sticker Canvas
        </h1>
      </div>
      
      <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
        Create beautiful compositions with interactive stickers! Click to add, drag to position, and double-click to remove.
      </p>
      
      <div className="mt-4 flex items-center justify-center gap-2 text-sm text-gray-500">
        <Info size={16} />
        <span>Stickers automatically snap to a 40px grid for perfect alignment</span>
      </div>
    </header>
  );
};

export default Header;