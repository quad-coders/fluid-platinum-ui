# Design Tokens

Three-tier token system. All prefixed with `--fp-ui-`.

## Tier 1: Primitives (`tokens/primitives.css`)

Raw values. Never use directly in components.

**Colors:** `--fp-ui-color-{scale}-{shade}` where scale is `gray`, `accent`, `violet`, `rose`, `success`, `warning`, `error` and shade is `50`-`950`.

**Spacing:** `--fp-ui-spacing-{1|2|3|4|5|6|8|10|12|16|20|24}` (0.25rem increments, non-sequential)

**Typography:** `--fp-ui-font-size-{xs..7xl}`, `--fp-ui-font-weight-{hairline..bold}`, `--fp-ui-line-height-{none..relaxed}`

**Radius:** `--fp-ui-radius-{sm|md|lg|xl|2xl|full}` (4px to 9999px)

**Transitions:** `--fp-ui-transition-{fast|base|slow}` (150ms/300ms/500ms)

## Tier 2: Semantic (`tokens/semantic.css`)

Intent-based mappings that change between dark/light themes.

| Token | Purpose |
|-------|---------|
| `--fp-ui-color-bg-primary` | Page background |
| `--fp-ui-color-bg-secondary` | Overlay/surface background (0.6 opacity) |
| `--fp-ui-color-bg-tertiary` | Subtle fill background |
| `--fp-ui-color-bg-glass` | Glass element background (dark: 0.01, light: 0.005 opacity) |
| `--fp-ui-color-bg-glass-hover` | Glass hover state |
| `--fp-ui-color-bg-glass-strong` | Stronger glass for active states |
| `--fp-ui-color-text-primary` | Primary text |
| `--fp-ui-color-text-secondary` | Secondary text |
| `--fp-ui-color-text-tertiary` | Muted text (hints, placeholders) |
| `--fp-ui-color-text-inverse` | Text on inverted backgrounds |
| `--fp-ui-color-border-default` | Default borders |
| `--fp-ui-color-border-strong` | Emphasized borders |
| `--fp-ui-color-border-glow` | Accent glow border |
| `--fp-ui-color-focus` | Focus ring color |
| `--fp-ui-shadow-{md\|lg}` | Elevation shadows |

## Tier 3: Component (`tokens/components.css`)

Per-component overrides. Change these to customize individual components without touching component CSS.

```css
/* Example: make all buttons more rounded */
:root {
  --fp-ui-btn-radius: 9999px;
}
```

Available: `--fp-ui-btn-*`, `--fp-ui-card-*`, `--fp-ui-input-*`, `--fp-ui-container-max-w`.
