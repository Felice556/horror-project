# Stanza 237

Un sito horror interattivo, con l'obiettivo di mettere in pratica React e TypeScript su un progetto completo. Pieno di riferimenti ed easter egg ai classici del cinema horror — nulla è come sembra, e non tutto si vede al primo sguardo.

## 🎥 Demo live

[horror-project-three.vercel.app](https://horror-project-three.vercel.app/)

## 📖 Il progetto

Un sito a più livelli: quello che vedi scorrendo la pagina è solo l'inizio. Alcune sezioni restano bloccate finché non si trova il codice giusto, altre si raggiungono solo scoprendo un elemento nascosto nella scena, altre ancora richiedono di rispondere correttamente a un quiz. L'obiettivo era unire l'apprendimento di React/TypeScript a un progetto che avesse davvero voglia di essere costruito fino in fondo.

## ✨ Funzionalità principali

- **Header dinamico**: titolo con effetto glitch al passaggio del mouse, sfondo che diventa trasparente allo scroll, menu mobile animato
- **Archivio bloccato**: sezione con riferimenti a film cult (*IT*, *Shining*, *Venerdì 13*, *The Ring*), sbloccabile digitando un codice — sia da tastiera (desktop) sia da un campo dedicato (mobile)
- **Stanza segreta nascosta**: raggiungibile solo scoprendo un link "sfuggente" nel menu, che si sposta sullo schermo ai primi tentativi di click
- **Jump scare con audio**: un allarme antincendio nascosto nella scena innesca una sequenza sonora e visiva a sorpresa
- **Meccanica torcia**: nel seminterrato, un effetto "torcia" segue il puntatore (mouse su desktop, tocco su mobile, tramite Pointer Events) per cercare un oggetto nascosto al buio
- **Effetto found-footage**: filtro a visione notturna con scanline, vignettatura e tremore camera, attivato trovando l'oggetto giusto
- **Quiz sui film horror**: domande a scelta multipla, con una ricompensa nascosta per chi risponde correttamente a tutte
- **Completamente responsive**, con interazioni pensate fin da subito anche per mobile

## 🛠️ Stack tecnico

- [React](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vite.dev/)
- [Tailwind CSS v4](https://tailwindcss.com/)
- [React Router](https://reactrouter.com/)
- Deploy su [Vercel](https://vercel.com/)

## 🚀 Avvio in locale

```bash
git clone https://github.com/Felice556/horror-project.git
cd horror-project
npm install
npm run dev
```

## 📁 Struttura del progetto

```
src/
  components/     # Componenti riutilizzabili (Header, Section, Footer, ecc.)
  pages/          # Pagine dell'app (Home, Stanza segreta, Seminterrato, Enigmi)
  data/           # Dati statici (voci di menu, riferimenti dell'Archivio, domande del quiz)
  types/          # Type TypeScript condivisi
```

## 🖼️ Nota sulle immagini

Le immagini di questo sito sono state generate con intelligenza artificiale a scopo creativo.



## 👤 Autore

**Felice** — [GitHub](https://github.com/Felice556) · [felice.lgg@gmail.com](mailto:felice.lgg@gmail.com)
