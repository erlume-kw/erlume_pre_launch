# Design System Documentation

## Color Palette

Our design system uses a harmonious color palette inspired by earthy tones and natural elements:

### Primary Colors
- **Deep Green** (`--deep-green: 120 15% 8%`) - Very dark green, almost black
- **Forest Green** (`--forest-green: 120 25% 35%`) - Muted medium-dark forest green
- **Terracotta** (`--terracotta: 15 25% 45%`) - Warm muted reddish-brown
- **Blush** (`--blush: 350 25% 85%`) - Soft muted light pink
- **Warm Beige** (`--warm-beige: 45 25% 92%`) - Light warm beige
- **Pale Cream** (`--pale-cream: 45 25% 97%`) - Very light off-white

### Semantic Colors
- **Primary**: Deep Green (for main actions and branding)
- **Secondary**: Forest Green (for secondary actions)
- **Accent**: Blush Pink (for highlights and accents)
- **Muted**: Warm Beige (for subtle backgrounds)
- **Background**: Pale Cream (main background)
- **Foreground**: Deep Green (main text)

## Spacing Scale

Consistent spacing system using 4px base unit:

```css
--spacing-xs: 0.25rem;    /* 4px */
--spacing-sm: 0.5rem;     /* 8px */
--spacing-md: 0.75rem;    /* 12px */
--spacing-base: 1rem;     /* 16px */
--spacing-lg: 1.5rem;     /* 24px */
--spacing-xl: 2rem;       /* 32px */
--spacing-2xl: 3rem;      /* 48px */
--spacing-3xl: 4rem;      /* 64px */
```

### Tailwind Classes
- `p-xs`, `m-xs` - 4px
- `p-sm`, `m-sm` - 8px
- `p-md`, `m-md` - 12px
- `p-base`, `m-base` - 16px
- `p-lg`, `m-lg` - 24px
- `p-xl`, `m-xl` - 32px
- `p-2xl`, `m-2xl` - 48px
- `p-3xl`, `m-3xl` - 64px

## Border Radius Scale

Consistent border radius system:

```css
--radius-xs: 0.25rem;     /* 4px */
--radius-sm: 0.375rem;    /* 6px */
--radius-md: 0.5rem;      /* 8px */
--radius-lg: 0.75rem;     /* 12px */
--radius-xl: 1rem;        /* 16px */
--radius-2xl: 1.5rem;     /* 24px */
--radius-3xl: 2rem;       /* 32px */
```

### Usage Guidelines
- **xs (4px)**: Small interactive elements
- **sm (6px)**: Checkboxes, small badges
- **md (8px)**: Default for most components
- **lg (12px)**: Cards, larger components
- **xl (16px)**: Hero sections, prominent elements
- **2xl (24px)**: Large cards, sections
- **3xl (32px)**: Very large elements

## Typography Scale

```css
text-xs: 0.75rem/1rem
text-sm: 0.875rem/1.25rem
text-base: 1rem/1.5rem
text-lg: 1.125rem/1.75rem
text-xl: 1.25rem/1.75rem
text-2xl: 1.5rem/2rem
text-3xl: 1.875rem/2.25rem
text-4xl: 2.25rem/2.5rem
text-5xl: 3rem/1
text-6xl: 3.75rem/1
```

## Shadow System

```css
--shadow-xs: 0 1px 2px 0 rgb(0 0 0 / 0.05)
--shadow-sm: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)
--shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)
--shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)
--shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)
--shadow-2xl: 0 25px 50px -12px rgb(0 0 0 / 0.25)
```

## Transition System

```css
--transition-fast: 150ms
--transition-normal: 250ms
--transition-slow: 350ms
--transition-slower: 500ms

--easing-smooth: cubic-bezier(0.4, 0, 0.2, 1)
--easing-bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55)
--easing-spring: cubic-bezier(0.175, 0.885, 0.32, 1.275)
```

## Component Guidelines

### Buttons

#### Variants
- **Primary**: Deep green background, pale cream text
- **Secondary**: Forest green background, pale cream text
- **Outline**: Border with background, hover accent
- **Ghost**: Transparent, hover accent
- **Destructive**: Red background for destructive actions

