# Andrew's Blog

A simple personal website/playground built with **Astro**, **Tailwind CSS**, and **shadcn UI components**.

## Tech Stack

- Astro
- TypeScript
- Tailwind CSS
- Shadcn UI components

## Getting Started

### 1) Install dependencies

```bash
pnpm install
```

### 2) Start the development server

```bash
pnpm run dev --host
```

Then open the local URL shown in the terminal.

## Available Scripts

- `pnpm run dev` — Start local dev server
- `pnpm run build` — Build for production
- `pnpm run preview` — Preview production build

## Project Structure

```text
src/
	components/   Reusable Astro and UI components
	layouts/      Shared page layouts
	pages/        Route-based pages and blog posts
	styles/       Global styles
	assets/       Images and static source assets
public/         Public static files
```

## Notes

- Blog posts are under `src/pages/posts/`.
- Main pages include home, blog, and resume.
