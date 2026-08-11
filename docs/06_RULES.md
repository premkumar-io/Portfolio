# Portfolio Engineering Rules

## General
1. Build production-quality code.
2. Keep components small and reusable.
3. Prefer clarity over cleverness.
4. Avoid duplicate UI logic.
5. Keep content separate from UI.
6. Use semantic HTML.
7. Use TypeScript where applicable.

## UI
1. Never sacrifice usability for visual effects.
2. Maintain consistent spacing.
3. Maintain consistent typography.
4. Use accessible contrast.
5. Never hide critical information behind hover-only interactions.
6. Every clickable element must look clickable.
7. Mobile UX is first-class.

## Responsive
Test at:
- 320px
- 375px
- 414px
- 768px
- 1024px
- 1280px
- 1440px+

Check:
- Overflow
- Text wrapping
- Navigation
- Cards
- Images
- Buttons
- Forms
- Modals
- Footer

## Accessibility
- Keyboard navigable
- Visible focus
- Semantic headings
- Proper labels
- Alt text
- ARIA only when needed
- Reduced motion support
- Sufficient contrast
- Logical tab order

## Performance
- Optimize images.
- Use modern image formats where supported.
- Lazy-load below-the-fold media.
- Avoid unnecessary dependencies.
- Avoid large client bundles.
- Prevent layout shift.
- Do not load third-party scripts unnecessarily.

## Security
- Never expose secrets.
- Validate contact form input server-side.
- Sanitize user-controlled data.
- Add spam protection where needed.
- Do not trust client-side validation alone.

## Content
Never invent:
- Job experience
- Certifications
- Awards
- Metrics
- Companies
- Client names
- Testimonials

Use placeholders where information is missing.

## Code Quality
Before completion:
- Remove console errors.
- Remove broken links.
- Remove unused imports.
- Fix TypeScript errors.
- Fix lint errors.
- Test all routes.
- Test mobile navigation.
- Test forms.
- Test external links.
