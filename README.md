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

## 🧰 Husky & Pre-commit Hooks

To maintain **consistent code quality** and avoid common issues (like syntax errors, missed formatting, or forgotten linting), we use **Husky** to run **pre-commit hooks**.

### What Are Pre-commit Hooks?

Pre-commit hooks are scripts that automatically run **before** you commit changes to the repository. In our case, they ensure:

- **ESLint** runs to check code for linting errors (stylistic and functional issues).
- **Prettier** formats the code consistently.
- We can also run other checks like tests or type checks if needed.

These hooks help us maintain **consistent code quality** across all developers and **prevent issues** in our codebase.

---

### Why Use Husky and Pre-commit Hooks?

1. **Consistency**  
   Pre-commit hooks ensure that no matter who is committing the code, it follows the same **style guide**, **linting rules**, and **formatting**. This keeps our codebase clean and prevents "style drift" as everyone adheres to the same rules.

2. **Automation**  
   Instead of having to manually run linting or formatting commands before each commit, Husky does it automatically. This saves time and reduces human error.

3. **Prevents Broken Code**  
   Pre-commit hooks check for things like:

   - Syntax errors
   - Incorrect formatting (spaces, indentation, line breaks)
   - Missing semi-colons or other common mistakes
     If the checks fail, the commit will be stopped, and you'll be notified of the issue, **preventing broken code** from entering the project.

4. **Keeps the Repo Clean**  
   Every commit should be in a **valid state**. With Husky, we make sure that every commit is clean, well-formatted, and error-free, so the repo stays consistent and usable for all team members.

---

### How Does It Work?

When you make a commit:

1. Husky runs the configured pre-commit hook(s) (e.g., linting, formatting).
2. If everything passes, the commit goes through.
3. If there are issues (like a linting error or incorrect format), the commit is blocked, and you'll need to fix the issues before committing.

### Common Checks We Run:

- **Linting** — ESLint ensures there are no syntax or logic errors, and that the code follows the project's coding standards.
- **Formatting** — Prettier makes sure the code is consistently formatted, with proper spacing, indentation, and other stylistic aspects.

---

### Husky Setup in Our Project

Husky is set up to automatically trigger these checks before every commit. You don’t need to manually trigger anything, as Husky runs the checks for you. Here's how it's configured:

1. **ESLint** — This will check for any code quality or style issues.
2. **Prettier** — This will format the code automatically to follow the same style.
3. **Git Hooks** — These hooks are configured in the `.husky/` folder and run on Git events (like `pre-commit`).

### Example Workflow with Husky:

1. You write your code.
2. You attempt to make a commit.
3. Husky runs the pre-commit checks.
   - If there's an issue (e.g., ESLint warning or Prettier formatting issue), the commit is stopped, and you're prompted to fix it.
4. Once all checks pass, your commit goes through, ensuring the code is clean and consistent.

---

## 🤔 Questions?

Start by checking the folder that matches your page/feature.  
Still stuck? Ping the group — but read this first 😉.

---
