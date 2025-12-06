# 🎬 DANVERSE STUDIO

**Next.js 14 Cinematic AI Creative Agency Hero Experience**

A world-class cinematic portfolio website built with cutting-edge web technologies featuring 3D WebGL animations, smooth scrolling, and liquid glass effects.

## 🚀 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **React**: 18.2.0
- **3D Rendering**: Three.js + React Three Fiber
- **Physics**: Cannon-es via @react-three/cannon
- **Animations**: GSAP + ScrollTrigger
- **Smooth Scrolling**: @studio-freight/lenis
- **Post-Processing**: @react-three/postprocessing
- **Styling**: TailwindCSS
- **Language**: TypeScript

## 📋 Installation

```bash
npm install
```

## 🏃 Getting Started

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
src/
├── app/              # Next.js app router
├── components/
│   ├── canvas/      # 3D/WebGL components
│   └── dom/         # DOM components
├── hooks/           # Custom React hooks
└── styles/          # Global styles

public/
├── hero-mask.glb    # 3D model
├── studio_small_09_1k.hdr  # HDRI environment
└── noise-overlay.mp4  # Video overlay
```

## 🎨 Features

✨ Liquid glass 3D mask with chromatic aberration  
✨ Interactive mouse tracking  
✨ Smooth scroll experience with Lenis  
✨ Post-processing effects  
✨ Responsive design  
✨ Production-ready code  

## 🛠️ Development

```bash
# Build for production
npm run build

# Start production server
npm run start

# Run linting
npm run lint
```

## 📦 Build & Deploy

The project is optimized for deployment on Vercel or similar platforms.

```bash
npm run build
```

## 📄 License

All rights reserved © DANVERSE STUDIO

---

**Built with ❤️ by Creative Directors & WebGL Engineers**
