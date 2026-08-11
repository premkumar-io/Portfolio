# 🚀 Antigravity Master Prompt — Production Portfolio

You are a senior product designer, UX engineer, frontend architect and production-level web developer.

Build a complete, premium, interactive and production-ready personal developer portfolio website using the project documentation in this folder as the source of truth.

## PRIMARY OBJECTIVE

Create a portfolio that can represent a serious software engineer professionally.

It must showcase:
- Resume
- Projects
- Internships
- Company experience
- Technical skills
- Education
- Certifications
- Achievements
- Professional profile
- Contact information
- GitHub
- LinkedIn
- Live project demos

The final result must look like a carefully designed professional product, not a generic portfolio template.

---

# 1. SOURCE OF TRUTH

Read and follow these files before implementation:

1. `01_PRD.md`
2. `02_ARCHITECTURE.md`
3. `03_DESIGN_SYSTEM.md`
4. `04_CONTENT_SCHEMA.md`
5. `05_FEATURES.md`
6. `06_RULES.md`
7. `07_SEO_ACCESSIBILITY.md`
8. `08_TESTING.md`
9. `09_DEPLOYMENT.md`
10. `10_PHASES.md`

Do not contradict these documents unless there is a strong technical reason.

---

# 2. PRODUCT QUALITY BAR

The target quality is 10/10.

Think like:
- Senior frontend engineer
- Product designer
- UX researcher
- Accessibility specialist
- SEO engineer
- Performance engineer
- Recruiter reviewing the portfolio

Do not stop at making the page "work".

Polish:
- spacing
- typography
- hierarchy
- alignment
- responsive behavior
- interactions
- hover states
- focus states
- loading states
- empty states
- error states
- transitions
- accessibility
- performance
- SEO
- mobile experience

---

# 3. DESIGN DIRECTION

Create a premium dark-first developer portfolio.

Visual characteristics:
- Minimal
- Elegant
- Technical
- Professional
- Modern
- Confident
- Human
- Strong typography
- Subtle blue accent
- Clean cards
- Excellent whitespace
- Controlled motion

Avoid:
- Generic portfolio templates
- Excessive glassmorphism
- Excessive neon
- Random gradients
- Excessive particles
- Fake statistics
- Skill percentage bars
- Overly flashy animations
- Stock photos that add no value
- Giant meaningless headings
- Excessive rounded cards everywhere

The design should still feel current and forward-looking while respecting classic professional presentation principles.

---

# 4. INFORMATION ARCHITECTURE

Create these primary sections:

1. Home
2. About
3. Experience
4. Projects
5. Skills
6. Education
7. Internships/Training
8. Certifications
9. Achievements
10. Resume
11. Contact

Use dedicated routes for detailed project pages where beneficial.

---

# 5. HERO

The hero must immediately communicate:

- Prem Kumar
- Software Engineer / appropriate professional title
- Short, strong professional statement
- Core technical focus
- View Projects CTA
- Download Resume CTA
- GitHub
- LinkedIn
- Email/contact
- Optional availability indicator

The hero should be visually impressive but not distracting.

Do not use generic "Hello World" filler as the primary message.

---

# 6. PROJECT EXPERIENCE

Projects are one of the most important parts of this portfolio.

Create premium project cards with:
- Project image
- Title
- One-line value proposition
- Description
- Tech stack
- GitHub
- Live demo
- Featured indicator

Create detailed project pages where appropriate.

Detailed project page:
- Overview
- Problem
- Solution
- Key features
- Architecture
- Technical implementation
- Challenges
- Results
- Tech stack
- Screenshots
- Links

Prioritize real engineering details over marketing language.

---

# 7. EXPERIENCE

Create a polished experience timeline or structured experience layout.

Each experience item should support:
- Company
- Role
- Type
- Location
- Dates
- Description
- Responsibilities
- Achievements
- Technologies
- Company link

Use achievement-oriented writing.

Do not invent information.

---

# 8. SKILLS

Group technologies logically.

Recommended:
- Languages
- Frontend
- Backend
- Databases
- AI/ML
- Cloud/DevOps
- Tools

Use recognizable technology icons where useful.

Do NOT use fake proficiency percentages.

Make the section visually strong without becoming a wall of logos.

---

# 9. RESUME

Make resume access extremely obvious.

Support:
- View Resume
- Download Resume
- Print-friendly resume page if practical

Use a real PDF supplied by the project owner.

If the PDF does not exist, create a clearly marked placeholder and do not invent resume content.

---

# 10. CONTACT

Create a professional contact section.

Include:
- Email
- GitHub
- LinkedIn
- Optional phone
- Optional contact form

If a contact form is implemented:
- Validate inputs
- Show useful errors
- Show loading state
- Show success state
- Show failure state
- Protect against spam
- Never expose API secrets

