import React, { useRef, useState, useCallback } from 'react';
import { Stage, Layer, Text } from 'react-konva';
import { KonvaEventObject } from 'konva/lib/Node';

interface Sticker {
  id: string;
  emoji: string;
  x: number;
  y: number;
  fontSize: number;
}

interface StickerCanvasProps {
  stickers: Sticker[];
  onUpdateSticker: (id: string, updates: Partial<Sticker>) => void;
  onDeleteSticker: (id: string) => void;
  onDownload: () => void;
}

const StickerCanvas = React.forwardRef<any, StickerCanvasProps>(({
  stickers,
  onUpdateSticker,
  onDeleteSticker,
  onDownload,
}, ref) => {
  const konvaStageRef = useRef<any>(null);
  const [draggedSticker, setDraggedSticker] = useState<string | null>(null);

  const snapToGrid = useCallback((value: number) => {
    return Math.round(value / 40) * 40;
  }, []);

  const handleDragStart = useCallback((id: string) => {
    setDraggedSticker(id);
  }, []);

  const handleDragEnd = useCallback(
    (id: string, e: KonvaEventObject<DragEvent>) => {
      const node = e.target;
      const snappedX = snapToGrid(node.x());
      const snappedY = snapToGrid(node.y());
      
      // Ensure stickers stay within canvas bounds
      const clampedX = Math.max(0, Math.min(550, snappedX));
      const clampedY = Math.max(0, Math.min(350, snappedY));
      
      onUpdateSticker(id, { x: clampedX, y: clampedY });
      setDraggedSticker(null);
    },
    [snapToGrid, onUpdateSticker]
  );

  const handleDoubleClick = useCallback(
    (id: string) => {
      onDeleteSticker(id);
    },
    [onDeleteSticker]
  );

  const handleDownload = useCallback(() => {
    if (konvaStageRef.current) {
      // Get the Konva stage reference
      const stage = konvaStageRef.current;
      
      // Generate high-quality PNG data URL
      const dataURL = stage.toDataURL({
        mimeType: 'image/png',
        quality: 1,
        pixelRatio: 2, // Higher resolution for better quality
      });
      
      // Create download link
      const link = document.createElement('a');
      link.download = `my-sticker-canvas-${new Date().toISOString().slice(0, 10)}.png`;
      link.href = dataURL;
      
      // Trigger download
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      // Call the parent callback for UI feedback
      onDownload();
    }
  }, [onDownload]);

  // Expose download function to parent component
  React.useImperativeHandle(ref, () => ({
    downloadCanvas: handleDownload,
  }));

  return (
    <div className="relative">
      <Stage
        width={600}
        height={400}
        ref={konvaStageRef}
        className="border-2 border-white/20 rounded-2xl shadow-2xl bg-gradient-to-br from-blue-50/50 to-purple-50/50 backdrop-blur-sm"
      >
        <Layer>
          {stickers.map((sticker) => (
            <StickerText
              key={sticker.id}
              sticker={sticker}
              isDragging={draggedSticker === sticker.id}
              onDragStart={() => handleDragStart(sticker.id)}
              onDragEnd={(e) => handleDragEnd(sticker.id, e)}
              onDoubleClick={() => handleDoubleClick(sticker.id)}
            />
          ))}
        </Layer>
      </Stage>
      
      {/* Grid overlay for visual feedback */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <svg width="600" height="400" className="rounded-2xl">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#6366f1" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Hidden download trigger */}
      <button
        onClick={handleDownload}
        style={{ display: 'none' }}
        id="hidden-download-trigger"
      />
    </div>
  );
});

StickerCanvas.displayName = 'StickerCanvas';

interface StickerTextProps {
  sticker: Sticker;
  isDragging: boolean;
  onDragStart: () => void;
  onDragEnd: (e: KonvaEventObject<DragEvent>) => void;
  onDoubleClick: () => void;
}

const StickerText: React.FC<StickerTextProps> = ({
  sticker,
  isDragging,
  onDragStart,
  onDragEnd,
  onDoubleClick,
}) => {
  return (
    <Text
      text={sticker.emoji}
      x={sticker.x}
      y={sticker.y}
      fontSize={sticker.fontSize}
      fontFamily="Apple Color Emoji, Segoe UI Emoji, Noto Color Emoji, sans-serif"
      draggable
      opacity={isDragging ? 0.8 : 1}
      scaleX={isDragging ? 1.1 : 1}
      scaleY={isDragging ? 1.1 : 1}
      shadowColor="rgba(0, 0, 0, 0.3)"
      shadowBlur={isDragging ? 20 : 10}
      shadowOffset={{ x: 0, y: isDragging ? 8 : 4 }}
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
      onDblClick={onDoubleClick}
      onMouseEnter={(e) => {
        const container = e.target.getStage()?.container();
        if (container) {
          container.style.cursor = 'grab';
        }
      }}
      onMouseLeave={(e) => {
        const container = e.target.getStage()?.container();
        if (container) {
          container.style.cursor = 'default';
        }
      }}
    />
  );
};

export default StickerCanvas;