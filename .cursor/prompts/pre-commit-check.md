# Pre-Commit Check

Run all quality checks before committing code.

## Command

```bash
npm run check
```

This runs:
1. `npm run format:check` - Verify Prettier formatting
2. `npm run lint` - Run ESLint
3. `npm run build` - TypeScript check + production build

## If Checks Fail

### Formatting Issues
```bash
npm run format
```

### Linting Issues
```bash
npm run lint:fix
```

### TypeScript Errors
Fix the errors shown in the terminal, then rebuild.

## Quick Reference

| Issue | Fix Command |
|-------|-------------|
| Formatting | `npm run format` |
| Lint errors | `npm run lint:fix` |
| Type errors | Fix manually, run `npx tsc -b` |
