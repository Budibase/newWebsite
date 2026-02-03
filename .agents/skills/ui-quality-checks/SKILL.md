---
name: ui-quality-checks
description: Verify light/dark mode colors and responsive behavior when making UI changes or reviewing UI components.
---

# UI Quality Checks (Light/Dark + Responsive)

Use this skill when you change UI code or review UI behavior. Keep it lightweight and practical.

## Checklist (apply to the changed UI)

- **Light and dark mode**: Avoid hard-coded `#fff`/`#000`. Prefer existing CSS variables like `--text`, `--border-color`, `--bg`, `--surface`, or Tailwind with `rgb(var(--...))`.
- **Contrast and icons**: Icons should use `currentColor` and inherit text color so they work in both themes.
- **Hover/focus states**: Verify hover/focus styles are visible in both themes; avoid theme-specific colors.
- **Responsiveness**: Check layout at common breakpoints (mobile ~360px, tablet ~768px, desktop ~1024px+). Ensure no overflow, legible text, and usable touch targets.

## Reporting

- In your response, briefly confirm you checked light/dark + responsiveness for the change.
- If you cannot verify (e.g., no preview), say so and note what should be tested.
