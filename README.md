# Frontend Architecture (Next.js + React)

Welcome to the codebase! This project is built using **Next.js** with **React** and **TypeScript** and is styled using **Tailwind CSS** and **SCSS**. The project is structured in a way that encourages modular, scalable, and maintainable code.

If you're new to the project or unsure how things are organized, read through this guide before diving in. 🙌

---

# 🛠️ Getting Started (Running the App)

Follow these steps to get the project up and running locally:

1. **Clone the Repository**

   ```bash
   git clone https://github.com/Warcraft-3-Risk/risk-website.git
   cd your-repo-name
   ```

2. **Install Dependencies**

   Make sure you have Node.js (v18 or above) installed. Then install the necessary packages:

   ```bash
   npm install
   ```

3. **Run the Development Server**

   To start the app in development mode:

   ```bash
   npm run dev
   ```

   Visit [http://localhost:3000](http://localhost:3000) in your browser to see the app.

4. **Build for Production**

   To create an optimized production build:

   ```bash
   npm run build
   npm start
   ```

---

## ⚙️ Environment Variables

**ASK FOR IT**
Make sure to configure the environment variables for your local setup. Copy the `.env.example` file to `.env.local`:

```bash
cp .env.example .env.local
```

Update the values in `.env.local` as needed (e.g., API URLs, secrets, keys).

---

## 🗂️ Project Structure

```bash
src/
├── app/
│   ├── [route]/               # Pages (like leaderboards, dashboard, etc.)
│   │   ├── __blocks/          # Page-specific components
│   │   └── page.tsx           # The actual page users will see
│   ├── components/
│   │   ├── ui/                # Reusable UI components (Buttons, Modals, etc.)
│   │   └── layout/            # Global layout components (Navbar, Footer, etc.)
│   ├── data/
│   │   ├── articles.json      # Articles and long-form content
│   │   ├── content.json       # Centralized literals, strings, and text
│   │   ├── LeaderBoardData.ts # Static leaderboard data (for testing)
│   │   └── players.json       # Static player data (for testing)
│   └── core/
│       ├── constants/         # Constant values used app-wide
│       ├── hooks/             # Custom React hooks
│       ├── middleware/        # Middleware logic if any
│       ├── scss/              # SCSS for animations & reusable styles
│       ├── services/          # API logic or business logic
│       ├── types/             # TypeScript type definitions
│       └── utils/             # Utility functions/helpers
└── public/                    # Static assets (images, etc.)
```

**Notes:**

- The `data/` folder replaces the previous `content/` folder and now stores all text, articles, and static data.
- Use `articles.json` for articles, `content.json` for literals and strings, and files like `LeaderBoardData.ts` or `players.json` for static/testing data.
- All text and content updates should be made in the appropriate file within `data/`.

---

## 🧠 How Pages Are Structured

When creating a new page:

1. **Create a folder** under `app/` matching the route name.

   - Example: `src/app/leaderboard/`

2. Inside that folder, structure the content as follows:

   - `page.tsx` — The actual page component
   - `__blocks/` — All components used **only** for this page. Example:

     - `LeaderBoardHeader.tsx`
     - `LeaderBoardTable.tsx`
     - `LeaderBoardPagination.tsx`

---

## 🔗 Imports & Aliases

We use **`@/`** to refer to the project root. This ensures imports remain clean and consistent:

✅ **Good Import**:

```ts
import Header from '@/app/components/layout/Header';
```

❌ **Not Ideal Import**:

```ts
import Header from '../../../../components/layout/Header';
```

---

## 🧰 What’s in `core/`

Everything inside the `core/` folder is **shared logic** across the app:

- **`api/`** — Firebase configuation, can be used for other api handling.
- **`contexts/`** — Which should handle the viewing context for each page. (Currently not using).
- **`declaration/`** — Handles declarations such as SVG handling can be used for others.
- **`hooks/`** — Custom React hooks (e.g., `useModal`, `useFetch`).
- **`scss/`** — Global styles, animations, and reusable SCSS files.
- **`utils/`** — Helper functions or utility functions.

---

## 🌐 Components

We have two main component directories:

- **`components/ui/`** — Reusable UI components (e.g., buttons, modals, cards).
- **`components/layout/`** — Global layout components (e.g., Navbar, Footer).
- **`components/layout/sections`** — Which has a more designated point of usage, for smaller sections.
- **`components/layout/sections/segment`** — Controls the segments on the Stand Alone page and Game Guide.

For components that are **only** used on a specific page, place them in the corresponding `__blocks/` directory inside that page’s folder.

---

## 📜 SCSS Structure

Our SCSS files are organized in the following way:

```bash
scss/
├── base/
│   ├── _vars.scss            # App-wide variables (colors, breakpoints, etc.)
│   ├── _mixins.scss          # Global mixins for reuse
├── components/               # SCSS specific to individual components
├── layout/                   # Layout-related SCSS (header, footer, etc.)
│   ├── leaderboard/          # Leaderboard-specific layout styles
│   └── page/                 # Page-specific layout styles
└── sections/                 # Section-specific styles (e.g., leaderboard, dashboard)
```

**Important Notes:**

- The only file used inside the **`base/`** folder is `_vars.scss`, which contains the app-wide variants (colors etc.).
- **Section-specific styles** are prefixed with `s-`, **page-specific styles** are prefixed with `p-`, **layout styles** are prefixed with `l-`, and **leaderboard styles** are prefixed with `l-` inside the leaderboard folder.

Example:

- **`s-`** for sections like `s-leaderboard.scss`.
- **`p-`** for page-specific styling like `p-dashboard.scss`.
- **`l-`** for layout styling like `l-header.scss`.
- **`l-`** for leaderboard-specific styles like `l-leaderboard.scss`.

---

## 📝 Content & Localization

All string literals, headings, labels, and other textual content are located in:

```bash
src/app/data/content.json
```

This keeps the content centralized, making it easier to update and manage. Localization is handled through this structure, and any changes to text should be made here.

---

## 🚀 Tech Stack

- **Framework:** [Next.js](https://nextjs.org/)
- **Frontend:** React + TypeScript
- **Styling:** Tailwind CSS + SCSS (for custom styling and animations)
- **Project Structure:** Modular with aliasing (`@/`)

---

## 🧰 Husky & Pre-commit Hooks

To maintain **consistent code quality** and avoid common issues like syntax errors, missed formatting, or forgotten linting, we use **Husky** to run **pre-commit hooks**.

### Why Use Husky and Pre-commit Hooks?

1. **Consistency**: Ensures code adheres to style guide and linting rules.
2. **Automation**: Automatically formats and checks code before commits.
3. **Prevents Broken Code**: Stops broken code from being committed (e.g., syntax errors, improper formatting).
4. **Keeps the Repo Clean**: Ensures every commit is in a valid state.

### Workflow:

1. You write your code.
2. You attempt to make a commit.
3. Husky runs the pre-commit checks (e.g., linting, formatting).
4. If there are issues (e.g., linting errors, formatting issues), the commit is blocked, and you're prompted to fix them.
5. Once all checks pass, your commit goes through.

---

## 🤔 Questions?

If you're unsure about something, check the folder that corresponds to your page or feature. Still stuck? Ask the team — but be sure to check this guide first 😉.

---
