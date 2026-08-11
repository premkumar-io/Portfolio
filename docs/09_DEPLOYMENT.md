# Production Deployment

## Recommended
Deploy the portfolio on Vercel or another reliable modern hosting platform.

## Pre-Deployment Checklist
- Production build succeeds.
- Environment variables configured.
- No secrets committed.
- Resume exists.
- Images optimized.
- Favicon configured.
- Metadata configured.
- Sitemap configured.
- Robots configured.
- 404 page configured.
- Contact endpoint secured.
- Analytics configured only if desired.

## Domain
Use a professional personal domain when possible.

Examples:
- `premkumar.dev`
- `premkumar.in`
- `premkumar.tech`

Choose a domain based on actual availability.

## Git
Use:
- `main` for production
- Feature branches for significant changes
- Meaningful commit messages

Never commit:
- `.env`
- API keys
- credentials
- private files
- personal secrets

## CI/CD
If supported:
1. Push to GitHub.
2. Run lint/type checks.
3. Run production build.
4. Deploy.
5. Run post-deployment smoke checks.

## Post-Deployment
Verify:
- Homepage
- All routes
- Resume
- Contact
- Mobile layout
- SEO metadata
- Social previews
- HTTPS
- Custom domain
- Performance
