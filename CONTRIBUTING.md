# Contributing to Aamukh Capital

Thanks for your interest in contributing!

## Getting Started

1. Fork the repository
2. Create a feature branch: `git checkout -b feat/your-feature`
3. Make your changes
4. Commit using Conventional Commits format
5. Open a Pull Request

## Commit Convention

- `feat:` — new feature
- `fix:` — bug fix
- `chore:` — config/tooling
- `docs:` — documentation only
- `style:` — formatting, no logic change
- `refactor:` — restructure, no feature change

## Code Style

- Use TypeScript for all new components
- Prefer named exports where possible
- Keep components single-responsibility
- Use Tailwind utility classes; avoid inline styles
- Animate with Framer Motion for consistency

## Pull Request Guidelines

- Keep PRs focused — one feature or fix per PR
- Add a clear description of what changed and why
- Reference any related issues with `Closes #123`
- Ensure `npm run lint` passes before opening a PR
