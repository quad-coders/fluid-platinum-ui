# Changelog

All notable changes to Fluid Platinum UI will be documented in this file.

Format based on [Keep a Changelog](https://keepachangelog.com/).

## [1.0.0] - 2026-03-13

### Added
- Three-tier design token system (primitives, semantic, component)
- Dark-first theme with light mode via `data-theme="light"`
- 21 components: Button, Card, Input, Toggle, Checkbox/Radio, Badge, Alert, Divider, Navbar, Breadcrumb, Tabs, Table, Modal, Avatar, Progress, Tooltip, Skeleton, Container, Grid, Stack/Row
- Glassmorphic styling with consistent `backdrop-filter: blur(2px)`
- `@supports` fallbacks for browsers without `backdrop-filter`
- CSS logical properties for RTL language support
- Optional `components/modal/modal.js` for accessible modal behavior (focus trap, Escape key, scroll lock)
- WCAG accessibility: `prefers-reduced-motion`, `:focus-visible`, 44px touch targets
- Stylelint configuration
- Accessibility audit via pa11y
- Full documentation: README, TOKENS, COMPONENTS
