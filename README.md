# Fluid Platinum UI

A futuristic glassmorphic design system built with pure HTML & CSS. No build tools, no preprocessors, no runtime dependencies.

Dark-first. Touch-ready. RTL-ready. Accessible.

**Live Preview:** Open [`preview.html`](preview.html) in your browser to see every component in action.

---

## Table of Contents

- [Quick Start](#quick-start)
- [Beginner's Guide](#beginners-guide)
- [Theming](#theming)
- [Components](#components)
  - [Alert](#alert)
  - [Avatar](#avatar)
  - [Badge](#badge)
  - [Breadcrumb](#breadcrumb)
  - [Button](#button)
  - [Card](#card)
  - [Container](#container)
  - [Divider](#divider)
  - [Grid, Stack & Row](#grid-stack--row)
  - [Input & Forms](#input--forms)
  - [Modal](#modal)
  - [Navbar](#navbar)
  - [Progress](#progress)
  - [Skeleton](#skeleton)
  - [Table](#table)
  - [Tabs](#tabs)
  - [Toggle](#toggle)
  - [Tooltip](#tooltip)
- [Utilities](#utilities)
- [Framework Integration](#framework-integration)
  - [React / Next.js](#react--nextjs)
  - [Vue / Nuxt](#vue--nuxt)
  - [Svelte / SvelteKit](#svelte--sveltekit)
  - [Astro](#astro)
  - [Angular](#angular)
  - [Plain HTML / CDN](#plain-html--cdn)
- [Design Tokens](#design-tokens)
- [Accessibility](#accessibility)
- [Browser Support](#browser-support)
- [File Structure](#file-structure)
- [Development](#development)
- [License](#license)

---

## Quick Start

**Option A — Link the CSS directly:**

```html
<link rel="stylesheet" href="path/to/fluid-platinum-ui/dist/index.css">
```

**Option B — Install via npm:**

```bash
npm install fluid-platinum-ui
```

Then import in your CSS or bundler entry point:

```css
@import 'fluid-platinum-ui';
```

That's it — no JavaScript required. Start using `fp-ui-*` classes in your HTML.

---

## Beginner's Guide

### Step 1: Set Up Your HTML

Create a basic HTML file and link the stylesheet:

```html
<!DOCTYPE html>
<html lang="en" data-theme="dark">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My App</title>
  <link rel="stylesheet" href="path/to/fluid-platinum-ui/dist/index.css">
</head>
<body>
  <h1 class="fp-ui-h1">Hello, Platinum</h1>
  <button class="fp-ui-btn fp-ui-btn--primary">Get Started</button>
</body>
</html>
```

### Step 2: Understand the Class Naming

All classes are prefixed with `fp-ui-` to avoid collisions with your own styles. The naming follows BEM conventions:

| Pattern | Meaning | Example |
|---------|---------|---------|
| `.fp-ui-component` | Base component | `.fp-ui-btn` |
| `.fp-ui-component--variant` | Style modifier | `.fp-ui-btn--primary` |
| `.fp-ui-component--size` | Size modifier | `.fp-ui-btn--lg` |
| `.fp-ui-component__element` | Child element | `.fp-ui-card__header` |

### Step 3: Compose Components

Components are designed to nest naturally. Build interfaces by combining them:

```html
<div class="fp-ui-container">
  <nav class="fp-ui-navbar">
    <a class="fp-ui-navbar__brand" href="/">MyApp</a>
    <ul class="fp-ui-navbar__nav">
      <li><a class="fp-ui-navbar__link fp-ui-navbar__link--active" href="/">Home</a></li>
      <li><a class="fp-ui-navbar__link" href="/about">About</a></li>
    </ul>
  </nav>

  <main class="fp-ui-stack fp-ui-stack--lg">
    <div class="fp-ui-card">
      <div class="fp-ui-card__body">
        <h2 class="fp-ui-h2">Welcome</h2>
        <p>Your content here.</p>
        <button class="fp-ui-btn fp-ui-btn--primary">Action</button>
      </div>
    </div>
  </main>
</div>
```

### Step 4: Customize with Tokens

Override CSS custom properties to change the look without editing component CSS:

```css
:root {
  --fp-ui-btn-radius: 9999px;       /* pill-shaped buttons */
  --fp-ui-card-radius: 1.5rem;      /* rounder cards */
  --fp-ui-card-blur: 30px;          /* stronger glass blur */
}
```

See [Design Tokens](#design-tokens) for the full list.

---

## Theming

Dark mode is the default. Switch themes with the `data-theme` attribute on `<html>`:

```html
<html data-theme="dark">   <!-- default -->
<html data-theme="light">  <!-- light mode -->
```

Toggle at runtime with JavaScript:

```js
const html = document.documentElement;
const current = html.getAttribute('data-theme');
html.setAttribute('data-theme', current === 'dark' ? 'light' : 'dark');
```

---

## Components

### Alert

Notification banners with a glowing left edge. Use `role="alert"` for screen reader announcements.

**Classes:** `.fp-ui-alert` `.fp-ui-alert__title`

**Variants:** `--info` `--success` `--warning` `--error`

```html
<div class="fp-ui-alert fp-ui-alert--info" role="alert">
  <div class="fp-ui-alert__title">Information</div>
  <p>System configuration synced across all nodes.</p>
</div>

<div class="fp-ui-alert fp-ui-alert--success" role="alert">
  <div class="fp-ui-alert__title">Success</div>
  <p>Deployment complete. All services operational.</p>
</div>

<div class="fp-ui-alert fp-ui-alert--warning" role="alert">
  <div class="fp-ui-alert__title">Warning</div>
  <p>Resource allocation approaching threshold.</p>
</div>

<div class="fp-ui-alert fp-ui-alert--error" role="alert">
  <div class="fp-ui-alert__title">Error</div>
  <p>Connection to external service failed.</p>
</div>
```

---

### Avatar

Circular user avatars with initials or images. Supports grouping with overlap.

**Classes:** `.fp-ui-avatar` `.fp-ui-avatar-group`

**Sizes:** `--sm` (28px) `--lg` (56px) `--xl` (80px) — default is 40px

```html
<!-- Sizes -->
<div class="fp-ui-avatar fp-ui-avatar--sm" aria-hidden="true">S</div>
<div class="fp-ui-avatar" aria-hidden="true">MD</div>
<div class="fp-ui-avatar fp-ui-avatar--lg" aria-hidden="true">LG</div>
<div class="fp-ui-avatar fp-ui-avatar--xl" aria-hidden="true">XL</div>

<!-- With image -->
<div class="fp-ui-avatar">
  <img src="photo.jpg" alt="Jane Doe">
</div>

<!-- Grouped (overlapping) -->
<div class="fp-ui-avatar-group">
  <div class="fp-ui-avatar" aria-hidden="true">A</div>
  <div class="fp-ui-avatar" aria-hidden="true">B</div>
  <div class="fp-ui-avatar" aria-hidden="true">C</div>
  <div class="fp-ui-avatar" aria-hidden="true">+3</div>
</div>
```

---

### Badge

Small status labels. Success badges show a pulsing dot; error badges show a pulse ring animation.

**Classes:** `.fp-ui-badge`

**Variants:** `--default` `--accent` `--success` `--warning` `--error`

```html
<span class="fp-ui-badge fp-ui-badge--default">Default</span>
<span class="fp-ui-badge fp-ui-badge--accent">Accent</span>
<span class="fp-ui-badge fp-ui-badge--success">Online</span>
<span class="fp-ui-badge fp-ui-badge--warning">Pending</span>
<span class="fp-ui-badge fp-ui-badge--error">Critical</span>
```

---

### Breadcrumb

Navigation trail with automatic `/` separators via CSS pseudo-elements.

**Classes:** `.fp-ui-breadcrumb` `.fp-ui-breadcrumb__item` `.fp-ui-breadcrumb__link` `.fp-ui-breadcrumb__item--current`

```html
<nav aria-label="Breadcrumb">
  <ol class="fp-ui-breadcrumb">
    <li class="fp-ui-breadcrumb__item">
      <a class="fp-ui-breadcrumb__link" href="/">Home</a>
    </li>
    <li class="fp-ui-breadcrumb__item">
      <a class="fp-ui-breadcrumb__link" href="/projects">Projects</a>
    </li>
    <li class="fp-ui-breadcrumb__item fp-ui-breadcrumb__item--current" aria-current="page">
      Fluid Platinum
    </li>
  </ol>
</nav>
```

---

### Button

Glassmorphic buttons with a breathing glow animation on primary hover.

**Classes:** `.fp-ui-btn`

**Style variants:** `--primary` `--secondary` `--ghost` `--outline`

**Size variants:** `--sm` `--lg` — all sizes meet 44px minimum touch target

```html
<!-- Variants -->
<button class="fp-ui-btn fp-ui-btn--primary">Primary</button>
<button class="fp-ui-btn fp-ui-btn--secondary">Secondary</button>
<button class="fp-ui-btn fp-ui-btn--outline">Outline</button>
<button class="fp-ui-btn fp-ui-btn--ghost">Ghost</button>

<!-- Sizes -->
<button class="fp-ui-btn fp-ui-btn--primary fp-ui-btn--sm">Small</button>
<button class="fp-ui-btn fp-ui-btn--primary">Default</button>
<button class="fp-ui-btn fp-ui-btn--primary fp-ui-btn--lg">Large</button>

<!-- Disabled -->
<button class="fp-ui-btn fp-ui-btn--primary" disabled>Disabled</button>

<!-- Full width -->
<button class="fp-ui-btn fp-ui-btn--primary fp-ui-w-full">Full Width</button>
```

**Customizable tokens:**
- `--fp-ui-btn-radius` — border radius
- `--fp-ui-btn-padding-x` / `--fp-ui-btn-padding-y` — padding
- `--fp-ui-btn-min-h` — minimum height (default)
- `--fp-ui-btn-min-h-lg` — minimum height (large)

---

### Card

Glass containers with blur backdrop. Hover to see the glow intensify and card lift.

**Classes:** `.fp-ui-card` `.fp-ui-card__header` `.fp-ui-card__body` `.fp-ui-card__footer`

```html
<!-- Basic card -->
<div class="fp-ui-card">
  <div class="fp-ui-card__body">
    <p>Card content goes here.</p>
  </div>
</div>

<!-- Full card with header and footer -->
<div class="fp-ui-card">
  <div class="fp-ui-card__header">
    <h3 class="fp-ui-h4">Card Title</h3>
  </div>
  <div class="fp-ui-card__body">
    <p>Card content with description text.</p>
  </div>
  <div class="fp-ui-card__footer fp-ui-flex-row fp-ui-gap-4 fp-ui-justify-end">
    <button class="fp-ui-btn fp-ui-btn--ghost fp-ui-btn--sm">Cancel</button>
    <button class="fp-ui-btn fp-ui-btn--primary fp-ui-btn--sm">Save</button>
  </div>
</div>
```

**Customizable tokens:**
- `--fp-ui-card-bg` — background
- `--fp-ui-card-blur` — backdrop blur strength
- `--fp-ui-card-border` — border color
- `--fp-ui-card-radius` — border radius
- `--fp-ui-card-padding` — internal padding

---

### Container

Centered max-width wrapper for page content.

**Classes:** `.fp-ui-container`

**Size variants:** `--sm` (640px) `--md` (768px) `--lg` (1024px) `--xl` (1280px) — default is set by `--fp-ui-container-max-w`

```html
<div class="fp-ui-container">
  <!-- content centered with max-width -->
</div>

<div class="fp-ui-container fp-ui-container--sm">
  <!-- narrower container for forms or articles -->
</div>
```

---

### Divider

A subtle horizontal line for separating content sections.

**Classes:** `.fp-ui-divider`

```html
<hr class="fp-ui-divider">
```

---

### Grid, Stack & Row

Layout primitives for arranging content.

**Stack** (vertical) — `.fp-ui-stack` with gap variants `--sm` `--lg`

**Row** (horizontal) — `.fp-ui-row` with gap variants `--sm` `--lg` and `--stretch`

**Grid** (responsive columns) — `.fp-ui-grid` with `--2` `--3` `--4` (collapses to single column on mobile)

```html
<!-- Vertical stack -->
<div class="fp-ui-stack">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>

<!-- Horizontal row -->
<div class="fp-ui-row">
  <div>Left</div>
  <div>Right</div>
</div>

<!-- Responsive grid -->
<div class="fp-ui-grid fp-ui-grid--3">
  <div class="fp-ui-card"><div class="fp-ui-card__body">One</div></div>
  <div class="fp-ui-card"><div class="fp-ui-card__body">Two</div></div>
  <div class="fp-ui-card"><div class="fp-ui-card__body">Three</div></div>
</div>
```

---

### Input & Forms

Form fields including text inputs, textareas, selects, checkboxes, and radios. All inputs use 16px font size to prevent iOS zoom on focus.

**Classes:** `.fp-ui-field` `.fp-ui-label` `.fp-ui-input` `.fp-ui-field__hint` `.fp-ui-field__error` `.fp-ui-check`

**Variants:** `--error` (on `.fp-ui-input`)

```html
<!-- Text input with label -->
<div class="fp-ui-field">
  <label class="fp-ui-label" for="name">Full Name</label>
  <input class="fp-ui-input" type="text" id="name" placeholder="Enter your name">
</div>

<!-- Input with hint text -->
<div class="fp-ui-field">
  <label class="fp-ui-label" for="email">Email</label>
  <input class="fp-ui-input" type="email" id="email" placeholder="you@example.com">
  <span class="fp-ui-field__hint">We'll never share your email.</span>
</div>

<!-- Input with error state -->
<div class="fp-ui-field">
  <label class="fp-ui-label" for="email-err">Email</label>
  <input class="fp-ui-input fp-ui-input--error" type="email" id="email-err"
         value="not-an-email" aria-describedby="email-err-msg" aria-invalid="true">
  <span class="fp-ui-field__error" id="email-err-msg">Please enter a valid email.</span>
</div>

<!-- Select dropdown -->
<div class="fp-ui-field">
  <label class="fp-ui-label" for="region">Region</label>
  <select class="fp-ui-input" id="region">
    <option value="" disabled selected>Select a region</option>
    <option value="na">North America</option>
    <option value="eu">Europe</option>
  </select>
</div>

<!-- Textarea -->
<div class="fp-ui-field">
  <label class="fp-ui-label" for="bio">Bio</label>
  <textarea class="fp-ui-input" id="bio" placeholder="Tell us about yourself..."></textarea>
</div>

<!-- Checkboxes -->
<fieldset>
  <legend class="fp-ui-label">Notifications</legend>
  <div class="fp-ui-stack fp-ui-stack--sm">
    <label class="fp-ui-check"><input type="checkbox" checked> Email</label>
    <label class="fp-ui-check"><input type="checkbox"> Push</label>
  </div>
</fieldset>

<!-- Radio buttons -->
<fieldset>
  <legend class="fp-ui-label">Plan</legend>
  <div class="fp-ui-stack fp-ui-stack--sm">
    <label class="fp-ui-check"><input type="radio" name="plan" checked> Free</label>
    <label class="fp-ui-check"><input type="radio" name="plan"> Pro</label>
  </div>
</fieldset>
```

**Customizable tokens:**
- `--fp-ui-input-bg` — background
- `--fp-ui-input-border` — border color
- `--fp-ui-input-radius` — border radius
- `--fp-ui-input-padding-x` / `--fp-ui-input-padding-y` — padding
- `--fp-ui-input-min-h` — minimum height

---

### Modal

CSS-only modal dialog using `:target`. Opens when the URL hash matches the modal's `id`. Optional JavaScript addon for full accessibility.

**Classes:** `.fp-ui-modal` `.fp-ui-modal__panel` `.fp-ui-modal__close` `.fp-ui-modal__title` `.fp-ui-modal__body` `.fp-ui-modal__footer`

```html
<!-- Trigger -->
<a href="#my-modal" class="fp-ui-btn fp-ui-btn--primary">Open Modal</a>

<!-- Modal -->
<div class="fp-ui-modal" id="my-modal">
  <div class="fp-ui-modal__panel" role="dialog" aria-modal="true" aria-labelledby="modal-title">
    <a href="#!" class="fp-ui-modal__close" aria-label="Close">&times;</a>
    <div class="fp-ui-modal__title" id="modal-title">Confirm Action</div>
    <div class="fp-ui-modal__body">
      <p>Are you sure you want to proceed?</p>
    </div>
    <div class="fp-ui-modal__footer">
      <a href="#!" class="fp-ui-btn fp-ui-btn--ghost">Cancel</a>
      <a href="#!" class="fp-ui-btn fp-ui-btn--primary">Confirm</a>
    </div>
  </div>
</div>
```

**Accessibility addon** — adds focus trapping, Escape to close, scroll lock, and focus restoration:

```html
<script src="path/to/fluid-platinum-ui/components/modal/modal.js"></script>
```

No initialization needed. The script auto-attaches to all `.fp-ui-modal` elements.

---

### Navbar

Sticky navigation bar with glass backdrop.

**Classes:** `.fp-ui-navbar` `.fp-ui-navbar__brand` `.fp-ui-navbar__nav` `.fp-ui-navbar__link` `.fp-ui-navbar__link--active`

```html
<nav class="fp-ui-navbar" aria-label="Main navigation">
  <a class="fp-ui-navbar__brand" href="/">MyApp</a>
  <ul class="fp-ui-navbar__nav">
    <li><a class="fp-ui-navbar__link fp-ui-navbar__link--active" href="/">Dashboard</a></li>
    <li><a class="fp-ui-navbar__link" href="/projects">Projects</a></li>
    <li><a class="fp-ui-navbar__link" href="/settings">Settings</a></li>
  </ul>
</nav>
```

> The navbar uses `position: sticky` by default. Override with `position: relative` in demos or when embedding inside scrollable containers.

---

### Progress

Animated progress bars with semantic color variants.

**Classes:** `.fp-ui-progress` `.fp-ui-progress__bar`

**Color variants:** `--success` `--warning` `--error` — default is accent

**Size variants:** `--sm` (3px) `--lg` (10px) — default is 6px

```html
<!-- Default (accent) -->
<div class="fp-ui-progress" role="progressbar"
     aria-valuenow="72" aria-valuemin="0" aria-valuemax="100">
  <div class="fp-ui-progress__bar" style="width: 72%;"></div>
</div>

<!-- Success, full -->
<div class="fp-ui-progress fp-ui-progress--success" role="progressbar"
     aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
  <div class="fp-ui-progress__bar" style="width: 100%;"></div>
</div>

<!-- Error, large size -->
<div class="fp-ui-progress fp-ui-progress--error fp-ui-progress--lg" role="progressbar"
     aria-valuenow="18" aria-valuemin="0" aria-valuemax="100">
  <div class="fp-ui-progress__bar" style="width: 18%;"></div>
</div>
```

---

### Skeleton

Shimmer loading placeholders to show while content is loading.

**Classes:** `.fp-ui-skeleton`

**Shape variants:** `--text` `--heading` `--avatar` `--btn` `--card`

```html
<!-- Loading card placeholder -->
<div class="fp-ui-card">
  <div class="fp-ui-card__body fp-ui-stack">
    <div class="fp-ui-flex-row fp-ui-items-center fp-ui-gap-3">
      <div class="fp-ui-skeleton fp-ui-skeleton--avatar"></div>
      <div class="fp-ui-skeleton fp-ui-skeleton--heading" style="flex: 1;"></div>
    </div>
    <div class="fp-ui-skeleton fp-ui-skeleton--text"></div>
    <div class="fp-ui-skeleton fp-ui-skeleton--text"></div>
    <div class="fp-ui-skeleton fp-ui-skeleton--text" style="width: 60%;"></div>
    <div class="fp-ui-skeleton fp-ui-skeleton--btn"></div>
  </div>
</div>

<!-- Full card skeleton -->
<div class="fp-ui-skeleton fp-ui-skeleton--card"></div>
```

---

### Table

Data tables with glass wrapper, striped rows, and hover highlighting.

**Classes:** `.fp-ui-table-wrap` `.fp-ui-table`

**Variants:** `--striped` `--hover`

```html
<div class="fp-ui-table-wrap">
  <table class="fp-ui-table fp-ui-table--striped fp-ui-table--hover" aria-label="Services">
    <thead>
      <tr>
        <th scope="col">Name</th>
        <th scope="col">Status</th>
        <th scope="col">Latency</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>api-gateway</td>
        <td><span class="fp-ui-badge fp-ui-badge--success">Online</span></td>
        <td>12ms</td>
      </tr>
      <tr>
        <td>auth-service</td>
        <td><span class="fp-ui-badge fp-ui-badge--warning">Pending</span></td>
        <td>145ms</td>
      </tr>
    </tbody>
  </table>
</div>
```

---

### Tabs

CSS-only tabs using hidden radio buttons — no JavaScript needed. Supports up to 5 tabs.

**Classes:** `.fp-ui-tabs` `.fp-ui-tabs__radio` `.fp-ui-tabs__tab` `.fp-ui-tabs__panel`

```html
<div class="fp-ui-tabs">
  <input type="radio" name="my-tabs" id="tab1" class="fp-ui-tabs__radio" checked>
  <label for="tab1" class="fp-ui-tabs__tab">Overview</label>

  <input type="radio" name="my-tabs" id="tab2" class="fp-ui-tabs__radio">
  <label for="tab2" class="fp-ui-tabs__tab">Analytics</label>

  <input type="radio" name="my-tabs" id="tab3" class="fp-ui-tabs__radio">
  <label for="tab3" class="fp-ui-tabs__tab">Settings</label>

  <div class="fp-ui-tabs__panel">Overview content here.</div>
  <div class="fp-ui-tabs__panel">Analytics content here.</div>
  <div class="fp-ui-tabs__panel">Settings content here.</div>
</div>
```

> **Important:** Each radio/label pair must come before its corresponding panel. The radio `name` must be unique per tab group on the page.

---

### Toggle

Switch toggle for boolean settings.

**Classes:** `.fp-ui-toggle` `.fp-ui-toggle__track`

```html
<label class="fp-ui-toggle">
  <input type="checkbox" checked>
  <span class="fp-ui-toggle__track"></span>
  Dark mode
</label>

<label class="fp-ui-toggle">
  <input type="checkbox">
  <span class="fp-ui-toggle__track"></span>
  Notifications
</label>
```

---

### Tooltip

Hover/focus tooltips using the `data-tooltip` attribute. Pure CSS, no JavaScript.

**Classes:** `.fp-ui-tooltip`

**Placement:** default is top, `--bottom` for below

```html
<!-- Top tooltip (default) -->
<span class="fp-ui-tooltip" data-tooltip="Uptime: 99.98%" tabindex="0">
  Hover me
</span>

<!-- Bottom tooltip -->
<span class="fp-ui-tooltip fp-ui-tooltip--bottom" data-tooltip="Opens in new tab" tabindex="0">
  Hover me
</span>
```

> Add `tabindex="0"` to non-interactive elements so keyboard users can trigger the tooltip.

---

## Utilities

Layout and accessibility helpers that work alongside any component.

| Class | Effect |
|-------|--------|
| `.fp-ui-flex-col` | Flex column layout |
| `.fp-ui-flex-row` | Flex row layout with wrap |
| `.fp-ui-items-center` | Align items center |
| `.fp-ui-justify-between` | Space between items |
| `.fp-ui-justify-end` | Align items to end |
| `.fp-ui-text-center` | Center text |
| `.fp-ui-gap-2` to `.fp-ui-gap-6` | Gap spacing (0.5rem–1.5rem) |
| `.fp-ui-w-full` | Width 100% |
| `.fp-ui-sr-only` | Visually hidden, accessible to screen readers |

---

## Framework Integration

Fluid Platinum UI is plain CSS — it works with any framework. Here's how to set it up.

### React / Next.js

```bash
npm install fluid-platinum-ui
```

Import in your root layout or `_app` file:

```jsx
// app/layout.tsx (Next.js App Router)
import 'fluid-platinum-ui';

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="dark">
      <body>{children}</body>
    </html>
  );
}
```

```jsx
// pages/_app.tsx (Next.js Pages Router)
import 'fluid-platinum-ui';

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
```

Use classes directly via `className`:

```jsx
export default function Dashboard() {
  return (
    <div className="fp-ui-container">
      <div className="fp-ui-card">
        <div className="fp-ui-card__body">
          <h2 className="fp-ui-h2">Dashboard</h2>
          <button className="fp-ui-btn fp-ui-btn--primary">Action</button>
        </div>
      </div>
    </div>
  );
}
```

### Vue / Nuxt

```bash
npm install fluid-platinum-ui
```

Import globally in your entry file:

```js
// main.js (Vue)
import 'fluid-platinum-ui';
import { createApp } from 'vue';
import App from './App.vue';
createApp(App).mount('#app');
```

```js
// nuxt.config.ts (Nuxt)
export default defineNuxtConfig({
  css: ['fluid-platinum-ui'],
});
```

Use classes in templates:

```vue
<template>
  <div class="fp-ui-container">
    <div class="fp-ui-card">
      <div class="fp-ui-card__body">
        <h2 class="fp-ui-h2">{{ title }}</h2>
        <button class="fp-ui-btn fp-ui-btn--primary" @click="handleClick">
          Action
        </button>
      </div>
    </div>
  </div>
</template>
```

### Svelte / SvelteKit

```bash
npm install fluid-platinum-ui
```

Import in your root layout:

```svelte
<!-- src/routes/+layout.svelte (SvelteKit) -->
<script>
  import 'fluid-platinum-ui';
</script>

<slot />
```

Use classes directly:

```svelte
<div class="fp-ui-card">
  <div class="fp-ui-card__body">
    <h2 class="fp-ui-h2">Hello</h2>
    <button class="fp-ui-btn fp-ui-btn--primary" on:click={handleClick}>
      Action
    </button>
  </div>
</div>
```

### Astro

```bash
npm install fluid-platinum-ui
```

Import in your base layout:

```astro
---
// src/layouts/Base.astro
import 'fluid-platinum-ui';
---
<html lang="en" data-theme="dark">
  <head><meta charset="UTF-8"></head>
  <body>
    <slot />
  </body>
</html>
```

Use classes in any `.astro`, `.jsx`, or `.vue` component:

```astro
<div class="fp-ui-card">
  <div class="fp-ui-card__body">
    <h2 class="fp-ui-h2">Built with Astro</h2>
    <button class="fp-ui-btn fp-ui-btn--primary">Go</button>
  </div>
</div>
```

### Angular

```bash
npm install fluid-platinum-ui
```

Add to `angular.json` styles array:

```json
{
  "projects": {
    "my-app": {
      "architect": {
        "build": {
          "options": {
            "styles": [
              "node_modules/fluid-platinum-ui/dist/index.css",
              "src/styles.css"
            ]
          }
        }
      }
    }
  }
}
```

Use in component templates:

```html
<div class="fp-ui-container">
  <div class="fp-ui-card">
    <div class="fp-ui-card__body">
      <h2 class="fp-ui-h2">{{ title }}</h2>
      <button class="fp-ui-btn fp-ui-btn--primary" (click)="onAction()">
        Action
      </button>
    </div>
  </div>
</div>
```

### Plain HTML / CDN

No build tool needed. Link the CSS file directly:

```html
<!DOCTYPE html>
<html lang="en" data-theme="dark">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My Page</title>
  <link rel="stylesheet" href="path/to/fluid-platinum-ui/dist/index.css">
</head>
<body>
  <div class="fp-ui-container">
    <h1 class="fp-ui-h1"><span class="fp-ui-text-holo">Hello</span> World</h1>
    <button class="fp-ui-btn fp-ui-btn--primary">Get Started</button>
  </div>
</body>
</html>
```

---

## Design Tokens

Three-tier token system. All prefixed with `--fp-ui-`. See [docs/TOKENS.md](docs/TOKENS.md) for the complete reference.

| Tier | File | Purpose |
|------|------|---------|
| Primitives | `tokens/primitives.css` | Raw values — colors, spacing, typography, radius, transitions |
| Semantic | `tokens/semantic.css` | Intent-based mappings that change between dark/light themes |
| Component | `tokens/components.css` | Per-component overrides for customization |

Quick customization example:

```css
:root {
  /* Make buttons pill-shaped */
  --fp-ui-btn-radius: 9999px;

  /* Increase card blur */
  --fp-ui-card-blur: 30px;

  /* Change accent color */
  --fp-ui-color-accent-400: #7c3aed;
  --fp-ui-color-accent-500: #6d28d9;
}
```

---

## Accessibility

- `prefers-reduced-motion: reduce` disables all animations
- `:focus-visible` outlines on all interactive elements
- 44px minimum touch targets (WCAG 2.1 Level AAA)
- 16px input font size (prevents iOS zoom on focus)
- CSS logical properties for RTL language support
- `@supports` fallbacks for `backdrop-filter`
- Semantic HTML with ARIA attributes in all examples
- Optional `components/modal/modal.js` for focus trap, Escape key, and scroll lock

---

## Browser Support

| Browser | Minimum Version |
|---------|----------------|
| Chrome  | 76+            |
| Firefox | 103+           |
| Safari  | 15.4+          |
| Edge    | 79+            |
| iOS Safari | 15.4+       |

Requires CSS Custom Properties and `backdrop-filter`. Components degrade gracefully to semi-opaque backgrounds via `@supports` fallbacks.

---

## File Structure

```
index.css              Entry point (@import order: tokens -> base -> components -> utilities)
tokens/
  primitives.css       Raw values (colors, spacing, typography, radius, transitions)
  semantic.css         Dark/light theme mappings
  components.css       Per-component token overrides
base/
  reset.css            Box-sizing, normalize, focus-visible
  animations.css       Keyframes + prefers-reduced-motion
  typography.css       Headings, holographic text, glow text
components/            18 component folders (one folder per component)
  alert/alert.css
  avatar/avatar.css
  badge/badge.css
  breadcrumb/breadcrumb.css
  button/button.css
  card/card.css
  container/container.css
  divider/divider.css
  grid/grid.css
  input/input.css
  modal/modal.css      + modal.js (optional accessibility addon)
  navbar/navbar.css
  progress/progress.css
  skeleton/skeleton.css
  table/table.css
  tabs/tabs.css
  toggle/toggle.css
  tooltip/tooltip.css
utilities/
  layout.css           Flex, gap, alignment helpers
  sr-only.css          Screen reader only
dist/
  index.css            Bundled, autoprefixed, minified (build output)
```

---

## Development

```sh
npm install                # install dev dependencies
npm run lint               # lint CSS with stylelint
npm run lint:fix           # auto-fix lint issues
npm run build              # build dist/index.css (bundled, autoprefixed, minified)
npm run audit:a11y         # run accessibility audit on preview.html
```

### Source vs Dist

- **Source** (`index.css`): Uses `@import` for modular development. Link directly for prototyping or when using a bundler that supports CSS imports.
- **Dist** (`dist/index.css`): Single file, autoprefixed, minified. Recommended for production.

---

## License

[MIT](LICENSE)
