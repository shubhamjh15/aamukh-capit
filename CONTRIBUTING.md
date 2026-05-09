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

- TypeScript for all new components
- Named exports preferred over default
- Single-responsibility components
- Tailwind utility classes only (no inline styles)
- Framer Motion for all JS-driven animations

## Pull Request Guidelines

- One feature or fix per PR
- Clear description of what changed and why
- Reference issues with `Closes #123`
- Ensure `npm run lint` passes

## Reporting Issues

Use the [issue templates](.github/ISSUE_TEMPLATE/) for:
- Bug reports
- Feature requests

Include browser, OS, and screen size for visual bugs.
