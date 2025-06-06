import { useState, useCallback } from 'react';

interface Sticker {
  id: string;
  emoji: string;
  x: number;
  y: number;
  fontSize: number;
}

const STICKER_TYPES = [
  { emoji: '🎉', label: 'Party' },
  { emoji: '⭐', label: 'Star' },
  { emoji: '❤️', label: 'Heart' },
];

export const useStickers = () => {
  const [stickers, setStickers] = useState<Sticker[]>([]);

  const snapToGrid = useCallback((value: number) => {
    return Math.round(value / 40) * 40;
  }, []);

  const addSticker = useCallback((emoji: string) => {
    const newSticker: Sticker = {
      id: `sticker-${Date.now()}-${Math.random()}`,
      emoji,
      x: snapToGrid(Math.random() * 400 + 50), // Random position with some padding
      y: snapToGrid(Math.random() * 250 + 50),
      fontSize: 48,
    };
    
    setStickers(prev => [...prev, newSticker]);
  }, [snapToGrid]);

  const updateSticker = useCallback((id: string, updates: Partial<Sticker>) => {
    setStickers(prev => 
      prev.map(sticker => 
        sticker.id === id ? { ...sticker, ...updates } : sticker
      )
    );
  }, []);

  const deleteSticker = useCallback((id: string) => {
    setStickers(prev => prev.filter(sticker => sticker.id !== id));
  }, []);

  const clearAllStickers = useCallback(() => {
    setStickers([]);
  }, []);

  return {
    stickers,
    stickerTypes: STICKER_TYPES,
    addSticker,
    updateSticker,
    deleteSticker,
    clearAllStickers,
  };
};