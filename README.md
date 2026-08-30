# Stanza 237

An interactive horror website built to put React and TypeScript into practice on a complete project. Packed with references and easter eggs to horror cinema classics, nothing is what it seems, and not everything is visible at first glance.

## 🎥 Live demo

[horror-project-three.vercel.app](https://horror-project-three.vercel.app/)

## 📖 About the project

A multi-layered site: what you see as you scroll is only the beginning. Some sections stay locked until you find the right code, others are only reachable by spotting a hidden element in the scene, and others require answering a quiz correctly. The goal was to combine learning React/TypeScript with a project that genuinely deserved to be built all the way through.

## ✨ Key features

- **Dynamic header**: title with a glitch effect on hover, background turning transparent on scroll, animated mobile menu
- **Locked archive**: a section referencing cult films (*IT*, *The Shining*, *Friday the 13th*, *The Ring*), unlocked by typing a code — either from the keyboard (desktop) or from a dedicated input (mobile)
- **Hidden secret room**: reachable only by discovering an "elusive" link in the menu, which moves around the screen on the first click attempts
- **Jump scare with audio**: a fire alarm hidden in the scene triggers a surprise audio and visual sequence
- **Flashlight mechanic**: in the basement, a "flashlight" effect follows the pointer (mouse on desktop, touch on mobile, via Pointer Events) to search for an object hidden in the dark
- **Found-footage effect**: a night-vision filter with scanlines, vignetting and camera shake, triggered by finding the right object
- **Horror movie quiz**: multiple-choice questions, with a hidden reward for anyone who answers them all correctly
- **Fully responsive**, with interactions designed for mobile from the start

## 🛠️ Tech stack

- [React](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vite.dev/)
- [Tailwind CSS v4](https://tailwindcss.com/)
- [React Router](https://reactrouter.com/)
- Deployed on [Vercel](https://vercel.com/)

## 🚀 Running locally

```bash
git clone https://github.com/Felice556/horror-project.git
cd horror-project
npm install
npm run dev
```

## 📁 Project structure

```
src/
  components/     # Reusable components (Header, Section, Footer, etc.)
  pages/          # App pages (Home, Secret Room, Basement, Puzzles)
  data/           # Static data (menu items, Archive references, quiz questions)
  types/          # Shared TypeScript types
```

## 🖼️ A note on the images

The images on this site were generated with AI for creative purposes.

## 👤 Author

**Felice** — [GitHub](https://github.com/Felice556) · [felice.lgg@gmail.com](mailto:felice.lgg@gmail.com)
