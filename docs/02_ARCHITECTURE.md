# Portfolio Website — Architecture

## 1. Architecture Principles
- Component-driven
- Modular
- Maintainable
- Content-first
- Accessible
- SEO-first
- Performance-first
- Type-safe where supported
- Minimal unnecessary dependencies
- Easy deployment

## 2. Recommended Stack
### Frontend
- Next.js
- React
- TypeScript
- Tailwind CSS

### UI
- Reusable component system
- Lucide React or equivalent icon library
- Motion library only where genuinely useful

### Content
Prefer structured local content for a personal portfolio:
- TypeScript data files or JSON/MDX
- Static content should not require a database.

### Optional Services
- Contact email service such as Resend
- Analytics such as Vercel Analytics or another privacy-conscious solution
- GitHub API only if live repository data is genuinely useful

## 3. Suggested Folder Structure

```text
portfolio/
├── app/
│   ├── page.tsx
│   ├── about/
│   ├── experience/
│   ├── projects/
│   │   └── [slug]/
│   ├── resume/
│   ├── contact/
│   ├── layout.tsx
│   ├── not-found.tsx
│   ├── robots.ts
│   └── sitemap.ts
│
├── components/
│   ├── layout/
│   ├── navigation/
│   ├── hero/
│   ├── sections/
│   ├── projects/
│   ├── experience/
│   ├── resume/
│   ├── contact/
│   ├── ui/
│   └── motion/
│
├── data/
│   ├── profile.ts
│   ├── projects.ts
│   ├── experience.ts
│   ├── education.ts
│   ├── skills.ts
│   ├── certifications.ts
│   └── achievements.ts
│
├── public/
│   ├── images/
│   ├── projects/
│   ├── resume/
│   └── icons/
│
├── lib/
│   ├── utils.ts
│   ├── seo.ts
│   └── validation.ts
│
├── styles/
├── types/
└── README.md
```

## 4. Component Architecture
Create reusable components such as:
- Navbar
- MobileNav
- Hero
- SocialLinks
- SectionHeading
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

## 5. Data Architecture
Keep content separate from presentation.

Example project model:

```ts
type Project = {
  slug: string
  title: string
  tagline: string
  description: string
  problem?: string
  solution?: string
  features: string[]
  technologies: string[]
  role?: string
  githubUrl?: string
  liveUrl?: string
  image?: string
  featured: boolean
}
```

## 6. Rendering Strategy
- Prefer static/server-rendered content.
- Use client components only when interaction requires them.
- Keep animations isolated.
- Avoid unnecessary client-side JavaScript.
- Optimize route-level loading.

## 7. External Integrations
Only add integrations that provide real value:
- Resume PDF
- Email/contact service
- Analytics
- GitHub links
- LinkedIn
- Optional GitHub repository data

Never expose private API keys in client code.
