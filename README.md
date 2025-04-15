# Meme Directory – Frontend [LINK](https://meme-front-end-production.up.railway.app/)

A responsive and interactive meme directory built with **React**, **Vite**, **TypeScript**, **HeroUI**, and **TanStack Query**.

Users can log in with just a username, view memes in list and table format, like/unlike memes, and edit meme details via modal with validation.

---

## 🚀 Tech Stack

- ⚛️ **React** with **Vite**
- 🎨 **HeroUI** (Tailwind-based UI component library)
- ⚙️ **TypeScript**
- 🔄 **TanStack Query (React Query)**
- ✅ **Zod** for form validation
- 🍪 **js-cookie** for token management
- 🔐 Auth with **JWT**

---

## 📦 Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/rvoshchylo/meme-front-end.git
cd meme-directory/frontend
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the development server

```bash
npm run dev
```

App will be available at `http://localhost:5173`

---

## 🔐 Authentication Flow

- User enters a **username** on the login page.
- The server returns a **JWT token**.
- Token is stored in cookies.
- All subsequent requests use the token for protected routes.

---

## 🧩 Features

- 📋 Meme Table with editable modal
- 🖼 Meme List with images and like buttons
- ❤️ Like/unlike functionality (JWT protected)
- ✍️ Meme edit form with real-time validation via Zod
- 📱 Fully responsive design with HeroUI
- 🔄 Auto-refresh after edits/likes using TanStack Query

---

## 📁 Project Structure (Frontend)

```
src/
├─ api/              # API requests and React Query hooks
├─ components/       # Reusable UI components (MemeCard, EditModal, etc.)
├─ config/           # Config files (e.g., site menu, table columns)
├─ layouts/          # Layout files (like DefaultLayout)
├─ pages/            # Route-based pages (/list, /table, /)
├─ schemas/          # Zod validation schemas
├─ styles/           # Tailwind or global CSS (if any)
├─ types/            # Shared TypeScript types
├─ utils/            # Helpers, cookie utils, etc.
├─ App.tsx           # Main app component
├─ main.tsx          # Vite app entry
├─ provider.tsx      # Providers (TanStack Query, Theme, etc.)
└─ vite-env.d.ts     # Vite-specific type declarations

config/
├─ site.ts           # Site navigation config
├─ columns.ts        # Table column definitions

root/
├─ tailwind.config.js
├─ vite.config.ts
├─ tsconfig.json
├─ .eslintrc.json
├─ README.md
├─ package.json
└─ index.html
```

---