---

# 11. RESPONSIVENESS

This is mandatory.

Design and test intentionally for:

- 320px
- 375px
- 414px
- 768px
- 1024px
- 1280px
- 1440px
- Large monitors

Do not simply shrink desktop.

On mobile:
- Navigation becomes a clean accessible menu.
- Cards stack correctly.
- Typography scales.
- Buttons remain usable.
- Images maintain aspect ratio.
- No horizontal scrolling.
- No overlapping elements.
- Sections retain visual hierarchy.

---

# 12. INTERACTION & ANIMATION

Use motion with purpose.

Good:
- Section reveal
- Card hover
- Button feedback
- Navigation transitions
- Project image interactions
- Subtle page transitions

Bad:
- Constant floating objects
- Excessive parallax
- Long animations
- Content hidden behind animation
- Animating everything

Respect `prefers-reduced-motion`.

---

# 13. ACCESSIBILITY

Build accessibility from the beginning.

Requirements:
- Semantic HTML
- Proper heading hierarchy
- Keyboard navigation
- Visible focus states
- Accessible buttons
- Accessible forms
- Meaningful alt text
- Good contrast
- Reduced motion support
- Logical tab order
- No keyboard traps

---

# 14. PERFORMANCE

Optimize aggressively but sensibly.

- Minimize client-side JavaScript.
- Prefer server/static rendering.
- Optimize images.
- Lazy-load non-critical images.
- Avoid unnecessary libraries.
- Avoid large background media.
- Prevent layout shift.
- Keep animations lightweight.
- Optimize fonts.
- Keep bundle size reasonable.

---

# 15. SEO

Implement:
- Page metadata
- Open Graph
- Twitter/X cards
- Canonical URLs
- Sitemap
- robots.txt
- Semantic content
- Descriptive page titles
- Descriptive URLs
- Person structured data where appropriate

Do not make fake SEO claims.

---

# 16. COMPONENT ARCHITECTURE

Create reusable components.

At minimum consider:

- Navbar
- MobileNav
- Hero
- SectionHeading
- SocialLinks
- ProjectCard
- ProjectGrid
- ProjectDetail
- ExperienceTimeline
- ExperienceCard
- SkillGroup
- SkillBadge
- EducationCard
- CertificationCard
- AchievementCard
- ResumeCTA
- ContactForm
- Footer
- BackToTop
- ThemeToggle

Do not duplicate large blocks of markup.

---

# 17. CONTENT ARCHITECTURE

Keep content separate from UI.

Use structured data files.

The developer should be able to update:
- Projects
- Experience
- Skills
- Education
- Certifications
- Achievements
- Links

without editing complex components.

---

# 18. ERROR & EMPTY STATES

Handle real-world situations.

Examples:
- Missing project image
- Missing live demo
- Missing GitHub
- Contact submission failure
- Invalid form
- 404 page
- Loading state

Never show broken UI.

---

# 19. SECURITY

Never:
- Commit API keys.
- Expose private environment variables.
- Trust client-only validation.
- Put secrets in public data files.

Validate server-side when backend functionality exists.

---

# 20. QUALITY CONTROL

Before declaring completion:

### Code
- No TypeScript errors
- No lint errors
- No console errors
- No unused imports
- No broken routes

### UI
- No overflow
- No clipping
- No overlapping content
- Consistent spacing
- Consistent typography
- Consistent iconography

### Responsive
Test every major section on mobile/tablet/desktop.

### Accessibility
Test keyboard navigation and focus.

### Links
Test:
- GitHub
- LinkedIn
- Email
- Resume
- Live demos

### Production
Run the production build successfully.

---

# 21. IMPLEMENTATION STRATEGY

Build in phases.

Phase 1:
Foundation + design system.

Phase 2:
Content + core sections.

Phase 3:
Project and experience detail.

Phase 4:
Interactions + responsive polish.

Phase 5:
SEO + accessibility + performance.

Phase 6:
Full QA.

Phase 7:
Production deployment.

Do not skip QA.

---

# 22. IMPORTANT CONTENT RULE

Do not invent professional information.

If something is missing:
- Use a clearly marked placeholder.
- Keep the UI production-ready.
- Make it easy to replace.

Never fabricate:
- Companies
- Job titles
- Certifications
- Awards
- Metrics
- Client names
- Testimonials
- Project results

---

# 23. FINAL UX PRINCIPLE

The portfolio should answer these questions quickly:

1. Who is this developer?
2. What can they build?
3. What technologies do they know?
4. What real projects have they built?
5. Where have they worked/interned?
6. Where can I view their resume?
7. How can I contact them?

If the answer to any of these requires unnecessary searching, improve the UX.

Build the complete product, not just a landing page.
