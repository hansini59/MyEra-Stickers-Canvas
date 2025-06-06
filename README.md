# MyEra Sticker Canvas

A beautiful, interactive React application that lets you create stunning sticker compositions with drag-and-drop functionality, smart grid snapping, and PNG export capabilities.


## 🌟 Features

- **Interactive Canvas**: 600×400 pixel canvas built with Konva for smooth interactions
- **Drag & Drop**: Seamlessly drag stickers anywhere on the canvas
- **Smart Grid Snapping**: Stickers automatically align to a 40px grid for perfect positioning
- **One-Click Adding**: Three beautiful sticker buttons (🎉 Party, ⭐ Star, ❤️ Heart)
- **Double-Click Delete**: Remove stickers with a simple double-click
- **PNG Export**: Download your creations as high-quality PNG files
- **Responsive Design**: Beautiful gradient backgrounds and smooth animations
- **Production Ready**: Clean code architecture with TypeScript support

## 🚀 Live Demo

Visit the live application: (https://hilarious-jalebi-965d95.netlify.app)

## 🛠️ Technologies Used

- **React 18** - Modern functional components with hooks
- **TypeScript** - Type-safe development
- **Konva & React-Konva** - High-performance 2D canvas library
- **Tailwind CSS** - Utility-first CSS framework
- **Vite** - Fast build tool and development server
- **Lucide React** - Beautiful icon library

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/myera-sticker-canvas.git
   cd myera-sticker-canvas
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to see the application running.

## 🎮 How to Use

### Adding Stickers
- Click any of the three sticker buttons (🎉 Party, ⭐ Star, ❤️ Heart) in the sidebar
- Stickers will appear on the canvas at random positions with grid snapping

### Moving Stickers
- Click and drag any sticker to reposition it anywhere on the canvas
- Stickers automatically snap to a 40px grid for perfect alignment
- Visual feedback with shadows and scaling during drag operations

### Removing Stickers
- Double-click any sticker to remove it from the canvas
- Use the "Clear All" button to remove all stickers at once

### Saving Your Work
- Click the "Download PNG" button to save your canvas as a high-quality PNG image
- Files are automatically named with the current date for easy organization

## 🏗️ Project Structure

```
src/
├── components/
│   ├── Header.tsx          # App header with title and description
│   ├── StickerCanvas.tsx   # Main Konva canvas component
│   ├── Controls.tsx        # Sidebar with sticker buttons and actions
│   ├── StickerButton.tsx   # Individual sticker button component
│   └── DownloadButton.tsx  # Styled download button component
├── hooks/
│   └── useStickers.ts      # Custom hook for sticker state management
├── App.tsx                 # Main application component
├── main.tsx               # Application entry point
└── index.css              # Tailwind CSS imports
```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🎨 Design Features

- **Glassmorphism UI**: Beautiful frosted glass effects with backdrop blur
- **Gradient Backgrounds**: Stunning color gradients throughout the interface
- **Smooth Animations**: Hover effects, transitions, and micro-interactions
- **Responsive Layout**: Works perfectly on desktop and mobile devices
- **Grid Visualization**: Subtle grid overlay for visual alignment feedback

## 🧩 Key Components

### StickerCanvas
The heart of the application, built with react-konva:
- Manages sticker rendering and interactions
- Handles drag-and-drop with grid snapping
- Exports canvas to PNG format
- Provides visual feedback during interactions

### useStickers Hook
Custom React hook that manages:
- Sticker state (position, type, unique IDs)
- Adding new stickers with random positioning
- Updating sticker positions after dragging
- Deleting individual or all stickers

### Controls Sidebar
Intuitive control panel featuring:
- Three animated sticker buttons
- Download functionality with disabled states
- Clear all action with confirmation styling
- Responsive design for different screen sizes

## 🚀 Deployment

The application is deployed on Netlify and automatically builds from the main branch.

To deploy your own version:

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy to Netlify**
   - Connect your GitHub repository to Netlify
   - Set build command: `npm run build`
   - Set publish directory: `dist`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 🙏 Acknowledgments

- Built as part of the MyEra Frontend Internship assignment
- Inspired by modern design principles and user experience best practices
- Thanks to the React and Konva communities for excellent documentation

---
