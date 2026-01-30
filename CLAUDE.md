# CLAUDE.md - AI Assistant Guide

## Project Overview

**structurama-web** is a Manufacturing AX (Augmented Experience) Training System - a Korean-language educational platform that organizes and displays AI training courses for LG's Manufacturing division. It presents courses in a matrix-based UI organized by skill levels (Expert, Advanced, Intermediate, Beginner) and course types (Offline, Elice, Udemy, Enterprise GenAI).

This is a Lovable-generated React + TypeScript + Vite Single Page Application deployed on GitHub Pages.

## Tech Stack

- **Framework:** React 18.3 with TypeScript 5.8
- **Build Tool:** Vite 5.4 with SWC plugin for fast compilation
- **Styling:** Tailwind CSS 3.4 with CSS variables for theming
- **UI Components:** shadcn/ui (Radix UI primitives)
- **Routing:** React Router DOM 6.30
- **State Management:** TanStack React Query 5.83
- **Icons:** Lucide React
- **Deployment:** GitHub Pages via GitHub Actions

## Directory Structure

```
src/
├── components/
│   ├── ui/                    # shadcn/ui components (pre-built, rarely modified)
│   ├── CourseCard.tsx         # Individual course card with variants
│   ├── TrainingGrid.tsx       # Main 5-column grid layout
│   ├── LevelIndicator.tsx     # Skill level sidebar indicator
│   └── NavLink.tsx            # Navigation link component
├── pages/
│   ├── Index.tsx              # Home page with TrainingGrid
│   ├── CourseDetail.tsx       # Course detail view
│   └── NotFound.tsx           # 404 page
├── hooks/
│   ├── use-mobile.tsx         # Mobile responsiveness hook
│   └── use-toast.ts           # Toast notifications hook
├── data/
│   └── courseData.ts          # Course database (~50 courses)
├── lib/
│   └── utils.ts               # cn() utility for Tailwind class merging
├── test/
│   ├── setup.ts               # Vitest setup
│   └── example.test.ts        # Example test
├── App.tsx                    # Root component with routing
├── main.tsx                   # Entry point
└── index.css                  # Global styles with CSS variables
```

## Quick Commands

```bash
npm run dev        # Start dev server on port 8080
npm run build      # Production build to dist/
npm run lint       # ESLint check
npm run test       # Run tests once
npm run test:watch # Watch mode testing
npm run deploy     # Deploy to GitHub Pages
```

## Key Conventions

### Component Patterns

1. **Functional components with TypeScript interfaces:**
   ```tsx
   interface ComponentProps {
     title: string;
     variant?: "prd" | "cto" | "hr" | "sw" | "udemy" | "ai";
   }

   export const Component = ({ title, variant = "prd" }: ComponentProps) => {
     // ...
   };
   ```

2. **Use the `cn()` utility for conditional classes:**
   ```tsx
   import { cn } from "@/lib/utils";

   <div className={cn("base-classes", condition && "conditional-class")} />
   ```

3. **Path alias:** Use `@/` to import from `src/`:
   ```tsx
   import { Button } from "@/components/ui/button";
   ```

### Styling System

The project uses CSS variables defined in `src/index.css`. Key custom colors:

- **Skill Levels:** `level-expert` (red), `level-advanced` (orange), `level-intermediate` (yellow), `level-beginner` (green)
- **Course Variants:** `course-prd`, `course-cto`, `course-hr`, `course-sw`, `course-udemy`, `course-ai`
- **Badges:** `badge-selection` (green), `badge-new` (yellow)

Use Tailwind classes with these colors: `bg-level-expert`, `bg-course-prd`, etc.

### Course Data Structure

Courses are defined in `src/data/courseData.ts` with this interface:

```typescript
interface CourseDetail {
  id: string;                                              // URL-safe identifier
  title: string;                                           // Korean course title
  category: "offline" | "elice" | "udemy" | "genai";       // Course type
  level: "expert" | "advanced" | "intermediate" | "beginner";
  variant: "prd" | "cto" | "hr" | "sw" | "udemy" | "ai";   // Visual styling variant
  isNew?: boolean;                                         // Show "신규" badge
  isSelection?: boolean;                                   // Show "선발" badge
  objectives: string[];                                    // Learning objectives
  target: string;                                          // Target audience
  format: string;                                          // "오프라인" or "온라인"
  location: string;
  capacity: string;
  duration: string;
  modules?: CourseModule[];                                // Curriculum modules
  schedule?: CourseSchedule[];                             // Session dates
  manager?: { name: string; email: string };               // Course manager
  // ... additional optional fields
}
```

### Routing

Routes are defined in `App.tsx`:
- `/` - Home page (Index)
- `/course/:id` - Course detail page
- `*` - 404 Not Found

The router uses `basename={import.meta.env.BASE_URL}` for GitHub Pages compatibility.

## TypeScript Configuration

The project uses relaxed TypeScript settings for rapid development:
- `noImplicitAny: false`
- `strictNullChecks: false`
- `skipLibCheck: true`

This allows more flexible coding but requires careful attention to potential runtime errors.

## Testing

- **Framework:** Vitest with jsdom environment
- **Utilities:** @testing-library/react, @testing-library/jest-dom
- **Location:** Tests go in `src/test/` or alongside components as `*.test.tsx`
- **Run tests:** `npm run test` or `npm run test:watch`

## Deployment

### GitHub Pages (Automatic)
- Pushes to `main` branch trigger automatic deployment via `.github/workflows/deploy.yml`
- Build output goes to `dist/` and deploys to GitHub Pages
- Base path is `/structurama-web/` (configured in `vite.config.ts`)

### Manual Deploy
```bash
npm run deploy  # Runs build and deploys via gh-pages
```

## Important Considerations

### GitHub Pages SPA Routing
- The project includes `public/404.html` for SPA routing support
- BrowserRouter uses `basename` from environment

### Korean Language Content
- All user-facing text is in Korean
- Course data contains Korean titles, descriptions, and manager information
- Maintain Korean formatting when adding/editing content

### shadcn/ui Components
- Located in `src/components/ui/`
- Generated via shadcn CLI and should rarely need modification
- Add new components with: `npx shadcn-ui@latest add <component-name>`

### Course Variants and Styling
When adding courses, ensure the `variant` matches the department:
- `prd` - PRI R&D (white background)
- `cto` - CTO/SW (gray, left border)
- `hr` - HR/인화원 (yellow)
- `sw` - SW College (green)
- `udemy` - Udemy courses (orange)
- `ai` - Enterprise GenAI (blue)

## Common Tasks

### Adding a New Course
1. Add course object to `src/data/courseData.ts`
2. Follow the `CourseDetail` interface structure
3. The course will automatically appear in the grid based on `category` and `level`

### Adding a New Page
1. Create component in `src/pages/`
2. Add route in `App.tsx` above the catch-all `"*"` route

### Modifying the Grid Layout
- Edit `src/components/TrainingGrid.tsx`
- Course placement is determined by `category` (column) and `level` (row)

### Updating Global Styles
- CSS variables are in `src/index.css`
- Tailwind config extensions are in `tailwind.config.ts`

## Development Notes

- Dev server runs on port 8080 with IPv6 (`::`)
- HMR overlay is disabled in vite.config.ts
- Lovable component tagger is active in development mode only
