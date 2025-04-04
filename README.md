# 🏫 School Project — Frontend Architecture (Next.js + React)

Welcome to the codebase! This project is built using **Next.js** with **React** and structured in a way that encourages modular, scalable, and maintainable code.

If you're new or unsure how things are laid out, read through this before jumping in 🙌

---

## 🗂️ Project Structure

```bash
src/
├── app/
│   ├── [route]/               # Pages (like leaderboards, dashboard, etc.)
│   │   ├── __blocks/          # Page-specific components
│   │   ├── context/           # Page-specific context providers
│   │   └── page.tsx           # The actual page users will see
│   ├── core/                  # Shared logic and setup
│   │   ├── constants/         # Constant values used app-wide
│   │   ├── hooks/             # Custom React hooks
│   │   ├── middleware/        # Middleware logic if any
│   │   ├── scss/              # SCSS for animations & reusable styles
│   │   ├── services/          # API logic or business logic
│   │   ├── types/             # TypeScript type definitions
│   │   └── utils/             # Utility functions/helpers
│   ├── components/
│   │   ├── ui/                # Reusable UI components (Buttons, Modals, etc.)
│   │   └── layout/            # Global layout components (Navbar, Footer, etc.)
│   └── content/
│       └── content.json       # Centralized text/literals (copy for the app)
```

---

## 🧠 How Pages Are Structured

When creating a new page:

1. **Create a folder** under `app/` matching the route name.
   - Example: `src/app/leaderboard/`
2. Inside that folder:
   - `page.tsx` — the actual page component
   - `__blocks/` — all components used _only_ for this page
   - `context/` — any React context related to this page (if needed)

---

## 🔗 Imports & Aliases

We use **`@/`** to refer to the project root.  
This keeps imports clean and consistent:

✅ Good:

```ts
import Header from '@/app/components/layout/Header';
```

❌ Not ideal:

```ts
import Header from '../../../../components/layout/Header';
```

---

## 🧰 What’s in `core/`

Everything inside `core/` is **shared logic** across the app:

- `constants/` — values like colors, breakpoints, app settings
- `hooks/` — custom React hooks (like useModal, useFetch)
- `middleware/` — for route protection or auth
- `scss/` — global styles, animations, and reusable SCSS
- `services/` — anything like API calls or external logic
- `types/` — TypeScript types/interfaces
- `utils/` — helper functions

---

## 🌐 Components

Global components live in:

- `components/ui/` — small, reusable UI pieces (buttons, cards)
- `components/layout/` — higher-level layout pieces (navbars, sidebars)

If a component is **only** used on one page, put it in that page's `__blocks/`.

---

## 📝 Content & Localization

All strings and literals (headings, labels, etc.) live in:

```bash
src/app/content/content.json
```

This keeps things centralized and easy to update in one place.

---

## 🚀 Tech Stack

- **Framework:** [Next.js](https://nextjs.org/)
- **Frontend:** React + TypeScript
- **Styling:** SCSS (for animations and custom styling)
- **State Management:** React Context (per page)
- **Project Structure:** Modular with aliasing (`@/`)

---

## 🤔 Questions?

Start by checking the folder that matches your page/feature.  
Still stuck? Ping the group — but read this first 😉.

---
