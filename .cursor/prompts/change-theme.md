# Change Theme Colors

Modify the color scheme of the Linktree page.

## Background Gradient

In `src/App.tsx`, find the main container div:

```tsx
<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
```

Change the `from-`, `via-`, and `to-` colors.

## Accent Colors

Update these throughout `src/App.tsx`:
- Avatar gradient: `from-purple-400 via-pink-500 to-blue-500`
- Button gradient: `from-purple-600 to-pink-600`
- Card hover effects: `hover:shadow-purple-500/10`
- Icon backgrounds: `from-purple-500/20 to-pink-500/20`

## Animated Background Orbs

The floating orbs use:
- `bg-purple-500`
- `bg-blue-500`
- `bg-pink-500`

## CSS Theme Variables

For shadcn components, update `src/index.css`:
- Light theme: Under `@theme inline`
- Dark theme: Under `.dark`

## Popular Color Combinations

- Purple/Pink (current): Modern, creative
- Blue/Cyan: Professional, tech
- Green/Teal: Nature, health
- Orange/Yellow: Energetic, warm
- Monochrome: Minimal, elegant
