# Portfolio Design System

## 1. Visual Goal
Create a premium, modern engineering portfolio that feels:
- Professional
- Technical
- Confident
- Minimal
- Human
- Fast
- Memorable

Avoid:
- Template-like layouts
- Excessive glassmorphism
- Excessive gradients
- Giant decorative text with no purpose
- Too many animations
- Cartoonish developer graphics
- Fake statistics
- Skill percentage bars
- Generic stock images

## 2. Color System
Use semantic tokens instead of hardcoded colors.

Dark:
- Background: near-black/slate
- Surface: dark slate
- Elevated surface: slightly lighter slate
- Primary text: near-white
- Secondary text: muted gray
- Accent: professional blue
- Border: subtle gray/blue
- Success/warning/error: accessible semantic colors

Light mode, if implemented:
- Background: off-white
- Surface: white
- Text: near-black
- Accent: professional blue

## 3. Typography
Use one strong sans-serif family or a carefully paired system.

Recommended hierarchy:
- Display: bold/semibold
- H1: 48–72px desktop
- H2: 32–48px
- H3: 22–30px
- Body: 16–18px
- Small: 13–15px

Use responsive typography with `clamp()`.

## 4. Layout
- Max content width: approximately 1100–1280px.
- Comfortable horizontal padding.
- Large section spacing.
- Consistent grid.
- Use whitespace deliberately.
- Avoid dense walls of content.

## 5. Cards
Cards should have:
- Clear hierarchy
- Subtle border
- Consistent radius
- Hover state
- Focus state
- Optional subtle elevation
- No excessive shadows

## 6. Motion
Motion should communicate hierarchy and interaction.

Allowed:
- Fade/slide on section entrance
- Hover lift
- Button feedback
- Navigation transitions
- Image reveal
- Project card micro-interactions

Rules:
- Keep animation short and smooth.
- Never animate every element independently.
- Respect `prefers-reduced-motion`.
- Do not make content wait unnecessarily for animations.

## 7. Responsive Breakpoints
Design intentionally for:
- 320px+
- 375px
- 414px
- 768px
- 1024px
- 1280px
- 1440px+
- Large external monitors

Never depend only on desktop designs shrinking down.

## 8. Interaction Standards
Every interactive element must have:
- Hover state
- Focus-visible state
- Active/pressed state where applicable
- Disabled state where applicable

Touch targets should be comfortably tappable.

## 9. Icons
Use one icon family consistently.
Do not mix random icon styles.

Icons should support content, not replace important labels.
