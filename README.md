# Mode Landing Page

AI MVP studio landing page built with React and Tailwind CSS, inspired by the creme.digital aesthetic.

## Quick Start

Simply open `index.html` in your browser - no build process required!

```bash
open index.html
```

Or use a local server:
```bash
# Python 3
python -m http.server 8000

# Node.js (with npx)
npx serve .
```

Then visit `http://localhost:8000`

## Architecture

### Single File Implementation
The entire landing page is contained in one `index.html` file for maximum simplicity and portability. This approach uses:
- React 18 via CDN
- Tailwind CSS via CDN
- Google Fonts (Space Grotesk + Inter)
- Inline JSX via Babel Standalone

### Component Structure

All components are defined in `index.html` following this hierarchy:

```
App
├── Navbar (sticky navigation)
├── Hero (gradient background with mockup)
├── MetricsStrip (social proof numbers)
├── BenefitCards (3-column benefits)
├── ProcessTimeline (4-step timeline)
├── WorkShowcase (case study cards)
├── Pricing (2-tier pricing cards)
├── Testimonials (customer quotes)
├── FAQs (accordion FAQ list)
├── FinalCTA (lead capture form)
└── Footer (links and contact)
```

### JSON Spec Mapping

Every section corresponds directly to the JSON spec at `docs/mode-landing-spec.json`:

| JSON Key | Component | Lines |
|----------|-----------|-------|
| `navbar` | `Navbar` | Sticky nav with logo, links, CTA |
| `hero` | `Hero` | Two-column layout with gradient background |
| `metricsStrip` | `MetricsStrip` | 3-metric horizontal strip |
| `benefitCards` | `BenefitCards` | 3-card benefit grid |
| `process` | `ProcessTimeline` | 4-step timeline with connectors |
| `workShowcase` | `WorkShowcase` | 3-card case study grid |
| `pricing` | `Pricing` | 2-tier pricing comparison |
| `testimonials` | `Testimonials` | 3-column testimonial cards |
| `faqs` | `FAQs` | Accordion-style FAQ list |
| `finalCta` | `FinalCTA` | Lead capture form with 5 fields |
| `footer` | `Footer` | Links, email, copyright |

## Design System

### Colors (from JSON spec)
```css
background: #050509   /* Main background */
surface: #0B0B11      /* Secondary background */
textPrimary: #FFFFFF  /* Main text */
textMuted: #A2A2B3    /* Secondary text */
accentFrom: #FF2D92   /* Gradient start */
accentTo: #FF8A3C     /* Gradient end */
```

### Typography
- **Headings:** Space Grotesk (geometric sans)
- **Body:** Inter (neutral sans)

### Components

#### GlassCard
Glass morphism card with:
- Gradient background: `rgba(255,255,255,0.06)` to `rgba(255,255,255,0.02)`
- Border: `1px solid rgba(255,255,255,0.08)`
- Backdrop blur: 18px
- Border radius: 1.5rem

#### Pill
Small label/tag component:
- Padding: 0.85rem × 0.35rem
- Border radius: 999px (fully rounded)
- Background: `rgba(255,255,255,0.06)`

#### PrimaryButton
Gradient CTA button:
- Background: Linear gradient from #FF2D92 to #FF8A3C
- Hover: Slight lift and scale effect
- Fully rounded corners

#### SecondaryButton
Ghost-style button:
- Border: `1px solid rgba(255,255,255,0.18)`
- Background: `rgba(255,255,255,0.03)`
- Hover: Increases background opacity

## Visual Inspiration

The design is inspired by **creme.digital** with these key characteristics:
- Dark background with high contrast
- Bright gradient accents (pink to orange)
- Soft glass morphism cards
- Generous white space
- Subtle noise texture on hero
- Radial gradient vignetting

## Content Guidelines

### Copy Rules
1. **Never invent copy** - All text comes from `mode-landing-spec.json`
2. Line breaks are allowed for layout but preserve meaning
3. Maintain the direct, no-fluff tone throughout

### Updating Content
To update any text on the page:
1. Edit `docs/mode-landing-spec.json`
2. Update the corresponding component in `index.html`
3. Refresh the browser

## Responsive Design

### Mobile-First Approach
- Base styles target mobile (320px+)
- `md:` breakpoint for tablet/desktop (768px+)
- All sections stack vertically on mobile
- Grid layouts collapse to single column

### Key Responsive Patterns
- **Navbar:** Hides secondary links on mobile, keeps primary CTA
- **Hero:** Stacks from 2-column to 1-column
- **Cards:** 3-column grids become 1-column on mobile
- **Pricing:** 2-column becomes stacked cards
- **Form:** Full-width inputs with adequate touch targets

## Interactive Features

### Navbar
- Sticky positioning with blur effect on scroll
- Smooth transitions on background change
- Anchor links for in-page navigation

### FAQs
- Accordion behavior (one open at a time)
- Smooth expand/collapse with plus/minus icons
- Click anywhere on card to toggle

### Form
- Client-side validation (HTML5 required attributes)
- Console log on submit (replace with API call)
- Alert confirmation message

### Buttons & Cards
- Hover states with subtle transforms
- Smooth transitions (200ms duration)
- Focus states for accessibility

## Browser Support

Tested and working in:
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Performance

### Optimizations
- CDN resources for fast global delivery
- Minimal JavaScript (React for interactivity only)
- Tailwind JIT for minimal CSS
- No image assets (uses gradients and SVG icons)
- Single HTTP request for HTML

### Lighthouse Scores (Target)
- Performance: 95+
- Accessibility: 90+
- Best Practices: 95+
- SEO: 90+

## Future Enhancements

### If Migrating to Next.js
1. Split components into separate files in `components/`
2. Move Tailwind config to `tailwind.config.js`
3. Add TypeScript for type safety
4. Implement API route for form submission
5. Add animations with Framer Motion
6. Optimize fonts with next/font

### Potential Additions
- Animated hero background (particles or gradients)
- Case study detail pages
- Blog section
- Team/about page
- Video testimonials
- Live chat widget
- Cookie consent banner
- Analytics integration (GA4, Plausible)

## Technical Debt

Current limitations of single-file approach:
- No component reusability across pages
- No TypeScript type checking
- No build-time optimizations
- Inline styles increase HTML size
- Limited state management (useState only)

Consider migrating to Next.js when:
- Adding multiple pages
- Need server-side rendering
- Require API routes
- Team grows beyond 1-2 developers

## Contact

For questions about the Mode landing page implementation:
- Email: hello@modemvp.studio
- Spec: `docs/mode-landing-spec.json`

---

**Last Updated:** December 2024
**Version:** 1.0.0
**Framework:** React 18 + Tailwind CSS 3
