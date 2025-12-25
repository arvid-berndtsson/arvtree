# Add New Link

Add a new link to the Linktree page.

## Instructions

1. Add a new entry to the `links` array in `src/App.tsx`
2. Import any new icons from `lucide-react` if needed
3. Follow the existing pattern:

```typescript
{
  title: "Link Title",
  url: "https://example.com",
  icon: <IconName className="size-5" />,
  description: "Optional description text",
}
```

## Requirements

- Use an appropriate Lucide icon
- Keep the title concise (2-3 words max)
- Description is optional but recommended
- Ensure the URL is valid and includes https://
