# PFE English Fluency Frontend (React + Tailwind)

Ce projet frontend est une démo React pour une interface enfantine de pratique de l’anglais (solo + groupe).

## 📦 Installation

```bash
cd frontend
npm install
```

## ▶️ Lancer en mode dev

```bash
npm run dev
```

## 🧩 Architecture

- **Routes**
  - `/` : page de connexion / inscription
  - `/practice-mode` : choix du mode de pratique
  - `/grades` : sélection de la classe (the grade is chosen here; signup no longer asks for it)
  - `/units/:grade` : sélection de l’unité
  - `/lessons/:grade/:unitNumber` : sélection de la leçon
  - `/practice/:lessonId` : interface de pratique (simulée)

- **Connexion au backend**
  - Environnement : `VITE_API_URL` dans `.env` (par défaut `http://localhost:4000`)

## 🧠 Notes

- Les interactions audio sont simulées. L’intégration réelle est prévue via Whisper / OpenAI.
- L’app utilise Tailwind pour un design enfantin et des boutons larges.