#### Sizes
- **sm**: `h-9 px-4 py-2 rounded-md text-sm`
- **default**: `h-10 px-6 py-3 rounded-lg text-base`
- **lg**: `h-12 px-8 py-4 rounded-xl text-lg`
- **xl**: `h-14 px-10 py-5 rounded-2xl text-xl`

#### Interactive States
- **Hover**: Scale 1.02, enhanced shadow
- **Active**: Scale 0.98
- **Focus**: Ring with primary color
- **Disabled**: 50% opacity, no pointer events

### Inputs

#### Variants
- **Default**: `h-10 px-4 py-2 rounded-lg text-base`
- **Large**: `h-12 px-6 py-3 rounded-xl text-lg`
- **Small**: `h-8 px-3 py-1 rounded-md text-sm`

#### Interactive States
- **Focus**: Ring with primary color
- **Hover**: Subtle background change
- **Disabled**: 50% opacity, no cursor

### Cards

#### Variants
- **Default**: Standard card with subtle shadow
- **Elevated**: Enhanced shadow, hover lift
- **Interactive**: Hover scale and shadow
- **Glass**: Backdrop blur with transparency

### Badges

#### Variants
- **Default**: Primary color background
- **Secondary**: Secondary color background
- **Destructive**: Red background
- **Outline**: Border only, hover accent

## Mobile Responsiveness

### Touch Targets
- Minimum 44px height/width for all interactive elements
- Adjusted padding and spacing for mobile screens

### Mobile Adjustments
```css
@media (max-width: 768px) {
  /* Smaller buttons */
  .btn-primary, .btn-secondary, .btn-outline, .btn-ghost, .btn-destructive {
    @apply px-4 py-2.5 text-sm rounded-md;
  }
  
  /* Smaller inputs */
  .input-default, .select-default {
    @apply h-11 px-3 py-2.5 text-sm rounded-md;
  }
  
  /* Smaller cards */
  .card-default, .card-elevated, .card-interactive, .card-glass {
    @apply rounded-lg;
  }
}
```

## Animation Classes

### Entrance Animations
- `.animate-fade-in`: Fade in from transparent
- `.animate-scale-in`: Scale in from 95%
- `.animate-slide-in-left`: Slide in from left
- `.animate-slide-in-right`: Slide in from right
- `.animate-slide-in-top`: Slide in from top
- `.animate-slide-in-bottom`: Slide in from bottom

### Hover Effects
- `.hover-lift`: Translate Y -1, enhanced shadow
- `.hover-glow`: Enhanced shadow
- `.hover-scale`: Scale to 105%

### Loading States
- `.loading-pulse`: Pulsing opacity
- `.loading-spin`: Rotating animation

## Utility Classes

### Spacing Utilities
- `.space-xs`, `.space-sm`, `.space-md`, `.space-lg`, `.space-xl`, `.space-2xl`
- `.space-x-xs`, `.space-x-sm`, `.space-x-md`, `.space-x-lg`, `.space-x-xl`, `.space-x-2xl`

### Background Utilities
- `.bg-warm-gradient`: Gradient from warm beige to pale cream
- `.bg-soft-gradient`: Gradient from background to muted
- `.bg-glass`: Backdrop blur with transparency

### Text Utilities
- `.text-gradient`: Gradient text from primary to secondary
- `.text-balance`: Balanced text wrapping

## Best Practices

1. **Consistency**: Always use the design system tokens for spacing, colors, and typography
2. **Accessibility**: Ensure proper contrast ratios and focus states
3. **Performance**: Use transform and opacity for animations to prevent layout shifts
4. **Mobile First**: Design for mobile and enhance for desktop
5. **Touch Targets**: Maintain minimum 44px touch targets on mobile
6. **Loading States**: Provide feedback for all async operations
7. **Error States**: Clear error messaging and visual indicators

## Implementation Examples

### Button with Icon
```tsx
<Button variant="primary" size="lg" className="gap-2">
  <Icon className="w-4 h-4" />
  Click Me
</Button>
```

### Card with Hover Effect
```tsx
<Card className="card-interactive p-6">
  <CardTitle>Card Title</CardTitle>
  <CardContent>Card content here</CardContent>
</Card>
```

### Form Input
```tsx
<div className="space-y-2">
  <Label htmlFor="email">Email</Label>
  <Input id="email" type="email" placeholder="Enter your email" />
</div>
```

### Responsive Layout
```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
  {/* Grid items */}
</div>
```
