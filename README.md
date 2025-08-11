# Portpolio

A modern developer portfolio built with [Next.js](https://nextjs.org), featuring interactive UI, 3D graphics, and a beautiful, responsive design.

## 🚀 Tech Stack

- **Framework:** [Next.js 15](https://nextjs.org/)
- **Language:** TypeScript, React 19
- **Styling:** Tailwind CSS 4, PostCSS, CSS Modules
- **3D & Animation:** three.js, @react-three/fiber, @react-three/drei, react-lottie, GSAP
- **UI/UX:** Custom components, motion, next-themes (dark/light mode)
- **Icons:** react-icons
- **Other:** mini-svg-data-uri, clsx, tailwind-merge

## ✨ Features

- ⚡ **Lightning Fast:** Powered by Next.js 15 and Turbopack for instant reloads and builds.
- 🎨 **Modern UI:** Custom components for Hero, Footer, Experience, Clients, Recent Projects, and more.
- 🌗 **Dark/Light Mode:** Seamless theme switching with next-themes.
- 🌍 **3D Globe & Animations:** Interactive globe and animated effects using three.js and react-lottie.
- 🧩 **Reusable UI:** Modular components in `components/ui` for easy customization.
- 📱 **Responsive Design:** Looks great on all devices.
- 🛠️ **Developer Experience:** ESLint, TypeScript, and Tailwind for robust, maintainable code.
- 🖼️ **Rich Media:** SVGs, PNGs, GIFs, and more in the `public/` folder.

## 📁 Project Structure

```
portpolio/
  app/            # Next.js app directory (pages, layout, providers)
  components/     # UI and feature components
    ui/           # Reusable UI elements (3D, animation, effects)
  data/           # Static data (JSON, TypeScript)
  lib/            # Utility functions
  public/         # Static assets (images, SVGs, GIFs)
  styles/         # Global and component styles
  ...
```

## 🛠️ Getting Started

1. **Install dependencies:**

   ```bash
   npm install
   # or
   yarn install
   ```

2. **Run the development server:**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

3. **Open your browser:**
   Visit [http://localhost:3000](http://localhost:3000)

## 🧩 Customization

- Edit `app/page.tsx` to change the main page.
- Add or modify components in `components/` and `components/ui/`.
- Update styles in `app/globals.css` or use Tailwind classes.

## 📦 Scripts

- `npm run dev` – Start development server
- `npm run build` – Build for production
- `npm run start` – Start production server
- `npm run lint` – Run ESLint

## 🌐 Deployment

Deploy easily on [Vercel](https://vercel.com/) or any platform supporting Next.js.

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [three.js Docs](https://threejs.org/docs/)

---

> Crafted with ❤️ by sanket-pilane
