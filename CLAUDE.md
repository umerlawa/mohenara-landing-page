# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Mohenara landing page - a Next.js marketing site for denial management services targeting PT practices. Built with React, TypeScript, Tailwind CSS, and shadcn/ui. Originally built with v0.dev.

## Commands

```bash
pnpm dev       # Start development server at localhost:3000
pnpm build     # Production build
pnpm start     # Start production server
pnpm lint      # Run ESLint
```

## Architecture

### Directory Structure

- `/app/` - Next.js App Router with root layout, main page, and global styles
- `/components/` - React components split into:
  - `/ui/` - Shadcn/ui component library (Radix-based)
  - Landing page sections: `hero.tsx`, `services.tsx`, `pain-points.tsx`, `differentiators.tsx`, `how-it-works.tsx`, `contact.tsx`, `header.tsx`, `footer.tsx`
- `/lib/utils.ts` - Utility functions including `cn()` for Tailwind class merging
- `/hooks/` - Custom hooks (`use-mobile.ts`, `use-toast.ts`)

### Key Patterns

- **Client-side rendering**: All custom components use `'use client'` directive
- **Path aliases**: Use `@/components`, `@/lib`, `@/hooks` for imports
- **Styling**: Tailwind utility classes with CSS custom properties for design tokens in `globals.css`
- **UI components**: Shadcn/ui with "new-york" style variant, configured in `components.json`

## Brand Colors (MUST USE)

- Primary Deep Teal: #2D6A6A
- Primary Dark Slate Teal: #1E4D4D
- Accent Warm Sand: #D4C5B0
- Background Off-White: #F7F5F2
- Body Text Charcoal: #2C2C2C
- Success Green: #5A8A72

## Typography

- Logo: Montserrat 600
- Headings: Inter 600
- Body: Inter 400

## Design Principles

- Clean, minimal, healthcare-professional aesthetic
- Ample white space
- Rounded corners (8px) on buttons and cards
- Outline/stroke icons (2px weight) in teal
- No stock photos - use illustrations/icons
- Mobile-first responsive design

## Component Patterns

- Buttons: Rounded 8px, teal background, scale up on hover
- Cards: White bg, subtle shadow, lift on hover with springy animation
- Animations: Use cubic-bezier for springy/bouncy feel

## Constraints

- Don't add new dependencies without asking
- Don't refactor working code unnecessarily
- Don't change component logic when only styling is requested
- Don't use colors outside the brand palette

## Build Configuration

- TypeScript strict mode enabled
- TypeScript build errors are currently ignored (`ignoreBuildErrors: true` in next.config.mjs)
- Image optimization disabled for static assets
