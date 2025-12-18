# ADR-001: Single-File HTML Architecture for Landing Page

**Status:** Accepted  
**Date:** 2024-12-02  
**Decision Makers:** Development Team  
**Review Date:** 2025-03-01 (or when adding second page)

---

## Context

The Mode AI MVP Studio requires a landing page to present services, pricing, and capture leads. The project is in early stage with a single page requirement and needs to prioritize speed of delivery and simplicity.

### Requirements
- Single landing page with 11 sections
- Interactive components (sticky nav, accordion FAQ, contact form)
- Mobile-responsive design
- Glass morphism visual style
- No backend required initially
- Easy to share and demo

### Constraints
- Small team (1-2 developers)
- Need for rapid iteration
- No existing infrastructure
- Budget-conscious approach

---

## Decision

We will implement the landing page as a **single HTML file** with:
- React 18 loaded via CDN (unpkg.com)
- Tailwind CSS loaded via CDN (cdn.tailwindcss.com)
- Babel Standalone for JSX transformation in browser
- Google Fonts for typography
- All components defined inline

---

## Alternatives Considered

### Option A: Next.js Application
**Pros:**
- Industry standard for React
- Server-side rendering
- File-based routing
- Built-in optimizations
- TypeScript support

**Cons:**
- Requires Node.js environment
- Build step required
- More complex deployment
- Overkill for single page
- Learning curve for team

**Rejected because:** Over-engineered for current needs; adds complexity without proportional benefit for a single-page site.

### Option B: Create React App (CRA)
**Pros:**
- Standard React tooling
- Good documentation
- Familiar to React developers

**Cons:**
- Large bundle size
- Slow build times
- Requires Node.js
- CRA is in maintenance mode
- Still needs deployment setup

**Rejected because:** Deprecated tooling with unnecessary overhead for single page.

### Option C: Vite + React
**Pros:**
- Fast development server
- Modern tooling
- Good TypeScript support
- Smaller bundles than CRA

**Cons:**
- Still requires build step
- Needs Node.js environment
- Additional configuration needed

**Rejected because:** While modern, still adds build complexity not needed for single page.

### Option D: Plain HTML/CSS/JS (No Framework)
**Pros:**
- Maximum simplicity
- No dependencies
- Smallest file size

**Cons:**
- No component abstraction
- Manual DOM manipulation
- Harder to maintain as complexity grows
- No reusable patterns

**Rejected because:** Lack of component model makes maintenance harder; React provides good abstraction with minimal overhead via CDN.

---

## Consequences

### Positive
1. **Zero build process** - Open HTML file directly in browser
2. **Maximum portability** - Single file to share, email, or deploy
3. **Instant iteration** - Edit and refresh, no compile step
4. **Simple deployment** - Upload to any static host
5. **No dependencies to install** - No node_modules, no package.json
6. **Lower barrier to entry** - Any developer can modify

### Negative
1. **No component reuse across pages** - Acceptable since only one page exists
2. **No TypeScript** - Can migrate later if team scales
3. **No build-time optimizations** - CDN caching mitigates this
4. **Larger initial HTML file** - ~35KB, acceptable for landing page
5. **Runtime JSX compilation** - Babel Standalone adds overhead, acceptable for landing page
6. **CDN dependency** - Requires internet connection; popular CDNs are reliable

### Neutral
1. **No SSR/SEO concerns** - Landing page is client-rendered; acceptable for marketing site
2. **State management limited to useState** - Sufficient for current needs

---

## Migration Path

When the following conditions occur, migrate to Next.js:

| Trigger | Threshold |
|---------|-----------|
| Number of pages | > 2 pages |
| Team size | > 2 developers |
| SEO requirements | Critical for organic traffic |
| API routes needed | Backend functionality required |
| Build optimizations | Performance issues identified |

### Migration Steps
1. Initialize Next.js project
2. Extract components to `/components` directory
3. Move Tailwind config to `tailwind.config.js`
4. Add TypeScript incrementally
5. Implement API routes for form handling
6. Set up CI/CD pipeline

---

## Validation

This decision was validated by:
- Successfully implementing all 11 sections
- Testing responsive behavior across breakpoints
- Confirming interactive components work correctly
- Verifying page loads without build step
- Demonstrating easy content updates

---

## References

- [mode-landing-spec.json](/Users/thiagosalvador/Documents/Apps/Mode/docs/mode-landing-spec.json) - Content specification
- [Implementation Record](/Users/thiagosalvador/Documents/Apps/Mode/docs/task-history/2024-12-02_MODE-LANDING-PAGE-IMPLEMENTATION.md) - Full task documentation
- [creme.digital](https://creme.digital) - Visual design inspiration

---

## Changelog

| Date | Change | Author |
|------|--------|--------|
| 2024-12-02 | Initial decision recorded | Development Team |
