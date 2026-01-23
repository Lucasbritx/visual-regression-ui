# Visual Regression Testing UI

A React + TypeScript UI specifically designed for visual regression testing with Cypress image diff snapshots.

## Features

### 1. Design System Component Showcase
- **Buttons**: Primary, Secondary, Disabled, Loading states
- **Inputs**: Default, Focused, Error states
- **Cards**: Default, Hover (simulated with CSS class)

### 2. Theme Switcher
- Light/Dark mode toggle
- CSS variables-based theming
- Deterministic colors (no randomness)
- Affects all UI elements consistently

### 3. Responsive Layout
- Three main sections: Header, Main, Footer
- Breakpoints: Desktop (1280px), Tablet (768px), Mobile (375px)
- Consistent spacing and grid rules

### 4. Form with Validation
- Email and password inputs
- Real-time validation feedback
- Error, success, and default states
- Triggerable via deterministic user actions

## Built for Visual Testing

All components are optimized for snapshot testing:
- ✅ No animations or transitions
- ✅ No random values or timestamps
- ✅ Fixed fonts and container widths
- ✅ Predictable hover states via CSS classes
- ✅ All components have `data-testid` attributes

## Tech Stack

- **React 18** with TypeScript
- **Vite** for fast development
- **Tailwind CSS** for styling
- CSS variables for theming

## Project Structure

```
src/
├── components/
│   ├── Button.tsx              # Button component with variants
│   ├── Input.tsx               # Input with validation states
│   ├── Card.tsx                # Card with hover simulation
│   ├── Header.tsx              # Header with theme toggle
│   ├── Footer.tsx              # Footer with 3-column grid
│   ├── ComponentShowcase.tsx   # Design system showcase
│   └── ValidationForm.tsx      # Form with validation logic
├── contexts/
│   └── ThemeContext.tsx        # Theme provider for light/dark mode
├── App.tsx                     # Main application component
├── main.tsx                    # Application entry point
└── index.css                   # Global styles with CSS variables
```

## Getting Started

### Installation

```bash
cd visual-regression-ui
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build

```bash
npm run build
```

## Testing with Cypress

### Key Test IDs

#### Layout
- `header` - Main header
- `header-title` - Header title text
- `theme-toggle` - Theme switcher button
- `main-content` - Main content area
- `footer` - Footer section

#### Component Showcase
- `component-showcase` - Main showcase container
- `buttons-section` - Button showcase section
- `button-primary-default` - Primary button
- `button-secondary-default` - Secondary button
- `button-primary-disabled` - Disabled button
- `button-primary-loading` - Loading button
- `inputs-section` - Input showcase section
- `input-default-state` - Default input
- `input-focused-state` - Focused input
- `input-error-state` - Error input
- `cards-section` - Cards showcase section
- `card-default` - Default card
- `card-hover` - Hover card

#### Validation Form
- `validation-form` - Form container
- `form-email` - Email input
- `form-password` - Password input
- `form-submit` - Submit button
- `form-success` - Success message

### Example Cypress Tests

```typescript
describe('Visual Regression Tests', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173');
  });

  it('should match light theme snapshot', () => {
    cy.get('[data-testid="app"]').matchImageSnapshot('light-theme');
  });

  it('should match dark theme snapshot', () => {
    cy.get('[data-testid="theme-toggle"]').click();
    cy.get('[data-testid="app"]').matchImageSnapshot('dark-theme');
  });

  it('should match button states', () => {
    cy.get('[data-testid="buttons-section"]').matchImageSnapshot('buttons');
  });

  it('should match input error state', () => {
    cy.get('[data-testid="form-submit"]').click();
    cy.get('[data-testid="validation-form"]').matchImageSnapshot('form-errors');
  });

  it('should match responsive layouts', () => {
    // Desktop
    cy.viewport(1280, 720);
    cy.matchImageSnapshot('desktop-layout');

    // Tablet
    cy.viewport(768, 1024);
    cy.matchImageSnapshot('tablet-layout');

    // Mobile
    cy.viewport(375, 667);
    cy.matchImageSnapshot('mobile-layout');
  });
});
```

## Design Decisions

### No Animations
All animations and transitions are disabled via CSS to ensure consistent snapshots.

### CSS Variables
Theme colors are defined as CSS variables for easy switching and consistency.

### Simulated Hover States
Hover states use the `.simulate-hover` CSS class instead of actual `:hover` pseudo-class for predictable testing.

### Fixed Dimensions
Components use fixed widths and consistent spacing to prevent layout shifts.

### Data-testid Attributes
Every major UI element has a `data-testid` for easy selection in tests.

## Breakpoints

- **Mobile**: 375px - Single column layout
- **Tablet**: 768px - Two column grids
- **Desktop**: 1280px - Multi-column layouts

## Theme Variables

### Light Theme
```css
--bg-primary: #ffffff
--text-primary: #111827
--button-primary: #3b82f6
```

### Dark Theme
```css
--bg-primary: #111827
--text-primary: #f9fafb
--button-primary: #3b82f6
```

## License

MIT
# visual-regression-ui
